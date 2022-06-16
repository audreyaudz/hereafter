<!-- This is the Chapters page ('/chapters') of Here:After -->

<script setup>
import { ref } from "vue";

import VueMarkdown from "../elements/VueMarkdown.js";


const options = { html: true };
</script>

<script>
import axios from "axios";

import { getCurrentInstance } from "vue";

export default {

  // The mounted function is called when the component has created it's elements (e.g. divs)
  // In case of the chapters page, we use this to trigger loading
  mounted: async function () {
    this.source =  "loading..."
    try {
      let chapterId = parseInt(this.$route.query.id);
      let chapter = await this.$http.get(`/chapters/${chapterId}.md`);
      this.source = chapter.data;

    } catch (ex) {

      // If the server returns 404 (not found), we redirect to the generic 404 page
      if (ex.response.status === 404)
      {
        this.$router.replace('404')
      }
      else
      {
        // Otherwise for now we display a technical error message to help developers
        // TODO: User Friendly Errors
        this.source = "### An Error Occurred: \n ```" + JSON.stringify(ex, null, 2) + "```"
      }
    }

  },
  components: {
    VueMarkdown,
  },
  data() {
    return {
      source: " "
    };
  },
};
</script>



<template>
  <i-layout class="centerdiv h-full text-center">
    <br>
    <v-md-editor  v-model='source'  height="400px"> </v-md-editor>

    <i-layout-content class="text-left ml-6 mb-16">

      <VueMarkdown :source="source" :options="{ html: true }" />
    </i-layout-content>
  </i-layout>
</template>


<style scoped>
</style>
