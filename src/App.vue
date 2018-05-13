<template>
  <div id="q-app">
    <q-layout>
      <div v-if="!user" id="loginBtn">
        <q-btn
          icon="person"
          label="Login"
          color="tertiary"
          size="xl"
          rounded
          @click="login"
          center
        />
      </div>
      <div v-if="user">
        <q-layout-header v-model="header" v-if="$q.platform.is.desktop">
          <quick-menu></quick-menu>
        </q-layout-header>
        <router-view />

        <q-layout-footer v-model="footer" v-if="!$q.platform.is.desktop">
          <quick-menu></quick-menu>
        </q-layout-footer>
      </div>
    </q-layout>
  </div>
</template>

<script>
import QuickMenu from './components/QuickMenu'

export default {
  name: 'App',
  components: {
    QuickMenu
  },
  data () {
    return {
      darkMode: false,
      user: null,
      token: null
    }
  },
  methods: {
    async login () {
      try {
        const result = await this.$auth.signInWithPopup(new this.$firebase.auth.GoogleAuthProvider())
        this.user = result.user
        this.token = result.credential.accessToken
      } catch (err) {
        console.error('ERROR:', err.message)
      }
    }
  }
}
</script>

<style>
#loginBtn{
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
}
  #loginBtn q-btn{
    margin: auto 50px;
  }
</style>
