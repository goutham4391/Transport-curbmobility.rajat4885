(function(a){a.fn.viewportChecker=function(e){var b={classToAdd:'visible',classToRemove:'invisible',classToAddForFullView:'full-visible',removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window},d,c;return a.extend(b,e),d=this,c={height:a(b.scrollBox).height(),width:a(b.scrollBox).width()},this.checkElements=function(){var e,f;b.scrollHorizontal?(e=Math.max(a('html').scrollLeft(),a('body').scrollLeft(),a(window).scrollLeft()),f=e+c.width):(e=Math.max(a('html').scrollTop(),a('body').scrollTop(),a(window).scrollTop()),f=e+c.height),d.each(function(){var d=a(this),g={},h={},i,l,j,k;if(d.data('vp-add-class')&&(h.classToAdd=d.data('vp-add-class')),d.data('vp-remove-class')&&(h.classToRemove=d.data('vp-remove-class')),d.data('vp-add-class-full-view')&&(h.classToAddForFullView=d.data('vp-add-class-full-view')),d.data('vp-keep-add-class')&&(h.removeClassAfterAnimation=d.data('vp-remove-after-animation')),d.data('vp-offset')&&(h.offset=d.data('vp-offset')),d.data('vp-repeat')&&(h.repeat=d.data('vp-repeat')),d.data('vp-scrollHorizontal')&&(h.scrollHorizontal=d.data('vp-scrollHorizontal')),d.data('vp-invertBottomOffset')&&(h.scrollHorizontal=d.data('vp-invertBottomOffset')),a.extend(g,b),a.extend(g,h),d.data('vp-animated')&&!g.repeat)return;String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*c.height),i=!g.scrollHorizontal?d.offset().top:d.offset().left,l=!g.scrollHorizontal?i+d.height():i+d.width(),j=Math.round(i)+g.offset,k=!g.scrollHorizontal?j+d.height():j+d.width(),g.invertBottomOffset&&(k-=g.offset*2),j<f&&k>e?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),l<=f&&i>=e?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data('vp-animated',!0),g.removeClassAfterAnimation&&d.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data('vp-animated',!1))})},('ontouchstart'in window||'onmsgesturechange'in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(b.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(e){c={height:a(b.scrollBox).height(),width:a(b.scrollBox).width()},d.checkElements()}),this.checkElements(),this}})(jQuery)