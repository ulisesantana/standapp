<template>
  <v-speed-dial
    bottom
    right
    direction="top"
    open-on-hover
    transition="slide-y-reverse-transition"
    fixed
  >
    <v-btn
      slot="activator"
      color="blue darken-2"
      dark
      fab
    >
      <v-icon>account_circle</v-icon>
      <v-icon>close</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      v-for="a in actions"
      :key="actions"
      :color="a.color"
    >
      <v-icon>{{a.icon}}</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
  export default {
    name: 'QuickNav',
    props: [],
    data: () => ({
      actions: [
        {name: 'edit', link: 'edit', icon: 'edit', color: 'green'},
        {name: 'add', link: 'add', icon: 'add', color: 'indigo'},
        {name: 'delete', link: 'delete', icon: 'delete', color: 'red'}
      ],
      fab: false,
      sheet: false
    })
  }
</script>

<style scoped>
</style>
