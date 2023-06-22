$(document).ready(function() {
  var districtData = {
    'ANDHRA PRADESH': ["VISAKHAPATANAM", "WEST GODAVARI"],
    ASSAM: ["CHIRANG"],
    BIHAR: ["PATNA", "BUXAR"],
    GUJARAT: ["AHMADABAD", "VALSAD", "BATOD"],
    HARYANA: ["SONIPAT", "GURGAON", "PANIPAT"],
    'JAMMU AND KASHMIR': ["BADGAM"],
    KARNATAKA: ["SHIMOGA"],
    KERALA: ["IDUKKI", "THIRUVANANTHAPURAM", "KOZHIKODE", "THRISSUR", "ERNAKULAM", "KANNUR"],
    'MADHYA PRADESH': ["BHOPAL", "BHIND"],
    MAHARASHTRA: ["BEED", "AHMEDNAGAR", "NASIK", "BULDHANA", "OSMANABAD", "KOLHAPUR", "SANGLI", "BHANDARA", "NAGPUR", "SOLAPUR", "JALGAON", "MUMBAI", "THANE"],
    MANIPUR: ["BISHNUPUR"],
    'NEW DELHI': ["NEW DELHI"],
    PUNJAB: [""],
    'TAMIL NADU': ["COIMBATORE", "CHENNAI", "DHARMAPURI", "THIRUVALLUR"],
    TELANGANA: ["HYDERABAD", "ADILABAD", "KARIMNAGAR"],
    'UTTAR PRADESH': ["KUSHI NAGAR", "LUCKNOW", "BASTI", "BAREILLY", "BULANDSHAHR", "MORADABAD", "DEORIA", "BANDA", "MUZAFFARNAGAR", "JHANSI", "LALITPUR"],
    UTTARAKHAND: [""],
    'WEST BENGAL': ["MALDAH"]
  };

  // Handle state selection change
  $('#stateDropdown').on('change', function() {
    var selectedState = $(this).val();
    var districtOptions = '<option value="">Select District</option>';

    if (selectedState) {
      var districts = districtData[selectedState];

      if (districts && districts.length) {
        for (var i = 0; i < districts.length; i++) {
          districtOptions += '<option value="' + districts[i] + '">' + districts[i] + '</option>';
        }
      }
    }

    $('#districtDropdown').prop('disabled', false).html(districtOptions);
  });


  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the selected values from the form
    const selectedState = $('#stateDropdown').val();
    const selectedDistrict = $('#districtDropdown').val();
    const selectedSector = $('#sectorDropdown').val();

    // Create an object to send to the server
    const requestData = {
      selectedState: selectedState,
      selectedDistrict: selectedDistrict,
      selectedSector: selectedSector,
    };
    

    // Send a POST request to the server with the form data
    fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
      .then(response => response.json())
      .then(data => {
        // Call a function to render the table with the fetched data
        renderTable(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  // Function to render the table with the fetched data
  function renderTable(data) {
    // Get the tableContainer element
    const tableContainer = document.getElementById('tableContainer');

    // Clear the existing content
    tableContainer.innerHTML = '';

    // Create the table element
    const table = document.createElement('table');
    table.classList.add('table');

    // Create the table header row
    const headerRow = document.createElement('tr');

    // Create the table headers
    const headers = ['Name', 'Address', 'State', 'District', 'Date', 'Area', 'Sector']; // Replace with your actual column names

    headers.forEach(headerText => {
      const header = document.createElement('th');
      header.textContent = headerText;
      headerRow.appendChild(header);
    });

    // Append the header row to the table
    table.appendChild(headerRow);

    // Create the table body
    const tableBody = document.createElement('tbody');

    // Loop through the data and create table rows
    data.forEach(rowData => {
      const row = document.createElement('tr');

      // Loop through the row data and create table cells
      Object.values(rowData).forEach(cellData => {
        const cell = document.createElement('td');
        cell.textContent = cellData;
        row.appendChild(cell);
      });

      // Append the row to the table body
      tableBody.appendChild(row);
    });

    // Append the table body to the table
    table.appendChild(tableBody);

    // Append the table to the tableContainer
    tableContainer.appendChild(table);
  }

  // Add event listener to the form submission
  $('#filterForm').on('submit', handleSubmit);
});
