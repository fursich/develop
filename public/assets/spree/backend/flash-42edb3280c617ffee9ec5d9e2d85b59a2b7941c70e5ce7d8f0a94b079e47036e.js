(function(){var a,n;n=5e3,a=500,$(function(){var t;return t=$(".flash"),setTimeout(function(){return t.fadeOut(a)},n)}),window.show_flash=function(t,e){var r,s;return r=$(".js-flash-wrapper"),s=$('<div class="flash '+t+'" />'),r.prepend(s),s.html(e).show().delay(n).fadeOut(a)}}).call(this);