var sv,si,social_dataa;typeof Object.create!='function'&&(Object.create=function(b){function a(){}return a.prototype=b,new a});function fb_twit_insta_megnific_content_image_height_manage(){var a=jQuery(window).width(),b;a>768?(b=jQuery('.svc_facebok_popup .vcfti-col-md-8').height(),jQuery('.svc_facebok_popup .vcfti-col-md-8 .fb_popup_img').css('max-height',b+'px'),jQuery(window).resize(function(){var a=jQuery(window).width(),b;a>768?(b=jQuery('.svc_facebok_popup .vcfti-col-md-8').height(),jQuery('.svc_facebok_popup .vcfti-col-md-8 .fb_popup_img').css('max-height',b+'px')):jQuery('.svc_facebok_popup .vcfti-col-md-8 .fb_popup_img').removeAttr('style')})):jQuery(window).resize(function(){var a=jQuery(window).width(),b;a>768?(b=jQuery('.svc_facebok_popup .vcfti-col-md-8').height(),jQuery('.svc_facebok_popup .vcfti-col-md-8 .fb_popup_img').css('max-height',b+'px')):jQuery('.svc_facebok_popup .vcfti-col-md-8 .fb_popup_img').removeAttr('style')})}function fb_twit_insta_megnific_script_with_content(){jQuery('a.svc_big_img,.popup-youtube,.popup-vimeo').magnificPopup({type:'ajax',mainClass:'ssocial-popup-close',closeBtnInside:!1,closeOnBgClick:!1,callbacks:{ajaxContentAdded:function(){fb_twit_insta_megnific_content_image_height_manage()}}}),jQuery('a.svc_gplus_img').magnificPopup({type:'image',mainClass:'ssocial-popup-close',closeBtnInside:!1})}function fb_twit_insta_megnific_script(){jQuery('a.svc_big_img').magnificPopup({type:'image',mainClass:'ssocial-popup-close',closeBtnInside:!1}),jQuery('.popup-youtube').magnificPopup({type:'iframe',mainClass:'mfp-fade',preloader:!1,closeBtnInside:!1,mainClass:'ssocial-popup-close',iframe:{patterns:{youtube:{index:'youtube.com',id:'v=',src:'//www.youtube.com/embed/%id%?rel=0&autoplay=0'}}}}),jQuery('a.svc_twit_video').magnificPopup({type:'ajax',mainClass:'ssocial-popup-close',closeBtnInside:!1,closeOnBgClick:!1}),jQuery('.popup-vimeo').magnificPopup({type:'iframe',mainClass:'mfp-fade',preloader:!1,closeBtnInside:!1,mainClass:'ssocial-popup-close',iframe:{patterns:{vimeo:{index:'vimeo.com',id:'/',src:'//player.vimeo.com/video/%id%?autoplay=0'}}}})}function fb_twit_insta_getSorted(b,a){return jQuery(jQuery(b).toArray().sort(function(b,c){var d=parseInt(b.getAttribute(a)),e=parseInt(c.getAttribute(a));return e-d}))}sv=0,si=0,social_dataa='',function(a,c,d,b){a.fn.svc_fb_insta_twitt_social_stream=function(h){var k={plugin_folder:'',template:'template.html',show_media:!1,media_min_width:300,length:150,effect:'',insta_access_token:'',grid_columns_count_for_desktop:'',grid_columns_count_for_tablet:'',grid_columns_count_for_mobile:'',popup:'',stream_id:''},c,g,l,i,e,d;moment.locale('en'),console.log(svc_ajax_url.laungage),moment.locale(svc_ajax_url.laungage),c=a.extend(k,h),g=a(this),i=['facebook','instagram','twitter'];function j(a){var b=!0;b&&c.callback&&(c.callback(a),social_dataa='',c.popup=='p1'?fb_twit_insta_megnific_script():fb_twit_insta_megnific_script_with_content())}e={request:function(b,c){a.ajax({url:b,dataType:'jsonp',success:c})},request_json:function(b,c){a.ajax({url:b,dataType:'json',success:c})},get_request:function(b,c){a.get(b,c,'json')},wrapLinks:function(a,b){var c=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;return b==='google-plus'||b==='tumblr'?a=a.replace(/(@|#)([a-z0-9_]+['])/ig,e.wrapGoogleplusTagTemplate):a=a.replace(c,e.wrapLinkTemplate),a},wrapLinkTemplate:function(a){return'<a target="_blank" href="'+a+'">'+a+'</a>'},wrapGoogleplusTagTemplate:function(a){return'<a target="_blank" href="https://plus.google.com/s/'+a+'" >'+a+'</a>'},shorten:function(b){return b=a.trim(b),b.length>c.length?jQuery.trim(b).substring(0,c.length).split(" ").slice(0,-1).join(" ")+"...":b},stripHTML:function(a){return typeof a=="undefined"||a===null?'':a.replace(/(<([^>]+)>)|nbsp;|\s{2,}|/ig,"")},isotop_loop:function(){sv++,console.log(si+' = '+sv),si===sv&&j(social_dataa)},isotop_insert:function(a){jQuery('.social-feed-container_'+c.stream_id).isotope({transformsEnabled:!1,isResizeBound:!1,transitionDuration:0}).isotope('insert',jQuery(a))}};function f(f,a){var g,h;this.content=a,this.content.social_network=f=='vimeo'?'vimeo-square':f,this.content.attachment=this.content.attachment===b?'':this.content.attachment,this.content.time_ago=a.dt_create.fromNow(),g=this.content.dt_create.locale('en').format("YYYY-MM-DD, hh:mm:ss"),h=new Date(g),this.content.dt_create=h.getTime(),this.content.text=e.wrapLinks(e.shorten(a.message+' '+a.description),a.social_network),this.content.moderation_passed=!c.moderation||c.moderation(this.content),this.content.effect=c.effect,this.content.grid_columns_count_for_desktop=c.grid_columns_count_for_desktop,this.content.grid_columns_count_for_tablet=c.grid_columns_count_for_tablet,this.content.grid_columns_count_for_mobile=c.grid_columns_count_for_mobile,this.content.popup=c.popup,d[f].posts.push(this)}f.prototype={render:function(){var b=d.template(this.content),e=this.content,i,j,k,h,m,n,f,l;if(a(g).children('[social-feed-id='+e.id+']').length!==0)return!1;a(g).children().length===0?a('.social-feed-container_'+c.stream_id).html()===''?social_dataa+=b:social_dataa+=b:(i=0,j=-1,a.each(a(g).children(),function(){if(a(this).attr('dt-create')<e.dt_create)return j=i,!1;i++}),social_dataa+=b),c.media_min_width&&(k='[social-feed-id='+e.id+'] img.attachment',h=a(k),n='',f=new Image,l=h.attr("src"),a(f).load(function(){f.width<c.media_min_width,delete f}).error(function(){h.hide()}).attr({src:l}))}},d={template:!1,init:function(){d.getTemplate(function(){i.forEach(function(a){c[a]&&c[a].accounts.forEach(function(b){si++,d[a].getData(b)})}),console.log(si)})},getTemplate:function(b){if(d.template)return b();if(c.template_html)return d.template=doT.template(c.template_html),b();a.get(c.template,function(a){return d.template=doT.template(a),b()})},twitter:{posts:[],loaded:!1,api:'http://api.tweecool.com/',getData:function(g){var h,l,i,j,f,b,k,e,m;switch(a('#social_load_more_btn_'+c.stream_id).attr('data-twitter')=='finish'&&(sv++,h=a('#social_load_more_btn_'+c.stream_id).attr('data-twitter'),l=a('#social_load_more_btn_'+c.stream_id).attr('data-instagram'),i=a('#social_load_more_btn_'+c.stream_id).attr('data-facebook'),h==''&&l==''&&i==''&&a('#svc_infinite').hide()),g[0]){case'@':j=g.substr(1),f='',b=a('#social_load_more_btn_'+c.stream_id).attr('data-twitter'),b!=''&&typeof b!='undefined'&&(f='&max_id='+b,c.twitter.limit=parseInt(c.twitter.limit)+1),b!='finish'&&a.ajax({url:svc_ajax_url.url,data:'action=svc_fb_twit_insta_get_tweet&user_name='+j+'&limit='+c.twitter.limit+f,dataType:"json",type:'POST',success:function(a){d.twitter.utility.getPosts(a,'')}});break;case'#':k=g.substr(1),typeof c.twitter.loadmore=='undefined'?(e='action=svc_fb_twit_insta_get_search_tweet&q='+k+'&limit='+c.twitter.limit):(m=c.twitter.loadmore,e='action=svc_fb_twit_insta_get_search_tweet&other=yes&limit='+c.twitter.limit+'&que='+m.replace('?','')),a.ajax({url:svc_ajax_url.url,data:e,dataType:"json",type:'POST',success:function(b){typeof b.search_metadata=="undefined"&&(b.search_metadata="undefined",b.search_metadata.next_results="undefined"),typeof b.search_metadata.next_results!="undefined"&&b.search_metadata.next_results!=="undefined"?a('#social_load_more_btn_'+c.stream_id).attr('data-twitter',b.search_metadata.next_results):a('#social_load_more_btn_'+c.stream_id).attr('data-twitter',''),d.twitter.utility.getPosts(b.statuses,'search')}});break;default:}},utility:{getPosts:function(b,h){if(b.length==0&&a('#social_load_more_btn_'+c.stream_id).attr('data-twitter','finish'),b){var g=0;a.each(b,function(){var b,e;g++,b=this,h!='search'&&a('#social_load_more_btn_'+c.stream_id).attr('data-twitter',b.id),e=new f('twitter',d.twitter.utility.unifyPostData(b)),e.render()}),b.length==g&&e.isotop_loop()}},unifyPostData:function(b){var d={},f,g,i,h,e;return b.id&&(d.id=b.id,d.dt_create=moment(b.created_at,'dd MMM DD HH:mm:ss ZZ YYYY','en'),d.author_link='http://twitter.com/'+b.user.screen_name,location.protocol=='https:'?d.author_picture=b.user.profile_image_url_https:d.author_picture=b.user.profile_image_url,d.post_url=d.author_link+'/status/'+b.id_str,d.author_name=b.user.name,d.message=b.full_text?b.full_text:b.text,d.description='',d.link='http://twitter.com/'+b.user.screen_name+'/status/'+b.id_str,f='',typeof b.retweeted_status!="undefined"&&typeof b.retweeted_status.extended_entities!="undefined"&&typeof b.retweeted_status.extended_entities.media!="undefined"?(g=b.retweeted_status.extended_entities.media[0].type,typeof b.retweeted_status.extended_entities.media[0].video_info!="undefined"&&(i=b.retweeted_status.extended_entities.media[0].video_info.variants,h=0,a.each(i,function(){var a=this;a.content_type=="video/mp4"&&h<a.bitrate&&(h=a.bitrate,f=a.url)}))):typeof b.extended_entities!="undefined"&&typeof b.extended_entities.media!="undefined"?(g=b.extended_entities.media[0].type,typeof b.extended_entities.media[0].video_info!="undefined"&&(i=b.extended_entities.media[0].video_info.variants,h=0,a.each(i,function(){var a=this;a.content_type=="video/mp4"&&h<a.bitrate&&(h=a.bitrate,f=a.url)}))):(g='photo'),c.show_media===!0&&(typeof b.retweeted_status!="undefined"&&typeof b.retweeted_status.entities.media!="undefined"&&(location.protocol=='https:'?(e=b.retweeted_status.entities.media[0].media_url_https):(e=b.retweeted_status.entities.media[0].media_url),e&&(c.popup=='p1'&&(g=='video'?d.attachment='<a href="'+e+'" class="svc_big_img svc_twit_video" data-mfp-src="'+svc_ajax_url.url+'?action=svc_fb_twit_insta_inline_twit_video_popup&video_url='+f+'"><img class="svc_attachment" src="'+e+'" /></a>':d.attachment='<a href="'+e+'" class="svc_big_img"><img class="svc_attachment" src="'+e+'" /></a>'),c.popup=='p2'&&(g=='video'?d.attachment='<a href="'+e+'" data-mfp-src="'+svc_ajax_url.url+'?action=svc_fb_twit_insta_inline_social_popup&network=twitter&twiit_id='+b.id_str+'&image_url='+f+'&type=video&authore_name='+b.user.name+'&authore_img='+b.user.profile_image_url+'&retweet='+b.retweet_count+'&like='+b.favorite_count+'&username='+b.user.screen_name+'&msg='+d.message+'" class="svc_big_img svc_twit_video"><img class="svc_attachment" src="'+e+'" /></a>':d.attachment='<a href="'+e+'" data-mfp-src="'+svc_ajax_url.url+'?action=svc_fb_twit_insta_inline_social_popup&network=twitter&twiit_id='+b.id_str+'&image_url='+e+'&authore_name='+b.user.name+'&authore_img='+b.user.profile_image_url+'&retweet='+b.retweet_count+'&like='+b.favorite_count+'&username='+b.user.screen_name+'&msg='+d.message+'" class="svc_big_img"><img class="svc_attachment" src="'+e+'" /></a>'))),typeof b.entities.media!="undefined"&&b.entities.media.length>0&&(location.protocol=='https:'?(e=b.entities.media[0].media_url_https):(e=b.entities.media[0].media_url),e&&(c.popup=='p1'&&(g=='video'?d.attachment='<a href="'+e+'" class="svc_big_img svc_twit_video" data-mfp-src="'+svc_ajax_url.url+'?action=svc_fb_twit_insta_inline_twit_video_popup&video_url='+f+'"><img class="svc_attachment" src="'+e+'" /></a>':d.attachment='<a href="'+e+'" class="svc_big_img"><img class="svc_attachment" src="'+e+'" /></a>'),c.popup=='p2'&&(g=='video'?d.attachment='<a href="'+e+'" data-mfp-src="'+svc_ajax_url.url+'?action=svc_fb_twit_insta_inline_social_popup&network=twitter&twiit_id='+b.id_str+'&image_url='+f+'&type=video&authore_name='+b.user.name+'&authore_img='+b.user.profile_image_url+'&retweet='+b.retweet_count+'&like='+b.favorite_count+'&username='+b.user.screen_name+'&msg='+d.message+'" class="svc_big_img svc_twit_video"><img class="svc_attachment" src="'+e+'" /></a>':d.attachment='<a href="'+e+'" data-mfp-src="'+svc_ajax_url.url+'?action=svc_fb_twit_insta_inline_social_popup&network=twitter&twiit_id='+b.id_str+'&image_url='+e+'&authore_name='+b.user.name+'&authore_img='+b.user.profile_image_url+'&retweet='+b.retweet_count+'&like='+b.favorite_count+'&username='+b.user.screen_name+'&msg='+d.message+'" class="svc_big_img"><img class="svc_attachment" src="'+e+'" /></a>'))))),d.feed="svc_twitter",d}}},facebook:{posts:[],graph:'https://graph.facebook.com/',loaded:!1,getData:function(g){var b,h='limit='+c.facebook.limit+'&fields=id,full_picture,created_time,from{id,name,picture},message,link,type,shares,object_id,story',i='&access_token='+c.facebook.access_token+'&callback=?',f,j,k,l;if(typeof c.facebook.loadmore=='undefined')switch(g[0]){case'@':f=g.substr(1),a.ajax({url:svc_ajax_url.url,data:'action=svc_fbs_insta_twit_get_fb_post&username='+f+'&count='+c.facebook.limit+'&cache_time='+c.cache_time,dataType:"json",type:'POST',success:function(a){d.facebook.utility.getPosts(a)}}),b=d.facebook.graph+'v2.12/'+f+'/posts?'+h+i,console.log(b);break;case'#':f=g.substr(1),b=d.facebook.graph+'v2.12/'+f+'/feed?'+h+i;break;default:f=g.substr(1),b=d.facebook.graph+'v2.12/'+f+'/posts?'+h+i}else c.facebook.loadmore!=''&&(b=c.facebook.loadmore,e.request(b,d.facebook.utility.getPosts)),c.facebook.loadmore==''&&(sv++,j=a('#social_load_more_btn_'+c.stream_id).attr('data-twitter'),k=a('#social_load_more_btn_'+c.stream_id).attr('data-instagram'),l=a('#social_load_more_btn_'+c.stream_id).attr('data-facebook'),j==''&&k==''&&l==''&&a('#svc_infinite').hide())},utility:{prepareAttachment:function(a){var d=a.type,b=a.full_picture,e,f,g,h;return a.full_picture&&(b=a.full_picture),c.popup=='p1'?'<a href="'+b+'" class="svc_big_img"><img class="svc_attachment" src="'+b+'" /></a>':(typeof a.shares=='undefined'?(e=0):(e=a.shares.count),f=a.message?a.message:a.story,d=='video')?'<a href="'+b+'" data-mfp-src="'+svc_ajax_url.url+'?action=svc_fb_twit_insta_inline_social_popup&network=facebook&facebook_id='+a.object_id+'&fb_type='+d+'&story='+f+'&share='+e+'" class="svc_big_img"><img class="svc_attachment" src="'+b+''+'" /></a>':d=='link'?(g=a.id,h=g.split('_'),g=h[1],'<a href="'+b+'" data-mfp-src="'+svc_ajax_url.url+'?action=svc_fb_twit_insta_inline_social_popup&network=facebook&facebook_id='+g+'&fb_type='+d+'&story='+f+'&share='+e+'&img='+b+'" class="svc_big_img"><img class="svc_attachment" src="'+b+''+'" /></a>'):'<a href="'+b+'" data-mfp-src="'+svc_ajax_url.url+'?action=svc_fb_twit_insta_inline_social_popup&network=facebook&facebook_id='+a.object_id+'&fb_type='+d+'&story='+f+'&share='+e+'" class="svc_big_img"><img class="svc_attachment" src="'+b+''+'" /></a>'},getExternalImageURL:function(a,b){return a=decodeURIComponent(a).split(b+'=')[1],a.indexOf('fbcdn-sphotos')===-1?a.split('&')[0]:a},getPosts:function(b){if(typeof b.paging=="undefined"&&(b.paging="undefined",b.paging.next="undefined"),typeof b.paging.next!="undefined"&&b.paging.next!=="undefined"?a('#social_load_more_btn_'+c.stream_id).attr('data-facebook',b.paging.next):a('#social_load_more_btn_'+c.stream_id).attr('data-facebook',''),b.data){var g=0;b.data.forEach(function(a){if(g++,typeof a.message!='undefined'){var b=new f('facebook',d.facebook.utility.unifyPostData(a));b.render()}}),b.data.length==g&&e.isotop_loop()}},unifyPostData:function(a){var b={},e=a.message?a.message:a.story,f;return b.id=a.id,b.dt_create=moment(a.created_time),b.author_link='http://facebook.com/'+a.from.id,b.author_picture=a.from.picture.data.url,b.author_name=a.from.name,b.name=a.name||"",b.message=e||'',b.description=a.description?a.description:'',b.link=a.link?a.link:'http://facebook.com/'+a.from.id,c.show_media===!0&&a.full_picture&&(f=d.facebook.utility.prepareAttachment(a),f&&(b.attachment=f)),b.feed="svc_facebook",b}}},instagram:{posts:[],api:'https://api.instagram.com/v1/',loaded:!0,getData:function(f){var b,l,g,h,i,j,k;if(typeof c.instagram.loadmore=='undefined'){if(c.instagram.instagram_access_token)switch(f[0]){case'@@':l=f.substr(1),b=d.instagram.api+'users/self/?access_token='+c.instagram.instagram_access_token,e.request(b,d.instagram.utility.getUsers);break;case'#':g=f.substr(1),b=d.instagram.api+'tags/'+g+'/media/recent/?'+'client_id='+c.instagram.client_id+'&access_token='+c.instagram.instagram_access_token+'&'+'count='+c.instagram.limit+'&callback=?',e.request(b,d.instagram.utility.getImages);break;case'@':h=f.substr(1),b=d.instagram.api+'users/'+h+'/?client_id='+c.instagram.client_id+'&access_token='+c.instagram.instagram_access_token+'&'+'count='+c.instagram.limit+'&callback=?',e.request(b,d.instagram.utility.getUsers);default:}}else c.instagram.loadmore!=''&&(b=c.instagram.loadmore,e.request(b,d.instagram.utility.getImages)),c.instagram.loadmore==''&&(sv++,i=a('#social_load_more_btn_'+c.stream_id).attr('data-twitter'),j=a('#social_load_more_btn_'+c.stream_id).attr('data-instagram'),k=a('#social_load_more_btn_'+c.stream_id).attr('data-facebook'),i==''&&j==''&&k==''&&a('#svc_infinite').hide())},utility:{getImages:function(b){if(typeof b.pagination=="undefined"&&(b.pagination='undefined',b.pagination.next_url="undefined"),typeof b.pagination.next_url!="undefined"&&b.pagination.next_url!=="undefined"?a('#social_load_more_btn_'+c.stream_id).attr('data-instagram',b.pagination.next_url):a('#social_load_more_btn_'+c.stream_id).attr('data-instagram',''),b.data){var g=0;b.data.forEach(function(a){g++;var b=new f('instagram',d.instagram.utility.unifyPostData(a));b.render()}),b.data.length==g&&e.isotop_loop()}},getUsers:function(b){typeof b.pagination=="undefined"&&(b.pagination="undefined",b.pagination.next_url="undefined"),typeof b.pagination.next_url!="undefined"&&b.pagination.next_url!=="undefined"?a('#social_load_more_btn_'+c.stream_id).attr('data-instagram',b.pagination.next_url):a('#social_load_more_btn_'+c.stream_id).attr('data-instagram',''),jQuery.isArray(b.data)||(b.data=[b.data]),b.data.forEach(function(a){var b=d.instagram.api+'users/'+a.id+'/media/recent/?'+'access_token='+c.instagram.instagram_access_token+'&'+'count='+c.instagram.limit+'&callback=?';e.request(b,d.instagram.utility.getImages)})},unifyPostData:function(a){var b={};return b.id=a.id,b.dt_create=moment(a.created_time*1e3),b.author_link='http://instagram.com/'+a.user.username,b.author_picture=a.user.profile_picture,b.author_name=a.user.full_name,b.message=a.caption&&a.caption?a.caption.text:'',b.description='',b.link=a.link,c.show_media&&(c.popup=='p1'?b.attachment='<a href="'+a.images.standard_resolution.url+'" class="svc_big_img"><img class="svc_attachment" src="'+a.images.standard_resolution.url+''+'" /></a>':b.attachment='<a href="'+a.images.standard_resolution.url+'" data-mfp-src="'+svc_ajax_url.url+'?action=svc_fb_twit_insta_inline_social_popup&network=instagram&url='+a.link+'" class="svc_big_img"><img class="svc_attachment" src="'+a.images.standard_resolution.url+''+'" /></a>'),b.feed="svc_instagram",b}}},blogspot:{loaded:!0,getData:function(a){var b,c;switch(a[0]){case'@':c=a.substr(1),b='http://'+c+'.blogspot.com/feeds/posts/default?alt=json-in-script&callback=?',request(b,getPosts);break;default:}},utility:{getPosts:function(b){a.each(b.feed.entry,function(){var a={},b=this;a.id=b.id.$t.replace(/[^a-z0-9]/gi,''),a.dt_create=moment(b.published.$t),a.author_link=b.author[0].uri.$t,a.author_picture='http:'+b.author[0].gd$image.src,a.author_name=b.author[0].name.$t,a.message=b.title.$t+'</br></br>'+stripHTML(b.content.$t),a.description='',a.link=b.link.pop().href,c.show_media&&b.media$thumbnail&&(a.attachment='<img class="svc_attachment" src="'+b.media$thumbnail.url+'" />'),a.render()})}}}},d.init(),c.update_period&&setInterval(function(){return d.init()},c.update_period)}}(jQuery)