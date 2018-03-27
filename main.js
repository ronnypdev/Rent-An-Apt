$(document).ready(function() {
  // Url to the cache JSON file
  var url = '/cache/cache.json';

  // Call back function in order to process the JSON data
  function findApt(data) {
    var aptList = '<div class="col-md-4 col-xs-12 my-2">';
    $.each(data, function(i, apartments) {
      aptList += '<div class="card">';
      aptList +=
        '<img class="card-img-top" src="http://lorempixel.com/235/200/city/">';

      aptList += '<div class="card-body">';
      aptList += '<h5 class="card-title">' + apartments.ApartmentName + '</h5>';
      aptList +=
        '<p class="card-text">' +
        'Rent this nice Apartment using the best App in the world Rent An Apt.' +
        '</p></div>'; // End Card Body

      aptList += '<ul class="list-group list-group-flush">';
      aptList +=
        '<li class="list-group-item d-flex justify-content-between align-items-center">' +
        'Bedrooms:' +
        '<span class="badge badge-dark">' +
        apartments.Beds +
        '</span></li>';

      aptList +=
        '<li class="list-group-item d-flex justify-content-between align-items-center">' +
        'Bathrooms:' +
        '<span class="badge badge-dark">' +
        apartments.Baths +
        '</span></li>';

      aptList +=
        '<li class="list-group-item d-flex justify-content-between align-items-center">' +
        'Floorplan Name:' +
        '<span class="badge badge-dark">' +
        apartments.FloorplanName +
        '</span></li>';

      aptList +=
        '<li class="list-group-item d-flex justify-content-between align-items-center">' +
        'Rent:' +
        '<span class="badge badge-dark">' +
        '$' +
        apartments.MinimumRent +
        ' - ' +
        '$' +
        apartments.MaximumRent +
        '</span></li></ul>';

      aptList +=
        '<div class="card-body">' +
        '<a href="' +
        apartments.ApplyOnlineURL +
        '" class="card-link">' +
        'Apply Online' +
        '</a></div>';

      aptList +=
        '<div class="card-footer">' +
        '<small class="text-muted">' +
        'Last updated 3 mins ago' +
        '</small></div>';

      aptList += '</div>'; // end card
    }); // end loop

    aptList += '</div>'; // end column
  }

  $.getJSON(url, findApt);
});
