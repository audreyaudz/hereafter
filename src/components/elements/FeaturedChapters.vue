<template  >
     <h1 class='text-center mb-6 mt-6'> Featured Chapters </h1>
         <div class="_display:flex _flex-direction:row mb-12">
            <i-card class="w-96 mx-3" color="light">
              <template #image class="bgha-card-header">
                <img
                  src= "/img/card-header-1.jpg"
                  class="image -responsive"
                  alt="Card Image"
                />
              </template>
              <h4 class="card-title">A Chapter</h4>
              <p class="card-subtitle">Lorem</p>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, ...
              </p>
              <a class="card-link" href="/">Read Morek</a>
            </i-card>
            <i-card class="w-96 mx-3" color="light">
              <template #image class="bgha-card-header">
                <img
                  src= "/img/card-header-2.jpg"
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
              <a class="card-link" href="https://inkline.io">Example Link</a>
            </i-card>
            <i-card class="w-96 mx-3" color="light">
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
              <a class="card-link" href="https://inkline.io">Example Link</a>
            </i-card>
          </div>
          <div class="text-center mr-5">
  <router-link to='chapters' ><i-button color="dark" class="rounded">See More Chapters</i-button></router-link>
  </div>
</template>
