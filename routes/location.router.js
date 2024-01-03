import express from 'express';
import LocationServices from './../services/location.services.js';

const router = express.Router();
const service = new LocationServices();


router.get('/', async (req, res, next) => {
  try{
    const location = await service.find();
    res.json(location);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try{
    const { id } = req.params;
    const location = await service.findOne(id);
    res.json(location);

  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try{
    const body = req.body;
    const newLocation = await service.create(body);
    res.status(201).json(newLocation)
  } catch (error) {
    next(error);
  }
})

router.patch('/:id', async (req, res, next) => {
  try{
    const { id } = req.params;
    const body = req.body;
    const updatedLocation = await service.update(id, body);
    res.json(updatedLocation);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async(req, res, next) => {
  try{
    const { id } = req.params;
    await service.delete(id);
    res.status(201).json({id});
  }catch (error) {
    next(error);
  }
})

export default router;
