require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const db = require('./pool.js');
//routers


// body parsers
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// route handlers
app.get('/getRecording', (req, res) => {
  const allRecordings = 'SELECT * FROM submissions2;';
  db.query(allRecordings, (err, data) => {
    if (err){
      return `ERROR: ${err}`;
    }
    else{
      console.log(data.rows)
      res.locals.data = data.rows;
      return res.send(res.locals.data);
    }
  })
})

// INSERT INTO submissions2 ( user_attribution, time_stamp, location, blob) 
// VALUES (
//   'giaoandevan', Now(), 'SJandSD', 'blob'
//   );
      
app.post('/postRecording', (req, res) => {
  const { user_attribution, location, blob } = req.body
  console.log(user_attribution, location, blob)
  const postRecording = 'INSERT INTO submissions2 (user_attribution, location, blob) VALUES ($1, $2, $3);';

  // db.query(postRecording, [user_attribution, location, blob], (err, data) => {
    db.query(postRecording, ['test','test','test'], (err, data) => {
    if (err){
      return `ERROR: ${err}`;
    }
    else {
      return res.send("success");
    }
  })
})

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on the route '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, () => {
  console.log(`Server listening on port: 3000`);
});