!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=require("path")},function(e,t,n){"use strict";var r=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(s=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,i=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(s=c.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){c.label=n[1];break}if(6===n[0]&&c.label<s[1]){c.label=s[1],s=n;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(n);break}s[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(e){n=[6,e],i=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,s,a,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a};Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=n(0),s=n(3),a=n(4),c=function(){function e(e){this.locals={};var t={name:"scaffold",templates:[],output:process.cwd()};this.config=Object.assign({},t,e);var n={Name:this.config.name[0].toUpperCase()+this.config.name.slice(1),name:this.config.name[0].toLowerCase()+this.config.name.slice(1)};this.locals=Object.assign({},n,e.locals)}return e.prototype.parseLocals=function(e){return a.compile(e,{noEscape:!0})(this.locals)},e.prototype.fileList=function(e){var t,n,o,a,c,l,u,f,p;return r(this,function(r){switch(r.label){case 0:console.info("input:",e),t=0,n=e,r.label=1;case 1:if(!(t<n.length))return[3,6];o=n[t],a=s.sync(o).map(function(e){return i.resolve(e)}),c=o.indexOf("*"),l=o,c>=0&&(l=o.slice(0,c-1)),u=0,f=a,r.label=2;case 2:return u<f.length?(p=f[u],[4,{base:l,file:p}]):[3,5];case 3:r.sent(),r.label=4;case 4:return u++,[3,2];case 5:return t++,[3,1];case 6:return[2]}})},e.prototype.getFileContents=function(e){return o.readFileSync(e).toString()},e.prototype.getOutputPath=function(e,t){var n;if("function"==typeof this.config.output)n=this.config.output(e,t);else{var r=this.config.output+"/"+this.config.name+"/",o=e.indexOf(t),i=e;o>=0&&(i=e.slice(o+t.length+1)),n=r+i}return this.parseLocals(n)},e.prototype.writeFile=function(e,t){o.existsSync(i.dirname(e))||o.mkdirSync(i.dirname(e)),console.info("Writing file:",e),o.writeFileSync(e,t,{encoding:"utf-8"})},e.prototype.run=function(){var e=this.fileList(this.config.templates);console.info("Templates input:",e),console.info("Locals:",this.locals);for(var t;t=e.next().value;){var n=t.file,r=t.base,o=this.getOutputPath(n,r),i=this.getFileContents(n),s=this.parseLocals(i);this.writeFile(o,s),console.info("Parsing:",{file:n,base:r,outputPath:o,outputContents:s.replace("\n","\\n")})}},e}();t.default=c},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("glob")},function(e,t){e.exports=require("handlebars")}]);
//# sourceMappingURL=scaffold.js.map