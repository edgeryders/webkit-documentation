<template>
  <div class="block bg-gray-100 pb-8">
    <div class="flex border-b border-gray-200 pt-2 font-bold justify-between items-center mx-auto" v-if="data.title">
      <h2 class="pb-0 border-none p-0 w-full">{{ data.title }}</h2>
      <div class="toggle_menu" v-if="data.views && data.views.length">
        <div v-for="(view, index) in data.views"
          class="toggle"
          :class="[Object.keys(view)[0], {active: activeView == Object.keys(view)[0]}]"
          @click="toggleView(Object.keys(view)[0])"
          :key="index"
        ></div>
      </div>
    </div>
      <ViewText v-if="data.text" :mq="viewport" :data="data" />
      <div class="toggle_menu mr-6 md:flex md:mr-0" v-if="data.view == 'featured'">
        <div
          class="toggle previous"
          @click="changeSlide('back')"
        ></div>
        <div
          class="toggle next"
          @click="changeSlide('next')"
        ></div>
      </div>
      <div v-for="view in data.views" class="w-full pt-1">
              <Slider
                v-if="view.slider && topics && activeView == 'slider'"
                :autoplay="5000"
                :data="topics"
                :config="view"
                :baseUrl="config.baseUrl"
                :stylesheet="data.style"
                class="mx-auto"
                ref="slider"
                :mq="viewport"
              />
      
              <Grid v-if="view.grid && activeView == 'grid'" :mq="viewport" v-bind:data="topics">
                <template v-slot:item="{ item }">
                  
                 <GridItem>
                    <template>
                      <div slot="header">
                        <a :href="item.slug" target="_blank" class="">{{item.title}}</a>
                        <p class="item_date">
                          {{ item.created_at | formatDate }}
                        </p>
                      </div>
                      <div slot="content">
                        <div class="item_image" :style="{ background: 'url(' + item.image_url + ')' }"></div>
                        <div class="item_excerpt" v-html="item.excerpt"></div>
                      </div>
                    </template>
                 </GridItem>

                </template>
              </Grid>

              <div class="list_view flex items-start" v-if="view.list && activeView == 'list'" :class="{ 'list_view-md': viewport == 'desktop' }">
               
               <ul class="list_sidebar">
                  <li v-for="(item, index) in topics" :key="index" @click="selectItem(index)" :class="{active: selected == index}">
                    <h3 class="item_title">{{item.title}}</h3>
                    <p class="item_date">
                        {{ item.created_at | formatDate }}
                    </p>
                  </li>
                </ul>

                <div class="list_selected" :class="{'active': slideIn}">
                  <div class="item_image" @click="showTopic()" :style="{ background: 'url(' + topics[selected].image_url + ')' }">
                    <div class="go_back">Go Back</div>
                  </div>

                  <div class="item_title">
                    <a :href="topics[selected].slug" target="_blank">
                      {{topics[selected].title}}
                    </a>
                  </div>

                  <div class="item_excerpt" v-html="topics[selected].excerpt"></div>
                </div>
                
              </div>

        </div>

  </div>
</template>

<script>
import Slider from "./views/Slider.vue";
import Grid from "./views/Grid.vue";
import GridItem from "./views/GridItem.vue";
import List from "./views/List.vue";
import ListItem from "./views/ListItem.vue";
import axios from "axios";
import moment from "moment";

export default {
  props: ["data", "stylesheet", "config", "globalStyle", "viewport"],
  data() {
    return {
      topics: null,
      full_width: false,
      activeView: null,
      selected: 0,
      slideIn: false
    };
  },
  components: {
    Slider,
    Grid,
    GridItem,
    List,
    ListItem
  },
  created() {
    this.activeView = this.data.view;
    if (this.data.tag) {
      this.getTopics(this.data.tag, 'tags');
    }
    if (this.data.category) {
      this.getTopics(this.data.category, 'category');
    }
  },
  methods: {
    getTopics(value, filter) {
      axios.get(
        `${this.config.baseUrl}/${filter}/${value}.json`
      ).then(({ data }) => {
        var topics = data.topic_list.topics;
        if (this.data.sort_by) {
           topics = this.sortBy(data, topics.sort_by.property, topics.sort_by.order)
         }
        this.topics = topics;
      });
    },
    sortBy(data, value, order) {
      var ord_val = -1;
      if (order == 'ascending') {
        ord_val = 1;
      };
      var sorted = data.sort((a,b) => (a[value] > b[value]) ? ord_val : ((b[value] > a[value]) ? -ord_val : 0));
      return sorted
    },
    changeSlide(value) {
      if(value == 'next') {
        this.$refs.slider.next()
      }
      if(value == 'back') {
        this.$refs.slider.back()
      }
    },
    toggleView(value){
      this.activeView = value;
    },
    selectItem(value) {
      this.selected = value;
      this.showTopic();
    },
    showTopic() {
      this.slideIn = !this.slideIn;
    }
  },
  filters: {
    formatDate: function(value) {
      return moment(String(value)).format("dddd, MMMM DD YYYY");
    }
  }
};
</script>
<style lang="scss">


.toggle_menu {
    @apply bg-gray-200 items-center;
    border-radius: 6px;
    overflow: hidden;
    flex-shrink: 0;
  }

  .toggle {
    float: left;
    @apply border-r border-gray-100;
    width: 45px;
    height: 40px;
    &:last-child {
      border: none;
    }
    &:hover {
      cursor: pointer;
      background-color: #ddd !important;
    }
    &.active {
      background-color: #282C34 !important;
      &:hover {
        background-color: #000 !important;
      }
    }
  }

  .toggle.slider {
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 40'%3E%3Cg data-name='1'%3E%3Crect x='5' y='8' width='22' height='16' rx='2' ry='2'/%3E%3Cpath d='M29 10a1 1 0 00-1 1v10a1 1 0 002 0V11a1 1 0 00-1-1zM3 10a1 1 0 00-1 1v10a1 1 0 002 0V11a1 1 0 00-1-1z'/%3E%3C/g%3E%3C/svg%3E") no-repeat center 75% #efefef;
    background-size: 50% !important;
  }

.toggle.grid {
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' data-name='Layer 1' viewBox='0 0 100 125'%3E%3Cpath fill='black' d='M35 0a32 32 0 015 2c3 2 4 6 4 10v21c0 5-2 8-6 10a13 13 0 01-5 1H12c-6 0-10-3-12-9V9c1-3 2-5 5-7a41 41 0 015-2h25zM0 65a34 34 0 012-5 10 10 0 019-4h23a11 11 0 0111 11v22c-1 6-5 11-11 11H11c-5 0-9-3-11-9V65zM90 0a14 14 0 016 3 10 10 0 014 7v23a11 11 0 01-12 11H67c-6 0-11-4-11-10a478 478 0 010-23c0-6 3-10 9-11h25zm10 78v12a11 11 0 01-10 10H66a10 10 0 01-10-10V66a10 10 0 0110-10h24a11 11 0 0110 10v12z'/%3E%3C/svg%3E%0A")
      no-repeat center 62% #efefef;
    background-size: 34% !important;
    border-right: 1px solid white;
  }

  .toggle.grid.active {
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' data-name='Layer 1' viewBox='0 0 100 125'%3E%3Cpath fill='white' d='M35 0a32 32 0 015 2c3 2 4 6 4 10v21c0 5-2 8-6 10a13 13 0 01-5 1H12c-6 0-10-3-12-9V9c1-3 2-5 5-7a41 41 0 015-2h25zM0 65a34 34 0 012-5 10 10 0 019-4h23a11 11 0 0111 11v22c-1 6-5 11-11 11H11c-5 0-9-3-11-9V65zM90 0a14 14 0 016 3 10 10 0 014 7v23a11 11 0 01-12 11H67c-6 0-11-4-11-10a478 478 0 010-23c0-6 3-10 9-11h25zm10 78v12a11 11 0 01-10 10H66a10 10 0 01-10-10V66a10 10 0 0110-10h24a11 11 0 0110 10v12z'/%3E%3C/svg%3E%0A")
      no-repeat center 60% #282C34;
    background-size: 34% !important;
  }

    .toggle.slider.active {
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 40'%3E%3Cg data-name='1'%3E%3Crect fill='white' x='5' y='8' width='22' height='16' rx='2' ry='2'/%3E%3Cpath fill='white' d='M29 10a1 1 0 00-1 1v10a1 1 0 002 0V11a1 1 0 00-1-1zM3 10a1 1 0 00-1 1v10a1 1 0 002 0V11a1 1 0 00-1-1z'/%3E%3C/g%3E%3C/svg%3E") no-repeat center 75% #282C34;
    background-size: 50% !important;
  }



  .toggle.list {
    background: url("data:image/svg+xml,%3Csvg width='75' height='76' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-rule='nonzero'%3E%3Cpath d='M7.6 15.5h52.3a7.6 7.6 0 100-15.2H7.6A7.6 7.6 0 000 7.9a7.7 7.7 0 007.6 7.6zM59.9 30.4H7.6a7.6 7.6 0 100 15.2h52.3a7.6 7.6 0 100-15.2zM59.9 60.5H7.6a7.6 7.6 0 100 15.2h52.3a7.6 7.6 0 100-15.2z'/%3E%3C/g%3E%3C/svg%3E")
      no-repeat center 53% #efefef;
    background-size: 31% !important;
    border-right: 1px solid white;
  }
  .toggle.list.active {
    background: url("data:image/svg+xml,%3Csvg width='75' height='76' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-rule='nonzero'%3E%3Cpath d='M7.6 15.5h52.3a7.6 7.6 0 100-15.2H7.6A7.6 7.6 0 000 7.9a7.7 7.7 0 007.6 7.6zM59.9 30.4H7.6a7.6 7.6 0 100 15.2h52.3a7.6 7.6 0 100-15.2zM59.9 60.5H7.6a7.6 7.6 0 100 15.2h52.3a7.6 7.6 0 100-15.2z'/%3E%3C/g%3E%3C/svg%3E")
      no-repeat center 53% #282C34;
    background-size: 31% !important;
  }

.list_view {
  @apply relative border border-gray-200 overflow-hidden rounded-lg p-0 bg-white;
  .list_sidebar {
    @apply m-0 p-0 ;
    padding: 0;
    flex-basis: 100%;
    flex-shrink: 0;
    li {
      @apply p-0 py-3 pt-4 px-4 border-gray-200 border-b ;
      list-style-type: none;
      h3.item_title {
        @apply m-0 p-0 text-lg;
      }
      p.item_date {
        @apply inline-block text-sm w-full m-0;
        color: rgba(0,0,0,0.4);
      }
      &:last-child {
        @apply border-none;
      }
      &:hover {
        cursor: pointer;
        background: #efefef;
      }
      &.active {
        background: #282C34;
        color: white;
        p.item_date {
          color: rgba(255,255,255,0.7);
        }
      }
    }
  }
  .list_selected {
    @apply absolute w-full bg-white h-full;
    transition: left .34s ease;
    left: 100%;
    &.active {
      left: 0;
    }
    .item_image {
        @apply w-full relative;
        height: 120px;
        background-size: cover !important;
        background-position: 50% 50% !important;
        .go_back {
          border-radius: 6px 6px 0 0;
          @apply px-5 py-3 font-bold;
          background: linear-gradient(180deg, rgba(0,0,0,0.6755077030812324) 0%, rgba(0,0,0,0) 200%);
          color: white;
          font-size: 14px;
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          z-index: 99999;
          &:hover {
            cursor: pointer;
          }
        }
    }
    .item_title {
      @apply border-b inline-block border-gray-200 w-full mx-4 mb-0 py-4;
      a {
        @apply m-0 pl-1 text-lg font-bold;
      }
    }
    .item_excerpt {
      @apply p-5 mt-0 pt-3 leading-normal;
      font-size: 15px;
    }
  }
}

.list_view-md {
  .list_sidebar {
    @apply border-r border-gray-200;
    flex-basis: 300px;
  }
  .list_selected {
    @apply relative;
    left: 0;
    .go_back {
      @apply hidden;
    }
  }
}
</style>