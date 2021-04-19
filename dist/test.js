!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.library=t():e.library=t()}(global,(function(){return(()=>{"use strict";var e={493:function(e,t,o){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var n=o(747),i=o(622),s=o(878),a=o(778),l=function(){function e(e){this.locals={};var t={name:"scaffold",templates:[],output:process.cwd(),createSubfolder:!0,overwrite:!0};this.config=r(r({},t),e);var o={Name:this.config.name[0].toUpperCase()+this.config.name.slice(1),name:this.config.name[0].toLowerCase()+this.config.name.slice(1)};this.locals=r(r({},o),e.locals)}return e.prototype.parseLocals=function(e){try{return a.compile(e,{noEscape:!0})(this.locals)}catch(t){return console.warn("Problem using Handlebars, returning unmodified content"),e}},e.prototype.fileList=function(e){for(var t=[],o=0,r=e;o<r.length;o++){var n=r[o],a=s.sync(n,{dot:!0}).map((function(e){return"/"==e[0]?e:i.join(process.cwd(),e)})),l=n.indexOf("*"),c=n;l>=0&&(c=n.slice(0,l-1));for(var u=0,p=a;u<p.length;u++){var f=p[u];t.push({base:c,file:f})}}return t},e.prototype.getFileContents=function(e){return console.log(n.readFileSync(e)),n.readFileSync(e).toString()},e.prototype.getOutputPath=function(e,t){var o;if("function"==typeof this.config.output)o=this.config.output(e,t,i.basename(e));else{var r=this.config.output+(this.config.createSubfolder?"/"+this.config.name+"/":"/"),n=e.indexOf(t),s=e;n>=0&&(s=e!==t?e.slice(n+t.length+1):i.basename(e)),o=r+s}return this.parseLocals(o)},e.prototype.writeFile=function(e,t){var o=i.dirname(e);this.writeDirectory(o,e),n.writeFile(e,t,{encoding:"utf-8"},(function(e){if(e)throw e}))},e.prototype.shouldWriteFile=function(e){var t,o,r="boolean"==typeof this.config.overwrite?this.config.overwrite:null===(o=(t=this.config).overwrite)||void 0===o?void 0:o.call(t,e);return!n.existsSync(e)||!1!==r},e.prototype.run=function(){console.log("Generating scaffold: "+this.config.name+"...");var e,t=this.fileList(this.config.templates),o=0;console.log("Template files:",t);for(var r=0,i=t;r<i.length;r++){e=i[r];var s=void 0,a=void 0,l=void 0,c=void 0,u=void 0;try{if(o++,c=e.file,u=e.base,s=this.getOutputPath(c,u),n.lstatSync(c).isDirectory()){this.writeDirectory(s,c);continue}a=this.getFileContents(c),l=this.parseLocals(a),this.shouldWriteFile(s)?(console.info("Writing:",{file:c,base:u,outputPath:s,outputContents:l.replace("\n","\\n")}),this.writeFile(s,l)):console.log("Skipping file "+s)}catch(e){throw console.error("Error while processing file:",{file:c,base:u,contents:a,outputPath:s,outputContents:l}),e}}if(!o)throw new Error("No files to scaffold!");console.log("Done")},e.prototype.writeDirectory=function(e,t){var o=i.dirname(e);n.existsSync(o)||this.writeDirectory(o,e),n.existsSync(e)||(console.info("Creating directory:",{file:t,outputPath:e}),n.mkdirSync(e))},e}();t.default=l},743:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=o(493),n=o(622).join(process.cwd(),"examples");new r.default({templates:[n+"/test-input/Component/**/*"],output:n+"/test-output/no-create-subpath",createSubfolder:!1,locals:{property:"myProp",value:'"value"'}}).run(),new r.default({templates:[n+"/test-input/Component/**/*"],output:n+"/test-output",locals:{property:"myProp",value:'"value"'}}).run(),new r.default({templates:[n+"/test-input/Component/**/*"],output:function(e,t,o){return console.log({file:e,basedir:t,basename:o}),e},locals:{property:"myProp",value:'"value"'}}).run()},747:e=>{e.exports=require("fs")},878:e=>{e.exports=require("glob")},778:e=>{e.exports=require("handlebars")},622:e=>{e.exports=require("path")}},t={};return function o(r){if(t[r])return t[r].exports;var n=t[r]={exports:{}};return e[r].call(n.exports,n,n.exports,o),n.exports}(743)})()}));
//# sourceMappingURL=test.js.map