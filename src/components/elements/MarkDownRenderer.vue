<script>
import { h, PropType, VNode, Component, defineComponent } from 'vue'
import MarkdownIt, { Options } from 'markdown-it'
export { Options } from 'markdown-it'

export default  MarkdownRenderer = defineComponent({
  name: 'MarkdownRenderer',
  props: {
    source: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      md: null,
    }
  },
  computed: {
    content(){
      const src = this.source
      return this.md?.render(src)
    },
  },
  created() {
    this.md = new MarkdownIt(this.options ?? {})
  },
  render() {
    return h('div', { innerHTML: this.content })
  },
})

</script>

<template>
  <div>
    <markdown-renderer :source="src">
  </div>
</template>