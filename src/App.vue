<template>
  <div>
    <div id="app">
      <navbar :title="currentView"></navbar>

      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  name: 'app',
  data: function () {
    return {
      currentView: this.$store.state.currentView
    }
  },
}
</script>

<style scoped>
.btn-flat {
  margin-bottom: 1em;
}

.btn {
  margin-bottom: 1em;
}
</style>
