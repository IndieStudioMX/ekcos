'use strict';

var container = $('#slider-03');
var containerSlider = $('#slider-01');
var slider04  = $('#slider-04-content');

(function () {
  slider04.addClass('is_invisible');
	console.log('Hello World!');
	$('.carousel').carousel({
  		interval: 80000
	});
	$('#powerDocs').on('shown.bs.modal', function () {
	});
	$('#ekcosDocs').on('shown.bs.modal', function () {
	});
	$('#ezDocs').on('shown.bs.modal', function () {
	});
	$('#truDocs').on('shown.bs.modal', function () {
	});
  $('#carousel-arrowRight').click(function () {
      if (container.hasClass('active')) {
        slider04.removeClass('is_invisible');
      }
      else {
        slider04.addClass('is_invisible');
      }
  }) 

  $('#carousel-arrowLeft').bind('click', function () {
      if (containerSlider.hasClass('active')) {
        slider04.removeClass('is_invisible');
      }
      else {
        slider04.addClass('is_invisible');
      }
  }) 
})();