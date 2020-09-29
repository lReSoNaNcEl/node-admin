<template>
  <div>
    <Header/>
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    components: {Header}
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica, sans-serif;
  }

  html {font-size: 1vw;}

  img {max-width: 100%;}

  a {
    color: inherit;
    font: inherit;
    text-decoration: none;
  }

  .container {
    width: 62.5rem;
    margin: 0 auto;
  }
</style>
