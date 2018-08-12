<template>
    <div>
        <ul>
            <li class='movieList' v-for="(obj,index) in movieList" :key="index" @click='goDetail(obj.id)'>
                
                    <div class='left'>
                    <img :src="obj.img" alt="">
                </div>
                <div class='right'>
                    <h3>{{obj.nm}}</h3>
                    <p>
                        <span>{{obj.ver}}</span>
                    </p>
                    <p>
                        <span v-for="(val,index) in obj.cat" :key="index">{{val}}</span>
                    </p>
                    <p>
                        主演:<span v-for="(person,index) in obj.star" :key="index">{{person}}</span>
                        </p>               
                    <p>评分:{{obj.sc}}</p>
                </div>
                            
            </li>
            
        </ul>
        <div>
            <img src="@/assets/loading.gif" alt="" v-show="isShow">
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
export default {
  data() {
    return {
      movieList: [],
      isShow:false,
      resultLength:0
    };
  },
  methods:{
      load(){
          axios.get(`./static/data/moviedata${this.movieList.length}.json`).then(res => {
            this.resultLength=res.data.data.movies.length;
            this.movieList = this.movieList.concat(res.data.data.movies);
            this.isShow=false;
        // console.log(res.data.data.movies);
      })
      .catch(res => {

      });
      },
      goDetail(id){
          this.$router.push(`/movie/movieDetail${id}`)
      }
  },

  created() {
      this.load();    
      window.onscroll=() => {
          let scrollTop = document.documentElement.scrollTop;
          let clientHeight = document.documentElement.clientHeight;
          let height = document.documentElement.scrollHeight;

          if(scrollTop+clientHeight == height){
              if(this.resultLength==10){
                    this.isShow=true;
                    this.load();
              }
          
           
          }

      }

  }

};
</script>

<style scoped>
.movieList {
  display: flex;
  font-size: 14px;
  padding: 0.2rem;
  line-height: 1.8;
}
.left {
  flex: 1;
  width: 0;
  margin-right: 0.1rem;
}
.left img {
  width: 100%;
}
.right {
  flex: 2;
  width: 0;
}
li {
  border-bottom: 1px solid #ccc;
}
</style>