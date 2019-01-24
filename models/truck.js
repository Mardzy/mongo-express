const mongoose = require('mongoose');

const truckSchema = new mongoose.Schema({
    model: String,
    year: Number,
    licenseNo: String,
    companyName: String,
    driverName: String,
    phoneNumber: String,
    emailAddress: String
  });

truckSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json._id;
    delete json.__v;
    return json;
  }
});

var Truck = module.exports = mongoose.model('Truck', truckSchema);

module.exports.get = function (callback, limit) {
    Truck.find(callback).limit(limit);
};
