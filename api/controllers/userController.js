const express = require('express');

// Contoh data pengguna (sementara belum terhubung ke database)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
];

// Mendapatkan semua pengguna
const getUsers = (req, res) => {
  res.json(users);
};

// Mendapatkan pengguna berdasarkan ID
const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Pengguna tidak ditemukan' });
  }
};

// Membuat pengguna baru
const createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

// Memperbarui informasi pengguna
const updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex !== -1) {
    const { name, email } = req.body;
    users[userIndex] = { ...users[userIndex], name, email };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: 'Pengguna tidak ditemukan' });
  }
};

// Menghapus pengguna
const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser[0]);
  } else {
    res.status(404).json({ message: 'Pengguna tidak ditemukan' });
  }
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
