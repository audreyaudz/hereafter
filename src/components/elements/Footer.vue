<template>
  <i-navbar color="dark"  >
        <a href="https://better.sg" target="_blank" class="navbar-logo">
        <i-navbar-brand class='cover w-48 h-16 '>
          <img class="responsive" src="/img/betterwordlogo.png" alt="logo" />
        </i-navbar-brand>
        </a>

    <i-navbar-collapsible class="_justify-content:flex-end" >
      <i-nav>
      <i-nav-item class="mr-4"> <router-link to="chapters" class="text-gray-300"> Chapters</router-link></i-nav-item>
      <i-nav-item class="mr-4"> <router-link to="resources" class="text-gray-300"> Resources</router-link></i-nav-item>
      <i-nav-item class="mr-4"> <router-link to="tos" class="text-gray-300"> Terms of Service</router-link></i-nav-item>
      <i-nav-item class="mr-4"> <router-link to="about" class="text-gray-300"> About Here:After</router-link></i-nav-item>
      <i-nav-item class="mr-4"> <router-link to="contact" class="text-gray-300"> Contact</router-link></i-nav-item>

    </i-nav>
  </i-navbar-collapsible>
     <div class="w-full px-24 py-8">

    <p class="flex items-start text-sm text-black p-6 ml-3">
      This project is brought to you by Better.sg, a non-profit, volunteer-run
      organisation that drives techforgood in Singapore.
    </p>
  </div>

  </i-navbar>

</template>