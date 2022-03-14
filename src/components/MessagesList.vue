<template>
<v-row class="flex-column align-end">
  <MessageItem
  v-for="message of messages"
  :message="message"
  />
</v-row>
</template>

<script>
import MessageItem from "@/components/MessageItem";
export default {
  name: "MessagesList",
  props: {
    messages: [],
  },
  components: {
    MessageItem
  }
}
</script>

<style scoped>

</style>