<template>
  <div class="view_grid" :class="{ 'view_grid-md': mq == 'desktop' }">
  <div
    v-for="(item, index) in data"
    :key="index"
  >
    <slot name="item" v-bind:item="item">
      <slot name="header"></slot>
      <slot name="content"></slot>
      <slot name="footer"></slot>
    </slot>
  </div>
</div>
</template>

<script>
export default {
  name: "Grid",
  props: ["data", "mq"]
};
</script>
<style lang="scss">

.view_grid {
  @apply w-full flex flex-col;

}

.view_grid-md {
  @apply block;
  height: auto;
  column-count: 3;
}

  .box {
    @apply inline-block w-full border border-gray-200 mb-4;
    a {
    @apply text-2xl m-0;
    }
  }

</style>
