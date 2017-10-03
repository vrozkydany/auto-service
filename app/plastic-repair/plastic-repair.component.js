'use strict';

angular.
  module('plasticRepair').
  component('plasticRepair', {
    templateUrl: 'plastic-repair/plastic-repair.template.html',
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