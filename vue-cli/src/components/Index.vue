<template>
    <div>
        <h3> 这是一个index页面</h3>
        <h2>{{$store.state.count}}</h2>
        <router-link to="/index/i1" >页面1</router-link>
        <router-link to="/index/i2" >页面2</router-link>
        <router-view></router-view>        
    </div>
</template>

<script>
import store from '@/vuex/store'
    export default {
        store
               
    } 
</script>

<style scoped>

</style>