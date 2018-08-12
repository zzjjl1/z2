<template>
    <div>
        <h3>这是一个List页面</h3>
        <router-link :to="{name:'sb1',params:{name:'zs',age:'20'}}" >子页面1</router-link>
        <router-link to="/list/subList2" >子页面2</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>


</style>