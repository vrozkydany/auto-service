'use strict';

angular.
  module('contact').
  component('contact', {
    templateUrl: 'contact/contact.template.html',
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