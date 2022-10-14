/*!
* FlexVerticalCenter.js 1.0
*
* Copyright 2011, Paul Sprangers http://paulsprangers.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Fri Oct 28 19:12:00 2011 +0100
*/(function(a){a.fn.flexVerticalCenter=function(c){var b=a.extend({cssAttribute:'margin-top',verticalOffset:0,parentSelector:null,debounceTimeout:25,deferTilWindowLoad:!1},c||{});return this.each(function(){var c=a(this),d=function(){var a=b.parentSelector&&c.parents(b.parentSelector).length?c.parents(b.parentSelector).first().height():c.parent().height();c.css(b.cssAttribute,(a-c.height())/2+parseInt(b.verticalOffset))},e;a(window).resize(function(){clearTimeout(e),e=setTimeout(d,b.debounceTimeout)}),b.deferTilWindowLoad||d(),a(window).load(function(){d()})})}})(jQuery)