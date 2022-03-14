<template>
  <v-app-bar
      color="deep-purple accent-4"
      light
  >
    <router-link to="/" class="link">
      <v-btn elevation="2"  class="mr-3">
        Main page
      </v-btn>
    </router-link>
    <router-link to="/messenger" class="link">
      <v-btn elevation="2">
        Message
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.link {
  text-decoration: none;
}

</style>