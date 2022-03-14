<template>
  <v-app class="">
    <v-container fluid>
      <Navbar />
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    //
  }),
};
</script>
