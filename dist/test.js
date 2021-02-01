!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.library=e():t.library=e()}(global,(function(){return(()=>{"use strict";var t={493:function(t,e,o){var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var i=o(747),n=o(622),s=o(878),a=o(778),c=function(){function t(t){this.locals={};var e={name:"scaffold",templates:[],output:process.cwd(),createSubfolder:!0};this.config=r(r({},e),t);var o={Name:this.config.name[0].toUpperCase()+this.config.name.slice(1),name:this.config.name[0].toLowerCase()+this.config.name.slice(1)};this.locals=r(r({},o),t.locals)}return t.prototype.parseLocals=function(t){return a.compile(t,{noEscape:!0})(this.locals)},t.prototype.fileList=function(t){for(var e=[],o=0,r=t;o<r.length;o++){var i=r[o],a=s.sync(i,{dot:!0}).map((function(t){return"/"==t[0]?t:n.join(process.cwd(),t)})),c=i.indexOf("*"),l=i;c>=0&&(l=i.slice(0,c-1));for(var u=0,p=a;u<p.length;u++){var f=p[u];e.push({base:l,file:f})}}return e},t.prototype.getFileContents=function(t){return console.log(i.readFileSync(t)),i.readFileSync(t).toString()},t.prototype.getOutputPath=function(t,e){var o;if("function"==typeof this.config.output)o=this.config.output(t,e);else{var r=this.config.output+(this.config.createSubfolder?"/"+this.config.name+"/":"/"),i=t.indexOf(e),n=t;i>=0&&(n=t.slice(i+e.length+1)),o=r+n}return this.parseLocals(o)},t.prototype.writeFile=function(t,e){var o=n.dirname(t);this.writeDirectory(o,t),console.info("Writing file:",t),i.writeFile(t,e,{encoding:"utf-8"},(function(t){if(t)throw t}))},t.prototype.run=function(){console.log("Generating scaffold: "+this.config.name+"...");var t,e=this.fileList(this.config.templates),o=0;console.log("Template files:",e);for(var r=0,n=e;r<n.length;r++){t=n[r];var s=void 0,a=void 0,c=void 0,l=void 0,u=void 0;try{if(o++,l=t.file,u=t.base,s=this.getOutputPath(l,u),i.lstatSync(l).isDirectory()){this.writeDirectory(s,l);continue}a=this.getFileContents(l),c=this.parseLocals(a),console.info("Writing:",{file:l,base:u,outputPath:s,outputContents:c.replace("\n","\\n")}),this.writeFile(s,c)}catch(t){throw console.error("Error while processing file:",{file:l,base:u,contents:a,outputPath:s,outputContents:c}),t}}if(!o)throw new Error("No files to scaffold!");console.log("Done")},t.prototype.writeDirectory=function(t,e){var o=n.dirname(t);i.existsSync(o)||this.writeDirectory(o,t),i.existsSync(t)||(console.info("Creating directory:",{file:e,outputPath:t}),i.mkdirSync(t))},t}();e.default=c},743:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0});var r=o(493),i=o(622).join(process.cwd(),"examples");new r.default({templates:[i+"/test-input/Component/**/*"],output:i+"/test-output/no-create-subpath",createSubfolder:!1,locals:{property:"myProp",value:'"value"'}}).run(),new r.default({templates:[i+"/test-input/Component/**/*"],output:i+"/test-output",locals:{property:"myProp",value:'"value"'}}).run()},747:t=>{t.exports=require("fs")},878:t=>{t.exports=require("glob")},778:t=>{t.exports=require("handlebars")},622:t=>{t.exports=require("path")}},e={};return function o(r){if(e[r])return e[r].exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,o),i.exports}(743)})()}));
//# sourceMappingURL=test.js.map