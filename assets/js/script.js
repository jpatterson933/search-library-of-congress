
  // var inputGrab = $('#search');
  // var dropGrab = $('#dropdown-item');
  $("#button").on("click", function (event) {
    event.preventDefault();

    var inputTest = $('#search').val().trim();
    var formTest = $('#dropdown-item').val().trim();
    
    let query = '&format=' + formTest + '&q=' + inputTest;
    
    let requestUrl = 'https://www.loc.gov/search/?fo=json' + query;

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var results = data.results;

        for (var i = 0; i < results.length; i++){
          
          console.log(results[i].title)
          
         
          
          if (results[i].location) {
            
            console.log(results[i].location[0])
            
            
          }
          
          if (results[i].description){
            
            console.log(results[i].description[0])
            
          }
        }


        console.log(data.results);
      });
      
  })

  $("#title").append(results[i].title)
  $("#location").append(results[i].location[0])
  $("#description").append(results[i].description[0])
  
  var title = $("#title");
  var location = $("location");
  var description = $("description");
  


// console.log(query)