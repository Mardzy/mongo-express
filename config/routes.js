let router = require('express').Router();
var Trucks = require("../controllers/trucks");
var Locations = require("../controllers/locations");

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

router.route('/trucks')
    .get(Trucks.index)
    .post(Trucks.create);

router
  .route("/trucks/:truck_id")
  .get(Trucks.show)
  .put(Trucks.update)
  .delete(Trucks.dispose);

router.route('/trucks/:truck_id/locations')
    .get(Locations.index)
    .post(Locations.create);


module.exports = router;
