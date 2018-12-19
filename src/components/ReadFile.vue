<template>
  <v-container class="read-file">
    <v-layout column>
      <v-flex>
        <v-btn
          :loading="loading"
          :disabled="loading"
          color="blue-grey"
          class="white--text"
          @click="selectFile"
        >
          读取文件
          <v-icon right dark>cloud_upload</v-icon>
        </v-btn>
        <span>* 选择一个<code>*.json</code>文件，或者<code>*.zip</code></span>
        <input
          type="file"
          multiple
          accept=".json, .zip"
          hidden
          ref="file"
          @change="readBattleData">
      </v-flex>
      <v-flex>
        <p></p>
        <p>浏览器选择文件的个数是有极限的,</p>
        <p>从漫长的搜索中我学到一件事，</p>
        <p>越是玩弄 JavaScript ，就越会发现浏览器选择文件的个数是有极限的，</p>
        <p>除非 <strong>你用储存模式把这些文件全部打包到 zip 里面</strong></p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex';
import { Zlib as Gunzip } from 'zlibjs/bin/gunzip.dev.min';
import { Zlib as Unzip } from 'zlibjs/bin/unzip.dev.min';
import { dbg } from '@/lib/utils';

export default {
  name: 'ReadFile',

  data() {
    return {
      loading: false,
    };
  },

  methods: {
    selectFile() {
      this.$refs.file.click();
    },
    readBattleData(ev) {
      const inputFiles = ev.target.files;
      let entryFile;
      if (inputFiles.length > 1) {
        entryFile = inputFiles[Object.keys(inputFiles)
          .filter(f => inputFiles[f].name === 'index11.csv.gz')];
      } else if (inputFiles.length === 1) {
        [entryFile] = inputFiles;
      }
      if (!entryFile && !this.poiIndex) {
        return;
      }
      dbg.log('入口文件：', entryFile);
      this.loading = true;
      const fr = new FileReader();
      fr.onload = (frev) => {
        this.loading = false;
        const file = frev.target.result;
        if (/\.zip$/i.test(entryFile.name)) {
          // poi 打包文件
          const zipData = this.readZip(new Uint8Array(file));
          const data = this.parseIndexCsv(zipData);
          this.setBattleData({ data });
        } else if (/\.json$/i.test(entryFile.name)) {
          // json 文件
          try {
            const data = JSON.parse(file);
            this.setBattleData({ data });
          } catch (err) {
            dbg.error(err.message);
          }
        }
      };
      if (/\.json$/i.test(entryFile.name)) {
        fr.readAsText(entryFile);
      } else if (/\.zip|\.gz$/i.test(entryFile.name)) {
        fr.readAsArrayBuffer(entryFile);
      }
    },
    readGzip(compressed) {
      const gunzip = new Gunzip.Gunzip(compressed);
      const plain = gunzip.decompress();
      const text = new TextDecoder('utf-8').decode(plain);
      return text.trim();
    },
    readZip(file) {
      const files = [];
      const compressed = new Uint8Array(file);
      const zip = new Unzip.Unzip(compressed);
      const filenames = zip.getFilenames();
      filenames.forEach((filename) => {
        files.push({ filename, file: zip.decompress(filename) });
      });
      return files;
    },
    parseIndexCsv(files) {
      const result = [];
      const [{ file: csvGz }] = files.filter(f => f.filename === 'index11.csv.gz');
      const csv = this.readGzip(csvGz);
      const lines = csv.split('\n');
      lines.forEach((battle) => {
        const [id, , map, , , rank] = battle.split(',');
        const [findData] = files.filter(f => f.filename === `${id}.json.gz`);
        const b = {
          id,
          map,
          rank: rank.substr(0, 1),
        };
        if (findData) {
          b.data = this.readGzip(findData.file);
        }
        result.push(b);
      });
      return result;
    },
    ...mapMutations(['setBattleData']),
  },
};
</script>

<style>

</style>
