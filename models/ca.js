// models/ca.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ca extends Model {
    static associate(models) {
      // Definisi hubungan antar tabel (jika ada)
    }
  }

  Ca.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // ... (Tambahkan kolom-kolom lain sesuai kebutuhan)
    },
    {
      sequelize,
      modelName: 'Ca',
      tableName: 'Cas', // Nama tabel di database
    }
  );

  return Ca;
};
