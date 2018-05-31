<template>
  <v-bottom-sheet v-model="sheet">
    <v-btn
      slot="activator"
      color="accent"
      fab
      bottom
      right
      fixed
    >
      <v-icon>menu</v-icon>
    </v-btn>
    <v-list>
      <v-subheader>Go to</v-subheader>
      <v-list-tile
        dark
        small
        :key="pages"
        v-for="p in pages"
        :color="p.color"
        @click="sheet = false"
      >
        <router-link :to="{path:`${p.link}`}">
          <v-list-tile-title>{{ p.name.toUpperCase() }}</v-list-tile-title>
        </router-link>
      </v-list-tile>
    </v-list>
  </v-bottom-sheet>
</template>

<script>
  export default {
    name: 'QuickNav',
    props: [],
    data: () => ({
      pages: [
        {name: 'tasks', link: '/', icon: '', color: ''},
        {name: 'reports', link: '/reports', icon: '', color: ''}
      ],
      sheet: false
    })
  }
</script>

<style scoped>
</style>
