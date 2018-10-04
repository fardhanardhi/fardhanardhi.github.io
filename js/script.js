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

  $('.tags').hover(
    function () {
      console.log('hovering on', $(this).attr('id'));

      if ($(this).attr('id') == 'about') {
        $('#one').show();
      }
      else if ($(this).attr('id') == 'experience') {
        $('#two').show();
      }
    },
    function () {
      hideAll();

    }
  );

});