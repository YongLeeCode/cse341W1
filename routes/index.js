const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Sarah Birch');
});

routes.get('/myName', (req, res) => {
  res.send('Yonghwan Lee');
});

routes.get('/haha', (req, res) => {
  res.send('Haha');
});

module.exports = routes;
