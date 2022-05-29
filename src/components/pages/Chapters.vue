<!-- This is the Chapters page ('/chapters') of Here:After -->

<script>
export default {
    data () {
        return {
            page: 1,
            itemsPerPage: 20,
            itemsTotal: 300,
            limitResponsive: {
                xs: 3,
                sm: 3
            }
        };
    }
};
</script>

<template>
<div class="bg-darken">
  <div color="light" cover class=" _text-align:left-fluid text bg-pos-center max-h-full -mt-30 ">
    <div class="overflow-hidden flex-1 flex flex-row bg-yellowed ">
      <div class="w-full sm:w-1/2 p-6 mr-1">
        <p class="text-black font-bold leading-none -mb-4 pt-30">
          This Week's Featured Chapter:
        </p>
        <h3 class="text-black font-bold">
          Nibh congue purus feugiat sapien eros.
        </h3>
        <p class="text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
          amet ligula.
          <br />
          <button class="bg-yellow rounded text-black mt-3 py-1  "><u>Read On</u>
          </button>
        </p>
      </div>
      <div class="w-full sm:w-1/2">
        <div class="bg-cover bg-center basis-1 h-80" style="background-image: url('/img/card-header-3.jpeg')">
        </div>
      </div>
    </div>
      <section class="m-2 font-sans leading-normal flex">

    <!-- card container -->
      <div class="max-w-lg shadow-lg rounded overflow-hidden m-4 sm:flex">
        <div class="h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-header-3.jpeg')">
        </div>
        
        <!-- card-content -->
        <div class="px-6 py-4 bg-yellowed">
          <h2 class="mb-2 font-black">Dying Young</h2>
          <p class="mb-4 text-grey-dark h-30 text-sm">
            It was never easy saying early goodbyes when you had me at hello.
          </p>
        </div>
      </div>
      <div class="max-w-lg shadow-lg rounded overflow-hidden m-4 sm:flex">
        <div class="h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-header-3.jpeg')">
        </div>
        
        <!-- card-content -->
        <div class="px-6 py-4 bg-yellowed">
          <h2 class="mb-2 font-black">Dying Young</h2>
          <p class="mb-4 text-grey-dark h-30 text-sm">
            It was never easy saying early goodbyes when you had me at hello.
          </p>
          <button class="bg-yellow rounded text-darken"><u>Add Chapter</u>
          </button>
        </div>
      </div>
      </section>
    </div>
    <div class="overflow-hidden flex-1 flex flex-row bg-darken ">
    <div class="w-full sm:w-1/3 p-6">
      <h3 class="text-yellowed font-bold leading-none mb-3">
        Share Your Story
      </h3>
      <p class="text-white mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
        amet ligula.
        <br />
        <button class="bg-yellow border rounded text-yellowed mt-3 py-1 px-8 ">Add Chapter
        </button>
      </p>
    </div>
    <div class="w-full sm:w-2/3">
      <div class="bg-cover bg-center basis-1 h-80" style="background-image: url('/img/card-header-3.jpeg')">
      </div>
    </div>
  </div>
  </div>

  <div>
    <i-pagination class="w-full p-8 bg-yellowed justify-center" v-model="page" :limit="limitResponsive" :items-total="itemsTotal" :items-per-page="itemsPerPage" />
  </div>
</template>


<style scoped>
</style>
