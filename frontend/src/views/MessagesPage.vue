<template>
  <div class="messages">
  <h1>Messages</h1>
    <div v-if="messages.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewMessage' }" class="">Submit New Message</router-link>
      </div>
      <a href="#" @click="checkPalindrome(picked)">Check if palindrome</a>
      <br>
      <span>Is palindrome? {{isPalindrome}}</span>
      <table align="center">
        <tr>
          <td width="65%">Message</td>
          <td width="25%" align="center">Action</td>
        </tr>
        <tr v-for="message in messages" :key="message._id">
          <td><input type="radio" :id="message._id" :value="message.message" v-model="picked"> {{ message.message }}</td>
          <td align="center">
            <a href="#" @click="deleteMessage(message._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no messages.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'NewMessage' }" class="new-msg-link">New Message</router-link>
    </div>
  </div>
</template>

<script>
import MessagesService from '@/services/MessagesService'
export default {
  name: 'messages',
  data () {
    return {
      messages: [],
      picked: '',
      isPalindrome: ''
    }
  },
  mounted () {
    this.getMessages()
  },
  methods: {
    async getMessages () {
      const response = await MessagesService.fetchMessages()
      this.messages = response.data.messages
    },
    async deleteMessage (id) {
      await MessagesService.deleteMessage(id)
      this.getMessages()
      this.$router.push({ name: 'MessagesPage' })
    },
    checkPalindrome (str) {
      if (str === '') {
        this.isPalindrome = 'No message is picked.'
        return
      }
      var regex = /[\W_]/g
      var original = str.toLowerCase().replace(regex, '')
      var reverse = original.split('').reverse().join('')
      this.isPalindrome = reverse === original
    }
  }
}
</script>

<style type="text/css">
.table-wrap {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
table th,
table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #6fb43f;
  color: #fff;
}
a {
  color: #5f6062;
  text-decoration: none;
}
a.new-msg-link {
  background: #6fb43f;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
