---
home: true
layout: Hero
heroImage: '/edgeryders.svg'
actionText: Get Started →
actionLink: /guide/
features:
  - title: Discourse as CMS

    details: Using Discourse, your community platform also serves as your Content Management System 
  - title: Built with Vue + Webpack

    details: Easy to extend with webpack and develop custom themes and components with Vue.
  - title: Open Source

    details: Edgeryders Webkit is an open source community driven project under MIT license.
footer: Copyright © 2019 - Edgeryders
---

### Quick Installation

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