function svc_social_add_animation(a,b){a.removeClass('animated '+b).addClass('animated '+b).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',function(c){a.css({'-webkit-animation':'none','-webkit-animation-name':'none','animation-name':'none',animation:'none'}),a.removeClass('animated '+b).removeAttr('vc-social-effect')})}function svc_social_add_animation(){jQuery('[vc-social-effect]').each(function(){var a=jQuery(this).attr('vc-social-effect');svc_social_add_animation(jQuery(this),a)})}