<template>
  <div>
    <v-card-title>
      Messenger
    </v-card-title>
    <div class="messengerInner">
      <div class="messenger d-flex flex-column fill-height">
        <div class="flex-grow-1 overflow-auto overflow-x-hidden pr-2">
          <MessagesList
          :messages="messages"
          />
        </div>
        <hr>
        <div>
          <MessageForm
              @addNewMessage="addNewMessage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MessageForm from "@/components/MessageForm";
import MessageOutput from "@/components/MessagesList";
import MessagesList from "@/components/MessagesList";
export default {
  name: "Messenger",
  data: () => ({
    messages: [],
  }),
  components: {
    MessagesList,
    MessageForm, MessageOutput
  },
  methods: {
    addNewMessage(newMessage) {
      this.messages.push(newMessage)
      console.log(this.messages)
    }
  }
}
</script>

<style scoped>
.messengerInner {
  box-sizing: border-box;
  padding: 12px 12px 0;
  width: 90%;
  height: 600px;
  border: 4px solid #5a243b;
  border-radius: 20px;
  background-color: #dbd6d6;
}
</style>