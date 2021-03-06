# Introduction

The purpose of this Webkit is to harness [Discourse](https://discourse.org/) as a CMS for single page sites. Where solutions such as Wordpress and static site generators are ideal for creating sites with static content, community content is left out of the equation. 

At Edgeryders the majority of our content is generated by the community, so we think the community platform is naturally positioned to serve as the content management system. 

The Webkit fulfills two functions to this end: (1) set up and deploy sites that can be configured directly from Discourse, and (2) provide a library of components to display content from the community - this includes topics, categories, events and community metadata.

## How It Works

Webkit sites are Single Page Applications powered by [Vue](http://vuejs.org/) and [webpack](http://webpack.js.org/). If you have used Vue before (and specifically the Vue CLI to create projects), the component based architecture should be very familiar.

Each section defined in the configuration file corresponds to a component type that is compiled into HTML and Javascript. Core components are invoked from the YAML configuration, which can also be used to customise the content, layout and UI of the component. 

When set up using remote configuration this can allow for extensive customisation without needing to manually deploy a new build of the site.

## Features

### Core Features

- [Block Components](./blocks.md) for fetching data
	- Topics
	- Categories
	- Users
	- Events
	- Custom Block
		- Topic HTML
		- Custom Text
		- Image
		- Video
- [View Components](./views.md) for displaying content
	- Header
	- Table
	- Mobile List
	- Slider
	- Cards
	- Grid
	- Footer
- [Global configuration using YAML or JSON](./getting-started.md)
	- Local configuration
	- Remote configuration
- [Vue-powered theme system](./styling.md)
	- Support for SCSS/SASS
	- Dynamic UI elements
	- [Tailwind CSS](./styling.md) built in
	- PurgeCSS for removing unused CSS
	- Support for custom stylesheets with inheritence 
	- [Responsive Breakpoints](./styling.md)
- A default template with:
  - [Optional Headers](./views.md)
  	- Whitelabel
  	- Category
  	- Campaign
  	- Community
  - [Simple out-of-the-box navigation](./views.md)
  - Responsive layout
  - [Auto-generated Meta Tags](./getting-started.md)

### Edgeryders Features

These features require additional plugins or third party services to work with a vanilla Discourse installation. As a result they are not included in the default template, but can be used optionally.

- Discourse Form 
	- Create Discourse account 
	- Post topic to Discourse
	- AirTable integration
- Upcoming View
	- Current Events
	- Active Conversations
	- Scheduled Calls
- Events 
	- Event Schedule
	- Create Event Proposals
- Mailing List 
	- AirTable integration
	- MailChimp integration
- User Account Login 
	- Login via SSO
	- User Profile display

## To-Do

The WebKit is still a work in progress. 
There are a few things that it currently does not support but are planned:

- Setup as an NPM module to import components into existing Webpack projects
- Multi-page sites using Vue-Router
- Automatically deploy and build from Github to Netlify
- Include dynamic content in the static build to improve SEO
- Simple analytics for components
- WYSIWIG Configuration

**Edgeryders features:**

- Flyover Menu 
	- Display topics, categories & events
	- Customisable fields
- Embedded Calls 
	- Scheduled Calls from Edgeryders Now
	- Group Chat from Edgeryders Now
- Chatbot 
	- User Account Creation
	- Fetch latest topics
	- Subscribe to mailing list

Contributions are welcome!

## Alternatives

### Nuxt & Vuepress

Nuxt and Vuepress are very close in nature to the Webkit, both being Vue frameworks. While they are designed from the outset for static content, it is possible to extend them to make dynamic calls. The WebKit aims to provide an out of the box solution that works with Discourse using a very similar configuration to these frameworks.

### Wordpress

Wordpress is a stand alone CMS and requires a server running PHP for each site. The WebKit has a very minimal footprint and can be deployed as a static site on any server that renders HTML and Javascript, including serverless backend services such as Netlify and Surge.

### Other Frameworks

It would be great to see alternative takes on this using other frameworks. Vue was chosen as it is very small in size and its runtime performance exceptionally fast. Reactive components allow for content to be displayed in different configurations without reloading the page, and a templating system that is easy to understand for anyone familiar with HTML. 

