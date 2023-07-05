var express = require('express');
var app = express();
const cors = require('cors');
app.use(cors());
app.get('/cars', function (req, res) {
  res.json({
    name: 'John',
    cars: [
      {
        name: 'Ford',
        model: 'Mustang',
      },
      {
        name: 'BMW',
        model: 'X5',
      },
    ],
  });
});

app.listen(3000, function () {
  console.log('app listening on port 3000!');
});
