<template>
    <div class="app">
        <v-header></v-header>
        <router-view></router-view>
    </div>
</template>

<script>
import  header  from './components/Header/header.vue'
export default {
    components: {
        'v-header': header
    }
}
</script>

<style lang="scss" scoped>
</style>

