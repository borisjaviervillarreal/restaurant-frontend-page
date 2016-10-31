"use strict";$.fn.formObject=function(){var i={};return $.each($(this).serializeArray(),function(n,s){i[s.name]=s.value||""}),i};
