<template>
  <div
    @mouseover="clear_interval"
    @mouseleave="toggle_play"
    class="pt-1"
  >

   <transition-group tag="div" class="slider" :class="{ 'slider-md': mq == 'desktop' }" :name="currentTransition" mode="out-in">
      <div v-for="number in [currentIndex]" :key="number" class="slide">
        <div class="slider_container">
        <div class="item_image w-full" :style="{ background: 'url(' + currentSlide.image_url + ')' }">
        </div>
        <div class="w-full md:p-6 bg-white flex items-start flex-col overflow-scroll md:overflow-auto">
            <div class="item_title" v-if="show('title') || show('date')">
              <a v-if="show('title')" :href="getPermalink(currentSlide.slug)" target="_blank">
                {{ currentSlide.title }}
              </a>
              <p class="item_date" v-if="show('date')">
                {{ currentSlide.created_at | formatDate }}
              </p>
            </div>
          <div class="slide_excerpt md:slide_excerpt-md" v-html="currentSlide.excerpt"></div>
          <div class="flex">
            <a class="slide_link" v-if="show('link')" :href="getPermalink(currentSlide.slug)" target="_blank">Read more</a>
            <a class="item_favs" v-if="show('favourites')" :href="getPermalink(currentSlide.slug)" target="_blank">{{currentSlide.like_count}}</a>
            <a class="item_replies" v-if="show('favourites')" :href="getPermalink(currentSlide.slug)" target="_blank">{{currentSlide.reply_count}}</a>
          </div>
        </div>
        </div>
      </div>
    </transition-group>

  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      play: false,
      users: [],
      slides: [],
      currentIndex: 0,
      currentTransition: 'next'
    };
  },
  components: {
  },
  methods: {
    show(value) {
      if (this.config && this.config.slider && this.config.slider.display) {
        return this.config.slider.display.includes(value);
      } else {
        return true
      }
    },
    next() {
      this.changeSlide('next');
      this.set_interval();
    },
    back() {
      this.changeSlide('back');
      this.set_interval();
    },
    changeSlide(dir) {
      this.currentIndex = dir === 'next' ? this.currentIndex + 1 : this.currentIndex - 1;
      this.currentTransition = dir;
    },
    getUser(userId) {
      if (this.users.length) {
        return this.users.filter(user => user.id == userId)[0];
      }
    },
    clear_interval() {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = false;
      }
    },
    set_interval() {
      this.clear_interval();
      var self = this;
      this.interval = setInterval(function() {
        self.changeSlide('next');
      }, this.autoplay);
      this.play = true;
    },
    getPermalink(slug) {
      return this.baseUrl + '/t/' + slug;
    },
    toggle_play() {
      if (this.autoplay && this.interval) {
        this.play = false;
        this.clear_interval();
      }
      if (this.autoplay && !this.interval) {
        this.set_interval()
      }
    }
  },
  computed: {
    currentSlide: function() {
      return this.slides[Math.abs(this.currentIndex) % this.slides.length];
    },
    cooked: function() {
      if (!this.currentSlide) { return ""; }

      return this.currentSlide.cooked.replace(
        'class="lightbox-wrapper"',
        'class="lightbox-wrapper hidden"'
      )
    }
  },
  created() {
    if (this.data.length) {
      this.slides = this.data.slice(0);
    }
    else if (this.data.users && this.data.users.length) {
      this.users = this.data.users.slice(0);
    }
    if (this.autoplay != undefined) {
      this.toggle_play();
    }
  },
  filters: {
    formatDate: function(value) {
      return moment(String(value)).format("dddd, MMMM DD YYYY");
    }
  },
  props: ["autoplay", "data", "mq", "baseUrl", "config", "stylesheet", "globalStyle"]
};
</script>

<style lang="scss" scoped>


.slider{
  overflow: hidden;
  position: relative;
  min-height: 36rem;
  border-radius: 10px;
  @apply flex items-center rounded-lg;
  width: 105%;
  margin: 0 0 0 -2.5%;
}

.slider_container {
  width: 100%;
  @apply mx-auto flex flex-col rounded-lg border border-gray-200 overflow-hidden;
}

.item_image {
  width: 100%;
  height: 100px;
  background-size: cover !important;
  background-position: 50% 50% !important;
}

.slider-md {
  min-height: 20rem;
  .slider_container {
    @apply flex-row;
  }
  .item_image {
    @apply border-r border-gray-200;
    max-width: 30%;
    height: auto;
  }
}

.slider .slide {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0 2.5%;
  border-radius: 10px;
  top: 0;
  left: 0;
  bottom: 0;
  right:0;
}



.slide_excerpt {
  margin-top: 10px;
  @apply text-sm leading-normal mb-6;
  font-size: 16px;
}

.slide_link {
  @apply border p-3 rounded-lg text-sm;
}

.item_favs {
  @apply border border-gray-200 font-bold ml-3 p-3 rounded-lg text-sm;
  color: rgba(0,0,0,0.7);
  text-decoration: none !important;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 45.8 54.7'%3E%3Cpath fill='rgba(0,0,0,0.7)' d='M9.6 27.3a2.1 2.1 0 01.6 1.9L8 41.3a2 2 0 003 2.2l10.9-5.8a2.1 2.1 0 012 0l10.9 5.8a2 2 0 003-2.2l-2.1-12.1a2.1 2.1 0 01.6-2l8.9-8.5a2.1 2.1 0 00-1.2-3.6l-12.2-1.6a2.1 2.1 0 01-1.6-1.2L24.8 1.2a2.1 2.1 0 00-3.8 0l-5.3 11.1a2.1 2.1 0 01-1.7 1.2L1.8 15a2.1 2.1 0 00-1.2 3.6z' data-name='Calque 2'/%3E%3C/svg%3E") no-repeat 10px 56%;
  background-size: 14px;
  padding-left: 30px;
  &:hover {
    background-color: #efefef;
  }
}

.item_replies {
  @apply border border-gray-200 font-bold ml-3 p-3 rounded-lg text-sm;
  color: rgba(0,0,0,0.7);
  text-decoration: none !important;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' data-name='Layer 1' viewBox='0 0 512 640'%3E%3Cpath fill='rgba(0,0,0,0.7)' d='M512 396v26c-3 7-5 14-11 19-18 14-43 7-52-15-9-24-26-39-48-50-30-15-63-21-96-23l-78-1a23 23 0 00-3 0v62a39 39 0 01-2 11c-6 22-34 33-55 12L15 284c-7-6-13-13-15-22v-12c2-9 8-16 15-22l87-87 66-66c10-11 23-14 36-8s20 17 20 31v62h7c6 0 58 1 105 13 28 7 73 19 109 50 66 57 67 150 67 173z'/%3E%3C/svg%3E") no-repeat 10px 56%;
  background-size: 14px;
  padding-left: 30px;
  &:hover {
    background-color: #efefef;
  }
}

.slider .slide .item_title {
    margin: 0 !important;
    padding: 0 !important;
    @apply flex flex-col;
    a {
      @apply m-0 mb-1 text-2xl;
      font-weight: 600;
      line-height: 1.5rem;
    }
    p.item_date {
      @apply text-lg mt-2 mb-0 leading-tight font-bold;
      color: rgba(0,0,0,0.4);
    }
}
.slide-md {
  .image {
    .item_data {
      color: white;
      position: relative;
      height: 50px;
      display: flex;
      align-items: center;
      padding: 10px 15px 15px;
      bottom: 0;
      width: 100%;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      &:before {
        content: "";
        width: 90%;
        position: absolute;
        left: 5%;
        top: -5px;
        background: rgba(255, 255, 255, 0.3);
        height: 1px;
      }
      p {
        margin-right: 10px;
        font-size: 14px;
        font-weight: 100;
      }
    }
  }
  .item_post-md {
    display: flex;
    padding: 20px;
    height: 100%;
    background: #fff;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
  }
}

.next-leave-active,
.next-enter-active,
.back-leave-active,
.back-enter-active {
  transition: 1s cubic-bezier(0.25, 1, 0.5, 1);;
}
.next-enter {
  transform: translate(100%, 0);
}
.next-leave-to {
  transform: translate(-100%, 0);
}
.back-enter {
  transform: translate(-100%, 0);
}
.back-leave-to {
  transform: translate(100%, 0);
}


</style>
