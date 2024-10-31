import express from 'express'
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controller/product.controller.js';

const router = express.Router();

router.get('/', getProducts)
//post request api
router.post('/', createProduct);

//update request
router.put('/:id', updateProduct)

//delete request api
router.delete('/:id', deleteProduct)

export default router;