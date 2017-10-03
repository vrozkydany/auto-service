'use strict';

angular.
  module('diagnostic').
  component('diagnostic', {
    templateUrl: 'diagnostic/diagnostic.template.html',
    controller: [
      function toggle() {
        $(".services_mnu").on("click", function(){
          $("#all-services").slideToggle();
        });
        $(".small_mnu").on("click", function(){
          $(this).next().children("ul").slideToggle();
        });
      }
    ]
});