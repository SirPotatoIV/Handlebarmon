let db = require('../models');

module.exports = function (app) {
  app.get('/', function (req, res) {
    db.Trainer.findAll({ raw: true }).then((data) => {
      // const trainerData = data.get({ plain: true });
      res.render('trainer', { trainer: [{}, {}] });
    });
  });
};
