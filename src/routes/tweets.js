const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../database.js');


// CREAR UN NUEVO TWEET ---- CREATE A NEW TWEET
router.post('/api/tweets', (request, response) => {

  const query = "INSERT INTO tweets (id_usuario, tweet, date) VALUES ('" + request.body.id_usuario + "', '" + request.body.tweet + "', CURRENT_TIMESTAMP())"
  mysqlConnection.query(query,(err, rows, fields) => {
    if(!err) {
      response.json({message: 'Tweet has been created / Se ha creado al tweet.'});
    } else {
        response.json({message: err});
    }
  });
});


// OBTENER TODOS LOS TWEETS ---- GET ALL TWEETS
router.get('/api/tweets', (request, response) => {
  mysqlConnection.query('SELECT * FROM tweets LEFT JOIN usuarios as usuario ON usuario.id_usuario = tweets.id_usuario', (err, rows, fields) => {
    if(!err) {
      response.json(rows);
    } else {
      console.log(err);
    }
  });  
});


// ELIMINAR UN TWEET EN ESPECÍFICO ---- DELETE A SPECIFIC TWEET
router.delete('/api/tweets/:id', (request, response) => {
  const { id } = request.params;
  mysqlConnection.query('DELETE FROM tweets WHERE id_tweet = ?', [id], (err, rows, fields) => {
    if(!err) {
      response.json({message: 'Your tweet has been deleted successful.'});
    } else {
      console.log(err);
    }
  });
});

router.put('/api/tweets/:id', (request, response) => {
  mysqlConnection.query('UPDATE `tweets` SET `tweet`=? where `id_tweet`=?', [request.body.tweet, request.body.id_tweet], (err, rows, fields) => {
    if(!err) {
      response.json({message: 'Your tweet has been updated succesful.'});
    } else {
        response.json({message: err});
    }
  });
});

module.exports = router;