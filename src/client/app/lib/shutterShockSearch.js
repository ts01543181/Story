// This is a helper function that when called, will custom search google for images

var searchShutterShock = (options, callback) => {
  $.ajax({
    url: 'https://api.shutterstock.com/v2/images/search?per_page=' + options.max + '&query=' + options.query + '&view=full',
    headers: {
      Authorization: 'Basic ' + window.SHUTTERSHOCK_API
    }
  })
  .done(function (data) {
    callback(data);
  })
  .fail(function (xhr, status, err) {
    alert('Failed to retrieve ' + mediaType + ' search results:\n' + JSON.stringify(xhr.responseJSON, null, 2));
  });
}

window.searchShutterShock = searchShutterShock;
