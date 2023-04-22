const fernandoRoute = (req, res, next) => {
  res.send('Fernando Arias');
};

const claudiaRoute = (req, res, next) => {
  res.send('Claudia Arias');
};

const orlandoRoute = (req, res, next) => {
  res.send('Orlando Arias');
};

module.exports = { fernandoRoute, claudiaRoute, orlandoRoute };
