/*! Plugin options and other jQuery stuff */

$(document).ready(function(){
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 800);
      return false;
  });
});