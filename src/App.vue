<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>Kancolle 战斗统计</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Github</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <read-file/>
      <result/>
    </v-content>
  </v-app>
</template>

<script>
import ReadFile from '@/components/ReadFile.vue';
import Result from '@/components/Result.vue';

export default {
  name: 'App',
  components: {
    ReadFile,
    Result,
  },
  data() {
    return {
      //
    };
  },
};
</script>
