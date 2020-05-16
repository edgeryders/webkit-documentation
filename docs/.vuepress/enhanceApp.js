
import Vue from 'vue'

export const globalStore = new Vue({
  data: {
    viewport: 'desktop',
    menu: [{id: 'test'}, {id: 'test2'}],
    config: {
      "baseUrl": "https://edgeryders.eu"
    },
    content: {
      "type": "content",
      "id": "about",
      "title": "About this site",
      "style": {
        "container": {
          "padding": ["0 0 60px"]
        },
        "wrapper": {
          "padding": ["0px 15px 0", "10px 0 0"]
        }
      },
      "views": [
        {
          "text": ["<p><b>This is html content.</b> Text can be broken into multiple paragraphs</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>", "<h4>This is a list with a custom css class..</h4><ul class='border-l px-10 py-6 list-decimal bg-gray-200'><li>To see how inline styling works, check out the <a href='/guide/styling'>Styling</a> section of the guide</li><li>WebKit can render <b>inline css</b> as well as <b>Tailwind</b> css classes</li><li>So you are flexible to style individual elements within the configuration</li></ul>"]
        },
        {
          "image": [{"url": "https://www.fillmurray.com/640/360", "size": "300px"}],
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "text": "<h3>Child Blocks</h3><p class='highlight'>The <b>Content Block</b> can render multiple <b>Views</b> as child components.</p><p class='highlight pt-2'>In this example we have the <b>Form View</b> next to a <b>Text View</b>, both rendered as child components of the Content Block.</p>",
          "form": {
            "config": {
              "createTopic": true,
              "categoryId": 349,
              "airtable": {
                "base": "",
                "table": ""
              }
            },
            "title": "Form View",
            "fields": [
              {
                "title": "Your Name",
                "id": "name",
                "type": "text",
                "placeholder": "enter your name",
                "required": true
              },
              {
                "title": "Your Email",
                "id": "email",
                "type": "text",
                "placeholder": "enter your email",
                "required": true
              },
              {
                "title": "How can you help?",
                "id": "proposal",
                "type": "textarea",
                "placeholder": "example of textarea input",
                "required": true
              },
              {
                "id": "create_account",
                "title": "Registering will create an account on Edgeryders for you. Do you agree?",
                "type": "create_account",
                "required": true
              }
            ],
            "success": {
              "title": "Your form has been sent, thanks for registering!",
              "text": "Check your inbox for a confirmation email with your account details."
            }
          }
        }
      ]
    },
    topics: {
      "title": "My Topics Component",
      "id": "topics",
      "view": "slider",
      "tag": "webcontent-ngi-summit-2020-topics",
      "text": "<p>When multiple views are configured a toggle menu will be presented to switch between different layouts. The default view will be active on page load.</p>",
      "views": [
        {
          "slider": {
            "autoplay": true,
            "pauseHover": true,
            "display": ["title", "date", "excerpt", "link", "favourites"],
            "link": {
              "text": "Read More"
            },
            "sort_by": {
              "property": "title",
              "order": "ascending"
            }
          }
        },
        {
          "grid": {
            "display": ["title", "date", "excerpt", "link", "favourites"],
            "sort_by": {
              "property": "title",
              "order": "ascending"
            }
          }
        },
        {
          "list": {
            "display": ["title", "date", "excerpt", "link", "favourites"],
            "sort_by": {
              "property": "title",
              "order": "ascending"
            }
          }
        }
      ]
    }
  }
});
Vue.prototype.$globals = globalStore;

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
}
