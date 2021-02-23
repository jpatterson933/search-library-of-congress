fetch('https://www.loc.gov/search/?q=baseball&fo=json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  
function searchApi(query, form) {
    //create
}