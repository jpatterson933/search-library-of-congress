
// function to create query 
const results = () => {
  // grab html elements
  var inputTest = $('#search').val().trim();
  var formTest = $('#dropdown-item').val().trim();
  let query = '&format=' + formTest + '&q=' + inputTest + "&fo=json";
  let requestUrl = 'https://www.loc.gov/search/?' + query;
  return requestUrl;

}

//on click event for our form button that calls our data
$("#button").on("click", function (event) {
  // prevents page from reloading
  event.preventDefault();

  //use fetch inside of your onclick event
  fetch(results())
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var results = data.results;
      console.log(results)

      /*

      
      */

      //for loop that loops through the lenght of our results
      for (var i = 0; i < results.length; i++) {

        //create html element and assign it to variable
        var infoDisplay = $("<h3 class='text'></h3>");
        //append html element to our class .card in our html page
        $(".info-display").append(infoDisplay);
        //appends innher html to newly created html element
        $(infoDisplay).append("Title: " + results[i].title).innerhtml;


        if (results[i].location) {
          //console logs
          console.log(results[i].location[0])
          //creates new variables and this variable creates new html with class text 2
          var infoDisplayTwo = $("<p class='text2'></p>");
          //grabbing our class .text from infoDisplay above, we append our new variable underneath it
          $(".text").append(infoDisplayTwo);
          //Then we append our inner html to the html created in infoDisplayTwo variable
          $(infoDisplayTwo).append("Location: " + results[i].location[0]).innerhtml
        }
        // here we are saying if there is a description for the results
        if (results[i].description) {
          //creaes new html element and assigns it a variable
          var infoDisplayDescription = $("<p class='text3' style='font-size: .5em;'></p>");
          //appends new html element to class .text2 which is where our location data is
          $(".text2").append(infoDisplayDescription);
          //changes inner html of newly created html element
          $(infoDisplayDescription).append("Description: " + results[i].description[0]).innerhtml;

        }
      }


    });

})

