let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

var Trucks = require('../controllers/trucks');
var Locations = require('../controllers/locations');

router.route('/trucks')
    .get(Trucks.index)
    .post(Trucks.new);

router.route('/trucks/:truck_id/locations')
    .get(Locations.index)
    .post(Locations.new);

router.route('/trucks/:truck_id/locations/:_id')
    .get(Locations.delete);

router.route('/trucks/:truck_id')
    .get(Trucks.view)
    .patch(Trucks.update)
    .put(Trucks.update)
    .delete(Trucks.delete);

module.exports = router;
