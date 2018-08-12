<template>
    <div>
        <h1>这是第一个子页面</h1>
        {{$route.params.name}}
        {{$route.params.age}}
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
h1{
    background: #ccffcc;
}

</style>