const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;



const { dbURI } = require('../config/environment');

const Truck = require('../models/truck');

mongoose.connect(dbURI, { useMongoClient: true })
  .then(db => {
    db.dropDatabase();

    return Truck
      .create([{
        model: 'International Harvester',
        year: 2014,
        licenseNo: 'ABC1234',
        companyName: 'Bob\'s Freight',
        driverName: 'Bob',
        phoneNumber: '+447577777777',
        emailAddress: 'bob@bob\'sfreight.com'
      }])
      .then(trucks => {
        console.log(`${trucks.length} trucks created`);


        const promises = [
          trucks[0].save()
        ];

        return Promise.all(promises);
      });
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
