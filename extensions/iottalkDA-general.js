"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function e(t,o,n){function s(r,i){if(!o[r]){if(!t[r]){var a="function"==typeof require&&require;if(!i&&a)return a(r,!0);if(c)return c(r,!0);throw new Error("Cannot find module '"+r+"'")}var u=o[r]={exports:{}};t[r][0].call(u.exports,function(e){var o=t[r][1][e];return s(o?o:e)},u,u.exports,e,t,o,n)}return o[r].exports}for(var c="function"==typeof require&&require,r=0;r<n.length;r++)s(n[r]);return s}({1:[function(e,t,o){function n(e,t,o,n){console.log(o),$.ajax({type:"POST",url:e+"/"+t,contentType:"application/json; charset=utf-8",data:JSON.stringify({profile:o}),success:function(e){console.log(e),console.log("register success")},error:function(e,t){console.log(e),console.log(t),console.log("register failed")},complete:function(){"function"==typeof n&&n()},dataType:"text"})}function s(e,t,o){$.ajax({type:"DELETE",url:e+"/"+t,success:function(e){console.log(e),console.log("Detach success")},error:function(e,t){console.log(e),console.log(t),console.log("Detach failed")},complete:function(){"function"==typeof o&&o()},dataType:"text"})}function c(e,t,o,n,s){$.ajax({type:"PUT",url:e+"/"+t+"/"+o,contentType:"application/json; charset=utf-8",data:JSON.stringify({data:n}),success:function(e){console.log(e),console.log("Update success")},error:function(e,t){console.log(e),console.log(t),console.log("Update failed")},complete:function(){"function"==typeof s&&s()},dataType:"text"})}function r(e,t,o,n){var s=-1;$.ajax({type:"GET",cache:!1,url:e+"/"+t+"/"+o,success:function(e){s=JSON.parse(e),s="object"===("undefined"==typeof s?"undefined":_typeof(s))&&s.samples&&s.samples[0]&&s.samples[0][1]?s.samples[0][1]:[],console.log(e),console.log("Get success")},error:function(e,t){console.log(e),console.log(t),console.log("Get failed")},complete:function(){"function"==typeof n&&n(s)},dataType:"text"})}window&&(window.IoTtalk={register:n,detach:s,update:c,get:r}),t.exports={register:n,detach:s,update:c,get:r}},{}],2:[function(e,t,o){var n={_shutdown:function(){confirm("_shutdown")},_getStatus:function(){return{status:2,msg:"Ready"}}},s={blocks:[]};t.exports={add:function(e,t,o,c){n[c]=e,s.blocks.push([t,o,c]);for(var r=s.blocks.length-1,i=4;i<arguments.length;++i)s.blocks[r].push(arguments[i])},ext:n,descriptor:s}},{}],3:[function(e,t,o){!function(t){function o(){if(h.length){var e=h[0][0],t=h[0][1];h.shift(1),delete v[e+"__"+t],g[e]&&g[e][t]&&(console.log(e),console.log(t),console.log(g[e][t]),l.update(p,e,t,g[e][t]))}setTimeout(o,m)}function n(e,t,o,n){n(g[e]?g[e][t]?"object"===_typeof(g[e][t])?"undefined"!=typeof g[e][t][parseInt(o,10)]?g[e][t][parseInt(o,10)]:"undefined"!=typeof g[e][t][o.toString()]?g[e][t][o.toString()]:-1:g[e][t]:"device feature not exist":"device instance not exist")}function s(e,t){p="http://"+e+":"+t}function c(e,t){g[e]={profile:{d_name:e,dm_name:t,is_sim:!1,df_list:[]}}}function r(e,t){g[t]&&g[t].profile.df_list.indexOf(e)===-1&&g[t].profile.df_list.push(e)}function i(e,t){g[e]&&""!==p?l.register(p,e,g[e].profile,t):t()}function a(e,t){""===p?t():l.detach(p,e,t)}function u(e,t,o,n){""!==p&&(g[e]||(g[e]={}),g[e][t]||(g[e][t]=[]),g[e][t][o]=n,v[e+"__"+t]||(h.push([e,t]),v[e+"__"+t]=!0))}function f(e,t,o,s){if(""===p)return void s("server url not given");if(Date.now()-_<=y)n(e,t,o,s);else{_=Date.now();try{l.get(p,e,t,function(c){g[e]||(g[e]={}),g[e][t]=c,n(e,t,o,s)})}catch(c){s("js bug, plase report to github")}}}var l=e("__iottalk_api.js"),d=e("__scratchX-register.js"),p="",g={},y=200,_=Date.now(),m=200,h=[],v={};setTimeout(o,2e3),d.add(s," ","set IoTtalk server %s %s","setserver","ip","port"),d.add(c," ","create device %s by model %s","create","d_name","dm_name"),d.add(r," ","add feature %s to device %s","add","df_name","d_name"),d.add(i,"w","register device %s","register","d_name"),d.add(a,"w","detach device %s","detach","d_name"),d.add(u," ","update device %s's feature %s %s = %s","updateStr","d_name","df_name","key","val"),d.add(u," ","update device %s's feature %s %s = %d","updateNum","d_name","df_name","key","0"),d.add(f,"R","get device %s's feature %s %d","get","d_name","df_name","0"),ScratchExtensions.register("Chatroom extension",d.descriptor,d.ext)}({})},{"__iottalk_api.js":1,"__scratchX-register.js":2}]},{},[3]);