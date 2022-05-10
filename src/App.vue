<script setup>


</script>



<template>
  <header class="centerdiv">
      <Navbar color="dark"  />
  </header>


  <main class="h-full z-0 " >
    <router-view></router-view>
    <!--Home class='h-full'/ -->
  </main>

  <footer>
    <Footer color="dark"> </Footer>
  </footer>

</template>

<style>
@import './assets/base.css';

</style>
