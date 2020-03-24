const path = require("path");
const router = require("express").Router();
const googleRoutes = require("./google");
const bookRoutes = require("./books");

// Route to Books
router.use("/books", bookRoutes);

// Route to Google
router.use("/google", googleRoutes);

// Rendering?
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});
module.exports = router;