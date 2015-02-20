'use strict';

$(document).on('ready', function() {
	$('#powerDocs').on('show.bs.modal', function () {
		$('.flipster').flipster({
			enableMousewheel: false, 
			enableKeyboard: true,
			enableTouch: true, 
			style: 'carousel'
		});
	});
	$('#ekcosDocs').on('shown.bs.modal', function () {
	});
	/*$('#ezDocs').on('shown.bs.modal', function () {
	});
	$('#truDocs').on('shown.bs.modal', function () {
	});*/
	$('.flipster-power').flipster({ style: 'coverflow'});
});