<template>
  <div>
    <h1>Register</h1>
    <input type="email" v-model="email" name="email" placeholder="email"><br><br>
    <input type="password" v-model="password" name="password" placeholder="password"><br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationServices'
export default {
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
