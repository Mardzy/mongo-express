const Location = require('../models/location');
const Truck = require('../models/truck');

const locationIndex = (req, res, next) => {
    Location
        .find()
        .exec()
        .then(locations => res.json(locations))
        .catch(next);
};


function locationCreate(req, res, next) {
    Location
        .create(req.body)
        .then(loc => res.status(201).json(loc))
        .catch(next);
}

module.exports = {
  index: locationIndex,
  create: locationCreate
};