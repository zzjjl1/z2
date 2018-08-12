<template>
    <div>
        <div class='movie-box'>
            <div class='movie-img'>
                <img :src="movieDetail.img" alt="">
            </div>
            <div class='movie-info'>
                <h3>{{movieDetail.nm}}</h3>
                <p>{{movieDetail.sc}}</p>
                <p>{{movieDetail.cat}}</p>
                <p>{{movieDetail.src}}</p>
                <p>{{movieDetail.rt}}</p>
            </div>
        </div>
        <div>
            <h2>主演</h2>
            <p>{{movieDetail.star}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                movieDetail:{}
            }
        },
        created(){
            axios.get(`./static/data/moviedetail.json?movieId=${this.$route.params.movieId}`).then(res => {
                this.movieDetail = res.data.data.MovieDetailModel
            }).catch(res=> {

            });
        }
// npm install --save axios
        
    }
</script>

<style scoped>
.movie-box{
    display: flex;
}
.movie-img{
    flex:1;
    width:0;
    margin-right:0.1rem;
}
.movie-img img{
    width: 100%;  
}
.movie-info{
    flex:2;
    width: 0;
}


</style>