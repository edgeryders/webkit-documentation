# Blocks

[Blocks](./blocks.md) are the content sections of a Webkit site. Each Block is imported into ```App.vue``` by Webpack and displayed in the order specified in the [configuration](./getting-started.md). Block components are located in ```./src/components/blocks```.

::: tip Modifying Block Components
It is recommended to avoid editing these components directly, unless you are working on your own development fork. There are many configuration and styling options available for each block, without the need to modify the components themselves.
:::

## Header

The **Header Block** includes two child components:

- The [Menu View](./views.md) displays a responsive menu of all **Sections** defined with an ```id``` property or an array of custom links.
- The [Hero View](./views.md) displays the introductory content of a Webkit site. 

In the default template there are three **Hero Views** to choose from, these are specified in the ```type``` property. 

The example below displays a Header with **Menu** and **Standard Hero** views.

:::: tabs :options="{ useUrlFragment: false }"

::: tab JSON
``` json
{
  ...
  "sections": [ 
    {
      "type": "header", // loads .src/components/sections/header.vue
      "views": {
	      "navigation": {  // loads .src/components/views/navigation.vue
	      	"links": "_id",
	      	"style": {
	      		"position": ["fixed"],
	      		"height": ["2rem"]
	      	}
	      },
	      "hero": {
	      	"type": "Standard", // loads .src/components/views/hero/standard.vue
	       	"title": "My Hero Title", 
	       	"text": "Introductory <b>text</b>",
	       	"image": "/hero_image.jpg",
	       	"style": {
	       		"align": ["center"],
	       		"width": ["90%", "70%"]
	       	}
	      }
	  }
    }
  ]
}
``` 
:::

::: tab YAML
``` yaml
---
sections:
- type: header
  views:
    navigation:
      links: _id
      style:
        position: [fixed]
        height: [2rem]
    hero:
      type: Standard
      title: My Hero Title
      text: Introductory <b>text</b>
      image: "/hero_image.jpg"
      style:
        align: [center]
        width: [90%, 70%]
```
:::

::: tab Preview id='test'

<Preview>
  <template v-slot="{ viewport }">
    <Header :viewport="viewport" />
  </template>
</Preview>

:::

:::: 

## Content 

**Content Blocks** are generic containers for views. They can be configured to display a wide variety of views including **html**, **text**, **images**, **videos**, **forms** and more.

**Content Blocks** are the most flexible components in the Webkit and can be used entirely without a Discourse instance if required.

### Configuration

| property  | default | description | 
|------|----------|----------------|----|
| `title` | `""`              | `string`  
| `subtitle` | `""`              | `string`  
| `id` | `""`              | `string`  
| `views` | `[]`              | `array`  of views (see [Views](./views.md)) 
| `style` | `{}` | `object` with style parameters (see [Styling](./styling.md)) 

For more on the Views available for this block, see the Views section the guide.

### Example

The example below demonstrates use of a **Content Block** with **Text**, **Image** and **Form** Views in a vertical layout.

:::: tabs :options="{ useUrlFragment: false }"

::: tab JSON
``` json
{
  ...
  "sections": [ 
    {
      "type": "content",
      "config": {
        "title": "About this site",
        "id": "about"
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
              "title": "Form View",
              "createTopic": true,
              "categoryId": 349
            },
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
    }
  ]
}
``` 
:::

::: tab YAML
``` yaml
---
sections:
- type: content
  config:
    title: About this site
    id: about
  views:
  - text:
    - "<p><b>This is html content.</b> Text can be broken into multiple paragraphs</p><p>Lorem
      ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum</p>"
    - "<h4>This is a list with a custom css class..</h4><ul class='border-l px-10
      py-6 list-decimal bg-gray-200'><li>To see how inline styling works, check out
      the <a href='/guide/styling'>Styling</a> section of the guide</li><li>WebKit
      can render <b>inline css</b> as well as <b>Tailwind</b> css classes</li><li>So
      you are flexible to style individual elements within the configuration</li></ul>"
  - image:
    - url: https://www.fillmurray.com/640/360
      size: 300px
    text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
      in culpa qui officia deserunt mollit anim id est laborum.
  - text: "<h3>Child Blocks</h3><p class='highlight'>The <b>Content Block</b> can
      render multiple <b>Views</b> as child components.</p><p class='highlight pt-2'>In
      this example we have the <b>Form View</b> next to a <b>Text View</b>, both rendered
      as child components of the Content Block.</p>"
    form:
      config:
        title: Form View
        createTopic: true
        categoryId: 349
      fields:
      - title: Your Name
        id: name
        type: text
        placeholder: enter your name
        required: true
      - title: Your Email
        id: email
        type: text
        placeholder: enter your email
        required: true
      - title: How can you help?
        id: proposal
        type: textarea
        placeholder: example of textarea input
        required: true
      - id: create_account
        title: Registering will create an account on Edgeryders for you. Do you agree?
        type: create_account
        required: true
      success:
        title: Your form has been sent, thanks for registering!
        text: Check your inbox for a confirmation email with your account details.
```
:::

::: tab Preview id='test'

<Preview >
  <template v-slot="{ viewport }">
    <ContentWebkit :viewport="viewport" :data="$globals.content" />
  </template>
</Preview>

:::

:::: 

## Topics 

The **Topics Block** fetch an array of topics from Discourse based on a **tag** or **category id** specified in the configuration. Topics can be displayed in multiple views, including <b>List</b>, <b>Grid</b> and <b>Slider</b>.

The example below showcases the <b>three default views</b> presenting topics tagged <code>webcontent-ngi-summit-2020-topics</code>. For more on how these <b>Views</b> work and their configuration refer to the [Views](./blocks.md) section of the guide.

:::: tabs :options="{ useUrlFragment: false }"

::: tab JSON
``` json
{
  ...
  "sections": [ 
    {
      "type": "topics",
      "config": {
        "title": "My Topics Component",
        "text": "<p>When multiple views are configured a toggle menu will be presented to switch between different layouts. The default view will be active on page load.</p>",
        "id": "topics",
        "tag": "webcontent-ngi-summit-2020-topics",
        "default_view": "slider",
      },
      "views": [
        {
          "slider": {
            "autoplay": true,
            "pauseHover": true,
            "display": ["title", "date", "image", "excerpt", "link", "favourites", "replies"],
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
            "display": ["title", "date", "image", "excerpt"],
            "sort_by": {
              "property": "title",
              "order": "ascending"
            }
          }
        },
        {
          "list": {
            "display": ["title", "date", "image", "excerpt"],
            "sort_by": {
              "property": "title",
              "order": "ascending"
            }
          }
        }
      ]
    }
  ]
}
``` 
:::

::: tab YAML
``` yaml
---
sections:
- type: topics
  config:
    title: My Topics Component
    text: "<p>When multiple views are configured a toggle menu will be presented to switch
      between different layouts. The default view will be active on page load.</p>",
    id: topics
    tag: webcontent-ngi-summit-2020-topics
    default_view: slider
  views:
  - slider:
      autoplay: true
      pauseHover: true
      display: [title, date, image, excerpt, link, favourites, replies]
      link:
        text: Read More
  - grid:
      display: [title, date, image, excerpt]
  - list:
      display: [title, date, image, excerpt]
      sort_by:
        property: title
        order: ascending
```
:::

::: tab Preview id='test'

<Preview >
  <template v-slot="{ viewport }">
    <Topics :viewport="viewport" :config="$globals.config" :data="$globals.topics" />
  </template>
</Preview>

:::

:::: 

## Events

The **Events Block** fetches an array of topics tagged as an event from Discourse. The Events Block has three default views: List, Grid and Schedule.

The example below showcases the three default views presenting events tagged webcontent-ngi-summit-2020-event. 

For more on how these Views work and their configuration refer to the Views section of the guide.


## Footer

The **Footer Block** is the last section of the site and typically and contains a sitemap, terms, logos and about text.


