$(document).ready(function() {

	$('a.page-scroll').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
				scrollTop: target.offset().top 
				}, 900);
				return false;
			}
		}
	});
	
	$(".small_mnu").click(function() {
		$(this).next().children("ul").slideToggle();
	});

	$(".services_mnu").click(function() {
		// $("#all-services").toggleClass("hidden");
		$("#all-services").slideToggle();
	});


	$(".cspc-column p a img, .entry-content a img").parent().addClass("fancybox").attr("data-fancybox-group", "group");
	$(".cspc-column p a img").each(function() {
		$(this).attr("src", $(this).parent().attr("href"));
	});
	
	$(".mc_item_wrap ul").each(function() {
		$(this).after("<div class='mc_item_wrap_af'></div>");
	});
	$(".mc_toggle").click(function() {
		if($(this).parent().parent().children("ul").is(":visible")) {
			$(this).parent().parent().children("ul").slideUp();
			$(this).parent().parent().children(".mc_item_wrap_af").hide();
		} else {
			$("body .mc_wrap .mc_item_wrap > ul, .mc_item_wrap_af").hide();
			$(".mc_item_wrap").removeClass("active");
			$(this).parent().parent().addClass("active");
			$(this).parent().parent().children("ul").slideDown();
			$(this).parent().parent().children(".mc_item_wrap_af").show();
		}
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//equalheight - одинаковая высота колонок
	//Пример списка элементов:
	//var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".hi_item, .sb_content > div"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback, #order").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
	
});

// Адаптивные скрипты, которые срабатывают только при определенном разрешении экрана
// Документация: https://github.com/maciej-gurban/responsive-bootstrap-toolkit
(function($, document, window, viewport) {
	function resizeWindow() {
		// $("a").click(function() {
		// 	if (viewport.is("lg")) {
		// 		return false;
		// 	};
		// });
};
$(document).ready(function() {
	resizeWindow();
});
$(window).bind("resize", function() {
	viewport.changed(function(){
		resizeWindow();
	});
});
})(jQuery, document, window, ResponsiveBootstrapToolkit);