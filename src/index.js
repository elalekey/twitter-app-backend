const express = require('express');
var cors = require('cors')
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(cors())

// Routes
app.use(require('./routes/tweets.js'));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server is running on: ${app.get('port')}`);
});