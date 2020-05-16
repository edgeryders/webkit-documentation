import Vue from 'vue'
import App from './App.vue'
import router from './router'
import utils from "@/utils";
import './registerServiceWorker'
var md = require('markdown-it')();
var markdownItAttrs = require('markdown-it-attrs');
var VueScrollactive = require('vue-scrollactive');
md.use(markdownItAttrs, {
  // optional, these are default options
  leftDelimiter: '{',
  rightDelimiter: '}',
  allowedAttributes: []  // empty array = all attributes are allowed
});


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
