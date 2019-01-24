const mongoose = require('mongoose');

const locationsSchema = new mongoose.Schema({
    lat: { type: Number },
    lng: { type: Number },
});

locationsSchema.set('toJSON', {
    virtuals: true,
    transform(doc, json) {
        delete json._id;
        delete json.__v;
        return json;
    }
});


var Locations = module.exports = mongoose.model('Locations', locationsSchema);

module.exports.get = function (callback, limit) {
    Locations.find(callback).limit(limit);
};
