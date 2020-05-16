<template>
  <div class="flex items-center block_image" :class="{'block_image-md': mq == 'desktop'}">
    <img v-for="image in data" :key="image.url" :src="image.url" :width="image.size" />
  </div>
</template>

<script>
export default {
  props: ["data", "mq"]
};
</script>
<style scoped lang="scss">

.block_image {
  @apply mb-4;
  flex-shrink: 0;

}

.block_image-md {
  @apply mr-8;
  flex-shrink: 0;
}

</style>
