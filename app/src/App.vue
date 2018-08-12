<template>
  <div id="app">
    <common-header :title="titleText" :bg="bgColor" @change='fn'></common-header>
        <router-view></router-view>
    <common-bottom :bg="bgColor" @change="fn"></common-bottom>
  </div>
</template>
<script>
import CommonHeader from "@/components/common/Header";
import CommonBottom from "@/components/common/Bottom";

export default {
  name: "App",
  data() {
    return {
      bgColor: "",
      titleText: ""
    };
  },
  components: {
    CommonHeader,
    CommonBottom
  },
  methods: {
    fn(color, text) {
      this.bgColor = color;
      this.titleText = text;
    }
  },
  created() {
    let url = this.$route.path; //    /music/musicList
    let str = url.split("/")[1]; // ['music','musicList'] => 'music'
    switch (str) {
      case "music":
        this.bgColor = "#6cc091";
        this.titleText="Music";
        break;
      case "movie":
        this.bgColor = "#ea6f5a";
        this.titleText="Movie";
        break;
      case "book":
      this.bgColor = "#3194d0";
      this.titleText="Book";
      break;
      case "imgs":
      this.bgColor = "pink";
      this.titleText="Imgs";
      break;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   margin:1rem 0;
}
body {
  font-size: 0.32rem;
}
</style>
