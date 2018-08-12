<template>
  <div id="app">
    <img src="../build/logo.png" alt=""><br>
    <button @click='goback'>后退</button>
    <button @click='goon'>前进</button>
    <button @click='gohome'>返回首页</button><br>
    <router-link to='/index' >首页</router-link>
    <router-link to='/list' >列表</router-link>
    <router-link to='/url/lisi/20' >url</router-link>
    <router-link to="/home" >重定向</router-link>
    <router-link to="/redirectparam/lisi/6" >重定向参数</router-link>  
    <transition name="fade">
         <router-view></router-view>
    </transition>
  
  </div>
   
    
</template>

<script>
export default {
  name: "App",
  methods:{
    goback(){
      this.$router.go(-1);
    },
    goon(){
      this.$router.go(1);
    },
    gohome(){
      this.$router.push('/'); 
    }

  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
    opacity:0;
  }
  .fade-leave{
    opacity:1;
  }
  .fade-enter-active{
    transition: opacity 2.5s;
  }
  .fade-leave-active{
    opacity: 0;
    transition:opacity 0.5s
  }
</style>
