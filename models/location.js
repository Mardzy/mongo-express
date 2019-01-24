const mongoose = require('mongoose');

const locationsSchema = new mongoose.Schema({
    lat: { type: Number },
    lng: { type: Number },
    owner: { type: mongoose.Schema.ObjectId, ref: 'Truck' },
});

locationsSchema.set('toJSON', {
    virtuals: true,
    transform(doc, json) {
        delete json.__v;
        return json;
    }
});


var Locations = module.exports = mongoose.model('Locations', locationsSchema);



module.exports.get = function (callback, limit) {
    Locations.find(callback).limit(limit);
};
