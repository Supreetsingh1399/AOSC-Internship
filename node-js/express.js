var express = require('express');
var app = express();
app.get('/', (req, res) => {
  res.send('Hello World from express js');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});