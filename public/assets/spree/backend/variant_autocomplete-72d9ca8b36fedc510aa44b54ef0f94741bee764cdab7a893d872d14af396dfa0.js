(function(){var e,t;t=HandlebarsTemplates["variants/autocomplete"],e=function(e){return e.images[0]!==undefined&&e.images[0].mini_url!==undefined&&(e.image=e.images[0].mini_url),t({variant:e})},$.fn.variantAutocomplete=function(t){return null==t&&(t={}),this.select2({placeholder:Spree.translations.variant_placeholder,minimumInputLength:3,initSelection:function(e,t){return Spree.ajax({url:Spree.routes.variants_api+"/"+e.val(),success:t})},ajax:{url:Spree.routes.variants_api,datatype:"json",quietMillis:500,params:{headers:{"X-Spree-Token":Spree.api_key}},data:function(){return function(e){var n;return n={q:{product_name_or_sku_cont:e},token:Spree.api_key},_.extend(n,t)}}(),results:function(e){return window.variants=e.variants,{results:e.variants}}},formatResult:e,formatSelection:function(e){return e.options_text?Select2.util.escapeMarkup(e.name+" ("+e.options_text):Select2.util.escapeMarkup(e.name)}})}}).call(this);