<template>
  <v-app>
    <main app>
      <v-content dark>
        <v-container fluid dark>
          <router-view></router-view>
          <quick-nav></quick-nav>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
import QuickNav from '@/components/QuickNav'

export default {
  data () {
    return {
    }
  },
  name: 'App',
  components: {
    QuickNav
  }
}
</script>

<style>
main {
  background-color: #3e3e3e;
  color: #ffffff;
}
a{
  text-decoration: none;
}

</style>
