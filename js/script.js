$(document).ready(function () {

	hideAll();
	$("#menu").hide();

	function hideAll() {
		$('#one').stop().fadeOut(150);
		$('#two').stop().fadeOut(150);
		$('#three').stop().fadeOut(150);
		$('#four').stop().fadeOut(150);
		$('#five').stop().fadeOut(150);
	}

	$('#brand').hover(
		function () {
			console.log('hovering on', $(this).attr('id'));
			$('#one').stop().fadeIn(150);
		},
		function () {
			hideAll();
		}
	);

	$('.quad').hover(
		function () {
			console.log('hovering on', $(this).attr('id'));

			if ($(this).find('.tags').attr('id') == 'experience') {
				$('#two').stop().fadeIn(150);
			}
			else if ($(this).find('.tags').attr('id') == 'education') {
				$('#three').stop().fadeIn(150);
			}
			else if ($(this).find('.tags').attr('id') == 'skills') {
				$('#four').stop().fadeIn(150);
			}
			else if ($(this).find('.tags').attr('id') == 'interest') {
				$('#five').stop().fadeIn(150);
			}
		},
		function () {
			hideAll();
		}
	);


});

let ganti = true;

window.setInterval(function () {

	if (ganti) {
		$("#box-1").css("background", "linear-gradient(to top right, #C70025 calc(50% - 1px), #000000, #000000 calc(50% + 1px) )");
		$("#box-2").css("background", "linear-gradient(to top left, #C70025 calc(50% - 1px), #000000, #000000 calc(50% + 1px) )");
		$("#box-3").css("background", "linear-gradient(to top left, #000000 calc(50% - 1px), #000000, #C70025 calc(50% + 1px) )");
		$("#box-4").css("background", "linear-gradient(to top right, #000000 calc(50% - 1px), #000000, #C70025 calc(50% + 1px) )");
		$("#menu-btn").css('color', '#C70025');
		$("#foot").children("i").css({"color": "#C70025",});
		$("#foot").children("i").removeClass('far fa-heart').addClass('fas fa-heart');
		ganti = false;
		console.log(ganti);

	}
	else {
		$("#box-1").css("background", "linear-gradient(to top right, #000000 calc(50% - 1px), #000000, #C70025 calc(50% + 1px) )");
		$("#box-2").css("background", "linear-gradient(to top left, #000000 calc(50% - 1px), #000000, #C70025 calc(50% + 1px) )");
		$("#box-3").css("background", "linear-gradient(to top left, #C70025 calc(50% - 1px), #000000, #000000 calc(50% + 1px) )");
		$("#box-4").css("background", "linear-gradient(to top right, #C70025 calc(50% - 1px), #000000, #000000 calc(50% + 1px) )");
		$("#menu-btn").css('color', '#000000');
		$("#foot").children("i").css({ "color": "#ffffff",});
		$("#foot").children("i").removeClass('fas fa-heart').addClass('far fa-heart');
		ganti = true;
		console.log(ganti);
	}
	
	
}, 1500);

$("#menu-btn").click(function () {
	$("#menu").fadeIn(700);
	$("#in-menu-btn").delay(2000).children("i").removeClass('fas fa-bars').addClass('fas fa-times');
	
});

$("#in-menu-btn").click(function () {
	$("#menu").stop().fadeOut(1000);
});


