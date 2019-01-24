const Truck = require('../models/truck');

function trucksIndex(req, res, next) {
    Truck
        .find()
        // .populate('locations')
        .exec()
        .then(trucks => res.json(trucks))
        .catch(next);
};

function trucksCreate(req, res, next) {
    Truck
        .create(req.body)
        .then((truck) => res.status(201).json(truck))
        .catch(next);
};

function trucksShow(req, res, next) {
    Truck
        .findById(req.params.truck_id)
        // .populate({ path: "locations" })
        .exec()
        .then(truck => {
            if (!truck){ 
                return res.json({ message: "Truck not found" })
            };

            res.json(truck);
        })
        .catch(next);
};

function trucksUpdate(req, res, next) {
    Truck
        .findById(req.params.truck_id)
        .exec()
        .then(truck => {
            if (!truck) {
                return res.json({message: 'Truck not found'});
            }
            truck = Object.assign(truck, req.body);
            return truck.save();
        })
        .then(truck => res.json(truck))
        .catch(next);
};

function trucksDispose(req, res, next) {
    Truck
        .remove({_id: req.params.truck_id})
        .then(() => res.json({
            status: 'success',
            message: 'Truck deleted'
        }))
        .catch(next);
};


module.exports = {
  index: trucksIndex,
  create: trucksCreate,
  update: trucksUpdate,
  show: trucksShow,
  dispose: trucksDispose
};