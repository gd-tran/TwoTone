const express = require('express');
const app = express();
const path = require('path');

//routers


// body parsers
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// route handlers


// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on the route '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, () => {
  console.log(`Server listening on port: 3000`);
});