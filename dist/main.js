"use strict";!function(){function i(){$("#description").addClass("fixed").removeClass("absolute"),$("#navigation").slideUp("fast"),$("#sticky-navigation").slideDown("fast")}function n(){$("#description").removeClass("fixed").addClass("absolute"),$("#navigation").slideDown("fast"),$("#sticky-navigation").slideUp("fast")}function s(){var i=$("#description"),n=i.height();return $(window).scrollTop()>$(window).height()-2*n}var o=!1,t=0;$("#sticky-navigation").removeClass("hidden"),$("#sticky-navigation").slideUp(0),setInterval(function(){t++,$("#gallery .inner").css({left:"-"+100*t+"%"})},4e3),$(window).scroll(function(){var t=s();t&&!o&&(o=!0,i()),!t&&o&&(o=!1,n())})}();
