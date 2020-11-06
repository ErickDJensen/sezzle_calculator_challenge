const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
  console.log('in GET');
    let queryText = 'SELECT * FROM "results" ORDER BY "id" DESC LIMIT 10;';
    pool.query(queryText).then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error getting results', error);
      res.sendStatus(500);
    });
  });

// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); 

module.exports = router;