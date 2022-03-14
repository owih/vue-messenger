<template>
  <v-col cols="4" >
    <v-card class="text-end">
      <v-card-title>
        {{ message.text }}
      </v-card-title>
      <v-card-text>
        {{ message.image }}
        {{ message.date }}
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "MessageItem",
  props: {
    message: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>