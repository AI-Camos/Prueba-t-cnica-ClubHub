import express from 'express';

const router = express.Router();


router.get('/', (req, res) => {
  res.json({
    name: 'Monitor de PC',
    price: 1000
  });
});


export default router;
