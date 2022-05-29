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
  <div color="light" cover class=" _text-align:left-fluid text bg-pos-center max-h-full -mt-30">
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
    
  </div>
  <!-- <div>
    <i-row class="ml-0 ">
      <i-column class="text-left bg-blue-500 text-black">
        This part needs work.
      </i-column>
      <i-column>
        <img src="/img/card-header-3.jpeg" class="image -responsive" alt="Image of story">
      </i-column>
    </i-row>

    <i-row class="w-full">
      <i-column xs="3" class="w-full text-left bg-yellowed text-black">
        This part needs work.
      </i-column>
      <i-column xs="3">
        <img src="/img/card-header-3.jpeg" width="1000" height="400" class="image -responsive" alt="Image of story">
      </i-column>
            <i-column xs="3" class="w-full text-left my-2 bg-yellowed text-black">
        This part needs work.
      </i-column>
      <i-column xs="3">
        <img src="/img/card-header-3.jpeg" width="1000" height="400" class="image -responsive my-2" alt="Image of story">
      </i-column>
    </i-row>
 </div> -->
  <div>
    <i-pagination class="w-full p-8 bg-yellowed justify-center" v-model="page" :limit="limitResponsive" :items-total="itemsTotal" :items-per-page="itemsPerPage" />
  </div>
</template>


<style scoped>
</style>
