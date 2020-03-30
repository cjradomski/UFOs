// import the data from data.js
const tableData = data;
// Reference the HTMl table using d3
var tbody =d3.select("tbody");

// Create a function to itereate through the array of objects in the data.js file and append them to a table row
function buildTable(data) {
    // Clear the exisitng data to start with a fresh table 
    tbody.html("");
    // Create a forEach loop to loop through data array and add rows of data to the table
    data.forEach((dataRow) => {
    let row = tbody.append("tr");
    // Loop through each field in the dataRow and add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
    );
});
}

// Create a function to filter table by date
function handleClick() {
    // Grab the datetiume value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Check to see if a date was entered and filter the data using that date
    if (date) {
        // Apply 'filter' to the table data to only keep the rows where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date)
    }
    // Rebuild the table using the filter data - NOTE: If no date was ented, then filteredData will just be the original tableData
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.select("#filter-btn").on("click",handleClick);

// Build the table when the page
buildTable(tableData);