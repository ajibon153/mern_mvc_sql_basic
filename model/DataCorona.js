module.exports = {
  get: function (con, callback) {
    con.query('SELECT * FROM data_corona', callback);
  },

  create: function (con, data, callback) {
    console.log('Data', data);
    con.query(
      `INSERT INTO data_corona SET 
      hari = '${data.hari}', 
      jumlah_positif = '${data.jumlah_positif}',
      jumlah_negatif = '${data.jumlah_negatif}'`,
      callback
    );
  },

  getById: function (con, id, callback) {
    console.log(id);
    con.query(
      `SELECT * FROM data_corona WHERE id_data_corona = ${id}`,
      callback
    );
  },

  update: function (con, data, id, callback) {
    con.query(
      `UPDATE data_corona SET 
      hari = '${data.hari}', 
      jumlah_positif = '${data.jumlah_positif}', 
      jumlah_negatif = '${data.jumlah_negatif}' 
      WHERE id_data_corona = ${id}`,
      callback
    );
  },

  destroy: function (con, id, callback) {
    con.query(`DELETE FROM data_corona WHERE id_data_corona = ${id}`, callback);
  },
};
