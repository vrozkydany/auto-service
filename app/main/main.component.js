'use strict';

angular.
  module('main').
  component('main', {
    templateUrl: 'main/main.template.html',
    controller: [
      function toggle() {
        $(".small_mnu").on("click", function(){
          $(this).next().children("ul").slideToggle();
        });
      }
    ]
});