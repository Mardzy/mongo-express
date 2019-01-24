const Location = require('../models/location');

const assignLocationValues = (data, location) => {
    location.lat = data.lat;
    location.lng = data.lng;
};

exports.index = (req, res, next) => {
    Location
        .find()
        .populate('owner')
        .exec()
        .then(locations => res.json(locations))
        .catch(next);
};

exports.new = (req, res, next) => {
    var location = new Location();
    assignLocationValues(req.body, location);
    location
        .save(req.body)
        // .then(items =>{
        //     const arr = items.map(i)
        //     return items;
        // })
        .then(location => res.status(201).json(location))
        .catch(next);

};



exports.delete = function (req, res) {
    Location
        .remove({_id: req.params.location_id})
        .then(
            () => res.json({
                status: 'success',
                message: 'Location deleted'
            }))
        .catch(err =>res.send(err));
};
