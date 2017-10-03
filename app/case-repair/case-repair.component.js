'use strict';

angular.
  module('caseRepair').
  component('caseRepair', {
    templateUrl: 'case-repair/case-repair.template.html',
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