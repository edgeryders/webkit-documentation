<template>
  <div class="block_text" :class="{'block_text-md': mq == 'desktop'}" >
    <div v-if="Array.isArray(data.text)" class="text_container">
      <div v-for="(text, index) in data.text" v-html="text" class="text" :key="index"></div>
    </div>
    <div v-else v-html="data.text" class="text"></div>
</div>
</template>

<script>
export default {
  props: ["data", "mq"]
};
</script>
<style lang="scss">

.block_text {
  @apply mr-6 leading-relaxed flex justify-between;
  flex-basis: 100%;
  &:last-child {
    @apply mr-0;
  }
  .text_container {
    @apply flex flex-col;
    .text {
      @apply mr-8 ;
      flex-basis: 100%;
      &:last-child {
        @apply mr-0;
      }
      p {
        @apply block mb-3;
      }
      /deep/ h3 {
        margin-bottom: 30px !important;
      }
    }
    p {
      @apply mb-3;
    }
  }
}

.highlight {
}
.block_text-md {
  .text_container {
    @apply flex-row;
  }
}


</style>
