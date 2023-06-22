const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose');



routes.get('', (req, res) => {
  res.render('index');
});



module.exports = routes;
