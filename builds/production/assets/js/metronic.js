var Metronic=function(){var t,e=!1,o=!1,a=!1,n=!1,i=[],r="../../assets/",l=r+"global/img/",s={blue:"#89C4F4",red:"#F3565D",green:"#1bbc9b",purple:"#9b59b6",grey:"#95a5a6",yellow:"#F8CB00"},c=function(){"rtl"===$("body").css("direction")&&(e=!0),o=!!navigator.userAgent.match(/MSIE 8.0/),a=!!navigator.userAgent.match(/MSIE 9.0/),n=!!navigator.userAgent.match(/MSIE 10.0/),n&&$("html").addClass("ie10"),(n||a||o)&&$("html").addClass("ie")},d=function(){for(var t=0;t<i.length;t++){var e=i[t];e.call()}},u=function(){var t;if(o){var e;$(window).resize(function(){e!=document.documentElement.clientHeight&&(t&&clearTimeout(t),t=setTimeout(function(){d()},50),e=document.documentElement.clientHeight)})}else $(window).resize(function(){t&&clearTimeout(t),t=setTimeout(function(){d()},50)})},h=function(){$("body").on("click",".portlet > .portlet-title > .tools > a.remove",function(t){t.preventDefault(),$(this).closest(".portlet").remove()}),$("body").on("click",".portlet > .portlet-title > .tools > a.reload",function(t){t.preventDefault();var e=$(this).closest(".portlet").children(".portlet-body"),o=$(this).attr("data-url"),a=$(this).attr("data-error-display");o?(Metronic.blockUI({target:e,iconOnly:!0}),$.ajax({type:"GET",cache:!1,url:o,dataType:"html",success:function(t){Metronic.unblockUI(e),e.html(t)},error:function(t,o,n){Metronic.unblockUI(e);var i="Error on reloading the content. Please check your connection and try again.";"toastr"==a&&toastr?toastr.error(i):"notific8"==a&&$.notific8?($.notific8("zindex",11500),$.notific8(i,{theme:"ruby",life:3e3})):alert(i)}})):(Metronic.blockUI({target:e,iconOnly:!0}),window.setTimeout(function(){Metronic.unblockUI(e)},1e3))}),$('.portlet .portlet-title a.reload[data-load="true"]').click(),$("body").on("click",".portlet > .portlet-title > .tools > .collapse, .portlet .portlet-title > .tools > .expand",function(t){t.preventDefault();var e=$(this).closest(".portlet").children(".portlet-body");$(this).hasClass("collapse")?($(this).removeClass("collapse").addClass("expand"),e.slideUp(200)):($(this).removeClass("expand").addClass("collapse"),e.slideDown(200))})},p=function(){if($().uniform){var t=$("input[type=checkbox]:not(.toggle, .make-switch), input[type=radio]:not(.toggle, .star, .make-switch)");t.size()>0&&t.each(function(){0==$(this).parents(".checker").size()&&($(this).show(),$(this).uniform())})}},f=function(){$().bootstrapSwitch&&$(".make-switch").bootstrapSwitch()},g=function(){$("body").on("shown.bs.collapse",".accordion.scrollable",function(t){Metronic.scrollTo($(t.target))})},b=function(){if(location.hash){var t=location.hash.substr(1);$('a[href="#'+t+'"]').parents(".tab-pane:hidden").each(function(){var t=$(this).attr("id");$('a[href="#'+t+'"]').click()}),$('a[href="#'+t+'"]').click()}},m=function(){$("body").on("hide.bs.modal",function(){$(".modal:visible").size()>1&&0==$("html").hasClass("modal-open")?$("html").addClass("modal-open"):$(".modal:visible").size()<=1&&$("html").removeClass("modal-open")}),$("body").on("show.bs.modal",".modal",function(){$(this).hasClass("modal-scroll")&&$("body").addClass("modal-open-noscroll")}),$("body").on("hide.bs.modal",".modal",function(){$("body").removeClass("modal-open-noscroll")})},v=function(){$(".tooltips").tooltip()},y=function(){$("body").on("click",".dropdown-menu.hold-on-click",function(t){t.stopPropagation()})},w=function(){$("body").on("click",'[data-close="alert"]',function(t){$(this).parent(".alert").hide(),t.preventDefault()})},x=function(){$('[data-hover="dropdown"]').dropdownHover()},k=function(){$(".popovers").popover(),$(document).on("click.bs.popover.data-api",function(e){t&&t.popover("hide")})},C=function(){Metronic.initSlimScroll(".scroller")},I=function(){jQuery.fancybox&&$(".fancybox-button").size()>0&&$(".fancybox-button").fancybox({groupAttr:"data-rel",prevEffect:"none",nextEffect:"none",closeBtn:!0,helpers:{title:{type:"inside"}}})},S=function(){(o||a)&&$("input[placeholder]:not(.placeholder-no-fix), textarea[placeholder]:not(.placeholder-no-fix)").each(function(){var t=$(this);""==t.val()&&""!=t.attr("placeholder")&&t.addClass("placeholder").val(t.attr("placeholder")),t.focus(function(){t.val()==t.attr("placeholder")&&t.val("")}),t.blur(function(){""!=t.val()&&t.val()!=t.attr("placeholder")||t.val(t.attr("placeholder"))})})},z=function(){$().select2&&$(".select2me").select2({placeholder:"Select",allowClear:!0})};return{init:function(){c(),u(),p(),f(),C(),I(),z(),h(),w(),y(),b(),v(),k(),g(),m(),S()},initAjax:function(){C(),z(),y(),v(),k(),g(),p(),f(),x()},setLastPopedPopover:function(e){t=e},addResizeHandler:function(t){i.push(t)},runResizeHandlers:function(){d()},scrollTo:function(t,e){var o=t&&t.size()>0?t.offset().top:0;t&&($("body").hasClass("page-header-fixed")&&(o-=$(".page-header").height()),o+=e?e:-1*t.height()),$("html,body").animate({scrollTop:o},"slow")},initSlimScroll:function(t){$(t).each(function(){if(!$(this).attr("data-initialized")){var t;t=$(this).attr("data-height")?$(this).attr("data-height"):$(this).css("height"),$(this).slimScroll({allowPageScroll:!0,size:"7px",color:$(this).attr("data-handle-color")?$(this).attr("data-handle-color"):"#bbb",wrapperClass:$(this).attr("data-wrapper-class")?$(this).attr("data-wrapper-class"):"slimScrollDiv",railColor:$(this).attr("data-rail-color")?$(this).attr("data-rail-color"):"#eaeaea",position:e?"left":"right",height:t,alwaysVisible:"1"==$(this).attr("data-always-visible"),railVisible:"1"==$(this).attr("data-rail-visible"),disableFadeOut:!0}),$(this).attr("data-initialized","1")}})},destroySlimScroll:function(t){$(t).each(function(){if("1"===$(this).attr("data-initialized")){$(this).removeAttr("data-initialized"),$(this).removeAttr("style");var t={};$(this).attr("data-handle-color")&&(t["data-handle-color"]=$(this).attr("data-handle-color")),$(this).attr("data-wrapper-class")&&(t["data-wrapper-class"]=$(this).attr("data-wrapper-class")),$(this).attr("data-rail-color")&&(t["data-rail-color"]=$(this).attr("data-rail-color")),$(this).attr("data-always-visible")&&(t["data-always-visible"]=$(this).attr("data-always-visible")),$(this).attr("data-rail-visible")&&(t["data-rail-visible"]=$(this).attr("data-rail-visible")),$(this).slimScroll({wrapperClass:$(this).attr("data-wrapper-class")?$(this).attr("data-wrapper-class"):"slimScrollDiv",destroy:!0});var e=$(this);$.each(t,function(t,o){e.attr(t,o)})}})},scrollTop:function(){Metronic.scrollTo()},blockUI:function(t){var t=$.extend(!0,{},t),e="";if(e=t.iconOnly?'<div class="loading-message '+(t.boxed?"loading-message-boxed":"")+'"><img src="'+this.getGlobalImgPath()+'loading-spinner-grey.gif" align=""></div>':t.textOnly?'<div class="loading-message '+(t.boxed?"loading-message-boxed":"")+'"><span>&nbsp;&nbsp;'+(t.message?t.message:"LOADING...")+"</span></div>":'<div class="loading-message '+(t.boxed?"loading-message-boxed":"")+'"><img src="'+this.getGlobalImgPath()+'loading-spinner-grey.gif" align=""><span>&nbsp;&nbsp;'+(t.message?t.message:"LOADING...")+"</span></div>",t.target){var o=$(t.target);o.height()<=$(window).height()&&(t.cenrerY=!0),o.block({message:e,baseZ:t.zIndex?t.zIndex:1e3,centerY:void 0!=t.cenrerY?t.cenrerY:!1,css:{top:"10%",border:"0",padding:"0",backgroundColor:"none"},overlayCSS:{backgroundColor:t.overlayColor?t.overlayColor:"#000",opacity:t.boxed?.05:.1,cursor:"wait"}})}else $.blockUI({message:e,baseZ:t.zIndex?t.zIndex:1e3,css:{border:"0",padding:"0",backgroundColor:"none"},overlayCSS:{backgroundColor:t.overlayColor?t.overlayColor:"#000",opacity:t.boxed?.05:.1,cursor:"wait"}})},unblockUI:function(t){t?$(t).unblock({onUnblock:function(){$(t).css("position",""),$(t).css("zoom","")}}):$.unblockUI()},startPageLoading:function(t){$(".page-loading").remove(),$("body").append('<div class="page-loading"><img src="'+this.getGlobalImgPath()+'loading-spinner-grey.gif"/>&nbsp;&nbsp;<span>'+(t?t:"Loading...")+"</span></div>")},stopPageLoading:function(){$(".page-loading").remove()},alert:function(t){t=$.extend(!0,{container:"",place:"append",type:"success",message:"",close:!0,reset:!0,focus:!0,closeInSeconds:0,icon:""},t);var e=Metronic.getUniqueID("Metronic_alert"),o='<div id="'+e+'" class="Metronic-alerts alert alert-'+t.type+' fade in">'+(t.close?'<button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>':"")+(""!=t.icon?'<i class="fa-lg fa fa-'+t.icon+'"></i>  ':"")+t.message+"</div>";t.reset&&$(".Metronic-alerts").remove(),t.container?"append"==t.place?$(t.container).append(o):$(t.container).prepend(o):$(".page-breadcrumb").after(o),t.focus&&Metronic.scrollTo($("#"+e)),t.closeInSeconds>0&&setTimeout(function(){$("#"+e).remove()},1e3*t.closeInSeconds)},initUniform:function(t){t?$(t).each(function(){0==$(this).parents(".checker").size()&&($(this).show(),$(this).uniform())}):p()},updateUniform:function(t){$.uniform.update(t)},initFancybox:function(){I()},getActualVal:function(t){var t=$(t);return t.val()===t.attr("placeholder")?"":t.val()},getURLParameter:function(t){var e,o,a=window.location.search.substring(1),n=a.split("&");for(e=0;e<n.length;e++)if(o=n[e].split("="),o[0]==t)return unescape(o[1]);return null},isTouchDevice:function(){try{return document.createEvent("TouchEvent"),!0}catch(t){return!1}},getViewPort:function(){var t=window,e="inner";return"innerWidth"in window||(e="client",t=document.documentElement||document.body),{width:t[e+"Width"],height:t[e+"Height"]}},getUniqueID:function(t){return"prefix_"+Math.floor(Math.random()*(new Date).getTime())},isIE8:function(){return o},isIE9:function(){return a},isRTL:function(){return e},getAssetsPath:function(){return r},getGlobalImgPath:function(){return l},getBrandColor:function(t){return s[t]?s[t]:""}}}();
