<template>
  <div id="app">
    <desktop>
      <div>
        <navigation></navigation>
        <invoice-details></invoice-details>
      </div>
      <div>
        <line-item></line-item>
      </div>
    </desktop>
  </div>
</template>

<script>
  import Desktop from './layouts/Desktop.vue'

  import InvoiceDetails from './components/InvoiceDetails.vue'
  import Navigation from './components/Navigation.vue'
  import LineItem from './components/LineItem.vue'

  export default {
    name: 'app',
    components: {Desktop, InvoiceDetails, Navigation, LineItem},
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
