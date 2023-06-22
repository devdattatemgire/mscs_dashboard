const bodyParser = require('body-parser');
const express = require('express');
const hbs = require('hbs');
const app = express();
const routes = require('./routes/main');
const mongoose = require('mongoose');
const DataModel = require('./models/dbModel');

app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);


// database connection
mongoose.connect("mongodb://0.0.0.0:27017/db")
  .then(() => {
    console.log('Database connected successfully');
    app.listen(process.env.PORT || 8080, () => {
      console.log('Server started on port 8080');
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

  
  // Route to handle the form submission
routes.post('/submit-form', (req, res) => {
  console.log("This is server-side");
  const { selectedState, selectedDistrict, selectedSector } = req.body;

  console.log('selectedState:', selectedState);
  console.log('selectedDistrict:', selectedDistrict);
  console.log('selectedSector:', selectedSector);

  // Construct the query based on the selected values
  const query = {
    State: selectedState,
    District: selectedDistrict,
    Sector: selectedSector,
  };

  console.log('Query:', query);

  // Fetch the data from the database based on the query
  DataModel.find(query, { _id: 0 })
    .then(data => {
      console.log('Data:', data);
      res.json(data); // Send the fetched data as JSON response
    })
    .catch(error => {
      console.error('Error fetching data from the database:', error);
      res.status(500).json({ error: 'An error occurred while fetching data' });
    });
});

