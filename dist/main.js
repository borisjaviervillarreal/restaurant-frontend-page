"use strict";!function(){function i(){$("#description").addClass("fixed").removeClass("absolute"),$("#navigation").slideUp("fast"),$("#sticky-navigation").slideDown("fast")}function n(){$("#description").removeClass("fixed").addClass("absolute"),$("#navigation").slideDown("fast"),$("#sticky-navigation").slideUp("fast")}function t(){var i=$("#description"),n=i.height();return $(window).scrollTop()>$(window).height()-2*n}function s(i){$.ajax({url:i.attr("action"),method:"POST",data:i.formObject(),dataType:"json",success:function(){alert("El envio del email ha sido satisfactorio")}})}var o=!1,a=0,e=$("[data-name='image-counter']").attr("content");$("#contact-form").on("submit",function(i){return i.preventDefault(),s($(this)),!1}),$("#sticky-navigation").removeClass("hidden"),$("#sticky-navigation").slideUp(0),setInterval(function(){e>a?a++:a=0,$("#gallery .inner").css({left:"-"+100*a+"%"})},4e3),$(window).scroll(function(){var s=t();s&&!o&&(o=!0,i()),!s&&o&&(o=!1,n())})}();
