<template>
  <div>
    <form @submit.prevent="onSubmit">
      <v-row class="justify-space-between">
        <v-col cols="9">
          <v-textarea
              background-color="white"
              rounded
              name="input-7-4"
              label="Write the message"
              v-model="text"
              class="overflow-auto v-textarea--no-resize"
          ></v-textarea>
        </v-col>
        <v-col cols="2">
          <div class="mb-2">
<!--            <v-file-input-->
<!--                v-model="image"-->
<!--                accept="image/*"-->
<!--                label="Choose file"-->
<!--            ></v-file-input>-->
          </div>
          <div>
            <v-btn type="submit">
              Send
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </form>
  </div>
</template>

<script>
export default {
  name: "MessageForm",
  data:() => ({
    text: '',
    image: ''
  }),
  methods: {
    onSubmit() {
      // const reader = new FileReader()
      // reader.onload = () => {
      //   const newImage = {
      //     id: Date.now(),
      //     url: reader.result
      //   }
      // }
      // reader.readAsDataURL(this.image)
      if (this.text !== '') {
        const newMessage = {
          id: Date.now(),
          text: this.text,
          date: new Date().toLocaleTimeString(),
          image: '',
        }
        this.$emit('addNewMessage', newMessage)
        this.text = ''
        console.log(newMessage)
      }
    }
  }
}
</script>

<style scoped>

</style>