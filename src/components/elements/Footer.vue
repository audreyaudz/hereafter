<template>

<i-navbar color="light"  :collapse="false" class="inline-flex w-full" >
        <a href="https://better.sg" target="_blank" class="navbar-logo ">
        <i-navbar-brand class='cover w-48 h-16 '>
          <img class="-.fluid h-auto" src="/img/betterwordlogo.png" alt="logo" />
        </i-navbar-brand>
        </a>    
      <i-nav class="justify-items-start" style="line-height: 1px" >
        <i-nav-item class="mr-4"> <router-link to="/" class="text-gray-800">Home</router-link></i-nav-item>
        <i-nav-item class="mr-4"> <router-link to="chapters" class="text-gray-800"> Chapters</router-link></i-nav-item>
        <i-nav-item class="mr-4"> <router-link to="resources" class="text-gray-800"> Resources</router-link></i-nav-item>
        <i-nav-item class="mr-4"> <router-link to="tos" class="text-gray-800"> Terms of Service</router-link></i-nav-item>
        <i-nav-item class="mr-4"> <router-link to="about" class="text-gray-800"> About Here:After</router-link></i-nav-item>
        <i-nav-item class="mr-4"> <router-link to="contact" class="text-gray-800"> Contact</router-link></i-nav-item>
        <a class="text-black fab fa-github" href="https://github.com/audreyaudz/hereafter"  target="_blank"/>
    </i-nav>
  
    </i-navbar>
   <div class="w-full text-center" >
    <p class="text-sm p-6 text-gray-400">
      This project is brought to you by Better.sg, a non-profit, volunteer-run
      organisation that drives tech-for-good in Singapore. 
    </p>
    
  </div>    



</template>