// from data.js
var tableData = data;

//Print Data in console
//console.log(tableData);

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