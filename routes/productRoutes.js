// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { fetchProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

router.use(verifyToken);

router.get('/', fetchProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
