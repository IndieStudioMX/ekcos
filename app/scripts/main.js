'use strict';

var container = $('#slider-03');
var containerSlider = $('#slider-01');
var slider04  = $('#slider-04-content');

(function () {
  slider04.addClass('is_invisible');
	$('.carousel').carousel({
  		interval: 8000
	});
  $('#carousel-arrowRight').click(function () {
      if (container.hasClass('active')) {
        slider04.removeClass('is_invisible');
      }
      else {
        slider04.addClass('is_invisible');
      }
  }); 

  $('#carousel-arrowLeft').bind('click', function () {
      if (containerSlider.hasClass('active')) {
        slider04.removeClass('is_invisible');
      }
      else {
        slider04.addClass('is_invisible');
      }
  }); 


  $('#overlayl').on('mouseover', function(){
    $('.hidden-img-l').stop(true, false).animate({ width: '40%' }, 'slow');
  });

  $('#overlayl').on('mouseout', function(){
    $('.hidden-img-l').stop(true, false).animate({ width: '0%' }, 'slow');
  });

  $('#overlayr').on('mouseover', function(){
    $('.hidden-img-r').stop(true, false).animate({ width: '54%' }, 'slow');
  });

  $('#overlayr').on('mouseout', function(){
    $('.hidden-img-r').stop(true, false).animate({ width: '0%' }, 'slow');
  });
})();