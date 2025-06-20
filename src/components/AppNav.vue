<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
    <div class="container">
      <router-link  class="navbar-brand" to="/">LocalCube</router-link>
      <button class="navbar-toggler" type="button" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link  class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link  class="nav-link"  to="/options">Options</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Headera'
            }
        },

        computed: {
            upperTitle() {
                return this.title.toUpperCase()
            }
        },

        beforeUnmount() {
            console.log('Headera beforeUnmount')
        },

        methods: {
            onClick() {
                alert('Headera')
            }
        }
    }
</script>

<style>
</style>