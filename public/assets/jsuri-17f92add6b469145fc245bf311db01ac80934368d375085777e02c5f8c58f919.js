var Query=function(r){"use strict";var t=function(r){var t,n,e,o,u=[];if(void 0===r||null===r||""===r)return u;for(0===r.indexOf("?")&&(r=r.substring(1)),n=r.toString().split(/[&;]/),t=0;t<n.length;t++)e=n[t],o=e.split("="),u.push([o[0],o[1]]);return u},n=t(r),e=function(){var r,t,e="";for(r=0;r<n.length;r++)t=n[r],e.length>0&&(e+="&"),e+=t.join("=");return e.length>0?"?"+e:e},o=function(r){return r=decodeURIComponent(r),r=r.replace("+"," ")},u=function(r){var t,e;for(e=0;e<n.length;e++)if(t=n[e],o(r)===o(t[0]))return t[1]},i=function(r){var t,e,u=[];for(t=0;t<n.length;t++)e=n[t],o(r)===o(e[0])&&u.push(e[1]);return u},a=function(r,t){var e,u,i,a,c=[];for(e=0;e<n.length;e++)u=n[e],i=o(u[0])===o(r),a=o(u[1])===o(t),(1===arguments.length&&!i||2===arguments.length&&!i&&!a)&&c.push(u);return n=c,this},c=function(r,t,e){return 3===arguments.length&&-1!==e?(e=Math.min(e,n.length),n.splice(e,0,[r,t])):arguments.length>0&&n.push([r,t]),this},f=function(r,t,e){var u,i,f=-1;if(3===arguments.length){for(u=0;u<n.length;u++)if(i=n[u],o(i[0])===o(r)&&decodeURIComponent(i[1])===o(e)){f=u;break}a(r,e).addParam(r,t,f)}else{for(u=0;u<n.length;u++)if(i=n[u],o(i[0])===o(r)){f=u;break}a(r),c(r,t,f)}return this};return{getParamValue:u,getParamValues:i,deleteParam:a,addParam:c,replaceParam:f,toString:e}},Uri=function(r){"use strict";var t=!1,n=function(r){for(var n={strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/},e=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],o={name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},u=n[t?"strict":"loose"].exec(r),i={},a=14;a--;)i[e[a]]=u[a]||"";return i[o.name]={},i[e[12]].replace(o.parser,function(r,t,n){t&&(i[o.name][t]=n)}),i},e=n(r||""),o=new Query(e.query),u=function(r){return void 0!==r&&(e.protocol=r),e.protocol},i=null,a=function(r){return void 0!==r&&(i=r),null===i?-1!==e.source.indexOf("//"):i},c=function(r){return void 0!==r&&(e.userInfo=r),e.userInfo},f=function(r){return void 0!==r&&(e.host=r),e.host},s=function(r){return void 0!==r&&(e.port=r),e.port},l=function(r){return void 0!==r&&(e.path=r),e.path},h=function(r){return void 0!==r&&(o=new Query(r)),o},d=function(r){return void 0!==r&&(e.anchor=r),e.anchor},g=function(r){return u(r),this},p=function(r){return a(r),this},m=function(r){return c(r),this},P=function(r){return f(r),this},v=function(r){return s(r),this},y=function(r){return l(r),this},x=function(r){return h(r),this},Q=function(r){return d(r),this},I=function(r){return h().getParamValue(r)},S=function(r){return h().getParamValues(r)},U=function(r,t){return 2===arguments.length?h().deleteParam(r,t):h().deleteParam(r),this},O=function(r,t,n){return 3===arguments.length?h().addParam(r,t,n):h().addParam(r,t),this},V=function(r,t,n){return 3===arguments.length?h().replaceParam(r,t,n):h().replaceParam(r,t),this},q=function(){var r="",t=function(r){return null!==r&&""!==r};return t(u())?(r+=u(),u().indexOf(":")!==u().length-1&&(r+=":"),r+="//"):a()&&t(f())&&(r+="//"),t(c())&&t(f())&&(r+=c(),c().indexOf("@")!==c().length-1&&(r+="@")),t(f())&&(r+=f(),t(s())&&(r+=":"+s())),t(l())?r+=l():t(f())&&(t(h().toString())||t(d()))&&(r+="/"),t(h().toString())&&(0!==h().toString().indexOf("?")&&(r+="?"),r+=h().toString()),t(d())&&(0!==d().indexOf("#")&&(r+="#"),r+=d()),r};return{protocol:u,hasAuthorityPrefix:a,userInfo:c,host:f,port:s,path:l,query:h,anchor:d,setProtocol:g,setHasAuthorityPrefix:p,setUserInfo:m,setHost:P,setPort:v,setPath:y,setQuery:x,setAnchor:Q,getQueryParamValue:I,getQueryParamValues:S,deleteQueryParam:U,addQueryParam:O,replaceQueryParam:V,toString:q,clone:function(){return new Uri(q())}}},jsUri=Uri;