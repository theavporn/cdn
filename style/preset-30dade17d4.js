!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,e,n){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){var n=function(){function t(){var t="close"===location.pathname.split("/").pop();if(!t){var n=i("latest_bulletin"),a=n?JSON.parse(n):null,s=3e5,l=a&&+a.date+s>Date.now();l&&a?r():e().then(function(t){o(t),r()})}}function e(){var t=location.host.split(".").pop(),e="https://jav101."+t;return new Promise(function(t,n){$.ajax({url:e+"/api/bulletin/",type:"GET",dataType:"json",success:function(e){var n=e.data[0];t(n)},error:function(t){n(t)}})})}t()},i=function(t){var e="; "+document.cookie,n=e.split("; "+t+"=");if(2==n.length)return n.pop().split(";").shift()},o=function(t){var e=i("latest_bulletin"),n=e?JSON.parse(e):null,o=!!n&&n.id===t.id;if(n&&o){console.log("a1");var r={id:n.id,isRead:n.isRead,date:Date.now()};a(r)}else{console.log("a0");var s={id:t.id,isRead:!1,date:Date.now()};a(s)}},a=function(t){var e={id:t.id,isRead:t.isRead,date:t.date},n=location.host.split(".").pop(),i="jav101."+n,o="latest_bulletin",a=JSON.stringify(e),r=new Date;r.setMonth(r.getMonth()+12),document.cookie=o+"="+a+";expires="+r+";domain="+i+";path=/"},r=function(){var t=i("latest_bulletin"),e=t?JSON.parse(t):null,n=$(".notice_dot").hasClass("hide");!e.isRead&&n?$(".notice_dot").removeClass("hide"):e.isRead&&!n&&$(".notice_dot").addClass("hide")},s=function(t){var e=i("latest_bulletin"),n=e?JSON.parse(e):null;if(+n.id===+t&&!n.isRead){var o={id:n.id,isRead:!0,date:n.date};a(o),r()}},l=function(t){console.log("hi 0"),o(t),r()};t.exports={init:n,getCookie:i,setNoticeDot:r,checkIfEnterLatestBulletin:s,setCookieWithoutCallApi:l}},function(t,e,n){"use strict";var i=n(0),o=n.n(i);!function(){new(function(){function t(){this.init()}return t.prototype.init=function(){o.a.init()},t}())}()}]);