<template>
  <div class="view_list">
  <div
    v-for="(item, index) in data"
    :key="index"
  >
    <slot name="item" v-bind:item="item">

    </slot>
  </div>
  
  <slot name="selected" v-bind:item="item">

  </slot>
</div>
</template>

<script>
export default {
  name: "List",
  props: ["data", "mq"],
  selected: 0
};
</script>
<style lang="scss">

.view_grid {
  @apply w-full;
  column-count: 3;

}

  .box {
    @apply inline-block w-full border border-gray-200 mb-4;
    a {
    @apply text-2xl m-0;
    }
  }

</style>
