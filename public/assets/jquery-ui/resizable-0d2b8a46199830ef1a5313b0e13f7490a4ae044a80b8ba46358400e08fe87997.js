!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(e,s){var n,o,h,a=e.nodeName.toLowerCase();return"area"===a?(n=e.parentNode,o=n.name,!(!e.href||!o||"map"!==n.nodeName.toLowerCase())&&(!!(h=t("img[usemap='#"+o+"']")[0])&&i(h))):(/^(input|select|textarea|button|object)$/.test(a)?!e.disabled:"a"===a?e.href||s:s)&&i(e)}function i(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return"hidden"===t.css(this,"visibility")}).length}t.ui=t.ui||{},t.extend(t.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({scrollParent:function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return(!s||"static"!==e.css("position"))&&n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])},focusable:function(i){return e(i,!isNaN(t.attr(i,"tabindex")))},tabbable:function(i){var s=t.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&e(i,!n)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(e,i){function s(e,i,s,o){return t.each(n,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),h={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return e===undefined?h["inner"+i].call(this):this.each(function(){t(this).css(o,s(this,e)+"px")})},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?h["outer"+i].call(this,e):this.each(function(){t(this).css(o,s(this,e,!0,n)+"px")})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(i){return arguments.length?e.call(this,t.camelCase(i)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.fn.extend({focus:function(e){return function(i,s){return"number"==typeof i?this.each(function(){var e=this;setTimeout(function(){t(e).focus(),s&&s.call(e)},i)}):e.apply(this,arguments)}}(t.fn.focus),disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(e){if(e!==undefined)return this.css("zIndex",e);if(this.length)for(var i,s,n=t(this[0]);n.length&&n[0]!==document;){if(("absolute"===(i=n.css("position"))||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),t.ui.plugin={add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;n<o.length;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}}}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){var e=0,i=Array.prototype.slice;return t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(t){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,h,a,r={},l=e.split(".")[0];return e=e.split(".")[1],n=l+"-"+e,s||(s=i,i=t.Widget),t.expr[":"][n.toLowerCase()]=function(e){return!!t.data(e,n)},t[l]=t[l]||{},o=t[l][e],h=t[l][e]=function(t,e){if(!this._createWidget)return new h(t,e);arguments.length&&this._createWidget(t,e)},t.extend(h,o,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){if(!t.isFunction(s))return void(r[e]=s);r[e]=function(){var t=function(){return i.prototype[e].apply(this,arguments)},n=function(t){return i.prototype[e].apply(this,t)};return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}()}),h.prototype=t.widget.extend(a,{widgetEventPrefix:o?a.widgetEventPrefix||e:e},r,{constructor:h,namespace:l,widgetName:e,widgetFullName:n}),o?(t.each(o._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,h,i._proto)}),delete o._childConstructors):i._childConstructors.push(h),t.widget.bridge(e,h),h},t.widget.extend=function(e){for(var s,n,o=i.call(arguments,1),h=0,a=o.length;h<a;h++)for(s in o[h])n=o[h][s],o[h].hasOwnProperty(s)&&n!==undefined&&(t.isPlainObject(n)?e[s]=t.isPlainObject(e[s])?t.widget.extend({},e[s],n):t.widget.extend({},n):e[s]=n);return e},t.widget.bridge=function(e,s){var n=s.prototype.widgetFullName||e;t.fn[e]=function(o){var h="string"==typeof o,a=i.call(arguments,1),r=this;return h?this.each(function(){var i,s=t.data(this,n);return"instance"===o?(r=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,a),i!==s&&i!==undefined?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+o+"'")}):(a.length&&(o=t.widget.extend.apply(null,[o].concat(a))),this.each(function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new s(o,this))})),r}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(i,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,h=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(h={},s=e.split("."),e=s.shift(),s.length){for(n=h[e]=t.widget.extend({},this.options[e]),o=0;o<s.length-1;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return n[e]===undefined?null:n[e];n[e]=i}else{if(1===arguments.length)return this.options[e]===undefined?null:this.options[e];h[e]=i}return this._setOptions(h),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,h){function a(){if(e||!0!==o.options.disabled&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof h?o[h]:h).apply(o,arguments)}"string"!=typeof h&&(a.guid=h.guid=h.guid||a.guid||t.guid++);var r=s.match(/^([\w:-]*)\s*(.*)$/),l=r[1]+o.eventNamespace,u=r[2];u?n.delegate(u,l,a):i.bind(l,a)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(i).undelegate(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,h=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(h)&&!1===h.apply(this.element[0],[i].concat(s))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var h,a=n?!0===n||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),h=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),h&&t.effects&&t.effects.effect[a]?s[e](n):a!==e&&s[a]?s[a](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget}),function(t){"function"==typeof define&&define.amd?define(["jquery","./widget"],t):t(jQuery)}(function(t){var e=!1;return t(document).mouseup(function(){e=!1}),t.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){if(!0===t.data(i.target,e.widgetName+".preventClickEvent"))return t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!e){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,o=!("string"!=typeof this.options.cancel||!i.target.nodeName)&&t(i.target).closest(this.options.cancel).length;return!(n&&!o&&this._mouseCapture(i))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=!1!==this._mouseStart(i),!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return s._mouseMove(t)},this._mouseUpDelegate=function(t){return s._mouseUp(t)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),e=!0,!0))}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||document.documentMode<9)&&!e.button)return this._mouseUp(e);if(!e.which)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,e),this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(i){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,i.target===this._mouseDownEvent.target&&t.data(i.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(i)),e=!1,!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}),function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./mouse","./widget"],t):t(jQuery)}(function(t){return t.widget("ui.resizable",t.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseInt(t,10)||0},_isNumber:function(t){return!isNaN(parseInt(t,10))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0||(e[s]=1,n=e[s]>0,e[s]=0,n)},_create:function(){var e,i,s,n,o,h=this,a=this.options;if(this.element.addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=a.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),e=this.handles.split(","),this.handles={},i=0;i<e.length;i++)s=t.trim(e[i]),o="ui-resizable-"+s,n=t("<div class='ui-resizable-handle "+o+"'></div>"),n.css({zIndex:a.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:h._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.mouseover(function(){h.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),h.axis=n&&n[1]?n[1]:"se")}),a.autoHide&&(this._handles.hide(),t(this.element).addClass("ui-resizable-autohide").mouseenter(function(){a.disabled||(t(this).removeClass("ui-resizable-autohide"),h._handles.show())}).mouseleave(function(){a.disabled||h.resizing||(t(this).addClass("ui-resizable-autohide"),h._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)((s=t(this.handles[i])[0])===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(e){var i,s,n,o=this.options,h=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),o.containment&&(i+=t(o.containment).scrollLeft()||0,s+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===n?this.axis+"-resize":n),h.addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,s,n=this.originalMousePosition,o=this.axis,h=e.pageX-n.left||0,a=e.pageY-n.top||0,r=this._change[o];return this._updatePrevProperties(),!!r&&(i=r.apply(this,[e,h,a]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1)},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,h,a,r,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:u.sizeDiff.height,o=s?0:u.sizeDiff.width,h={width:u.helper.width()-o,height:u.helper.height()-n},a=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,r=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(t.extend(h,{top:r,left:a})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,n,o,h=this.options;o={minWidth:this._isNumber(h.minWidth)?h.minWidth:0,maxWidth:this._isNumber(h.maxWidth)?h.maxWidth:Infinity,minHeight:this._isNumber(h.minHeight)?h.minHeight:0,maxHeight:this._isNumber(h.maxHeight)?h.maxHeight:Infinity},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,s=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,n=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),s>o.minHeight&&(o.minHeight=s),i<o.maxWidth&&(o.maxWidth=i),n<o.maxHeight&&(o.maxHeight=n)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,h=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,a=this.originalPosition.left+this.originalSize.width,r=this.position.top+this.size.height,l=/sw|nw|w/.test(i),u=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),h&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&l&&(t.left=a-e.minWidth),s&&l&&(t.left=a-e.maxWidth),h&&u&&(t.top=r-e.minHeight),n&&u&&(t.top=r-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],n=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];e<4;e++)i[e]=parseInt(s[e],10)||0,i[e]+=parseInt(n[e],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;e<this._proportionallyResizeElements.length;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize;return{left:this.originalPosition.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize;return{top:this.originalPosition.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),h=o&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,a=o?0:i.sizeDiff.width,r={width:i.size.width-a,height:i.size.height-h},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(r,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,s,n,o,h,a,r=t(this).resizable("instance"),l=r.options,u=r.element,d=l.containment,p=d instanceof t?d.get(0):/parent/.test(d)?u.parent().get(0):d;p&&(r.containerElement=t(p),/document/.test(d)||d===document?(r.containerOffset={left:0,top:0},r.containerPosition={left:0,top:0},r.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(p),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,s){i[t]=r._num(e.css("padding"+s))}),r.containerOffset=e.offset(),r.containerPosition=e.position(),r.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=r.containerOffset,n=r.containerSize.height,o=r.containerSize.width,h=r._hasScroll(p,"left")?p.scrollWidth:o,a=r._hasScroll(p)?p.scrollHeight:n,r.parentData={element:p,left:s.left,top:s.top,width:h,height:a}))},resize:function(e){var i,s,n,o,h=t(this).resizable("instance"),a=h.options,r=h.containerOffset,l=h.position,u=h._aspectRatio||e.shiftKey,d={top:0,left:0},p=h.containerElement,c=!0;p[0]!==document&&/static/.test(p.css("position"))&&(d=r),l.left<(h._helper?r.left:0)&&(h.size.width=h.size.width+(h._helper?h.position.left-r.left:h.position.left-d.left),u&&(h.size.height=h.size.width/h.aspectRatio,c=!1),h.position.left=a.helper?r.left:0),l.top<(h._helper?r.top:0)&&(h.size.height=h.size.height+(h._helper?h.position.top-r.top:h.position.top),u&&(h.size.width=h.size.height*h.aspectRatio,c=!1),h.position.top=h._helper?r.top:0),n=h.containerElement.get(0)===h.element.parent().get(0),o=/relative|absolute/.test(h.containerElement.css("position")),n&&o?(h.offset.left=h.parentData.left+h.position.left,h.offset.top=h.parentData.top+h.position.top):(h.offset.left=h.element.offset().left,h.offset.top=h.element.offset().top),i=Math.abs(h.sizeDiff.width+(h._helper?h.offset.left-d.left:h.offset.left-r.left)),s=Math.abs(h.sizeDiff.height+(h._helper?h.offset.top-d.top:h.offset.top-r.top)),i+h.size.width>=h.parentData.width&&(h.size.width=h.parentData.width-i,u&&(h.size.height=h.size.width/h.aspectRatio,c=!1)),s+h.size.height>=h.parentData.height&&(h.size.height=h.parentData.height-s,u&&(h.size.width=h.size.height*h.aspectRatio,c=!1)),c||(h.position.left=h.prevPosition.left,h.position.top=h.prevPosition.top,h.size.width=h.prevSize.width,h.size.height=h.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,h=t(e.helper),a=h.offset(),r=h.outerWidth()-e.sizeDiff.width,l=h.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:a.left-n.left-s.left,width:r,height:l}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:a.left-n.left-s.left,width:r,height:l})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options;t(i.alsoResize).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseInt(e.width(),10),height:parseInt(e.height(),10),left:parseInt(e.css("left"),10),top:parseInt(e.css("top"),10)})})},resize:function(e,i){var s=t(this).resizable("instance"),n=s.options,o=s.originalSize,h=s.originalPosition,a={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-h.top||0,left:s.position.left-h.left||0};t(n.alsoResize).each(function(){var e=t(this),s=t(this).data("ui-resizable-alsoresize"),n={},o=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(o,function(t,e){var i=(s[e]||0)+(a[e]||0);i&&i>=0&&(n[e]=i||null)}),e.css(n)})},stop:function(){t(this).removeData("resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.options,s=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),s=i.options,n=i.size,o=i.originalSize,h=i.originalPosition,a=i.axis,r="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=r[0]||1,u=r[1]||1,d=Math.round((n.width-o.width)/l)*l,p=Math.round((n.height-o.height)/u)*u,c=o.width+d,f=o.height+p,g=s.maxWidth&&s.maxWidth<c,m=s.maxHeight&&s.maxHeight<f,w=s.minWidth&&s.minWidth>c,_=s.minHeight&&s.minHeight>f;s.grid=r,w&&(c+=l),_&&(f+=u),g&&(c-=l),m&&(f-=u),/^(se|s|e)$/.test(a)?(i.size.width=c,i.size.height=f):/^(ne)$/.test(a)?(i.size.width=c,i.size.height=f,i.position.top=h.top-p):/^(sw)$/.test(a)?(i.size.width=c,i.size.height=f,i.position.left=h.left-d):((f-u<=0||c-l<=0)&&(e=i._getPaddingPlusBorderDimensions(this)),f-u>0?(i.size.height=f,i.position.top=h.top-p):(f=u-e.height,i.size.height=f,i.position.top=h.top+o.height-f),c-l>0?(i.size.width=c,i.position.left=h.left-d):(c=l-e.width,i.size.width=c,i.position.left=h.left+o.width-c))}}),t.ui.resizable});