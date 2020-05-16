# Elements

[Blocks](./blocks.md) are the content sections of a Webkit site. They are automatically imported into ```App.vue``` by Webpack and displayed in the order specified in the [configuration](./getting-started.md). They correspond to specific components that are located in ```./src/components/blocks```.

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
  <Header />
</Preview>

:::

:::: 

## Custom 

**Custom Blocks** are containers for custom text, html, images and videos. They can also be configured to display a topic based on the **topic_id** of a Discourse post.

The configuration parameters for Blocks are as follows:

| property  | default | description | 
|------|----------|----------------|----|
| `title` | `""`              | `string`  
| `topic` | `{id: null, showImage: false}` | <ul><li>`number` value of `topicId`</li><li>`boolean` to display featured image of topic</li></ul>
| `text` |  `{ content: [''], align: 'left'}` | <ul><li>`array` of text strings to display</li><li>`string` value (`left`, `right`, `center`)</li></ul>
| `image` | `{ url: '', size: 'auto'}` | `object` with url and size `string` 
| `video` | `{ url: '', size: 'auto'}` | `object` with url and size `string` 
| `style` | `{}` | `object` with style parameters (see [Styling](./styling.md)) 
```bash
# install as a local dependency
yarn add -D vuepress # OR npm install -D vuepress

# create a docs directory
mkdir docs
# create a markdown file
echo '# Hello VuePress' > docs/README.md
```

::: warning
It is currently recommended to use [Yarn](https://yarnpkg.com/en/) instead of npm when installing VuePress into an existing project that has webpack 3.x as a dependency. Npm fails to generate the correct dependency tree in this case.
:::

Then, add some scripts to `package.json`:

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

You can now start writing with:

```bash
yarn docs:dev # OR npm run docs:dev
```

To generate static assets, run:

```bash
yarn docs:build # Or npm run docs:build
```

By default the built files will be in `.vuepress/dist`, which can be configured via the `dest` field in `.vuepress/config.js`. The built files can be deployed to any static file server. See [Deployment Guide](./deploy.md) for guides on deploying to popular services.