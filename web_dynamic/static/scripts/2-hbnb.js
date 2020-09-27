const listAmen = [];
$(document).ready(function () {
  $('input[type="checkbox"]').click(function () {
    if (this.checked) {
      console.log($(this).attr('data-id'));
      listAmen.push($(this).attr('data-id'));
    } else {
      listAmen.splice(listAmen.indexOf($(this).attr('data-id'), 1));
    }
    $('.amenities h4').css('display', 'inline-block');
    $('.amenities h4').append($(this).attr('data-name') + ' ');
  });
});
$.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
    if (textStatus === 'success') {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }
  });
});
