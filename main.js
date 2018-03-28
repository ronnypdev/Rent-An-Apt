$(document).ready(function() {
  // Url to the cache JSON file
  var url = '/cache/cache.json';

  // Call back function in order to process the JSON data
  function findApt(data) {
    var aptList = '<div class="row">';
    $.each(data, function(i, apartments) {
      aptList += '<div class="col-md-4 col-xs-12 my-2">';
      aptList += '<div class="card">';
      aptList +=
        '<img class="card-img-top" src="https://cdngeneral.rentcafe.com/dmslivecafe/3/422070/NJ_FortLee_Twenty50byWindsor_p0429429_1_01_1_PhotoGallery.jpg?crop=(0,0,300,225)&cropxunits=300&cropyunits=225&width=350">';

      aptList += '<div class="card-body">';
      aptList +=
        '<h5 class="card-title">' +
        'Name: ' +
        apartments.ApartmentName +
        '</h5>';
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
        '</span></li></ul>'; // end list group

      aptList +=
        '<div class="card-body">' +
        '<a href="' +
        apartments.ApplyOnlineURL +
        '" class="card-link">' +
        'Apply Online' +
        '</a></div>'; // end card body

      aptList +=
        '<div class="card-footer">' +
        '<small class="text-muted">' +
        'Last updated 10 mins ago' +
        '</small></div>'; // end card footer

      aptList += '</div>'; // end card
      aptList += '</div>'; // end column
    }); // end loop

    aptList += '</div>'; // end row
    $('#results').html(aptList);
  }

  // Get JSON method
  $.getJSON(url, findApt);
});
