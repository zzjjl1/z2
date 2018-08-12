<template>
    <div>
        <ul class='bottom' :style='{background:bg}'>
            <li @click="$emit('change','#ea6f5a','Movie')"><router-link to="/movie/movieList">电影</router-link></li>
            <li @click="$emit('change','#6cc091','Music')" ><router-link to="/music/musicList" >音乐</router-link></li>
            <li @click="$emit('change','#3194d0','Book')"><router-link to="/book/bookList">书籍</router-link></li>
            <li @click="$emit('change','pink','Imgs')"><router-link to="/imgs/imgsList">图片</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['bg'],
    methods:{
        
    }
};
</script>

<style scoped>
.bottom{
    display: flex;
    height: 1rem;
    position: fixed;
    width: 100%;
    bottom:0;
    line-height: 1rem;
}
.bottom li{
    flex:1;
    text-align: center;
    
    color:#ccc;
    
}
</style>