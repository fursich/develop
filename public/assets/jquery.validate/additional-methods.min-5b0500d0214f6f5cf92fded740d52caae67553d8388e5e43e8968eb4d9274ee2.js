!function(){function e(e){return e.replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," ").replace(/[.(),;:!?%#$'"_+=\/\-]*/g,"")}jQuery.validator.addMethod("maxWords",function(t,a,d){return this.optional(a)||e(t).match(/\b\w+\b/g).length<=d},jQuery.validator.format("Please enter {0} words or less.")),jQuery.validator.addMethod("minWords",function(t,a,d){return this.optional(a)||e(t).match(/\b\w+\b/g).length>=d},jQuery.validator.format("Please enter at least {0} words.")),jQuery.validator.addMethod("rangeWords",function(t,a,d){var r=e(t),u=/\b\w+\b/g;return this.optional(a)||r.match(u).length>=d[0]&&r.match(u).length<=d[1]},jQuery.validator.format("Please enter between {0} and {1} words."))}(),jQuery.validator.addMethod("letterswithbasicpunc",function(e,t){return this.optional(t)||/^[a-z\-.,()'"\s]+$/i.test(e)},"Letters or punctuation only please"),jQuery.validator.addMethod("alphanumeric",function(e,t){return this.optional(t)||/^\w+$/i.test(e)},"Letters, numbers, and underscores only please"),jQuery.validator.addMethod("lettersonly",function(e,t){return this.optional(t)||/^[a-z]+$/i.test(e)},"Letters only please"),jQuery.validator.addMethod("nowhitespace",function(e,t){return this.optional(t)||/^\S+$/i.test(e)},"No white space please"),jQuery.validator.addMethod("ziprange",function(e,t){return this.optional(t)||/^90[2-5]\d\{2\}-\d{4}$/.test(e)},"Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx"),jQuery.validator.addMethod("zipcodeUS",function(e,t){return this.optional(t)||/\d{5}-\d{4}$|^\d{5}$/.test(e)},"The specified US ZIP Code is invalid"),jQuery.validator.addMethod("integer",function(e,t){return this.optional(t)||/^-?\d+$/.test(e)},"A positive or negative non-decimal number please"),jQuery.validator.addMethod("vinUS",function(e){if(17!==e.length)return!1;var t,a,d,r,u,i,n=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y","Z"],o=[1,2,3,4,5,6,7,8,1,2,3,4,5,7,9,2,3,4,5,6,7,8,9],F=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],s=0;for(t=0;t<17;t++){if(r=F[t],d=e.slice(t,t+1),8===t&&(i=d),isNaN(d)){for(a=0;a<n.length;a++)if(d.toUpperCase()===n[a]){d=o[a],d*=r,isNaN(i)&&8===a&&(i=n[a]);break}}else d*=r;s+=d}return u=s%11,10===u&&(u="X"),u===i},"The specified vehicle identification number (VIN) is invalid."),jQuery.validator.addMethod("dateITA",function(e,t){var a=!1;if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(e)){var d=e.split("/"),r=parseInt(d[0],10),u=parseInt(d[1],10),i=parseInt(d[2],10),n=new Date(i,u-1,r);a=n.getFullYear()===i&&n.getMonth()===u-1&&n.getDate()===r}else a=!1;return this.optional(t)||a},"Please enter a correct date"),jQuery.validator.addMethod("iban",function(e,t){if(this.optional(t))return!0;if(!/^([a-zA-Z0-9]{4} ){2,8}[a-zA-Z0-9]{1,4}|[a-zA-Z0-9]{12,34}$/.test(e))return!1;var a=e.replace(/ /g,"").toUpperCase(),d=a.substring(0,2),r={AL:"\\d{8}[\\dA-Z]{16}",AD:"\\d{8}[\\dA-Z]{12}",AT:"\\d{16}",AZ:"[\\dA-Z]{4}\\d{20}",BE:"\\d{12}",BH:"[A-Z]{4}[\\dA-Z]{14}",BA:"\\d{16}",BR:"\\d{23}[A-Z][\\dA-Z]",BG:"[A-Z]{4}\\d{6}[\\dA-Z]{8}",CR:"\\d{17}",HR:"\\d{17}",CY:"\\d{8}[\\dA-Z]{16}",CZ:"\\d{20}",DK:"\\d{14}",DO:"[A-Z]{4}\\d{20}",EE:"\\d{16}",FO:"\\d{14}",FI:"\\d{14}",FR:"\\d{10}[\\dA-Z]{11}\\d{2}",GE:"[\\dA-Z]{2}\\d{16}",DE:"\\d{18}",GI:"[A-Z]{4}[\\dA-Z]{15}",GR:"\\d{7}[\\dA-Z]{16}",GL:"\\d{14}",GT:"[\\dA-Z]{4}[\\dA-Z]{20}",HU:"\\d{24}",IS:"\\d{22}",IE:"[\\dA-Z]{4}\\d{14}",IL:"\\d{19}",IT:"[A-Z]\\d{10}[\\dA-Z]{12}",KZ:"\\d{3}[\\dA-Z]{13}",KW:"[A-Z]{4}[\\dA-Z]{22}",LV:"[A-Z]{4}[\\dA-Z]{13}",LB:"\\d{4}[\\dA-Z]{20}",LI:"\\d{5}[\\dA-Z]{12}",LT:"\\d{16}",LU:"\\d{3}[\\dA-Z]{13}",MK:"\\d{3}[\\dA-Z]{10}\\d{2}",MT:"[A-Z]{4}\\d{5}[\\dA-Z]{18}",MR:"\\d{23}",MU:"[A-Z]{4}\\d{19}[A-Z]{3}",MC:"\\d{10}[\\dA-Z]{11}\\d{2}",MD:"[\\dA-Z]{2}\\d{18}",ME:"\\d{18}",NL:"[A-Z]{4}\\d{10}",NO:"\\d{11}",PK:"[\\dA-Z]{4}\\d{16}",PS:"[\\dA-Z]{4}\\d{21}",PL:"\\d{24}",PT:"\\d{21}",RO:"[A-Z]{4}[\\dA-Z]{16}",SM:"[A-Z]\\d{10}[\\dA-Z]{12}",SA:"\\d{2}[\\dA-Z]{18}",RS:"\\d{18}",SK:"\\d{20}",SI:"\\d{15}",ES:"\\d{20}",SE:"\\d{20}",CH:"\\d{5}[\\dA-Z]{12}",TN:"\\d{20}",TR:"\\d{5}[\\dA-Z]{17}",AE:"\\d{3}\\d{16}",GB:"[A-Z]{4}\\d{14}",VG:"[\\dA-Z]{4}\\d{16}"},u=r[d];if(void 0!==u){if(!new RegExp("^[A-Z]{2}\\d{2}"+u+"$","").test(a))return!1}for(var i,n=a.substring(4,a.length)+a.substring(0,4),o="",F=!0,s=0;s<n.length;s++)i=n.charAt(s),"0"!==i&&(F=!1),F||(o+="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(i));for(var l="",f="",h=0;h<o.length;h++){f=""+l+o.charAt(h),l=f%97}return 1===l},"Please specify a valid IBAN"),jQuery.validator.addMethod("dateNL",function(e,t){return this.optional(t)||/^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(e)},"Please enter a correct date"),jQuery.validator.addMethod("phoneNL",function(e,t){return this.optional(t)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(e)},"Please specify a valid phone number."),jQuery.validator.addMethod("mobileNL",function(e,t){return this.optional(t)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(e)},"Please specify a valid mobile number"),jQuery.validator.addMethod("postalcodeNL",function(e,t){return this.optional(t)||/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(e)},"Please specify a valid postal code"),jQuery.validator.addMethod("bankaccountNL",function(e,t){if(this.optional(t))return!0;if(!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(e))return!1;for(var a=e.replace(/ /g,""),d=0,r=a.length,u=0;u<r;u++){d+=(r-u)*a.substring(u,u+1)}return d%11==0},"Please specify a valid bank account number"),jQuery.validator.addMethod("giroaccountNL",function(e,t){return this.optional(t)||/^[0-9]{1,7}$/.test(e)},"Please specify a valid giro account number"),jQuery.validator.addMethod("bankorgiroaccountNL",function(e,t){return this.optional(t)||$.validator.methods.bankaccountNL.call(this,e,t)||$.validator.methods.giroaccountNL.call(this,e,t)},"Please specify a valid bank or giro account number"),jQuery.validator.addMethod("time",function(e,t){return this.optional(t)||/^([01]\d|2[0-3])(:[0-5]\d){1,2}$/.test(e)},"Please enter a valid time, between 00:00 and 23:59"),jQuery.validator.addMethod("time12h",function(e,t){return this.optional(t)||/^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(e)},"Please enter a valid time in 12-hour am/pm format"),jQuery.validator.addMethod("phoneUS",function(e,t){return e=e.replace(/\s+/g,""),this.optional(t)||e.length>9&&e.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)},"Please specify a valid phone number"),jQuery.validator.addMethod("phoneUK",function(e,t){return e=e.replace(/\(|\)|\s+|-/g,""),this.optional(t)||e.length>9&&e.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)},"Please specify a valid phone number"),jQuery.validator.addMethod("mobileUK",function(e,t){return e=e.replace(/\(|\)|\s+|-/g,""),this.optional(t)||e.length>9&&e.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[45789]\d{2}|624)\s?\d{3}\s?\d{3})$/)},"Please specify a valid mobile number"),jQuery.validator.addMethod("phonesUK",function(e,t){return e=e.replace(/\(|\)|\s+|-/g,""),this.optional(t)||e.length>9&&e.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[45789]\d{8}|624\d{6})))$/)},"Please specify a valid uk phone number"),jQuery.validator.addMethod("postcodeUK",function(e,t){return this.optional(t)||/^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(e)},"Please specify a valid UK postcode"),jQuery.validator.addMethod("strippedminlength",function(e,t,a){return jQuery(e).text().length>=a},jQuery.validator.format("Please enter at least {0} characters")),jQuery.validator.addMethod("email2",function(e,t){return this.optional(t)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(e)},jQuery.validator.messages.email),jQuery.validator.addMethod("url2",function(e,t){return this.optional(t)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)},jQuery.validator.messages.url),jQuery.validator.addMethod("creditcardtypes",function(e,t,a){if(/[^0-9\-]+/.test(e))return!1;e=e.replace(/\D/g,"");var d=0;return a.mastercard&&(d|=1),a.visa&&(d|=2),a.amex&&(d|=4),a.dinersclub&&(d|=8),a.enroute&&(d|=16),a.discover&&(d|=32),a.jcb&&(d|=64),a.unknown&&(d|=128),a.all&&(d=255),1&d&&/^(5[12345])/.test(e)?16===e.length:2&d&&/^(4)/.test(e)?16===e.length:4&d&&/^(3[47])/.test(e)?15===e.length:8&d&&/^(3(0[012345]|[68]))/.test(e)?14===e.length:16&d&&/^(2(014|149))/.test(e)?15===e.length:32&d&&/^(6011)/.test(e)?16===e.length:64&d&&/^(3)/.test(e)?16===e.length:64&d&&/^(2131|1800)/.test(e)?15===e.length:!!(128&d)},"Please enter a valid credit card number."),jQuery.validator.addMethod("ipv4",function(e,t){return this.optional(t)||/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(e)},"Please enter a valid IP v4 address."),jQuery.validator.addMethod("ipv6",function(e,t){return this.optional(t)||/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(e)},"Please enter a valid IP v6 address."),jQuery.validator.addMethod("pattern",function(e,t,a){return!!this.optional(t)||("string"==typeof a&&(a=new RegExp("^(?:"+a+")$")),a.test(e))},"Invalid format."),jQuery.validator.addMethod("require_from_group",function(e,t,a){var d=this,r=a[1],u=$(r,t.form).filter(function(){return d.elementValue(this)}).length>=a[0];if(!$(t).data("being_validated")){var i=$(r,t.form);i.data("being_validated",!0),i.valid(),i.data("being_validated",!1)}return u},jQuery.format("Please fill at least {0} of these fields.")),jQuery.validator.addMethod("skip_or_fill_minimum",function(e,t,a){var d=this,r=a[0],u=a[1],i=$(u,t.form).filter(function(){return d.elementValue(this)}).length,n=i>=r||0===i;if(!$(t).data("being_validated")){var o=$(u,t.form);o.data("being_validated",!0),o.valid(),o.data("being_validated",!1)}return n},jQuery.format("Please either skip these fields or fill at least {0} of them.")),jQuery.validator.addMethod("accept",function(e,t,a){var d,r,u="string"==typeof a?a.replace(/\s/g,"").replace(/,/g,"|"):"image/*",i=this.optional(t);if(i)return i;if("file"===$(t).attr("type")&&(u=u.replace(/\*/g,".*"),t.files&&t.files.length))for(d=0;d<t.files.length;d++)if(r=t.files[d],!r.type.match(new RegExp(".?("+u+")$","i")))return!1;return!0},jQuery.format("Please enter a value with a valid mimetype.")),jQuery.validator.addMethod("extension",function(e,t,a){return a="string"==typeof a?a.replace(/,/g,"|"):"png|jpe?g|gif",this.optional(t)||e.match(new RegExp(".("+a+")$","i"))},jQuery.format("Please enter a value with a valid extension."));