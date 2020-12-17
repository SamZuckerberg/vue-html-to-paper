(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.VueHtmlToPaper = factory());
}(this, (function () { 'use strict';

  function addStyles (win, styles) {
    styles.forEach(style => {
      let link = win.document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('type', 'text/css');
      link.setAttribute('href', style);
      win.document.getElementsByTagName('head')[0].appendChild(link);
    });
  }

  const VueHtmlToPaper = {
    install (Vue, options = {}) {
      Vue.prototype.$htmlToPaper = (el, localOptions, cb = () => true) => {
        let defaultName = '_blank', 
            defaultSpecs = ['fullscreen=yes','titlebar=yes', 'scrollbars=yes'],
            defaultReplace = true,
            defaultStyles = [];
        let {
          name = defaultName,
          specs = defaultSpecs,
          replace = defaultReplace,
          styles = defaultStyles
        } = options;

        // If has localOptions
        // TODO: improve logic
        if (!!localOptions) {
          if (localOptions.name) name = localOptions.name;
          if (localOptions.specs) specs = localOptions.specs;
          if (localOptions.replace) replace = localOptions.replace;
          if (localOptions.styles) styles = localOptions.styles;
        }

        specs = !!specs.length ? specs.join(',') : '';

        const element = window.document.getElementById(el);

        window.document.title = 'SAMIR';
        window.document.name = 'NAMEE';

        if (!element) {
          alert(`Element to print #${el} not found!`);
          return;
        }
        document.title = 'SAMIR';
        document.name = 'NAMEE';
        const url = '';
        let win = window.open(url, 'name', specs, replace);
        win.title = 'SAM';
        win.name = "NAMEEEE";

        win.document.write(`
        <html>
          <head>
            <title>${window.document.title}</title>
          </head>
          <body>
            ${element.innerHTML}
          </body>
        </html>
      `);

        addStyles(win, styles);
        
        setTimeout(() => {
          console.log(win);
          win.document.close();
          win.focus();
          win.print();
          win.close();
          cb();
        }, 1000);
          
        return true;
      };
    }
  };

  return VueHtmlToPaper;

})));
