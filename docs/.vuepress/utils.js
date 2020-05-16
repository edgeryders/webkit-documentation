import config from "./data.json";

export default {
  data: function() {
    return {
      config,
      globalStyleSheet: null,
      sectionStyle: null,
      sections: null,
      navItems: null,
      event: null,
      overrideStyle: false
    };
  },
  methods: {
    getData() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const font = urlParams.get('font');
      const toggle = urlParams.get('toggle');
      const highlight = urlParams.get('highlight');
      const action = urlParams.get('action');
      if (font || toggle || highlight || action) {
        this.overrideStyle = true;
      }
      if (this.config.configId) {
        axios.get(
        `https://edgeryders.eu/webkit_components/topics.json?serializer=event&tags=webcontent`
      ).then(({ data }) => {
          var post = data.find(post => post.id === this.config.configId);
          var json = this.getJson(post.cooked);
          if (post.event) {
            this.$globals.event = post.event
          }
          this.loadData(json);
        });
      } else {
        this.loadData(this.config)
      }
    },
    loadData(data){
      if (this.overrideStyle) {
        this.getUrlStyle(data.style);
      } else {
        this.globalStyleSheet = data.style;
      }
      this.sections = data.sections;
      if (data.event) {
        this.$globals.event = data.event;
      }
      if (data.template) {
        this.$globals.template = data['template'];
      }
      this.loadFonts(data.style.fonts);
      this.getNavElements(data.sections);
    },
    getEvent(){
        return this.event
  
    },
    getNavElements(sections) {
      if (sections.length) {
        var navArray = sections.map(function(el) {
          if (el.id) {
            return {
              title: el.title,
              id: el.id,
            } 
          }
        });
        this.navItems = navArray.filter(function (el) {
            return el != null;
        });
      }
    },
    loadFonts(fontFamily) {
      WebFontLoader.load({
        google: {
          families: fontFamily,
        },
      });
    },
  	getJson(value) {
    	const doc = new DOMParser().parseFromString(value, "text/html");
    	var json = [...doc.querySelectorAll('code')].map(code => code.textContent);
    	var final = String(json).replace(/\n/g, " ");
    	if (final !== '') {
    		var obj = JSON.parse(final);
    		return obj;
    	} else {
    		return null
    	}
    },
    MediaQueryIndex() {
      var index = 0;
      if (this.$mq=='md') {
        index = 1;
      }
      return index;
    },
    applyStyle(element, property) {
      var index = this.MediaQueryIndex();
      var style = '';

      if (this.globalStyle && this.globalStyle[element] && this.globalStyle[element][property]) {
        if (this.globalStyle[element][property][index]) {
          style = this.globalStyle[element][property][index];
        } else {
          style = this.globalStyle[element][property][0];
        }
      } 
  
      if (this.sectionStyle && this.sectionStyle[element] && this.sectionStyle[element][property]) {
        if (this.sectionStyle[element][property][index]) {
          style = this.sectionStyle[element][property][index];
        }
        else {
          style = this.sectionStyle[element][property][0];
        }
      }

      if (this.overrideStyle && this.globalStyle[element] && this.globalStyle[element][property]) {
        if (this.globalStyle[element][property][index]) {
          style = this.globalStyle[element][property][index];
        } else {
          style = this.globalStyle[element][property][0];
        }
      }
      return style;
    },
    getClass(element, style) {
      if (style[element].class) {
        return style[element].class.join(' ')
      } else {
        return null
      }
    },
    heroStyle(style) {
      var index = this.MediaQueryIndex();
      this.sectionStyle = style;
      var backgroundUrl = style.background.url[index] || style.background.url[0];
      var backgroundSize = style.background.size[index] || style.background.size[0];
      var backgroundRepeat = style.background.repeat[index] || style.background.repeat[0];
      var containerPadding = style.container.padding[index] || style.container.padding[0];
      return {
        background: 'url(' + backgroundUrl + ')',
        backgroundSize: backgroundSize,
        backgroundRepeat: backgroundRepeat,
        padding: containerPadding
      }
    },
    textStyle(element, style) {
      this.sectionStyle = style;
      var styleObj = {
        maxWidth: this.applyStyle(element, 'width'),
        textAlign: this.applyStyle(element, 'align'),
        background: this.applyStyle(element, 'background'),
        padding: this.applyStyle(element, 'padding'),
        margin: this.applyStyle(element, 'margin'),
        fontFamily: this.applyStyle(element, 'font'),
        fontWeight: this.applyStyle(element, 'weight'),
        borderBottom: this.applyStyle(element, 'border'),
        color: this.applyStyle(element, 'color')
      };
     
      return styleObj;
    },
    uiStyle(element, style) {
      this.sectionStyle = style;
      var background = this.applyStyle(element, 'background');
      if (background == '') {
        background = 'black'
      }
      var color = this.applyStyle(element, 'color');
      if (color == '') {
        color = 'white'
      }
      var styleObj = {
        color: color,
        backgroundColor: background,
        fontWeight: this.applyStyle(element, 'weight'),
        fontFamily: this.applyStyle('paragraph', 'font'),
      };
      return styleObj;
    },
    hoverStyle(style) {
      this.sectionStyle = style;
      var background = this.applyStyle('highlight', 'background', style);
      if (background == '') {
        background = 'black';
      }
      var styleObj = {
        '--hover-border-color': background
      };
      return styleObj;
    },
    containerStyle(style) {
      this.sectionStyle = style;
      var styleObj = {
        padding: this.applyStyle('container', 'padding'),
        backgroundColor: this.applyStyle('container', 'background')
      };
      return styleObj;
    },
    wrapperStyle(style) {
      this.sectionStyle = style;
      var styleObj = {
        maxWidth: this.applyStyle('wrapper', 'width'),
        padding: this.applyStyle('wrapper', 'padding'),
        backgroundColor: this.applyStyle('wrapper', 'background'),
      };
      return styleObj;
    },
    titleClassSize(style) {
      this.sectionStyle = style;
      return this.applyStyle('title', 'size')
    }
	}
}