(function(a){function e(e){for(var i,m,r=e[0],o=e[1],s=e[2],l=0,u=[];l<r.length;l++)m=r[l],t[m]&&u.push(t[m][0]),t[m]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(a[i]=o[i]);c&&c(e);while(u.length)u.shift()();return d.push.apply(d,s||[]),n()}function n(){for(var a,e=0;e<d.length;e++){for(var n=d[e],i=!0,r=1;r<n.length;r++){var o=n[r];0!==t[o]&&(i=!1)}i&&(d.splice(e--,1),a=m(m.s=n[0]))}return a}var i={},t={app:0},d=[];function m(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return a[e].call(n.exports,n,n.exports,m),n.l=!0,n.exports}m.m=a,m.c=i,m.d=function(a,e,n){m.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:n})},m.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},m.t=function(a,e){if(1&e&&(a=m(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var n=Object.create(null);if(m.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var i in a)m.d(n,i,function(e){return a[e]}.bind(null,i));return n},m.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return m.d(e,"a",e),e},m.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},m.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var s=0;s<r.length;s++)e(r[s]);var c=o;d.push([0,"chunk-vendors"]),n()})({0:function(a,e,n){a.exports=n("56d7")},"56d7":function(a,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),t=n("bb71");n("ca9a");i["a"].use(t["a"],{iconfont:"md"});var d=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("v-app",[n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline"},[n("span",[a._v("Kancolle 战斗统计")])]),n("v-spacer"),n("v-btn",{attrs:{flat:"",href:"https://github.com/slime7/kancolle-battle-chart",target:"_blank"}},[n("span",{staticClass:"mr-2"},[a._v("Github")])])],1),n("v-content",[n("read-file"),n("result")],1)],1)},m=[],r=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("v-container",{staticClass:"read-file"},[n("v-layout",{attrs:{column:""}},[n("v-flex",[n("v-btn",{staticClass:"white--text",attrs:{loading:a.loading,disabled:a.loading,color:"blue-grey"},on:{click:a.selectFile}},[a._v("\n        读取文件\n        "),n("v-icon",{attrs:{right:"",dark:""}},[a._v("cloud_upload")])],1),n("span",[a._v("* 选择一个"),n("code",[a._v("*.json")]),a._v("文件，或者"),n("code",[a._v("*.zip")])]),n("input",{ref:"file",attrs:{type:"file",multiple:"",accept:".json, .zip",hidden:""},on:{change:a.readBattleData}})],1),n("v-flex",[n("p"),n("p",[a._v("浏览器选择文件的个数是有极限的,")]),n("p",[a._v("从漫长的搜索中我学到一件事，")]),n("p",[a._v("越是玩弄 JavaScript ，就越会发现浏览器选择文件的个数是有极限的，")]),n("p",[a._v("除非 "),n("strong",[a._v("你用储存模式把这些文件全部打包到 zip 里面")])])])],1)],1)},o=[],s=(n("28a5"),n("ac6a"),n("34ef"),n("768b")),c=(n("7f7f"),n("a4bb")),l=n.n(c),u=n("cebc"),p=n("2f62"),h=n("4cd2"),f=n("853a"),v=(n("55dd"),n("75fc"));function b(){for(var a=arguments.length,e=new Array(a),n=0;n<a;n++)e[n]=arguments[n];e[0],e.slice(1)}var g={log:function(){for(var a=arguments.length,e=new Array(a),n=0;n<a;n++)e[n]=arguments[n];b.apply(void 0,["log"].concat(e))},error:function(){for(var a=arguments.length,e=new Array(a),n=0;n<a;n++)e[n]=arguments[n];b.apply(void 0,["error"].concat(e))}},_=function(a,e){var n={};return"function"!==typeof e?l()(a).sort().forEach(function(e){n[e]=a[e]}):l()(a).sort(function(n,i){return e(n,i,a)}).forEach(function(e){n[e]=a[e]}),n},y=function(a){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"shortdate",i=function(a){return"0".concat(a).substr(-2)},t=new Date(a),d={yyyy:t.getFullYear(),MM:i(t.getMonth()+1),dd:i(t.getDate()),hh:i(t.getHours()),mm:i(t.getMinutes()),ss:i(t.getSeconds())},m=d.yyyy,r=d.MM,o=d.dd,s=d.hh,c=d.mm,l=d.ss;switch(n){case"hour":e="".concat(s,":00-").concat(s,":59");break;case"hourarray":e=[+s,+c,+l];break;case"shorttime":case"time":e="".concat(s,":").concat(c,":").concat(l);break;case"full":e="".concat(m,"-").concat(r,"-").concat(o," ").concat(s,":").concat(c,":").concat(l);break;case"shortdate":case"date":default:e="".concat(m,"-").concat(r,"-").concat(o);break}return e},k={name:"ReadFile",data:function(){return{loading:!1}},methods:Object(u["a"])({selectFile:function(){this.$refs.file.click()},readBattleData:function(a){var e,n=this,i=a.target.files;if(i.length>1)e=i[l()(i).filter(function(a){return"index11.csv.gz"===i[a].name})];else if(1===i.length){var t=Object(s["a"])(i,1);e=t[0]}if(e||this.poiIndex){g.log("入口文件：",e),this.loading=!0;var d=new FileReader;d.onload=function(a){n.loading=!1;var i=a.target.result;if(/\.zip$/i.test(e.name)){var t=n.readZip(new Uint8Array(i)),d=n.parseIndexCsv(t);n.setBattleData({data:d})}else if(/\.json$/i.test(e.name))try{var m=JSON.parse(i);n.setBattleData({data:m})}catch(r){g.error(r.message)}},/\.json$/i.test(e.name)?d.readAsText(e):/\.zip|\.gz$/i.test(e.name)&&d.readAsArrayBuffer(e)}},readGzip:function(a){var e=new h["Zlib"].Gunzip(a),n=e.decompress(),i=new TextDecoder("utf-8").decode(n);return i.trim()},readZip:function(a){var e=[],n=new Uint8Array(a),i=new f["Zlib"].Unzip(n),t=i.getFilenames();return t.forEach(function(a){e.push({filename:a,file:i.decompress(a)})}),e},parseIndexCsv:function(a){var e=this,n=[],i=a.filter(function(a){return"index11.csv.gz"===a.filename}),t=Object(s["a"])(i,1),d=t[0].file,m=this.readGzip(d),r=m.split("\n");return r.forEach(function(i){var t=i.split(","),d=Object(s["a"])(t,6),m=d[0],r=d[2],o=d[5],c=a.filter(function(a){return a.filename==="".concat(m,".json.gz")}),l=Object(s["a"])(c,1),u=l[0],p={id:m,map:r,rank:o.substr(0,1)};u&&(p.data=e.readGzip(u.file)),n.push(p)}),n}},Object(p["b"])(["setBattleData"]))},w=k,C=n("2877"),O=n("6544"),j=n.n(O),x=n("8336"),S=n("a523"),R=n("0e8f"),D=n("132d"),G=n("a722"),T=Object(C["a"])(w,r,o,!1,null,null,null);T.options.__file="ReadFile.vue";var z=T.exports;j()(T,{VBtn:x["a"],VContainer:S["a"],VFlex:R["a"],VIcon:D["a"],VLayout:G["a"]});var E=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("v-container",[n("v-layout",{attrs:{column:""}},[n("v-flex",[n("p",[a._v("数据范围从\n        "),n("strong",[a._v(a._s(a.result.date?a.timeFormat(a.result.date[0]):""))]),a._v("\n        到\n        "),n("strong",[a._v(a._s(a.result.date?a.timeFormat(a.result.date[1]):""))])]),n("p",[a._v("共\n        "),n("em",[a._v(a._s(a.battleData.length))]),a._v("\n        场战斗，击沉\n        "),n("em",[a._v(a._s(a.result.destroy))]),a._v("\n        深海\n      ")])]),a.chart.rank&&a.chart.rank.table.length>2?n("v-flex",{staticClass:"v-gap"},[n("v-layout",{attrs:{row:""}},[n("div",{staticClass:"chart-frame half-width h-gap elevation-5"},[n("h3",[a._v("战斗结果")]),n("GChart",{attrs:{settings:{packages:["corechart"]},type:"PieChart",data:a.chart.rank.table,options:a.chart.rank.options}})],1),n("div"),n("div",{staticClass:"chart-frame half-width elevation-5"},[n("h3",[a._v("战斗航向")]),n("GChart",{attrs:{settings:{packages:["corechart"]},type:"PieChart",data:a.chart.formation.table,options:a.chart.formation.options}})],1)])],1):a._e(),a.chart.hour?n("v-flex",{staticClass:"v-gap"},[n("v-layout",{attrs:{row:""}},[n("div",{staticClass:"chart-frame full-width elevation-5"},[n("h3",[a._v("战斗时段")]),n("GChart",{attrs:{settings:{packages:["corechart"]},type:"ColumnChart",data:a.chart.hour.table,options:a.chart.hour.options}})],1)])],1):a._e(),a.chart.mapRegular&&a.chart.mapRegular.table.length>2?n("v-flex",{staticClass:"v-gap"},[n("v-layout",{attrs:{row:""}},[n("div",{staticClass:"chart-frame full-width elevation-5"},[n("h3",[a._v("常规图战斗次数")]),n("GChart",{attrs:{settings:{packages:["corechart"]},type:"ColumnChart",data:a.chart.mapRegular.table}})],1)])],1):a._e(),a.chart.mapEvent&&a.chart.mapEvent.table.length>2?n("v-flex",{staticClass:"v-gap"},[n("v-layout",{attrs:{row:""}},[n("div",{staticClass:"chart-frame full-width elevation-5"},[n("h3",[a._v("活动图战斗次数")]),n("GChart",{attrs:{settings:{packages:["corechart"]},type:"ColumnChart",data:a.chart.mapEvent.table}})],1)])],1):a._e(),a.chart.ship&&a.chart.get&&a.chart.ship.table.length>2&&a.chart.get.table.length>2?n("v-flex",{staticClass:"v-gap"},[n("v-layout",{attrs:{"align-center":"","justify-space-around":"",row:"",wrap:""}},[n("div",{staticClass:"chart-frame elevation-5"},[n("h3",[a._v("出击舰娘")]),n("GChart",{attrs:{settings:{packages:["table"]},type:"Table",data:a.chart.ship.table,options:a.chart.ship.options}})],1),n("div",{staticClass:"chart-frame elevation-5"},[n("h3",[a._v("邂逅舰娘")]),n("GChart",{attrs:{settings:{packages:["table"]},type:"Table",data:a.chart.get.table,options:a.chart.get.options}})],1)])],1):a._e()],1)],1)},A=[],I=n("7618"),B=n("f499"),P=n.n(B),M=n("cb43"),Z=n("d472"),V={name:"Result",components:{GChart:M["GChart"]},data:function(){return{ships:Z,hourtemp:[],chart:{}}},computed:Object(u["a"])({result:function(){var a=this,e={date:null,rank:{},map:[],hour:JSON.parse(P()(this.hourtemp)),ship:[],get:{},destroy:0,formation:[0,0,0,0]},n=this;return g.log("无数据战斗点: ",n.battleData.filter(function(a){return!a.data})),n.battleData.filter(function(a){return a.data}).forEach(function(i){var t=JSON.parse(i.data),d=t.time,m=t.fleet,r=t.map,o=t.packet,c=o[o.length-1];e.date?d<e.date[0]?e.date[0]=d:d>e.date[1]&&(e.date[1]=d):e.date=[d,d],n.addResult(e.rank,i.rank,"未知");var l={key:""===i.map?"演习":i.map,count:1,map:""===i.map?[21,1]:[r[0],r[1]]};n.pushResult(e.map,l);var u,p={key:y(d,"hour"),count:1,hour:y(d,"hourarray")};n.pushResult(e.hour,p),u=m.escort?[].concat(Object(v["a"])(m.main),Object(v["a"])(m.escort)):m.main,u?u.forEach(function(i){if(i){var t=a.ships.filter(function(a){return a.id===i.api_ship_id}),m=Object(s["a"])(t,1),r=m[0];r||g.log("没有数据的舰娘id: ".concat(i.api_ship_id,", 战斗日期: ").concat(y(d,"full")));var o={key:"".concat(i.api_id,"-").concat(i.api_ship_id),count:1,ship:r?r.name:i.api_ship_id,shipId:i.api_ship_id,shipGetId:i.api_id};n.pushResult(e.ship,o)}}):g.log("没有舰队数据的战斗: ",JSON.parse(i.data)),c&&c.api_get_ship&&n.addResult(e.get,c.api_get_ship.api_ship_name),c&&"number"===typeof c.api_dests&&(e.destroy+=c.api_dests),o[0]&&o[0].api_formation&&(e.formation[o[0].api_formation[2]-1]+=1)}),e.rank=n.sortResult(e.rank),n.rankDataSet(e.rank),e.map=e.map.sort(function(a,e){return 10*a.map[0]+a.map[1]-10*e.map[0]-e.map[1]}),n.mapDataSet(e.map),e.hour=e.hour.sort(function(a,e){return a.hour[0]-e.hour[0]}),n.hourDataSet(e.hour),e.ship=e.ship.sort(function(a,e){return e.count-a.count}),n.shipDataSet(e.ship),e.get=n.sortResult(e.get,function(a,e,n){return n[e]-n[a]}),n.getDataSet(e.get),n.formationDataSet(e.formation),e}},Object(p["c"])(["battleData"])),methods:{addResult:function(a,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"??";e&&""!==e?Object.hasOwnProperty.call(a,e)?this.$set(a,e,a[e]+1):this.$set(a,e,1):Object.hasOwnProperty.call(a,n)?this.$set(a,n,a[n]+1):this.$set(a,n,1)},pushResult:function(a,e){if("object"===Object(I["a"])(e)&&Object.hasOwnProperty.call(e,"key")&&Object.hasOwnProperty.call(e,"count")){var n=a.filter(function(a){return a.key===e.key}),i=Object(s["a"])(n,1),t=i[0];t?t.count+=1:a.push(e)}else g.error("value 格式不正确。",e)},init:function(){this.hourtemp=[];for(var a=0;a<24;a+=1)this.hourtemp.push({key:y(new Date("2018-01-01 ".concat(a,":00")),"hour"),count:0,hour:[a,0,0]})},rankDataSet:function(a){var e={table:[],options:{pieHole:.4,pieSliceText:"value"}},n=l()(a);e.table.push(["rank","count"]),n.forEach(function(n){e.table.push([n,a[n]])}),this.chart.rank=e},formationDataSet:function(a){var e={table:[],options:{pieHole:.4,pieSliceText:"value"}};e.table=[["航向","次数"],["同航戦",a[0]],["反航戦",a[1]],["T字有利",a[2]],["T字不利",a[3]]],this.chart.formation=e},hourDataSet:function(a){var e={table:[],options:{hAxis:{slantedText:!0,slantedTextAngle:60,maxTextLines:2},vAxis:{title:"次数"},height:240,legend:{position:"none"}}};e.table.push(["时段","次数"]),a.forEach(function(a){e.table.push([a.key.split("-")[0],a.count])}),this.chart.hour=e},mapDataSet:function(a){var e={table:[]},n={table:[]};e.table.push(["海图","次数"]),n.table.push(["海图","次数"]),a.forEach(function(a){a.map[0]<22?e.table.push([a.key,a.count]):n.table.push([a.key,a.count])}),this.chart.mapRegular=e,this.chart.mapEvent=n},shipDataSet:function(a){var e={table:[],options:{page:"enable",pageSize:20,showRowNumber:!0,sort:!1}};e.table.push(["出击舰娘","舰娘ID","次数"]),a.forEach(function(a){e.table.push([a.ship,a.shipGetId,a.count])}),this.chart.ship=e},getDataSet:function(a){var e={table:[],options:{page:"enable",pageSize:20,showRowNumber:!0,sort:!1}};e.table.push(["获取舰娘","次数"]),l()(a).forEach(function(n){e.table.push([n,a[n]])}),this.chart.get=e},sortResult:_,timeFormat:y},mounted:function(){this.init()}},F=V,$=(n("d103"),Object(C["a"])(F,E,A,!1,null,"3b7c1d23",null));$.options.__file="Result.vue";var J=$.exports;j()($,{VContainer:S["a"],VFlex:R["a"],VLayout:G["a"]});var L={name:"App",components:{ReadFile:z,Result:J},data:function(){return{}}},N=L,U=n("7496"),H=n("549c"),q=n("9910"),W=n("71d9"),K=n("2a7f"),Y=Object(C["a"])(N,d,m,!1,null,null,null);Y.options.__file="App.vue";var Q=Y.exports;j()(Y,{VApp:U["a"],VBtn:x["a"],VContent:H["a"],VSpacer:q["a"],VToolbar:W["a"],VToolbarTitle:K["a"]}),i["a"].use(p["a"]);var X=new p["a"].Store({state:{battleData:[]},mutations:{setBattleData:function(a,e){var n=e.data;"object"===Object(I["a"])(n)&&Object.hasOwnProperty.call(n,"rows")?a.battleData=n.rows:a.battleData=n}},actions:{}});i["a"].config.productionTip=!1,new i["a"]({store:X,render:function(a){return a(Q)}}).$mount("#app")},"5aa5":function(a,e,n){},ca9a:function(a,e,n){},d103:function(a,e,n){"use strict";var i=n("5aa5"),t=n.n(i);t.a},d472:function(a){a.exports=[{id:1,name:"睦月"},{id:2,name:"如月"},{id:6,name:"長月"},{id:7,name:"三日月"},{id:9,name:"吹雪"},{id:10,name:"白雪"},{id:11,name:"深雪"},{id:12,name:"磯波"},{id:13,name:"綾波"},{id:14,name:"敷波"},{id:15,name:"曙"},{id:16,name:"潮"},{id:17,name:"陽炎"},{id:18,name:"不知火"},{id:19,name:"黒潮"},{id:20,name:"雪風"},{id:21,name:"長良"},{id:22,name:"五十鈴"},{id:23,name:"由良"},{id:24,name:"大井"},{id:25,name:"北上"},{id:26,name:"扶桑"},{id:27,name:"山城"},{id:28,name:"皐月"},{id:29,name:"文月"},{id:30,name:"菊月"},{id:31,name:"望月"},{id:32,name:"初雪"},{id:33,name:"叢雲"},{id:34,name:"暁"},{id:35,name:"響"},{id:36,name:"雷"},{id:37,name:"電"},{id:38,name:"初春"},{id:39,name:"子日"},{id:40,name:"若葉"},{id:41,name:"初霜"},{id:42,name:"白露"},{id:43,name:"時雨"},{id:44,name:"村雨"},{id:45,name:"夕立"},{id:46,name:"五月雨"},{id:47,name:"涼風"},{id:48,name:"霰"},{id:49,name:"霞"},{id:50,name:"島風"},{id:51,name:"天龍"},{id:52,name:"龍田"},{id:53,name:"名取"},{id:54,name:"川内"},{id:55,name:"神通"},{id:56,name:"那珂"},{id:57,name:"大井改"},{id:58,name:"北上改"},{id:59,name:"古鷹"},{id:60,name:"加古"},{id:61,name:"青葉"},{id:62,name:"妙高"},{id:63,name:"那智"},{id:64,name:"足柄"},{id:65,name:"羽黒"},{id:66,name:"高雄"},{id:67,name:"愛宕"},{id:68,name:"摩耶"},{id:69,name:"鳥海"},{id:70,name:"最上"},{id:71,name:"利根"},{id:72,name:"筑摩"},{id:73,name:"最上改"},{id:74,name:"祥鳳"},{id:75,name:"飛鷹"},{id:76,name:"龍驤"},{id:77,name:"伊勢"},{id:78,name:"金剛"},{id:79,name:"榛名"},{id:80,name:"長門"},{id:81,name:"陸奥"},{id:82,name:"伊勢改"},{id:83,name:"赤城"},{id:84,name:"加賀"},{id:85,name:"霧島"},{id:86,name:"比叡"},{id:87,name:"日向"},{id:88,name:"日向改"},{id:89,name:"鳳翔"},{id:90,name:"蒼龍"},{id:91,name:"飛龍"},{id:92,name:"隼鷹"},{id:93,name:"朧"},{id:94,name:"漣"},{id:95,name:"朝潮"},{id:96,name:"大潮"},{id:97,name:"満潮"},{id:98,name:"荒潮"},{id:99,name:"球磨"},{id:100,name:"多摩"},{id:101,name:"木曾"},{id:102,name:"千歳"},{id:103,name:"千代田"},{id:104,name:"千歳改"},{id:105,name:"千代田改"},{id:106,name:"千歳甲"},{id:107,name:"千代田甲"},{id:108,name:"千歳航"},{id:109,name:"千代田航"},{id:110,name:"翔鶴"},{id:111,name:"瑞鶴"},{id:112,name:"瑞鶴改"},{id:113,name:"鬼怒"},{id:114,name:"阿武隈"},{id:115,name:"夕張"},{id:116,name:"瑞鳳"},{id:117,name:"瑞鳳改"},{id:118,name:"大井改二"},{id:119,name:"北上改二"},{id:120,name:"三隈"},{id:121,name:"三隈改"},{id:122,name:"舞風"},{id:123,name:"衣笠"},{id:124,name:"鈴谷"},{id:125,name:"熊野"},{id:126,name:"伊168"},{id:127,name:"伊58"},{id:128,name:"伊8"},{id:129,name:"鈴谷改"},{id:130,name:"熊野改"},{id:131,name:"大和"},{id:132,name:"秋雲"},{id:133,name:"夕雲"},{id:134,name:"巻雲"},{id:135,name:"長波"},{id:136,name:"大和改"},{id:137,name:"阿賀野"},{id:138,name:"能代"},{id:139,name:"矢矧"},{id:140,name:"酒匂"},{id:141,name:"五十鈴改二"},{id:142,name:"衣笠改二"},{id:143,name:"武蔵"},{id:144,name:"夕立改二"},{id:145,name:"時雨改二"},{id:146,name:"木曾改二"},{id:147,name:"Верный"},{id:148,name:"武蔵改"},{id:149,name:"金剛改二"},{id:150,name:"比叡改二"},{id:151,name:"榛名改二"},{id:152,name:"霧島改二"},{id:153,name:"大鳳"},{id:154,name:"香取"},{id:155,name:"伊401"},{id:156,name:"大鳳改"},{id:157,name:"龍驤改二"},{id:158,name:"川内改二"},{id:159,name:"神通改二"},{id:160,name:"那珂改二"},{id:161,name:"あきつ丸"},{id:162,name:"神威"},{id:163,name:"まるゆ"},{id:164,name:"弥生"},{id:165,name:"卯月"},{id:166,name:"あきつ丸改"},{id:167,name:"磯風"},{id:168,name:"浦風"},{id:169,name:"谷風"},{id:170,name:"浜風"},{id:171,name:"Bismarck"},{id:172,name:"Bismarck改"},{id:173,name:"Bismarck zwei"},{id:174,name:"Z1"},{id:175,name:"Z3"},{id:176,name:"Prinz Eugen"},{id:177,name:"Prinz Eugen改"},{id:178,name:"Bismarck drei"},{id:179,name:"Z1 zwei"},{id:180,name:"Z3 zwei"},{id:181,name:"天津風"},{id:182,name:"明石"},{id:183,name:"大淀"},{id:184,name:"大鯨"},{id:185,name:"龍鳳"},{id:186,name:"時津風"},{id:187,name:"明石改"},{id:188,name:"利根改二"},{id:189,name:"筑摩改二"},{id:190,name:"初風"},{id:191,name:"伊19"},{id:192,name:"那智改二"},{id:193,name:"足柄改二"},{id:194,name:"羽黒改二"},{id:195,name:"綾波改二"},{id:196,name:"飛龍改二"},{id:197,name:"蒼龍改二"},{id:198,name:"霰改二"},{id:199,name:"大潮改二"},{id:200,name:"阿武隈改二"},{id:201,name:"吹雪改"},{id:202,name:"白雪改"},{id:203,name:"初雪改"},{id:204,name:"深雪改"},{id:205,name:"叢雲改"},{id:206,name:"磯波改"},{id:207,name:"綾波改"},{id:208,name:"敷波改"},{id:209,name:"金剛改"},{id:210,name:"比叡改"},{id:211,name:"榛名改"},{id:212,name:"霧島改"},{id:213,name:"天龍改"},{id:214,name:"龍田改"},{id:215,name:"球磨改"},{id:216,name:"多摩改"},{id:217,name:"木曾改"},{id:218,name:"長良改"},{id:219,name:"五十鈴改"},{id:220,name:"由良改"},{id:221,name:"名取改"},{id:222,name:"川内改"},{id:223,name:"神通改"},{id:224,name:"那珂改"},{id:225,name:"陽炎改"},{id:226,name:"不知火改"},{id:227,name:"黒潮改"},{id:228,name:"雪風改"},{id:229,name:"島風改"},{id:230,name:"朧改"},{id:231,name:"曙改"},{id:232,name:"漣改"},{id:233,name:"潮改"},{id:234,name:"暁改"},{id:235,name:"響改"},{id:236,name:"雷改"},{id:237,name:"電改"},{id:238,name:"初春改"},{id:239,name:"子日改"},{id:240,name:"若葉改"},{id:241,name:"初霜改"},{id:242,name:"白露改"},{id:243,name:"時雨改"},{id:244,name:"村雨改"},{id:245,name:"夕立改"},{id:246,name:"五月雨改"},{id:247,name:"涼風改"},{id:248,name:"朝潮改"},{id:249,name:"大潮改"},{id:250,name:"満潮改"},{id:251,name:"荒潮改"},{id:252,name:"霰改"},{id:253,name:"霞改"},{id:254,name:"睦月改"},{id:255,name:"如月改"},{id:256,name:"皐月改"},{id:257,name:"文月改"},{id:258,name:"長月改"},{id:259,name:"菊月改"},{id:260,name:"三日月改"},{id:261,name:"望月改"},{id:262,name:"古鷹改"},{id:263,name:"加古改"},{id:264,name:"青葉改"},{id:265,name:"妙高改"},{id:266,name:"那智改"},{id:267,name:"足柄改"},{id:268,name:"羽黒改"},{id:269,name:"高雄改"},{id:270,name:"愛宕改"},{id:271,name:"摩耶改"},{id:272,name:"鳥海改"},{id:273,name:"利根改"},{id:274,name:"筑摩改"},{id:275,name:"長門改"},{id:276,name:"陸奥改"},{id:277,name:"赤城改"},{id:278,name:"加賀改"},{id:279,name:"蒼龍改"},{id:280,name:"飛龍改"},{id:281,name:"龍驤改"},{id:282,name:"祥鳳改"},{id:283,name:"飛鷹改"},{id:284,name:"隼鷹改"},{id:285,name:"鳳翔改"},{id:286,name:"扶桑改"},{id:287,name:"山城改"},{id:288,name:"翔鶴改"},{id:289,name:"鬼怒改"},{id:290,name:"阿武隈改"},{id:291,name:"千歳航改"},{id:292,name:"千代田航改"},{id:293,name:"夕張改"},{id:294,name:"舞風改"},{id:295,name:"衣笠改"},{id:296,name:"千歳航改二"},{id:297,name:"千代田航改二"},{id:300,name:"初風改"},{id:301,name:"秋雲改"},{id:302,name:"夕雲改"},{id:303,name:"巻雲改"},{id:304,name:"長波改"},{id:305,name:"阿賀野改"},{id:306,name:"能代改"},{id:307,name:"矢矧改"},{id:308,name:"弥生改"},{id:309,name:"卯月改"},{id:310,name:"Z1改"},{id:311,name:"Z3改"},{id:312,name:"浜風改"},{id:313,name:"谷風改"},{id:314,name:"酒匂改"},{id:316,name:"天津風改"},{id:317,name:"浦風改"},{id:318,name:"龍鳳改"},{id:319,name:"妙高改二"},{id:320,name:"磯風改"},{id:321,name:"大淀改"},{id:322,name:"時津風改"},{id:323,name:"春雨改"},{id:324,name:"早霜改"},{id:325,name:"清霜改"},{id:326,name:"初春改二"},{id:327,name:"朝雲改"},{id:328,name:"山雲改"},{id:329,name:"野分改"},{id:330,name:"秋月改"},{id:331,name:"天城"},{id:332,name:"葛城"},{id:334,name:"U-511改"},{id:343,name:"香取改"},{id:344,name:"朝霜改"},{id:345,name:"高波改"},{id:346,name:"照月改"},{id:347,name:"Libeccio改"},{id:348,name:"瑞穂改"},{id:349,name:"風雲改"},{id:350,name:"海風改"},{id:351,name:"江風改"},{id:352,name:"速吸改"},{id:353,name:"Graf Zeppelin改"},{id:354,name:"嵐改"},{id:355,name:"萩風改"},{id:356,name:"鹿島改"},{id:357,name:"初月改"},{id:358,name:"Zara改"},{id:359,name:"沖波改"},{id:360,name:"Iowa改"},{id:361,name:"Pola改"},{id:362,name:"親潮改"},{id:363,name:"春風改"},{id:364,name:"Warspite改"},{id:365,name:"Aquila改"},{id:366,name:"水無月改"},{id:367,name:"伊26改"},{id:368,name:"浦波改"},{id:369,name:"山風改"},{id:370,name:"朝風改"},{id:371,name:"松風改"},{id:372,name:"Commandant Teste改"},{id:373,name:"藤波改"},{id:374,name:"伊13改"},{id:375,name:"伊14改"},{id:376,name:"占守改"},{id:377,name:"国後改"},{id:380,name:"大鷹改"},{id:381,name:"神鷹改"},{id:383,name:"択捉改"},{id:384,name:"松輪改"},{id:385,name:"佐渡改"},{id:386,name:"対馬改"},{id:387,name:"旗風改"},{id:390,name:"天霧改"},{id:391,name:"狭霧改"},{id:392,name:"Richelieu改"},{id:393,name:"Ark Royal改"},{id:394,name:"Jervis改"},{id:395,name:"Ташкент改"},{id:396,name:"Gambier Bay改"},{id:397,name:"Intrepid改"},{id:398,name:"伊168改"},{id:399,name:"伊58改"},{id:400,name:"伊8改"},{id:401,name:"伊19改"},{id:402,name:"まるゆ改"},{id:403,name:"伊401改"},{id:404,name:"雲龍"},{id:405,name:"春雨"},{id:406,name:"雲龍改"},{id:407,name:"潮改二"},{id:408,name:"隼鷹改二"},{id:409,name:"早霜"},{id:410,name:"清霜"},{id:411,name:"扶桑改二"},{id:412,name:"山城改二"},{id:413,name:"朝雲"},{id:414,name:"山雲"},{id:415,name:"野分"},{id:416,name:"古鷹改二"},{id:417,name:"加古改二"},{id:418,name:"皐月改二"},{id:419,name:"初霜改二"},{id:420,name:"叢雲改二"},{id:421,name:"秋月"},{id:422,name:"照月"},{id:423,name:"初月"},{id:424,name:"高波"},{id:425,name:"朝霜"},{id:426,name:"吹雪改二"},{id:427,name:"鳥海改二"},{id:428,name:"摩耶改二"},{id:429,name:"天城改"},{id:430,name:"葛城改"},{id:431,name:"U-511"},{id:432,name:"Graf Zeppelin"},{id:433,name:"Saratoga"},{id:434,name:"睦月改二"},{id:435,name:"如月改二"},{id:436,name:"呂500"},{id:437,name:"暁改二"},{id:438,name:"Saratoga改"},{id:439,name:"Warspite"},{id:440,name:"Iowa"},{id:441,name:"Littorio"},{id:442,name:"Roma"},{id:443,name:"Libeccio"},{id:444,name:"Aquila"},{id:445,name:"秋津洲"},{id:446,name:"Italia"},{id:447,name:"Roma改"},{id:448,name:"Zara"},{id:449,name:"Pola"},{id:450,name:"秋津洲改"},{id:451,name:"瑞穂"},{id:452,name:"沖波"},{id:453,name:"風雲"},{id:454,name:"嵐"},{id:455,name:"萩風"},{id:456,name:"親潮"},{id:457,name:"山風"},{id:458,name:"海風"},{id:459,name:"江風"},{id:460,name:"速吸"},{id:461,name:"翔鶴改二"},{id:462,name:"瑞鶴改二"},{id:463,name:"朝潮改二"},{id:464,name:"霞改二"},{id:465,name:"鹿島"},{id:466,name:"翔鶴改二甲"},{id:467,name:"瑞鶴改二甲"},{id:468,name:"朝潮改二丁"},{id:469,name:"江風改二"},{id:470,name:"霞改二乙"},{id:471,name:"神風"},{id:472,name:"朝風"},{id:473,name:"春風"},{id:474,name:"松風"},{id:475,name:"旗風"},{id:476,name:"神風改"},{id:477,name:"天龍改二"},{id:478,name:"龍田改二"},{id:479,name:"天霧"},{id:480,name:"狭霧"},{id:481,name:"水無月"},{id:483,name:"伊26"},{id:484,name:"浜波"},{id:485,name:"藤波"},{id:486,name:"浦波"},{id:487,name:"鬼怒改二"},{id:488,name:"由良改二"},{id:489,name:"満潮改二"},{id:490,name:"荒潮改二"},{id:491,name:"Commandant Teste"},{id:492,name:"Richelieu"},{id:493,name:"伊400"},{id:494,name:"伊13"},{id:495,name:"伊14"},{id:496,name:"Zara due"},{id:497,name:"白露改二"},{id:498,name:"村雨改二"},{id:499,name:"神威改"},{id:500,name:"神威改母"},{id:503,name:"鈴谷改二"},{id:504,name:"熊野改二"},{id:508,name:"鈴谷航改二"},{id:509,name:"熊野航改二"},{id:511,name:"Гангут"},{id:512,name:"Октябрьская революция"},{id:513,name:"Гангут два"},{id:515,name:"Ark Royal"},{id:516,name:"Ташкент"},{id:517,name:"占守"},{id:518,name:"国後"},{id:519,name:"Jervis"},{id:521,name:"春日丸"},{id:524,name:"択捉"},{id:525,name:"松輪"},{id:526,name:"大鷹"},{id:527,name:"岸波"},{id:528,name:"早波"},{id:529,name:"大鷹改二"},{id:530,name:"伊504"},{id:531,name:"佐渡"},{id:532,name:"涼月"},{id:534,name:"神鷹"},{id:535,name:"Luigi Torelli"},{id:536,name:"神鷹改二"},{id:537,name:"涼月改"},{id:539,name:"UIT-25"},{id:540,name:"対馬"},{id:541,name:"長門改二"},{id:542,name:"夕雲改二"},{id:543,name:"長波改二"},{id:544,name:"Gambier Bay"},{id:545,name:"Saratoga Mk.II"},{id:546,name:"武蔵改二"},{id:547,name:"多摩改二"},{id:548,name:"文月改二"},{id:549,name:"Intrepid"},{id:550,name:"Saratoga Mk.II Mod.2"},{id:551,name:"日振"},{id:552,name:"大東"},{id:553,name:"伊勢改二"},{id:555,name:"瑞鳳改二"},{id:556,name:"浦風丁改"},{id:557,name:"磯風乙改"},{id:558,name:"浜風乙改"},{id:559,name:"谷風丁改"},{id:560,name:"瑞鳳改二乙"},{id:561,name:"Samuel B.Roberts"},{id:562,name:"Johnston"},{id:563,name:"巻雲改二"},{id:565,name:"福江"},{id:566,name:"陽炎改二"},{id:567,name:"不知火改二"},{id:568,name:"黒潮改二"},{id:571,name:"Nelson"},{id:574,name:"Gotland"},{id:575,name:"Maestrale"},{id:576,name:"Nelson改"},{id:579,name:"Gotland改"},{id:580,name:"Maestrale改"},{id:581,name:"日進"},{id:583,name:"峯雲"},{id:586,name:"日進甲"},{id:605,name:"Luigi Torelli改"},{id:606,name:"伊400改"},{id:678,name:"日振改"},{id:679,name:"大東改"},{id:680,name:"浜波改"},{id:681,name:"Samuel B.Roberts改"},{id:685,name:"福江改"},{id:686,name:"岸波改"},{id:687,name:"峯雲改"},{id:688,name:"早波改"},{id:689,name:"Johnston改"},{id:690,name:"日進改"}]}});