<template>
  <div :class="{ 'container-md': mq == 'desktop' }">
    <h1 class="hero_title" v-html="config.title"></h1>
    <div class="hero_info">
      <div class="hero_image" v-if="config.image.url"  :style="{flexBasis: config.image.width}" >
        <img :src="config.image.url" />
      </div>

      <div class="hero_video" v-if="config.video && config.video.url">
        <video autoplay loop muted>
          <source :src="config.video.url" type="video/mp4" />
        </video>
      </div>

      <div class="hero_text" v-html="config.text.content"></div>
    </div>

    <div class="action_container">
      <a
        class="action"
        v-for="item in config.text.buttons"
        :href="item.url"
        :key="item.url"
        target="_blank"
      >
        {{ item.text }}
      </a>
    </div>

  </div>
</template>

<script>
export default {
  filters: {},
  methods: {
    styleObj(item) {
      var styleObj = {
        background: "#000",
        color: "#fff",
      };
      if (item.background) {
        styleObj["background"] = item.background;
      }
      if (item.color) {
        styleObj["color"] = item.color;
      }
      return styleObj;
    },
  },
  computed: {

  },
  props: ["config", "globalStyle", "mq"]
};
</script>
<style lang="scss">
.hero_image {
  @apply mb-0 w-full;
  flex-shrink: 0;
}


.hero_text p {
    @apply mt-0 mb-3 leading-normal
}

.container-md {
  .hero_info {
    flex-direction: row;
  }
  .hero_image {
    @apply mb-0 mr-6;
  }
  .hero_text {
    p {
      @apply mb-2 leading-normal
    }
  }
}

</style>
