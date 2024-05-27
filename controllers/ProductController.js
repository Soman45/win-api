const { Product, User } = require('../models');

// LIHAT PRODUCT
const fetchProducts = async (req, res) => {
  try {
    console.log('Fetching products for user:', req.user.id);
    const products = await Product.findAll({ where: { userId: req.user.id } });
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// BUAT PRODUCT BARU
const createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const product = await Product.create({
      name,
      description,
      price,
      userId: req.user.id
    });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE PRODUCT
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const product = await Product.findOne({ where: { id, userId: req.user.id } });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await product.update({ name, description, price });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// HAPUS PRODUCT
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ where: { id, userId: req.user.id } });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await product.destroy();
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
