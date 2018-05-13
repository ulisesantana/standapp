<template>
  <div id="q-app">
    <q-layout>
      <q-layout-header v-model="header" v-if="$q.platform.is.desktop">
        <quick-menu></quick-menu>
      </q-layout-header>
      <router-view />
      <q-layout-footer v-model="footer" v-if="!$q.platform.is.desktop">
        <quick-menu></quick-menu>
      </q-layout-footer>
    </q-layout>
  </div>
</template>

<script>
import QuickMenu from './components/QuickMenu'
export default {
  name: 'App',
  components: {
    QuickMenu
  }
}
</script>

<style>
</style>
