const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const port = 3000;

const sequelize = new Sequelize({
  dialect: 'mysql',
  username: 'ca',
  password: 'Ca2023be.',
  database: 'studyClub',
  host: '127.0.0.1'
});

// Inisialisasi model
const Ca = require('./models/ca')(sequelize, DataTypes);

// Sinkronkan database
sequelize.sync().then(() => {
  console.log('Database terhubung dan tabel sinkronized.');
});

// Middleware untuk parsing JSON
app.use(express.json());

// Gunakan rute yang telah didefinisikan
const userRoutes = require('./api/routes/index');
app.use('/api', userRoutes);

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

module.exports = Ca
