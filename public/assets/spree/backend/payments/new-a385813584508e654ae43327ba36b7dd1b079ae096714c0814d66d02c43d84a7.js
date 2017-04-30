(function(){var t,e,n,r,a,i,o,l,u,s,h,c,p,d,f,m,v,g,y,$,w,C,T,_,k=[].slice,b=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};t=window.jQuery||window.Zepto||window.$,t.payment={},t.payment.fn={},t.fn.payment=function(){var e,n;return n=arguments[0],e=2<=arguments.length?k.call(arguments,1):[],t.payment.fn[n].apply(this,e)},a=/(\d{1,4})/g,t.payment.cards=r=[{type:"visaelectron",patterns:[4026,417500,4405,4508,4844,4913,4917],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"maestro",patterns:[5018,502,503,56,58,639,6220,67],format:a,length:[12,13,14,15,16,17,18,19],cvcLength:[3],luhn:!0},{type:"forbrugsforeningen",patterns:[600],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"dankort",patterns:[5019],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"visa",patterns:[4],format:a,length:[13,16],cvcLength:[3],luhn:!0},{type:"mastercard",patterns:[51,52,53,54,55,22,23,24,25,26,27],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"amex",patterns:[34,37],format:/(\d{1,4})(\d{1,6})?(\d{1,5})?/,length:[15],cvcLength:[3,4],luhn:!0},{type:"dinersclub",patterns:[30,36,38,39],format:/(\d{1,4})(\d{1,6})?(\d{1,4})?/,length:[14],cvcLength:[3],luhn:!0},{type:"discover",patterns:[60,64,65,622],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"unionpay",patterns:[62,88],format:a,length:[16,17,18,19],cvcLength:[3],luhn:!1},{type:"jcb",patterns:[35],format:a,length:[16],cvcLength:[3],luhn:!0}],e=function(t){var e,n,a,i,o,l,u,s;for(t=(t+"").replace(/\D/g,""),i=0,l=r.length;i<l;i++)for(e=r[i],s=e.patterns,o=0,u=s.length;o<u;o++)if(a=s[o],n=a+"",t.substr(0,n.length)===n)return e},n=function(t){var e,n,a;for(n=0,a=r.length;n<a;n++)if(e=r[n],e.type===t)return e},p=function(t){var e,n,r,a,i,o;for(r=!0,a=0,n=(t+"").split("").reverse(),i=0,o=n.length;i<o;i++)e=n[i],e=parseInt(e,10),(r=!r)&&(e*=2),e>9&&(e-=9),a+=e;return a%10==0},c=function(t){var e;return null!=t.prop("selectionStart")&&t.prop("selectionStart")!==t.prop("selectionEnd")||!(null==("undefined"!=typeof document&&null!==document&&null!=(e=document.selection)?e.createRange:void 0)||!document.selection.createRange().text)},T=function(t,e){var n,r;try{n=e.prop("selectionStart")}catch(t){t,n=null}if(r=e.val(),e.val(t),null!==n&&e.is(":focus"))return n===r.length&&(n=t.length),e.prop("selectionStart",n),e.prop("selectionEnd",n)},g=function(t){var e,n,r,a,i,o,l,u;for(null==t&&(t=""),r="\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19",a="0123456789",o="",e=t.split(""),l=0,u=e.length;l<u;l++)n=e[l],i=r.indexOf(n),i>-1&&(n=a[i]),o+=n;return o},v=function(e){return setTimeout(function(){var n,r;return n=t(e.currentTarget),r=n.val(),r=g(r),r=r.replace(/\D/g,""),T(r,n)})},f=function(e){return setTimeout(function(){var n,r;return n=t(e.currentTarget),r=n.val(),r=g(r),r=t.payment.formatCardNumber(r),T(r,n)})},l=function(n){var r,a,i,o,l,u,s;if(i=String.fromCharCode(n.which),/^\d+$/.test(i)&&(r=t(n.currentTarget),s=r.val(),a=e(s+i),o=(s.replace(/\D/g,"")+i).length,u=16,a&&(u=a.length[a.length.length-1]),!(o>=u||null!=r.prop("selectionStart")&&r.prop("selectionStart")!==s.length)))return l=a&&"amex"===a.type?/^(\d{4}|\d{4}\s\d{6})$/:/(?:^|\s)(\d{4})$/,l.test(s)?(n.preventDefault(),setTimeout(function(){return r.val(s+" "+i)})):l.test(s+i)?(n.preventDefault(),setTimeout(function(){return r.val(s+i+" ")})):void 0},i=function(e){var n,r;if(n=t(e.currentTarget),r=n.val(),8===e.which&&(null==n.prop("selectionStart")||n.prop("selectionStart")===r.length))return/\d\s$/.test(r)?(e.preventDefault(),setTimeout(function(){return n.val(r.replace(/\d\s$/,""))})):/\s\d?$/.test(r)?(e.preventDefault(),setTimeout(function(){return n.val(r.replace(/\d$/,""))})):void 0},m=function(e){return setTimeout(function(){var n,r;return n=t(e.currentTarget),r=n.val(),r=g(r),r=t.payment.formatExpiry(r),T(r,n)})},u=function(e){var n,r,a;if(r=String.fromCharCode(e.which),/^\d+$/.test(r))return n=t(e.currentTarget),a=n.val()+r,/^\d$/.test(a)&&"0"!==a&&"1"!==a?(e.preventDefault(),setTimeout(function(){return n.val("0"+a+" / ")})):/^\d\d$/.test(a)?(e.preventDefault(),setTimeout(function(){var t,e;return t=parseInt(a[0],10),e=parseInt(a[1],10),e>2&&0!==t?n.val("0"+t+" / "+e):n.val(a+" / ")})):void 0},s=function(e){var n,r,a;if(r=String.fromCharCode(e.which),/^\d+$/.test(r))return n=t(e.currentTarget),a=n.val(),/^\d\d$/.test(a)?n.val(a+" / "):void 0},h=function(e){var n,r,a;if("/"===(a=String.fromCharCode(e.which))||" "===a)return n=t(e.currentTarget),r=n.val(),/^\d$/.test(r)&&"0"!==r?n.val("0"+r+" / "):void 0},o=function(e){var n,r;if(n=t(e.currentTarget),r=n.val(),8===e.which&&(null==n.prop("selectionStart")||n.prop("selectionStart")===r.length))return/\d\s\/\s$/.test(r)?(e.preventDefault(),setTimeout(function(){return n.val(r.replace(/\d\s\/\s$/,""))})):void 0},d=function(e){return setTimeout(function(){var n,r;return n=t(e.currentTarget),r=n.val(),r=g(r),r=r.replace(/\D/g,"").slice(0,4),T(r,n)})},C=function(t){var e;return!(!t.metaKey&&!t.ctrlKey)||32!==t.which&&(0===t.which||(t.which<33||(e=String.fromCharCode(t.which),!!/[\d\s]/.test(e))))},$=function(n){var r,a,i,o;if(r=t(n.currentTarget),i=String.fromCharCode(n.which),/^\d+$/.test(i)&&!c(r))return o=(r.val()+i).replace(/\D/g,""),a=e(o),a?o.length<=a.length[a.length.length-1]:o.length<=16},w=function(e){var n,r,a;if(n=t(e.currentTarget),r=String.fromCharCode(e.which),/^\d+$/.test(r)&&!c(n))return a=n.val()+r,a=a.replace(/\D/g,""),!(a.length>6)&&void 0},y=function(e){var n,r,a;if(n=t(e.currentTarget),r=String.fromCharCode(e.which),/^\d+$/.test(r)&&!c(n))return a=n.val()+r,a.length<=4},_=function(e){var n,a,i,o,l;if(n=t(e.currentTarget),l=n.val(),o=t.payment.cardType(l)||"unknown",!n.hasClass(o))return a=function(){var t,e,n;for(n=[],t=0,e=r.length;t<e;t++)i=r[t],n.push(i.type);return n}(),n.removeClass("unknown"),n.removeClass(a.join(" ")),n.addClass(o),n.toggleClass("identified","unknown"!==o),n.trigger("payment.cardType",o)},t.payment.fn.formatCardCVC=function(){return this.on("keypress",C),this.on("keypress",y),this.on("paste",d),this.on("change",d),this.on("input",d),this},t.payment.fn.formatCardExpiry=function(){return this.on("keypress",C),this.on("keypress",w),this.on("keypress",u),this.on("keypress",h),this.on("keypress",s),this.on("keydown",o),this.on("change",m),this.on("input",m),this},t.payment.fn.formatCardNumber=function(){return this.on("keypress",C),this.on("keypress",$),this.on("keypress",l),this.on("keydown",i),this.on("keyup",_),this.on("paste",f),this.on("change",f),this.on("input",f),this.on("input",_),this},t.payment.fn.restrictNumeric=function(){return this.on("keypress",C),this.on("paste",v),this.on("change",v),this.on("input",v),this},t.payment.fn.cardExpiryVal=function(){return t.payment.cardExpiryVal(t(this).val())},t.payment.cardExpiryVal=function(t){var e,n,r,a;return a=t.split(/[\s\/]+/,2),e=a[0],r=a[1],2===(null!=r?r.length:void 0)&&/^\d+$/.test(r)&&(n=(new Date).getFullYear(),n=n.toString().slice(0,2),r=n+r),e=parseInt(e,10),r=parseInt(r,10),{month:e,year:r}},t.payment.validateCardNumber=function(t){var n,r;return t=(t+"").replace(/\s+|-/g,""),!!/^\d+$/.test(t)&&(!!(n=e(t))&&(r=t.length,b.call(n.length,r)>=0&&(!1===n.luhn||p(t))))},t.payment.validateCardExpiry=function(e,n){var r,a,i;return"object"==typeof e&&"month"in e&&(i=e,e=i.month,n=i.year),!(!e||!n)&&(e=t.trim(e),n=t.trim(n),!!/^\d+$/.test(e)&&(!!/^\d+$/.test(n)&&(1<=e&&e<=12&&(2===n.length&&(n=n<70?"20"+n:"19"+n),4===n.length&&(a=new Date(n,e),r=new Date,a.setMonth(a.getMonth()-1),a.setMonth(a.getMonth()+1,1),a>r)))))},t.payment.validateCardCVC=function(e,r){var a,i;return e=t.trim(e),!!/^\d+$/.test(e)&&(a=n(r),null!=a?(i=e.length,b.call(a.cvcLength,i)>=0):e.length>=3&&e.length<=4)},t.payment.cardType=function(t){var n;return t?(null!=(n=e(t))?n.type:void 0)||null:null},t.payment.formatCardNumber=function(n){var r,a,i,o;return n=n.replace(/\D/g,""),(r=e(n))?(i=r.length[r.length.length-1],n=n.slice(0,i),r.format.global?null!=(o=n.match(r.format))?o.join(" "):void 0:null!=(a=r.format.exec(n))?(a.shift(),a=t.grep(a,function(t){return t}),a.join(" ")):void 0):n},t.payment.formatExpiry=function(t){var e,n,r,a;return(n=t.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/))?(e=n[1]||"",r=n[2]||"",a=n[3]||"",a.length>0?r=" / ":" /"===r?(e=e.substring(0,1),r=""):2===e.length||r.length>0?r=" / ":1===e.length&&"0"!==e&&"1"!==e&&(e="0"+e,r=" / "),e+r+a):""}}).call(this),$(document).ready(function(){$("#new_payment").is("*")&&($(".cardNumber").payment("formatCardNumber"),$(".cardExpiry").payment("formatCardExpiry"),$(".cardCode").payment("formatCardCVC"),$(".cardNumber").change(function(){$(".ccType").val($.payment.cardType(this.value))}),$(".payment_methods_radios").click(function(){$(".payment-methods").hide(),$(".payment-methods :input").prop("disabled",!0),this.checked&&($("#payment_method_"+this.value+" :input").prop("disabled",!1),$("#payment_method_"+this.value).show())}),$(".payment_methods_radios").each(function(){this.checked?($("#payment_method_"+this.value+" :input").prop("disabled",!1),$("#payment_method_"+this.value).show()):($("#payment_method_"+this.value).hide(),$("#payment_method_"+this.value+" :input").prop("disabled",!0)),$("#card_new"+this.value).is("*")&&$("#card_new"+this.value).radioControlsVisibilityOfElement("#card_form"+this.value)}),$(".cvvLink").click(function(t){window_name="cvv_info",window_options="left=20,top=20,width=500,height=500,toolbar=0,resizable=0,scrollbars=1",window.open($(this).prop("href"),window_name,window_options),t.preventDefault()}),$("select.jump_menu").change(function(){window.location=this.options[this.selectedIndex].value}))});