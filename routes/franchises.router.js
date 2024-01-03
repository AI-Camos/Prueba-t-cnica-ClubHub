import express from 'express';
import FranchisesServices from './../services/franchises.service.js';

const router = express.Router();
const service = new FranchisesServices();


router.get('/', async (req, res, next) => {
  try{
    console.log('franchise')
    const franchise = await service.find();
    console.log('franchise', franchise)
    res.json(franchise);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try{
    const { id } = req.params;
    const franchise = await service.findOne(id);
    res.json(franchise);

  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try{
    const body = req.body;
    const newFranchises = await service.create(body);
    res.status(201).json(newFranchises)
  } catch (error) {
    next(error);
  }
})

router.patch('/:id', async (req, res, next) => {
  try{
    const { id } = req.params;
    const body = req.body;
    const updatedFranchises = await service.update(id, body);
    res.json(updatedFranchises);
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
