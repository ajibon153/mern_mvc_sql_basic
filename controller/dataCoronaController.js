const DataCorona = require('../model/DataCorona');

module.exports = {
  index: function (req, res) {
    DataCorona.get(req.con, function (err, rows) {
      res.render('dataCorona/index', { data: rows });
    });
  },

  create: function (req, res) {
    DataCorona.get(req.con, function (err, rows) {
      res.render('dataCorona/create', { data: rows });
    });
  },

  input: function (req, res) {
    DataCorona.create(req.con, req.body, function (err) {
      res.redirect('/dataCorona');
    });
  },

  edit: function (req, res) {
    DataCorona.getById(req.con, req.params.id, function (err, rows) {
      console.log('rows', rows);
      res.render('dataCorona/edit', { data: rows[0] });
    });
  },

  update: function (req, res) {
    DataCorona.update(req.con, req.body, req.params.id, function (err) {
      res.redirect('/datacorona');
    });
  },

  destroy: function (req, res) {
    DataCorona.destroy(req.con, req.params.id, function (err) {
      res.redirect('/datacorona');
    });
  },
};
