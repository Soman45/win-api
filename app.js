const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const bodyParser = require('body-parser');
require('dotenv').config();
const db = require('./models');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // Supaya tidak ada masalah pada CORS
  credentials: true
}));
app.use(express.json());

// middleware
app.use(bodyParser.json());

// routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

const PORT = process.env.PORT || 5000;

db.sequelize.sync({ force: false }).then(() => {
  console.log('Database synchronized');
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});
