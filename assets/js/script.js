fetch('https://www.loc.gov/search/?q=baseball&fo=json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  var inputGrab = $('#search');
  var dropGrab = $('#dropdown-item');

  var inputTest = $('#search').value().trim();
  var formTest = $('#dropdown-item').value().trim();
  
  let query = '?format=' + formTest + '&q=' + inputTest;


console.log(query)