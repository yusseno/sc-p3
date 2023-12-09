const express = require('express');
const { Ca } = require('../../models');

exports.getAllCas = async (req, res) => {
    try {
      const cas = await Ca.findAll();
    //   console.log(cas)
      res.json(cas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.createCa = async (req, res) => {
    const { name } = req.body;
  
    try {
      // Validasi data
      if (!name) {
        return res.status(400).json({ error: 'Field "name" is required.' });
      }
  
      // Buat entri baru di tabel "cas"
      const newCa = await Ca.create({ name });
  
      res.status(201).json(newCa);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.getCaById = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Temukan entri berdasarkan ID
      const ca = await Ca.findByPk(id);
  
      // Periksa apakah entri ditemukan
      if (!ca) {
        return res.status(404).json({ error: 'Entry not found.' });
      }
  
      res.json(ca);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.updateCaById = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
  
    try {
      // Temukan entri berdasarkan ID
      const ca = await Ca.findByPk(id);
  
      // Periksa apakah entri ditemukan
      if (!ca) {
        return res.status(404).json({ error: 'Entry not found.' });
      }
  
      // Perbarui entri
      await ca.update({ name });
  
      res.json({ message: 'Entry updated successfully.', updatedEntry: ca });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
exports.deleteCaById = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Hapus entri berdasarkan ID
      const deletedCa = await Ca.destroy({
        where: { id },
      });
  
      // Periksa apakah entri ditemukan dan dihapus
      if (!deletedCa) {
        return res.status(404).json({ error: 'Entry not found.' });
      }
  
      res.json({ message: 'Entry deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };