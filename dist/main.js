"use strict";navigator.serviceWorker&&navigator.serviceWorker.register("sw.js"),function(){function n(){var n=o();n&&!s&&(s=!0,i()),!n&&s&&(s=!1,a())}function t(){var n=new Date,t=n.getHours();(17>t||t>23)&&$("#is-open .text").html("Cerrado ahora <br> Abierto de 5:00pm a 11:00pm")}function e(){$(".responsive-nav ul").toggleClass("active"),$("#menu-opener").toggleClass("glyphicon-menu-hamburger")}function i(){$("#description").addClass("fixed").removeClass("absolute"),$("#navigation").slideUp("fast"),$("#sticky-navigation").slideDown("fast")}function a(){$("#description").removeClass("fixed").addClass("absolute"),$("#navigation").slideDown("fast"),$("#sticky-navigation").slideUp("fast")}function o(){var n=$("#description"),t=n.height();return $(window).scrollTop()>$(window).height()-2*t}var s=!1,r=0,c=$("[data-name='image-counter']").attr("content");$("#contact-form").on("submit",function(n){return n.preventDefault(),sendForm($(this)),!1}),$("#sticky-navigation").removeClass("hidden"),$("#sticky-navigation").slideUp(0),n(),t(),$("#menu-opener").on("click",e),$(".menu-link").on("click",e),setInterval(function(){c>r?r++:r=0,$("#gallery .inner").css({left:"-"+100*r+"%"})},4e3),$(window).scroll(n)}();
