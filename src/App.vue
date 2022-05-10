<script setup>


</script>



<template>
  <div class="centerdiv">
  <header>
      <Navbar color="dark"  />
  </header>


  <main class="h-full z-0 " >
    <router-view></router-view>
    <!--Home class='h-full'/ -->
  </main>

  <footer>
    <Footer color="dark"> </Footer>
  </footer>
</div>
</template>

<style>
@import './assets/base.css';

</style>
