const mongoose = require('mongoose');

const truckSchema = new mongoose.Schema({
    model: String,
    year: Number,
    licenseNo: String,
    companyName: String,
    driverName: String,
    phoneNumber: String,
    emailAddress: String,
    locations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Locations'}]
  });

truckSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.__v;
    return json;
  }
});

truckSchema
    .virtual('location', {
        ref: 'Locations',
        localField: '_id',
        foreignField: 'owner'
    });

var Truck = module.exports = mongoose.model('Truck', truckSchema);

module.exports.get = function (callback, limit) {
    Truck.find(callback).limit(limit);
};
