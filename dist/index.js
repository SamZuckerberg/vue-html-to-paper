module.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function o(e,t){t.forEach(function(t){var n=e.document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",t),e.document.getElementsByTagName("head")[0].appendChild(n)})}Object.defineProperty(t,"__esModule",{value:!0}),t.default={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.prototype.$htmlToPaper=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0},l=["fullscreen=yes","titlebar=yes","scrollbars=yes"],i=[],u=t.specs,c=void 0===u?l:u,s=t.replace,a=void 0===s||s,d=t.styles,p=void 0===d?i:d;n&&(n.name&&n.name,n.specs&&(c=n.specs),n.replace&&(a=n.replace),n.styles&&(p=n.styles)),c=c.length?c.join(","):"";var f=window.document.getElementById(e);if(window.document.title="SAMIR",!f)return void alert("Element to print #"+e+" not found!");var m=window.open("","name",c,a);return m.title="SAM",m.document.write("\n        <html>\n          <head>\n            <title>"+window.document.title+"</title>\n          </head>\n          <body>\n            "+f.innerHTML+"\n          </body>\n        </html>\n      "),o(m,p),setTimeout(function(){console.log(m),m.document.close(),m.focus(),m.print(),m.close(),r()},1e3),!0}}}}]);