<template>
  <h1 class='text-center mb-6'> Featured Chapters </h1>
    <div class="justify-center flex flex-row flex-wrap mb-8 w-full items-start ">
      <i-card class="w-80 h-96 mx-4 mt-5 mb-5 order-3" color="light">
        <template #image class="bgha-card-header">
          <img
            src= "/img/card-header-3.jpeg"
            class="image"
            alt="Card Image"
          />
        </template>
        <h4 class="card-title">Card Title</h4>
        <p class="card-subtitle ">Card Subtitle</p>
        <p>
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </p>
        <router-link class="card-link font-bold" to="chapter?id=1">Click To View Chapter</router-link>
      </i-card>
      <i-card class="w-80 h-96 mx-4 mt-5 mb-5 order-3" color="light">
        <template #image class="bgha-card-header">
          <img
            src= "/img/card-header-3.jpeg"
            class="image"
            alt="Card Image"
          />
        </template>
        <h4 class="card-title">Card Title</h4>
        <p class="card-subtitle ">Card Subtitle</p>
        <p>
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </p>
        <router-link class="card-link font-bold" to="chapter?id=2">Click To View Chapter</router-link>
      </i-card>
      <i-card class="w-80 h-96 mx-4 mt-5 mb-5 order-3" color="light">
        <template #image class="bgha-card-header">
          <img
            src= "/img/card-header-3.jpeg"
            class="image"
            alt="Card Image"
          />
        </template>
        <h4 class="card-title">Card Title</h4>
        <p class="card-subtitle">Card Subtitle</p>
        <p>
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </p>
        <router-link class="card-link font-bold" to="chapter?id=3">Click To View Chapter</router-link>
      </i-card>
    </div>
    <div class="text-center mr-5">
  <router-link to='chapters' ><i-button color="dark" class="rounded">See More Chapters</i-button></router-link>
  </div>
</template>
