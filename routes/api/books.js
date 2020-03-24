const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Linkage to Google API
router.route("/")
    .get(bookController.findAll)
    .post(bookController.create);
// Confirming the unique ID
router
    .route("/:id")
    .get(bookController.findById)
    .put(bookController.update)
    .delete(bookController.remove);
module.exports = router;