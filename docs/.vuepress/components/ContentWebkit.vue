<template>
  <div class="block bg-gray-100 pb-8" :class="{ 'block-md': viewport == 'desktop' }">
    <div
      class="wrapper mx-auto"
    >
      <div class="flex block_title" v-if="data.title" >
        <h2>{{ data.title }}</h2>
      </div>
      <div class="content_wrapper md:content_wrapper-md">
      
      <div class="w-full">
        <div v-for="view in data.views" class="w-full flex pt-2 mb-2 content_block" :class="{'pt-6': view.form && viewport == 'desktop' }" :key="view">
              <ViewImage v-if="view.image" :mq="viewport" :data="view.image" />    
              <ViewText v-if="view.text" :mq="viewport" :data="view" />
              <ViewForm v-if="view.form" :mq="viewport" :data="view.form" />
        </div>
      </div>
</div>
  </div>
</div>
</template>

<script>
export default {
  props: ["data", "html", "stylesheet", "globalStyle", "viewport"],
  methods: {
    styleObj(item) {
      var styleObj = {
        background: '#000',
        color: '#fff'
      };
      if (item.background) {
        styleObj["background"] = item.background;
      };
      if (item.color) {
        styleObj["color"] = item.color;
      };
      return styleObj;
    }
  }
};
</script>
<style scoped lang="scss">
.block {
  @apply px-8 pt-1 pb-6;
  .wrapper {
    @apply flex-col;
  }
  .content_block {
    @apply flex-col;
    /deep/ h3, /deep/ h4 {
      @apply mb-4 mt-1;
    }
  }
  .block_title {
    @apply border-b border-gray-200 py-0 w-full mb-1;
    h2 {
      @apply m-0 mt-6 pb-3;
      border: none;
    }
  }
}
.block-md {
  @apply px-10 py-2 pb-10;
  .block_title {
    @apply mb-3;
  }
  .wrapper {
     @apply flex-row;
  }
  .content_block {
    @apply flex-row;
  }
  .block_title {
    h2 {
      @apply pb-3;
    }
  }
}

.block /deep/ p {
  margin: 0;
}

</style>
