$('.header-enter, .header-multiverse, .subtext, .pri-btn').addClass('anim');
var navbar = document.getElementById("navbar-logo-left");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  $(navbar).addClass("solid-color scale-down-padd");
  $('.navbar-brand').addClass("logo-scale-down");
  $('ul .list-item-6 a').addClass("revert-padding");
} else {
  $(navbar).removeClass("solid-color scale-down-padd");
  $('.navbar-brand').removeClass("logo-scale-down");
  $('ul .list-item-6 a').removeClass("revert-padding");
}
}

$( document ).ready(function() {
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		var topOffset = $('.div-block-35').offset().top;
        var topOffset34 = $('.div-block-34').offset().top;
        var topOffset36 = $('.div-block-36').offset().top;
        var topOffsetclient2 = $('.client-logo-2').offset().top;
        var topOffsetappcontainer= $('.app-container').offset().top;
        var topOffsetcard= $('.card').offset().top;
        var topOffsettrailer= $('.trailler').offset().top;
        var topOffsettrailertext= $('.trailler-text').offset().top;
        var topOffseticons= $('.icons .client-logo-3').offset().top;
		var headerHeight = $('#navbar-logo-left').height();
		var transitionPoint = topOffset - headerHeight - 600;
        var transitionPoint36 = topOffset36 - headerHeight - 600;
        var transitionPoint34 = topOffset34 - headerHeight - 600;
        var transitionPointappclient= topOffsetappcontainer - headerHeight - 600;
        var transitionPointclient2 = topOffsetclient2 - headerHeight - 600;
        var transitioncard = topOffsetcard - headerHeight - 600;
        var transitiontrailer = topOffsettrailer - headerHeight - 600;
        var transitiontrailertext = topOffsettrailertext - headerHeight - 600;
        var transitionicons = topOffseticons - headerHeight - 600;
        

		if (scrollTop > transitionPoint) {
			$('.div-block-35').addClass('anim');
		}
        if (scrollTop > transitionPoint36) {
			$('.div-block-36').addClass('anim');
		}

        if (scrollTop > transitionPoint34) {
			$('.div-block-34').addClass('anim');
		}
        if (scrollTop > transitionPointclient2) {
			$('.client-logo-2').addClass('anim');
		}
        if (scrollTop > transitionPointappclient) {
			$('.app-container').addClass('anim');
		}
        if (scrollTop > transitioncard) {
			$('.card').addClass('anim');
		}
        if (scrollTop > transitiontrailer) {
			$('.trailler').addClass('anim');
		}
        if (scrollTop > transitiontrailertext) {
			$('.trailler-text').addClass('anim');
		}
        if (scrollTop > transitionicons) {
			$('.icons .client-logo-3').addClass('animate');
		}
        // if (scrollTop > transitioncontent) {
		// 	$('.content').addClass('anim');
		// }
	});
});
