$(document).ready(function () {

	// setInterval(function () {
	// 	console.log('sdfsdkfjlsdk');

	// 	$("#box-1")
	// 	.animate({ background: "linear-gradient(to top right, #000000 calc(50% - 1px), #000000, #C70025 calc(50% + 1px) )" }, 300)      .animate({ background: "linear-gradient(to top right, #C70025 calc(50% - 1px), #000000, #000000 calc(50% + 1px) )" }, 300);
	// }, 1000);

	hideAll();

	function hideAll() {
		$('#one').hide();
		$('#two').hide();
		$('#three').hide();
		$('#four').hide();
		$('#five').hide();
	}
	// $('#main').show();

	// $('.part').mouseover(function () {
	//   alert(this.id);
	// });

	$('#brand').hover(
		function () {
			console.log('hovering on', $(this).attr('id'));
			$('#one').show();
		},
		function () {
			hideAll();
		}
	);

	$('.quad').hover(
		function () {
			console.log('hovering on', $(this).attr('id'));

			if ($(this).find('.tags').attr('id') == 'experience') {
				$('#two').show();
			}
			else if ($(this).find('.tags').attr('id') == 'education') {
				$('#three').show();
			}
			else if ($(this).find('.tags').attr('id') == 'skills') {
				$('#four').show();
			}
			else if ($(this).find('.tags').attr('id') == 'interest') {
				$('#five').show();
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
		$("#menu").css('color', '#C70025');
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
		$("#menu").css('color', '#000000');
		$("#foot").children("i").css({ "color": "#ffffff",});
		$("#foot").children("i").removeClass('fas fa-heart').addClass('far fa-heart');
		ganti = true;
		console.log(ganti);
	}


}, 1500);
