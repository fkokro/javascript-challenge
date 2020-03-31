// from data.js
var tableData = data;

//Print Data in console
console.log(tableData);

//Use D3 to call table body from HTML
var tbody = d3.select("tbody");

//Create function to populate table with data from data.js file 
data.forEach((sightings) => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  
  //create object from button click
  var button = d3.select("#filter-btn");
  
  //filter data when a date is inputed
  button.on("click", function(){
      var inputElement = d3.select("#datetime");

      // Get the value property of the input element
      var inputValue = inputElement.property("value");
      console.log(inputValue);
      console.log(tableData);
      var filteredData = tableData.filter(date => date.datetime === inputValue);
      console.log(filteredData)
      
      //Clears table
      tbody.html("")

      //Append filtered data to the html page
      filteredData.forEach((sightings1) => {
        var row = tbody.append("tr");
        Object.entries(sightings1).forEach(([key, value]) => {
          var cell1 = row.append("td");
          cell1.text(value);
        });
      });
      });
  

  

