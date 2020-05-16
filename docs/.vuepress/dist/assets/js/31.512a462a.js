(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{539:function(s,t,e){"use strict";e.r(t);var a=e(33),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"development"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[s._v("#")]),s._v(" Development")]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("COMPATIBILITY NOTE")]),s._v(" "),e("p",[s._v("VuePress requires Node.js >= 8.")])]),s._v(" "),e("h2",{attrs:{id:"global-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#global-installation"}},[s._v("#")]),s._v(" Global Installation")]),s._v(" "),e("p",[s._v("If you just want to play around with VuePress, you can install it globally:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# install globally")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" vuepress "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OR npm install -g vuepress")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create a markdown file")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# Hello VuePress'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" README.md\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# start writing")]),s._v("\nvuepress dev\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# build")]),s._v("\nvuepress build\n")])])]),e("h2",{attrs:{id:"inside-an-existing-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inside-an-existing-project"}},[s._v("#")]),s._v(" Inside an Existing Project")]),s._v(" "),e("p",[s._v("If you have an existing project and would like to keep documentation inside the project, you should install VuePress as a local dependency. This setup also allows you to use CI or services like Netlify for automatic deployment on push.")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# install as a local dependency")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -D vuepress "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OR npm install -D vuepress")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create a docs directory")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" docs\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create a markdown file")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# Hello VuePress'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" docs/README.md\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),e("p",[s._v("It is currently recommended to use "),e("a",{attrs:{href:"https://yarnpkg.com/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Yarn"),e("OutboundLink")],1),s._v(" instead of npm when installing VuePress into an existing project that has webpack 3.x as a dependency. Npm fails to generate the correct dependency tree in this case.")])]),s._v(" "),e("p",[s._v("Then, add some scripts to "),e("code",[s._v("package.json")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("p",[s._v("You can now start writing with:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs:dev "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OR npm run docs:dev")]),s._v("\n")])])]),e("p",[s._v("To generate static assets, run:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs:build "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Or npm run docs:build")]),s._v("\n")])])]),e("p",[s._v("By default the built files will be in "),e("code",[s._v(".vuepress/dist")]),s._v(", which can be configured via the "),e("code",[s._v("dest")]),s._v(" field in "),e("code",[s._v(".vuepress/config.js")]),s._v(". The built files can be deployed to any static file server. See "),e("RouterLink",{attrs:{to:"/guide/deploy.html"}},[s._v("Deployment Guide")]),s._v(" for guides on deploying to popular services.")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);