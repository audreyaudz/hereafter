<!-- This is the Chapters page ('/chapters') of Here:After -->

<script setup>

import { ref } from 'vue'
const i = ref(0)
const options =  { html: true }
</script>

<template>
  <i-layout class="centerdiv h-full text-center">
  <i-layout-header>
  <h1> A Chapter {{this.$route.query.id}} </h1>
  </i-layout-header>
  <i-layout-content class="w-full h-100 text-left ml-6 mb-16 ">
    a
    <MarkdownRenderer :source="`# This is a markdown heading\n## This is your number: ${i}.\n<i>HTML is allowed via options</i>`"
    :options="options"/>
    v
  </i-layout-content>
  </i-layout>

</template>


<style scoped>
</style>
