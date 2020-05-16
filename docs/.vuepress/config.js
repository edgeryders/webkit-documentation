module.exports = {
  title: "Webkit",
  description: "A framework by Edgeryders to configure and deploy static sites from Discourse",
  extend: '@vuepress/theme-default',
  plugins: [ 'tabs', ['vuepress-plugin-data', {
      data: [
        {
          key: 'viewport',
          // can be static value
          value: 'desktop'
        }
      ]
    }] 
  ],
  extendMarkdown: md => {
    md.use(require('markdown-it-attrs'))
  },
  themeConfig: {
	  nav: [
	    { text: "Guide", link: "/guide/" },
	    { text: "Github", link: "https://github.com/edgeryders/webkit_components" }
	  ],
	  sidebar: ["/guide/", "/guide/getting-started", "/guide/blocks", "/guide/views", "/guide/elements", "/guide/styling", "/guide/development", "/guide/deployment" ]
	},
	custom: {
		test: "test"
	}
};