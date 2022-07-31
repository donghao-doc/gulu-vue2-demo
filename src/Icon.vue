<template>
  <svg :class="['g-icon', {'loading': name === 'loading'}]" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: { type: String, required: true }
  },
  mounted() {
    const iconfontScript = document.querySelector('script[data-ref]')
    if (iconfontScript && iconfontScript.dataset.ref === 'iconScript') return
    const script = document.createElement('script')
    script.src = '//at.alicdn.com/t/font_718972_1hhoomwpb69.js'
    script.dataset.ref = 'iconScript'
    document.body.append(script)
  }
}
</script>

<style scoped lang="scss">
.g-icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  &.loading { animation: spin 1s linear infinite; }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
}
</style>
