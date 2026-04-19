const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.get('/create', productController.showCreateForm);
router.post('/create', productController.createProduct);

router.get('/edit/:id', productController.showEditForm);
router.post('/:id/update', productController.updateProduct);

// delete (POST)
router.get('/:id/delete', productController.showDeleteForm);
router.post('/:id/delete', productController.deleteProduct);
// details
router.get('/:id', productController.getProductById);

// page confirmation delete

module.exports = router;