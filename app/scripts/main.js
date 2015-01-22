'use strict';

(function () {
	console.log('Hello World!');
	$('.carousel').carousel({
  		interval: 80000
	});
	$('#powerDocs').on('shown.bs.modal', function () {
    	console.log('Works!');
  	});
  	$('#ekcosDocs').on('shown.bs.modal', function () {
    	console.log('Works!');
  	});
  	$('#ezDocs').on('shown.bs.modal', function () {
    	console.log('Works!');
  	});
  	$('#truDocs').on('shown.bs.modal', function () {
    	console.log('Works!');
  	});
})();