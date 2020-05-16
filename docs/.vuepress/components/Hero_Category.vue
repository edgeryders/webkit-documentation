<template>
  <div class="content_wrapper md:content_wrapper-md" style="flex-direction: column">
      <div class="hero_info">
        <div class="title_logo" v-if="getLogo(data.uploaded_logo.url)">
          <img :src="getLogo(data.uploaded_logo.url)" />
        </div>
        <h1 class="hero_title">{{ data.name }}</h1>
        <div class="hero_text" v-html="data.description_text"></div>
      </div>
      <div class="hero_stats md:hero_stats-md">
        <div class="flex mb-3">
          <p class="topics"><span>Topics</span><span class="key">{{data.topic_count}}</span></p>
          <p class="posts"><span>Posts</span><span class="key">{{data.post_count}}</span></p>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    getLogo(url) {
      if (url) {
        return this.baseUrl + url;
      } else {
        return false
      }
    }
  },
  filters: {
  },
  props: ["data", "baseUrl"]
};
</script>
