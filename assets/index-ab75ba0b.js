(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function h(){$("#map1").length>0&&ymaps.ready(function(){var e="./img/map.balloon.png",t=[-21,-58],n=[43,62],a=new ymaps.Map("map1",{center:[45.017382,38.936556],zoom:16,controls:["zoomControl"]},{searchControlProvider:"yandex#search"}),o=new ymaps.Placemark([45.017382,38.937656],{balloonContent:"г. Краснодар, Тургеневское шоссе, 20 Д",hintContent:"г. Краснодар, Тургеневское шоссе, 20 Д"},{iconLayout:"default#image",iconImageHref:e,iconImageSize:n,iconImageOffset:t});a.geoObjects.add(o)})}function p(){function e(a,o){var r=document.createElement("script");r.readyState?r.onreadystatechange=function(){(r.readyState=="loaded"||r.readyState=="complete")&&(r.onreadystatechange=null,o())}:r.onload=function(){o()},r.src=a,document.getElementsByTagName("head")[0].appendChild(r)}var t=0;function n(){t==0&&(t=1,e("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1",function(){ymaps.load(h)}))}$("#map1").on("touchstart",function(){n()}),$("#map1").mouseenter(function(){n()}),$("#map1").click(function(){n()})}let u=!1;$(".fancybox-gallery").fancybox({theme:"light",helpers:{thumbs:!0},openEffect:"fade",closeEffect:"fade",nextEffect:"fade",prevEffect:"fade",showNavArrows:!0});$(document).on("click",".popup",function(){var e=$(this).attr("href"),t=$(this).data("title"),n=$(this).data("comment"),a=$(this).data("form_name"),o=$(this).data("form_type_model_name"),r=$(this).data("form_diler"),i=$(this).attr("_select_val");return $(".popup_container .form_title").html(t),$.fancybox.open($(e).html(),{padding:0,content:$(e).html(),scrolling:"no",margin:5,afterShow:function(){$(".popup_container input[name='title']").val(t),$(".popup_container input[name='comment']").val(n),$(".popup_container input[name='form_name']").val(a),$(".popup_container input[name='form_type_model_name']").val(o),$(".popup_container input[name='form_diler']").val(r),$(".popup_container").attr("data-callkeeper_name",t),$(".popup_container").attr("data-flash-title",t),typeof i<"u"&&$(".popup_container select").val(i)}}),d(),u||(m(),u=!0),!1});m();function d(){$("input[name=phone]").inputmask("8(999) 999-99-99",e);return;var e}function m(){d(),$("body").on("submit","form:not(#ckWrapper form)",function(e){e.preventDefault(),$(this),$("input,textarea,select",this).closest(".form-group").removeClass("has-danger");var t=!1;if($(".nacc",this).each(function(){($(this)[0].tagName=="SELECT"||$(this)[0].tagName=="INPUT")&&$.trim($(this).val())==""&&(t=!0,$(this).closest(".form-group").addClass("has-danger"))}),t==!0)return alert("В одном или нескольких полях введены неверные данные"),!1;var n=$(this).data("title"),a=$(this).data("form_name"),o=$(this).data("form_type_model_name"),r=this;return _({title:n,name:$("input[name=name]",r).val(),phone:$("input[name=phone]",r).val()}),$.post("https://alexsab.ru/lead/baic/krasnodar/",$(this).serialize()+"&form="+this.id+"&form_title="+n,function(i){console.log("form_site :"+window.location.href),console.log("form_name :"+a),console.log("form_type_model_name :"+o),console.log("form_action :send_form"),console.log("event :event_ok"),console.log("data :",i),console.log("answer :",i.answer),i.answer=="OK"?($("form").trigger("reset"),alert("Сообщение успешно отправлено")):i.answer=="required"?alert(i.message):i.answer=="error"&&alert(i.error)},"json").done(function(){console.log("second success")}).fail(function(){console.log("error")}).always(function(){console.log("finished")}),!1})}function _(e){typeof e>"u"&&(e=[]),typeof e.name>"u"&&(e.name=""),typeof e.phone>"u"&&(e.phone=""),typeof e.title>"u"&&(e.title=""),typeof e.calltouch_route_key>"u"&&(e.calltouch_route_key="");var t={},n="",a="",o="",r="undefined";try{n=e.phone,a=e.name,o=e.title,r=e.calltouch_route_key,t.name=a,t.phone=n,t.title=o,t.calltouch_route_key=r,t.url=document.location.href,t.referrer=document.referrer,t.user_agent=window.navigator.userAgent,console.log("sendCallTouchData",t),t.ya=[],t.ga=[];var i="",l="";if(typeof ga<"u"&&typeof ga=="function")try{ga(function(f){if(typeof ga.getAll=="function"){var s=ga.getAll();if(typeof s=="object"&&s.length>0){for(l_key in s){l_ga=s[l_key],i=l_ga.get("clientId"),l=l_ga.get("trackingId"),l_ga_find=0;for(l_temp_ga_key in t.ga)l_temp_ga_value=t.ga[l_temp_ga_key],l_temp_ga_value.trackingId==l&&(l_ga_find=1);l_ga_find!=1&&t.ga.push({type:"list",trackingId:l,clientId:i})}//!!OLD!!
s.length>0&&(i=s[0].get("clientId"),l=s[0].get("trackingId"))}}//!!OLD!!
})}catch{try{i=tracker.get("clientId"),l=tracker.get("trackingId"),t.ga.push({type:"single",trackingId:l,clientId:i})}catch{}}if(typeof Ya<"u"&&typeof Ya=="object"&&typeof Ya.Metrika=="function"&&typeof Ya.Metrika.counters=="function"&&(l_ya_counters=Ya.Metrika.counters(),typeof l_ya_counters=="object"&&typeof l_ya_counters.length<"u"&&l_ya_counters.length>0))for(var c=0;c<l_ya_counters.length;c++)l_ya_counter=l_ya_counters[c],l_ya_counter_type=l_ya_counter.type,l_ya_counter_id=l_ya_counter.id,l_ya_client_id=window["yaCounter"+l_ya_counter_id].getClientID(),t.ya.push({type:l_ya_counter_type,trackingId:l_ya_counter_id,clientId:l_ya_client_id})}catch{}t.calltouchSessionId="";try{t.calltouchSessionId=window.ct("calltracking_params")[0].sessionId}catch{}console.log("[[[==",JSON.stringify(t))}function g(e){var t=0;$(e).attr("_shift")!=null&&(t=$(e).attr("_shift"));var n=0;$(e).attr("_m_shift")!=null&&(n=$(e).attr("_m_shift"));var a=$(window).width();a<=991&&(t=n);var o=$(e).attr("href"),r=$(o).offset().top-$("body").offset().top-t;$("html,body").animate({scrollTop:r},500)}function y(){$('.anchor[href^="#"]').click(function(){return g(this),!1}),$('.anchor2[href^="#"]').click(function(){var e=$(this).attr("_model");$("#filter_table select[name=models]").length>0&&$("#filter_table select[name=models] option[value='"+e+"']").prop("selected",!0).change(),$(this).attr("_shift")!=null&&$(this).attr("_shift");var t=$(this).attr("href"),n=$(t).offset().top-$("body").offset().top;return $("html,body").animate({scrollTop:n},500),!1})}function v(){var e=1;$(".resp_table").each(function(){$(this).addClass("resp_table"+e);var t="",n=1;$("th",this).each(function(){var a=$(this).html();a=a.replace("<br>"," "),a=a.replace("<br/>"," "),a=a.replace("</br>"," "),a=a.replace("/r",""),a=a.replace(/\r|\n/g,""),a=a.replace(/<\/?[^>]+>/g,""),a=a.replace(/\s{2,}/g," "),a!=""&&(t+=".resp_table"+e+" tr td:nth-child("+n+"):before {content:'"+a+"'}"),n++}),$(this).after("<style>"+t+"</style>"),e++})}function w(){$(document).on("change","input[name='agree']",function(){var e=$(this).closest("form");$("input[name='agree']:not(:checked)",e).length==0?$(e).removeClass("not_agree"):$(e).addClass("not_agree")}),$(document).on("click","form.not_agree input[type='submit'],form.not_agree button[type='submit'],form.not_agree a.submit",function(){var e=$(this).closest("form");if($(e).hasClass("not_agree"))return!1}),$(document).on("submit","form",function(){if($(this).hasClass("not_agree"))return!1}),$("body").on("change",".agree",function(){var e=$(this).closest("form");$(".agree:not(:checked)",e).length==0?$(e).removeClass("not_agree"):$(e).addClass("not_agree")}),$("body").on("submit","form",function(){if($(this).hasClass("not_agree"))return!1})}$.fn.hasAttr=function(e){return this.attr(e)!==void 0};function b(){$(document).on("click",".row_toggle",function(){if($(".row_toggle_container:animated").length==0)if($(this).hasClass("open"))$(this).removeClass("open"),$(this).hasAttr("data-target")?($(".row_toggle_container[data-target='"+$(this).attr("data-target")+"']").slideUp(),$($(this).attr("data-target")).slideUp()):$(this).next(".row_toggle_container").slideUp();else{$(this).addClass("open");var e=$(this).closest(".only_one");e.length>0&&($(".row_toggle",e).removeClass("open"),$(".row_toggle_container",e).slideUp()),$(this).hasAttr("data-target")?($(".row_toggle_container[data-target='"+$(this).attr("data-target")+"']").slideDown(),$($(this).attr("data-target")).slideDown()):$(this).next(".row_toggle_container").slideDown()}}),$(".row_toggle").each(function(){$(this).hasClass("open")?$(this).hasAttr("data-target")?$($(this).attr("data-target")).show():$(this).next(".row_toggle_container").show():$(this).hasAttr("data-target")?$($(this).attr("data-target")).hide():$(this).next(".row_toggle_container").hide()})}function k(){window.alert=function(e,t){$("body").append("<style>.alert{ font-size: 20px; }</style>"),typeof t<"u"&&setTimeout(function(){$.fancybox.close()},t),e='<div class="alert">'+e+"</div>";var n=$.fancybox.getInstance();if(typeof n>"u"||n==!1){$.fancybox.open(e);return}n.current.$slide.trigger("onReset"),n.setContent(n.current,e)}}function C(){var e;function t(){$(window).width()<768&&(e=$("header").outerHeight(!0)+"px",$(".menu").css("top",e))}$(".m_button").click(function(){t(),$(this).toggleClass("active"),$(".menu").toggleClass("active")}),$(".menu a").click(function(){$(".m_button").hasClass("active")&&($(".m_button").removeClass("active"),$(".menu").removeClass("active"))})}$(function(){k(),w(),y(),p(),v(),b(),C()});$(function(){$(".kompl .items .item").click(function(){let t=$(this).attr("data-img");$(this).closest(".kompl").find(".row1 img").attr("src",t+"?v=2")}),$(".color-link").click(function(t){if($(this).hasClass("active"))return!1;const n=$(this).closest(".model"),a=n.attr("data-dir"),o=$(this).attr("data-color"),r=$(this).attr("title");return n.find(".color-link").removeClass("active"),n.find(`[data-color=${o}]`).addClass("active"),n.find(".color-img-preview").attr("src",`img/${a}/${o}.png`),n.find(".color-name").text(r),!1});function e(){const t=$(window).width(),n=$(".container").width();t>=1024?$(".map-info").css("left",(t-n)/2+"px"):$(".map-info").removeAttr("style")}e(),$(window).resize(function(){e()})});$(function(){$(".gallery .filter a").click(function(){$(".gallery .filter a").removeClass("active"),$(this).addClass("active");let e=$(this).attr("data-target");return $(".gallery .items1, .gallery .items2").removeClass("show"),$(e).addClass("show"),!1}),$(window).scroll(function(){var e=$(document).scrollTop();let t=$(window).height(),n=$(".ga:visible");$(n).each(function(){let a=$(this);e-a.outerHeight();let o=a.offset().top;if(e<o&&o<e+t){let i=(o-e)*100/t,l=parseInt(i/10)*10;l!=0&&(a.removeClass("ga90 ga80 ga70 ga60 ga50 ga40 ga30 ga20 ga10"),a.addClass("ga"+l))}})})});$(function(){$(".disclamer_switch").click(function(){return $(".disclamer").slideToggle({start:function(){$("html, body").animate({scrollTop:$("html, body").height()},"slow")}}),!1})});
