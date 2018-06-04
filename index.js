const express = require('express');
const cors = require('cors');
const app = express();
const data = require('./students');
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    data: data
  });
});

app.get('/:id', (req, res) => {
  var id = getStudentById(data, req.params.id);
  if(!id) {
    res.status(404).json({
      error: "Student record not found at that ID."
    });
  } else {
    res.json({
      data: id
    });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function getStudentById(data, id) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i]
    }
  };
  return null
};