# Getting Started

::: warning COMPATIBILITY NOTE
Webkit requires Node.js >= 8 and NPM.
:::

## Installation

```bash
# clone the repository
git clone https://github.com/edgeryders/webkit_components && cd $_

# (optional) create a new config file
echo '{"sections": []}' > src/data/config.json

# start a local development server
npm run dev

# build to deploy
npm run build
```

By default the built files will be in `./dist`. The built files can be deployed to any static file server. See [Deployment Guide](./deployment.md) for guides on deploying to popular services.

## Configuration

### Local Configuration

For a webkit site to work a configuration file is required. The configuration will determine which components to display, the content of each component and how that content is presented. The default configuration is located in `./src/data/config.json`

The configuration file can be written either in JSON or YAML. When using a remote configuration, YAML is the recommended format due to its human readable syntax.

:::: tabs :options="{ useUrlFragment: false }"

::: tab JSON
``` json
{
  "config": {
    "baseUrl": "", // base URL of your Discourse installation
    "title": "", // site title
    "description": "", // site description
    "favicon": "" // path to favicon
  },
  "style": {
    "title": { // custom styling for each section title
      "width": [
        "100%", // applies to mobile (< 640px)
        "35%" // applies to desktop (>= 640px)
      ]
    }
  },
  "sections": [ // determines the sections and order of display
    {
      "type": "custom", // defines the component to load
      "id": "about", // adds a link to the section in the menu
      "text": [ // array of strings to display custom text or HTML
        "Some custom text block",
        "Another block of text"
      ]
    }
  ]
}
``` 
:::


::: tab YAML
``` yaml
---
config:
  baseUrl: Discourse URL
  title: My Site Title
  description: My Site Description
  favicon: path to favicon (optional)
style:
  title:
    width: [100%, 35%]
sections:
- type: custom
  id: about
  text:
  - Some custom text
  - Another section of text
```
:::

::::

The above is an example of a very minimal configuration to get started. In the next section we'll take a deeper dive into how each section can be configured and how additional components can be loaded within sections.

### Remote Configuration

It is possible to load the configuration from a topic in Discourse. This allows you to customise the webkit site directly from your community platform. In order to do this:

1. Create a topic in Discourse
2. Paste the configuration into a code block
	- Surround the code with tripple back ticks (\```\)
	- Or highlight the code and click on the preformatted markup option in the editor

<img src="/code_block_discourse.png" width="70%" height="auto">

3. Take note of the ```topic_id``` and include it in ```./src/data/config.json```

``` json
{
   "configId": 1982 // topic ID number 
}
``` 
