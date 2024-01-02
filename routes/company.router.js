const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
  res.json({
    name: 'Monitor de PC',
    price: 1000
  });
});


module.exports = router;
