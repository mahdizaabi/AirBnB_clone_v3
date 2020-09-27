$(document).ready(function () {
  $('input[type="checkbox"]').click(function () {
    const inputCheck = $('input[type="checkbox"]');
    const listAmen = [];
    if (inputCheck.length > 0) {
      listAmen.push('{{ amenity.id }}');
    } else {
      listAmen.splice(listAmen.indexOf('{{ amenity.id }}'), 1);
    }
  });
});
