'use strict';

angular.
  module('mechanicsRepair').
  component('mechanicsRepair', {
    templateUrl: 'mechanics-repair/mechanics-repair.template.html',
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