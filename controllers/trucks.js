const Truck = require('../models/truck');

const assignTruckValues = (data, truck) => {
    truck.model = data.model;
    truck.year = data.year;
    truck.licenseNo = data.licenseNo;
    truck.currentLocation = data.currentLocation;
    truck.locations = data.locations;
    truck.companyName = data.companyName;
    truck.driverName = data.driverName;
    truck.phoneNumber = data.phoneNumber;
    truck.emailAddress = data.emailAddress;
};

exports.index = (req, res, next) => {
    Truck
        .find()
        .populate('location')
        .exec()
        .then(trucks => res.json(trucks))
        .catch(next);
};

exports.new = (req, res, next) => {
    var truck = new Truck();
    assignTruckValues(req.body, truck);
    truck
        .save(req.body)
        .then(cat => res.status(201).json(cat))
        .catch(next);
};

exports.view = (req, res, next) => {
    Truck
        .findById(req.params.truck_id)
        .populate('location')
        .exec()
        .then((truck) => {
            if (!truck) return res.json({message: 'Truck not found'});
            res.json(truck);
        })
        .catch(next);
};

exports.update = (req, res, next) => {
    Truck
        .findById(req.params.truck_id)
        .exec()
        .then(truck => {
            if (!truck) return res.json({message: 'Truck not found'});
            truck = Object.assign(truck, req.body);
            return truck.save();
        })
        .then(cat => res.json(cat))
        .catch(next);
};

exports.delete = function (req, res, next) {
    Truck
        .remove({_id: req.params.truck_id})
        .then(
            () => res.json({
                status: 'success',
                message: 'Truck deleted'
            }))
        .catch(err =>res.send(err));
};
