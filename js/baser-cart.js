/*!
 * Naver v3.0.6 - 2014-02-06
 * A jQuery plugin for responsive navigation. Part of the Formstone Library.
 * http://formstone.it/naver/
 *
 * Copyright 2014 Ben Plum; MIT Licensed
 */

!function(a,b){"use strict";function c(b){b=a.extend(!0,{},g,b);for(var c=a(this),e=0,f=c.length;f>e;e++)d(c.eq(e),b);return c}function d(c,d){if(!c.data("naver")){d=a.extend(!0,{},d,c.data("naver-options"));var g=c.find(".naver-handle").length?c.find(".naver-handle").detach():a('<span class="naver-handle"></span>');c.addClass("naver "+d.customClass).wrapInner('<div class="naver-container"></div>').wrapInner('<div class="naver-wrapper"></div>').prepend(g);var h=a.extend(!0,{$nav:c,$container:c.find(".naver-container"),$wrapper:c.find(".naver-wrapper"),$handle:c.find(".naver-handle")},d);h.$handle.text(d.label?d.labels.closed:""),h.$nav.on("touchstart.naver mousedown.naver",".naver-handle",h,e).data("naver",h),void 0!==b.matchMedia&&(h.mediaQuery=b.matchMedia("(max-width:"+(1/0===h.maxWidth?"100000px":h.maxWidth)+")"),h.mediaQuery.addListener(function(){f.apply(h.$nav)}),f.apply(h.$nav))}}function e(b){b.preventDefault(),b.stopPropagation();var c=(a(b.currentTarget),b.data);a(".naver").not(c.$nav).naver("close"),c.$nav.hasClass("open")?h.close.apply(c.$nav):h.open.apply(c.$nav)}function f(){var b=a(this).data("naver");b.mediaQuery.matches?h.enable.apply(b.$nav):h.disable.apply(b.$nav)}var g={customClass:"",label:!0,labels:{closed:"Navigation",open:"Close"},maxWidth:"980px"},h={close:function(){return a(this).each(function(b,c){var d=a(c).data("naver");d&&(d.$wrapper.css({height:0}),d.label&&d.$handle.html(d.labels.closed),d.$nav.removeClass("open").trigger("close.naver"))})},defaults:function(b){return g=a.extend(!0,g,b||{}),a(this)},disable:function(){return a(this).each(function(b,c){var d=a(c).data("naver");d&&(d.$nav.removeClass("enabled"),d.$wrapper.css({height:""}))})},destroy:function(){return a(this).each(function(b,c){var d=a(c).data("naver");d&&(d.$handle.remove(),d.$container.contents().unwrap().unwrap(),d.$nav.removeClass("enabled disabled naver "+d.customClass).off(".naver").removeData("naver"))})},enable:function(){return a(this).each(function(b,c){var d=a(c).data("naver");d&&(d.$nav.addClass("enabled"),h.close.apply(d.$nav))})},open:function(){return a(this).each(function(b,c){var d=a(c).data("naver");d&&(d.$wrapper.css({height:d.$container.outerHeight(!0)}),d.label&&d.$handle.html(d.labels.open),d.$nav.addClass("open").trigger("open.naver"))})}};a.fn.naver=function(a){return h[a]?h[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?this:c.apply(this,arguments)},a.naver=function(a){"defaults"===a&&h.defaults.apply(this,Array.prototype.slice.call(arguments,1))}}(jQuery,window);
/*
	main
*/
$(document).ready(function() {
	// Naver
	$(".mod-category").naver({
		maxWidth: '568px',
		label: true,
		labels: {
			closed: "カテゴリー",
			open: "カテゴリー"
		}
	});
	$(".mod-globalnavi").naver({
		maxWidth: '568px',
		label: false
	});
	$(".naver-handle").on('touchstart.naver mousedown.naver', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var $btn = $(this);
		var $elm = $btn.parent();
		if ($elm.hasClass('open')) {
			$elm.naver('close');
		} else {
			$elm.naver('open');
		}
	});

	// BxSlider
	$('.mod-detail-photogallery-list').bxSlider({
		pagerCustom: '.mod-detail-photogallery-pager',
		mode: 'fade',
		controls: false
	});
});