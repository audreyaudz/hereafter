<template >
  <div color="light" cover class=" _text-align:left-fluid text bg-pos-center max-h-full mt-20">
  <div class="overflow-hidden flex-1 flex flex-row bg-darken ">
    <div class="w-full sm:w-1/3 p-6">
      <h3 class="text-yellowed font-bold leading-none mb-3">
        Share Your Story
      </h3>
      <p class="text-white mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
        amet ligula.
        <br />
        <router-link to="chapter">     
          <button class="bg-yellow border rounded text-yellowed mt-3 py-1 px-8 ">Add Chapter
          </button>
        </router-link>
      </p>
    </div>
    <div class="w-full sm:w-2/3">
      <div class="bg-cover bg-center basis-1 h-80" style="background-image: url('/img/card-header-3.jpeg')">
      </div>
    </div>
  </div>
  <div class="overflow-hidden flex-1 flex flex-row bg-oranged">
    <div class="w-full sm:w-2/3 ">
      <div class="bg-cover bg-center basis-1 h-80" style="background-image: url('/img/card-header-3.jpeg')">
      </div>
    </div>
    <div class="w-full sm:w-1/3 p-6 mt-6">
      <div class="align-middle">
          <h3 class="text-3xl text-yellowed font-bold leading-none mb-3">
          Resources
          </h3>
        <p class="text-yellowed mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
          amet ligula.
          <router-link to="resources">
            <button class="bg-yellow border rounded text-yellowed mt-3 py-1 px-8 ">Find Out More
            </button>
          </router-link> 
        </p>
      </div>
    </div>
  </div>
</div>

</template>
