!function(t,e){function s(){this._state=[],this._defaults={classHolder:"sbHolder",classHolderDisabled:"sbHolderDisabled",classSelector:"sbSelector",classOptions:"sbOptions",classGroup:"sbGroup",classSub:"sbSub",classDisabled:"sbDisabled",classToggleOpen:"sbToggleOpen",classToggle:"sbToggle",speed:200,effect:"slide",onChange:null,onOpen:null,onClose:null}}var i="selectbox",n=!1,l=!0;t.extend(s.prototype,{_isOpenSelectbox:function(t){return t?this._getInst(t).isOpen:n},_isDisabledSelectbox:function(t){return t?this._getInst(t).isDisabled:n},_attachSelectbox:function(e,s){function a(){var e,s=this.attr("id").split("_")[1];for(e in b._state)e!==s&&b._state.hasOwnProperty(e)&&t(":input[sb='"+e+"']")[0]&&b._closeSelectbox(t(":input[sb='"+e+"']")[0])}function o(){var s=!(!arguments[1]||!arguments[1].sub),i=!(!arguments[1]||!arguments[1].disabled);arguments[0].each(function(n){var a,o=t(this),c=t("<li>");o.is(":selected")&&(d.text(o.text()),_=l),n===h-1&&c.addClass("last"),o.is(":disabled")||i?(a=t("<span>",{text:o.text()}).addClass(g.settings.classDisabled),s&&a.addClass(g.settings.classSub),a.appendTo(c)):(a=t("<a>",{href:"#"+o.val(),rel:o.val(),text:o.text(),click:function(s){s.preventDefault();var i=p;i.attr("id").split("_")[1];b._changeSelectbox(e,t(this).attr("rel"),t(this).text()),b._closeSelectbox(e)}}),s&&a.addClass(g.settings.classSub),a.appendTo(c)),c.appendTo(r)})}if(this._getInst(e))return n;var c,d,p,r,u=t(e),b=this,g=b._newInst(u),_=n,f=(u.find("optgroup"),u.find("option")),h=f.length;u.attr("sb",g.uid),t.extend(g.settings,b._defaults,s),b._state[g.uid]=n,u.hide(),c=t("<div>",{id:"sbHolder_"+g.uid,"class":g.settings.classHolder}),d=t("<a>",{id:"sbSelector_"+g.uid,href:"#","class":g.settings.classSelector,click:function(s){s.preventDefault(),a.apply(t(this),[]);var i=t(this).attr("id").split("_")[1];b._state[i]?b._closeSelectbox(e):b._openSelectbox(e)}}),p=t("<a>",{id:"sbToggle_"+g.uid,href:"#","class":g.settings.classToggle,click:function(s){s.preventDefault(),a.apply(t(this),[]);var i=t(this).attr("id").split("_")[1];b._state[i]?b._closeSelectbox(e):b._openSelectbox(e)}}),p.appendTo(c),r=t("<ul>",{id:"sbOptions_"+g.uid,"class":g.settings.classOptions,css:{display:"none"}}),u.children().each(function(){var e,s=t(this),i={};s.is("option")?o(s):s.is("optgroup")&&(e=t("<li>"),t("<span>",{text:s.attr("label")}).addClass(g.settings.classGroup).appendTo(e),e.appendTo(r),s.is(":disabled")&&(i.disabled=!0),i.sub=!0,o(s.find("option"),i))}),_||d.text(f.first().text()),t.data(e,i,g),d.appendTo(c),r.appendTo(c),c.insertAfter(u)},_detachSelectbox:function(e){var s=this._getInst(e);if(!s)return n;t("#sbHolder_"+s.uid).remove(),t.data(e,i,null),t(e).show()},_changeSelectbox:function(e,s,i){var n=this._getInst(e),a=this._get(n,"onChange");t("#sbSelector_"+n.uid).text(i),t(e).find("option[value='"+s+"']").attr("selected",l),a?a.apply(n.input?n.input[0]:null,[s,n]):n.input&&n.input.trigger("change")},_enableSelectbox:function(e){var s=this._getInst(e);if(!s||!s.isDisabled)return n;t("#sbHolder_"+s.uid).removeClass(s.settings.classHolderDisabled),s.isDisabled=n,t.data(e,i,s)},_disableSelectbox:function(e){var s=this._getInst(e);if(!s||s.isDisabled)return n;t("#sbHolder_"+s.uid).addClass(s.settings.classHolderDisabled),s.isDisabled=l,t.data(e,i,s)},_optionSelectbox:function(e,s,l){var a=this._getInst(e);if(!a)return n;a[s]=l,t.data(e,i,a)},_openSelectbox:function(e){var s=this._getInst(e);if(s&&!s.isOpen&&!s.isDisabled){var n=t("#sbOptions_"+s.uid),a=parseInt(t(window).height(),10),o=t("#sbHolder_"+s.uid).offset(),c=t(window).scrollTop(),d=n.prev().height(),p=a-(o.top-c)-d/2,r=this._get(s,"onOpen");n.css({top:d+"px",maxHeight:p-d+"px"}),"fade"===s.settings.effect?n.fadeIn(s.settings.speed):n.slideDown(s.settings.speed),t("#sbToggle_"+s.uid).addClass(s.settings.classToggleOpen),this._state[s.uid]=l,s.isOpen=l,r&&r.apply(s.input?s.input[0]:null,[s]),t.data(e,i,s)}},_closeSelectbox:function(e){var s=this._getInst(e);if(s&&s.isOpen){var l=this._get(s,"onClose");"fade"===s.settings.effect?t("#sbOptions_"+s.uid).fadeOut(s.settings.speed):t("#sbOptions_"+s.uid).slideUp(s.settings.speed),t("#sbToggle_"+s.uid).removeClass(s.settings.classToggleOpen),this._state[s.uid]=n,s.isOpen=n,l&&l.apply(s.input?s.input[0]:null,[s]),t.data(e,i,s)}},_newInst:function(t){return{id:t[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1"),input:t,uid:Math.floor(99999999*Math.random()),isOpen:n,isDisabled:n,settings:{}}},_getInst:function(e){try{return t.data(e,i)}catch(t){throw"Missing instance data for this selectbox"}},_get:function(t,s){return t.settings[s]!==e?t.settings[s]:this._defaults[s]}}),t.fn.selectbox=function(e){var s=Array.prototype.slice.call(arguments,1);return"string"==typeof e&&"isDisabled"==e?t.selectbox["_"+e+"Selectbox"].apply(t.selectbox,[this[0]].concat(s)):"option"==e&&2==arguments.length&&"string"==typeof arguments[1]?t.selectbox["_"+e+"Selectbox"].apply(t.selectbox,[this[0]].concat(s)):this.each(function(){"string"==typeof e?t.selectbox["_"+e+"Selectbox"].apply(t.selectbox,[this].concat(s)):t.selectbox._attachSelectbox(this,e)})},t.selectbox=new s,t.selectbox.version="0.1.3"}(jQuery);