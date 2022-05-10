<template>

<i-navbar color="light" :collapse="false" class="inline-flex w-full bg-browned border-0 rounded-none" >
    <a href="https://better.sg" target="_blank" class="navbar-logo ">
    <i-navbar-brand class='cover w-48 h-16 '>
      <img class="-.fluid h-auto" src="/img/betterwordlogo.png" alt="logo" />
    </i-navbar-brand>
    </a>
  <i-nav class="justify-items-start" style="line-height: 1px" >
    <i-nav-item class="mr-4"> <router-link to="/" class="text-white hover:text-yellow-400">Home</router-link></i-nav-item>
    <i-nav-item class="mr-4"> <router-link to="chapters" class="text-white hover:text-yellow-400">Chapters</router-link></i-nav-item>
    <i-nav-item class="mr-4"> <router-link to="resources" class="text-white hover:text-yellow-400">Resources</router-link></i-nav-item>
    <i-nav-item class="mr-4"> <router-link to="tos" class="text-white hover:text-yellow-400">Terms of Service</router-link></i-nav-item>
    <i-nav-item class="mr-4"> <router-link to="about" class="text-white hover:text-yellow-400">About Here:After</router-link></i-nav-item>
</i-nav>

<div class="w-full text-left" style="line-height: 1px"  >
  <p class="text-xs _text-align:center p-6 text-gray-200" style="line-height: 1px" >
    This project is brought to you by Better.sg, a non-profit, volunteer-run
    organisation that drives tech-for-good in Singapore.
  </p>
</div>

</i-navbar>




</template>

<script>

// old
/*

    <footer class="bg-browned text-center">
        <ul class="list-reset flex justify-around items-left sm:flex-col md:flex-row">
          <router-link to="/">
            <i-navbar-brand class='bg-halogosm w-56 h-16 cover bg-opacity-60 bg-no-repeat'>
            </i-navbar-brand>
          </router-link>
          <li class="mr-4">
              <a class="inline-block text-white no-underline hover:text-yellow-400 hover:text-underline py-1 px-4 mt-4 drop-shadow"
              href="#chapters">Chapters</a>
          </li>
          <li class="mr-4">
            <a class="inline-block text-white no-underline hover:text-yellow-400 hover:text-underline py-1 px-4 mt-4 drop-shadow"
              href="#resources">Resources</a>
          </li>
          <li>
            <a href="#" class="inline-block text-white no-underline hover:text-yellow-400 hover:text-underline py-1 px-4 mt-4 drop-shadow" aria-current="page">About Here:After</a>
          </li>
          <li>
            <a class="inline-block text-white no-underline hover:text-yellow-400 hover:text-underline py-1 px-4 mt-4 drop-shadow"
              href="terms.html">Terms Of Service</a>
          </li>
        </ul>
      <div class="w-full px-12 py-8">
        <div class="flex items-start">
          <img class="h-10 mx-10" src="img/betterwordlogo.png" href="./">
        </div>
          <p class="flex items-start text-sm text-black p-6 ml-3">This project is brought to you by Better.sg, a non-profit, volunteer-run organization that drives techforgood in
            Singapore.</p>
        </div>
    </footer>

*/
</script>
