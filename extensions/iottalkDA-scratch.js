"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function t(o,e,n){function c(s,u){if(!e[s]){if(!o[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var i=e[s]={exports:{}};o[s][0].call(i.exports,function(t){var e=o[s][1][t];return c(e?e:t)},i,i.exports,t,o,e,n)}return e[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)c(n[s]);return c}({1:[function(t,o,e){function n(t,o,e,n){console.log(e),$.ajax({type:"POST",url:t+"/"+o,contentType:"application/json; charset=utf-8",data:JSON.stringify({profile:e}),success:function(t){console.log(t),console.log("register success")},error:function(t,o){console.log(t),console.log(o),console.log("register failed")},complete:function(){"function"==typeof n&&n()},dataType:"text"})}function c(t,o,e){$.ajax({type:"DELETE",url:t+"/"+o,success:function(t){console.log(t),console.log("Detach success")},error:function(t,o){console.log(t),console.log(o),console.log("Detach failed")},complete:function(){"function"==typeof e&&e()},dataType:"text"})}function r(t,o,e,n,c){$.ajax({type:"PUT",url:t+"/"+o+"/"+e,contentType:"application/json; charset=utf-8",data:JSON.stringify({data:n}),success:function(t){console.log(t),console.log("Update success")},error:function(t,o){console.log(t),console.log(o),console.log("Update failed")},complete:function(){"function"==typeof c&&c()},dataType:"text"})}function s(t,o,e,n){var c=-1;$.ajax({type:"GET",cache:!1,url:t+"/"+o+"/"+e,success:function(t){c=JSON.parse(t),c="object"===("undefined"==typeof c?"undefined":_typeof(c))&&c.samples&&c.samples[0]&&c.samples[0][1]?c.samples[0][1]:[],console.log(t),console.log("Get success")},error:function(t,o){console.log(t),console.log(o),console.log("Get failed")},complete:function(){"function"==typeof n&&n(c)},dataType:"text"})}window&&(window.IoTtalk={register:n,detach:c,update:r,get:s}),o.exports={register:n,detach:c,update:r,get:s}},{}],2:[function(t,o,e){var n={_shutdown:function(){confirm("_shutdown")},_getStatus:function(){return{status:2,msg:"Ready"}}},c={blocks:[]};o.exports={add:function(t,o,e,r){n[r]=t,c.blocks.push([o,e,r]);for(var s=c.blocks.length-1,u=4;u<arguments.length;++u)c.blocks[s].push(arguments[u])},ext:n,descriptor:c}},{}],3:[function(t,o,e){!function(o){function e(){if(_.length){var t=_[0];_.shift(1),delete S[t],d&&d.ScratchX_output&&(console.log(t),console.log(d.ScratchX_output),i.update(f,t,"ScratchX_output",d.ScratchX_output))}setTimeout(e,y)}function n(t,o){o(d&&d.ScratchX_output?"object"===_typeof(d.ScratchX_output)?"undefined"!=typeof d.ScratchX_output[parseInt(t,10)]?d.ScratchX_output[parseInt(t,10)]:"undefined"!=typeof d.ScratchX_output[t.toString()]?d.ScratchX_output[t.toString()]:-1:d.ScratchX_output:"not exist")}function c(t,o){f="http://"+t+":"+o,console.log(f)}function r(t,o){console.log(t),p=t,d={profile:{d_name:"ScratchX_"+p,dm_name:"ScratchX",is_sim:!1,df_list:["ScratchX_input","ScratchX_output"]}},console.log(f),console.log(p),""===f?o():i.register(f,p,d.profile,o)}function s(t){""===f?t():i.detach(f,p,t)}function u(t,o){console.log(d),console.log([t,o]),d.ScratchX_output[t]=o,console.log(p),console.log(d.ScratchX_output),i.update(f,p,"ScratchX_output",d.ScratchX_output)}function a(t,o){if(""===f)return void o("server url not given");if(Date.now()-h<=g)n(t,o);else{h=Date.now();try{i.get(f,p,"ScratchX_output",function(e){console.log(e),console.log("undefined"==typeof e?"undefined":_typeof(e)),d.ScratchX_output=e[0],n(t,o)})}catch(e){o("js bug, plase report to github")}}}var i=t("__iottalk_api.js"),l=t("__scratchX-register.js"),f="",p="",d=null,g=200,h=Date.now(),y=200,_=[],S={};setTimeout(e,2e3),l.add(c," ","set IoTtalk server %s %s","setserver","ip","port"),l.add(r,"w","register device as %s","register","mac_addr"),l.add(s,"w","detach device","detach"),l.add(u," ","update device %s = %s","updateStr","key","val"),l.add(u," ","update device %s = %d","updateNum","key","0"),l.add(a,"R","get %s","get","key"),ScratchExtensions.register("Chatroom extension",l.descriptor,l.ext)}({})},{"__iottalk_api.js":1,"__scratchX-register.js":2}]},{},[3]);