<template>
  <div>
    <Menu :data="this.$globals.menu" :mq="viewport" />
    <Hero :mq="viewport"></Hero>
  </div>
</template>

<script>
import Hero from "./HeroWebkit.vue";
import Menu from "./Menu.vue";

export default {
  methods: {
  },
  components: {
    Menu,
    Hero
  },
  filters: {

  },
  computed: {
  },
  props: ["category", "data", "baseUrl", "globalStyle", "viewport"]
};
</script>
<style lang="scss">
  @responsive {
  
  .hero {
    @apply w-full flex flex-col justify-center p-8 pb-0 relative items-center overflow-hidden bg-gray-100;
    width: 100%;
  }

  .hero-md {
    @apply p-8 flex-col;
     width: 100%;
  }

  .hero .content_wrapper {
    @apply inline-block;
  }
  .hero .content_wrapper-md {
    @apply flex;
  }

  .hero_image {
    @apply w-full mr-0 mb-5;
  }

  .hero_title {
    @apply flex font-display text-3xl border-solid border-0 border-b pb-4 border-gray-300 font-bold text-left mb-4 mt-0;
    line-height: 2.2rem;
  }

  .hero_title-md {
    @apply inline-block pl-1 text-2xl;
  }

  .hero_text {
    @apply font-display text-left;
  }

  .hero_text p {
    font-size: 1.15rem;
  }

  .hero_text-md {
    @apply font-display pl-1 text-left leading-relaxed
  }

  .action_container {
    @apply mt-6 border-t border-gray-300 pt-8;
  }

  a.action {
    @apply p-3 mr-2 rounded-lg border border-gray-300;
  }

  .hero_image-md {
    @apply mr-6 mb-0;
    flex-shrink: 0;
  }

  .hero .hero_.video {
    position: absolute;
    width: 100%;
    height: 500px;
    z-index: 1;
  }

  .hero .video video {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    margin: 0;
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  .hero_stats {
    @apply flex flex-col items-start w-full mt-2 w-full;
  }

  .hero_stats-md {
    @apply flex-row;
  }

  .hero_stats p {
    @apply mr-3 rounded-lg border border-gray-200 inline-flex bg-white items-center overflow-hidden;
    height: 40px;
  }

  .hero_stats p span {
    @apply px-3;
    font-size: 14px;
  }

  .hero_stats p span.key {
    @apply bg-gray-100 h-full flex items-center font-bold px-3
  }

  .hero_info {
    @apply flex flex-col;
  }

  .hero_info-md {
    @apply flex-row;
  }
  .hero_image {
  @apply bg-gray-200 flex items-center justify-center;
}
}

</style>