const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;
const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      `Listening on port ${PORT}. Visit http://localhost:${PORT}/ in a browser.`
    );
  });
});
