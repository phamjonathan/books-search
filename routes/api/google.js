const router = require ("express").Router();
const googleController = require ("../../controllers/googleController");

// Linkage to Google API
router
    .route("/")
    .get(googleController.findAll);
    
module.exports = router;