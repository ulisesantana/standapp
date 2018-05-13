<template>
  <q-tabs :align="align">
    <q-route-tab
      to="/reports"
      exact
      slot="title"
      label="REPORTS"
    />
    <q-route-tab
      to="/"
      exact
      slot="title"
      label="TASKS"
    />
  </q-tabs>
</template>

<script>
export default {
  name: 'quick-menu',
  data () {
    return {
      align: this.$q.platform.is.desktop ? 'left' : 'justify'
    }
  }
}
</script>

<style scoped>
  * {
    text-align: center;
  }
</style>
