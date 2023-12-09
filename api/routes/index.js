const express = require('express');
const router = express.Router();
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');
const caController = require('../controllers/ca')

// Rute untuk mendapatkan semua pengguna
router.get('/users', getUsers);

// Rute untuk mendapatkan pengguna berdasarkan ID
router.get('/users/:id', getUserById);

// Rute untuk membuat pengguna baru
router.post('/users', createUser);

// Rute untuk memperbarui informasi pengguna
router.put('/users/:id', updateUser);

// Rute untuk menghapus pengguna
router.delete('/users/:id', deleteUser);


// Ca
router.get('/ca', caController.getAllCas)
router.post('/ca', caController.createCa)
router.get('/ca/:id', caController.getCaById);
router.delete('/ca/:id', caController.deleteCaById);
router.put('/ca/:id', caController.updateCaById);

module.exports = router;
