<template>
    <AppNav></AppNav>
    <br>
    <br>
    <AppServer></AppServer>
</template>

<script>
import AppNav from '@/components/AppNav.vue';
import AppServer from '@/components/AppServer.vue';

export default {
    name: 'ServerView',
    components: {
        AppNav,
        AppServer
    }
}
</script>
