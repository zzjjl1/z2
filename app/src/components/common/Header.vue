<template>
    <div>
        <div class='header' :style="{background:bg}">
            <span class='header-home'>首页</span>
            <span class='header-title'>{{title}}</span>
            <span class='header-none'></span>
        </div>
    </div>
</template>
<script>
// import Rem from '@/assets/rem'
    export default {
        props:['title','bg']
        
    }
</script>

<style scoped>

.header{
    height: 1rem;
    display: flex;
    line-height: 1rem;
    position:fixed;
    width: 100%;
    top:0;
}
.header-home,.header-none{
    width: 1rem;
    text-indent: 0.2rem;
}
.header-title{
    flex:1;
    text-align:center;
    
}

</style>