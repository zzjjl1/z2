<template>
    <div>
        <ul class='imgs'>
            <li class='musiclist' v-for="(obj,index) in musicList" :key="index" @click='goPage(obj.id)'>
                <div>
                    <img :src="obj.bg" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                musicList:[]
            }    
        },
        methods:{
            load(){
                axios.get(`./static/data/musiclist.json`).then(res=>{
                    this.musicList = res.data.albums;
                    console.log(this.musicList);
                    
                }).catch(res=>{

                });
            },
            goPage(id){
                // this.$router.push(`/music/musicPage`);
                this.$router.push(`/music/musicPage${id}`);
            }
        },
        created() {
            this.load();
        },
        
    }
</script>

<style scoped>
.imgs{
    font-size:0;
    
}
img{
    width: 50%;
    float: left;
    
}

</style>