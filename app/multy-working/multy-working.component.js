'use strict';

angular.
  module('multyWorking').
  component('multyWorking', {
    templateUrl: 'multy-working/multy-working.template.html',
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