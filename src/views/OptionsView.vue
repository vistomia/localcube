<template>
    <AppNav></AppNav>
    <br>
    <br>
    <AppOptions></AppOptions>
</template>

<script>
import AppNav from '@/components/AppNav.vue';
import AppOptions from '@/components/AppOptions.vue'

export default {
    name: 'OptionsView',
    components: {
        AppNav,
        AppOptions
    }
}
</script>
