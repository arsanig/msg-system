<template>
  <div class="new-messages">
    <h1>Add a new message</h1>
      <div class="form">
        <div>
          <textarea rows="15" cols="15" placeholder="Enter your message here..." v-model="message"></textarea>
        </div>
        <div>
          <button class="submit-msg-btn" @click="addMessage">Submit</button>
        </div>
      </div>
  </div>
</template>

<script>
import MessagesService from '@/services/MessagesService'
export default {
  name: 'NewMessage',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    async addMessage () {
      await MessagesService.addMessage({
        message: this.message
      })
      this.$router.push({ name: 'MessagesPage' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.submit-msg-btn {
  background: #6fb43f;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
