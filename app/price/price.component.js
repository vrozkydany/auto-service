'use strict';

angular.
  module('price').
  component('price', {
    templateUrl: 'price/price.template.html',
    controller: [
      function($location, $anchorSmoothScroll, $anchorScroll) {
        $(".services_mnu").on("click", function(){
          $("#all-services").slideToggle();
        });
        $(".small_mnu").on("click", function(){
          $(this).next().children("ul").slideToggle();
        });
        $("#link-on-kuz-remont").on("click", function(){
            $("html, body").stop().animate({
                scrollTop: $('#kuz-remont').offset().top
            }, '500', 'linear');
        });
        $("#link-on-obrab-kuz").on("click", function(){
            $("html, body").stop().animate({
                scrollTop: $('#obrab-kuz').offset().top
            }, '500', 'linear');
        });
        $("#link-on-mech-remont").on("click", function(){
            $("html, body").stop().animate({
                scrollTop: $('#mech-remont').offset().top
            }, '500', 'linear');
        });
      }
    ]
});