$(document).ready(function () {
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