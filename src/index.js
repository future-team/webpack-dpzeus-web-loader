'use strict';
/**
 * attach import or request `@dp/dpzeus` node module then inject pathWebModule when dev
 * @param source
 * @returns {*}
 */
var loaderUtils	= require("loader-utils");
var fs = require("fs");
var path = require("path");
var dpCount = 0;
module.exports = function(source) {
    this.cacheable();
    var currentRequest = loaderUtils.getCurrentRequest(this);
    var line	= "";
    var content	= "";
    var lineCount = 1;
    var moduleFileIsExit = true;
    if(/@dp\/dpzeus\/lib\/index\.js$/gi.test(currentRequest)){
        dpCount++;
        try {
            content = fs.readFileSync(path.join(path.dirname(currentRequest.split('!')[1]),'patch-web.js'), 'utf-8');
        }catch(e) {
            // not exit
            console.error('patch-web.js is not exit!')
            moduleFileIsExit = false;
        }
        if(!moduleFileIsExit){
            // force to add a `\n`
            source+='\n';
            for(var i=0;i<source.length;i++) {
                line = line + source[i];
                if(source[i]=='\n') {
                    var regModule = new RegExp('module\.exports', 'gi');
                    if(regModule.test(line)){
                        var injectContent = fs.readFileSync(path.join(__dirname,'./templates/inject-dpzeus.js'), 'utf-8');
                        // inject
                        content = content + injectContent + line;
                    }else{
                        content = content + line;
                    }
                    line = "";
                    lineCount++;
                }
            }
        }
    }else{
        content = source;
    }
    return content;
};