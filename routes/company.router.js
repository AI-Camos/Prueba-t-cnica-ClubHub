import express from 'express';
import CompanyServices from './../services/company.services.js';

const router = express.Router();
const service = new CompanyServices();


router.get('/', async (req, res, next) => {
  try{
    const company = await service.find();
    res.json(company);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try{
    const { id } = req.params;
    const company = await service.findOne(id);
    res.json(company);

  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try{
    const body = req.body;
    const newCompany = await service.create(body);
    res.status(201).json(newCompany)
  } catch (error) {
    next(error);
  }
})

router.patch('/:id', async (req, res, next) => {
  try{
    const { id } = req.params;
    const body = req.body;
    const updatedCompany = await service.update(id, body);
    res.json(updatedCompany);
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
