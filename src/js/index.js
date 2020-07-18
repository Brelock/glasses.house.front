let status = "JS - OK!";

var site = null;

// =================
@@include('frames/globalFunctions.js')
// ===============




$(document).ready(function() {
	if (!$('body')) {console.log('jQuery Error')}
	
	site = (function(window, document, $) {  

		const $win = $(window),
			$dom = $(document),
			$body = jQuery(document.body),
			app = {},


			// button menu
			$menuBtn = $(".menu-btn"),
			$nav = $(".nav"),
			$lineOne = $(".nav .menu-btn .line--1"),
			$lineTwo = $(".nav .menu-btn .line--2"),
			$lineThree = $(".nav .menu-btn .line--3"),
			$link = $(".nav .nav-links"),
			// search input
			$btnSearch = $(".btn-search") ,

			// hiden sub menu item
			$liItemNav = $(".item-list li"),
			$itemNavBefore = $(".item-menu"),
			$labelCheckBox =$(".offer-glasses_item-check-button label")  

	
	
		const fn = {
	
			menuButton() {
			  $menuBtn.on("click", function(){
				$nav.toggleClass("nav-open");
				$lineOne.toggleClass("line-cross");
				$lineTwo.toggleClass("line-fade-out");
				$lineThree.toggleClass("line-cross");
				$link.toggleClass("fade-in");
			  });
			},
	
	
			handlerActiveSearchInput() {
				$btnSearch.on("click", function () {  
					const $btn = $(this);
					const $container = $btn.closest(".head-btn-search")
					const $findInput = $container.find("input")
					$findInput.toggleClass("active")
				})
			},
		
			handleVisibleSubmenu() {
				$liItemNav.on("click", function () {  
					$(this).toggleClass("active")
				})
			},
	 
			handlerMouseOverForMenuItem() { 
				$itemNavBefore.mouseover(function () { 
					$(this).addClass("before-line--active");
					$(this).css("position", "static")
				});
				$itemNavBefore.mouseout(function () { 
					$(this).removeClass("before-line--active")
					$(this).css("position", "relative")
				});

			},
	
			handlerActiveLable() {
				$labelCheckBox.on("click", function () {  
					const $btn = $(this);
					const $container = $btn.closest(".offer-glasses_item-check-button")
					const $findThisLable = $container.find("label")
					$findThisLable.removeClass("active");
					$(this).addClass("active")
				})
			},
	
	
	
			domReady(){
			
			  if ($menuBtn.length) {
				fn.menuButton();
			  }

			  if ( $btnSearch.length) {
				fn.handlerActiveSearchInput();
			  }

			  if ( $liItemNav.length && document.documentElement.clientWidth > 1241 ) {
				fn.handlerMouseOverForMenuItem();
			  }
		  
			  if ( $liItemNav.length && document.documentElement.clientWidth < 1240 ) {
				fn.handleVisibleSubmenu();
			  }

			  if ( $labelCheckBox.length) {
				fn.handlerActiveLable();
			  }

			}
	
	  }      
		  
	   $dom.ready(fn.domReady);
	
	   return fn;
	
	  })(window,document,jQuery);


	(function () {  
		if (!$(".slide").length) return;
		if (document.documentElement.clientWidth < 768) {
			$('.slide').slick({
			  dots: true,
			  infinite: true,
			  speed: 300,
			  slidesToShow: 1,
			  adaptiveHeight: true,
			  autoplay: true,
			  autoplaySpeed: 3000,
			  arrows: false
			});
		}
	})();

	function handlerBottomBannerImg() {  
		
		const $bannerT = $(".banner-b-t")
		const $bannerBd = $(".banner-b-bd")
		const $bannerBt = $(".banner-b-bt")

		const $setImgT = $(".banner-b-t img")
		const $setImgBd = $(".banner-b-bd img")
		const $setImgBt = $(".banner-b-bt img")

		const $desctopImgT = $setImgT.attr("data-defoult-img")
		const $desctopImgBd = $setImgBd.attr("data-defoult-img")
		const $desctopImgBt = $setImgBt.attr("data-defoult-img")

		const $mobImgSlideT = $setImgT.attr("data-mobile")
		const $mobImgSlideBd = $setImgBd.attr("data-mobile")
		const $mobImgSlideBt = $setImgBt.attr("data-mobile")
	
		if (document.documentElement.clientWidth < 767) {
			$bannerT.html("<img src=" + $mobImgSlideT + ">");
			$bannerBd.html("<img src=" + $mobImgSlideBd + ">");
			$bannerBt.html("<img src=" + $mobImgSlideBt + ">");
		}
		if (document.documentElement.clientWidth > 768) {
			$bannerT.html("<img src=" + $desctopImgT + ">");
			$bannerBd.html("<img src=" + $desctopImgBd + ">");
			$bannerBt.html("<img src=" + $desctopImgBt + ">");
		}

	};
	handlerBottomBannerImg()






	

});


window.onload = function() {
	console.log('window load')
}
