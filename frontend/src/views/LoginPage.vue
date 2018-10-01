<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Login</h2>
    <div class="form">
        <div>
          <input type="email" name="email" placeholder="Email" v-model="email">
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" v-model="Password">
        </div>
        <div>
          <button class="login-btn" @click="startAuthUser">Login</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      msg: 'Arsani\'s Qlik Audition App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.form input {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.login-btn {
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
