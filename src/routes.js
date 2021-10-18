const express = require("express")

const router = express.Router()

/**
 * Main router and load views
 */
router.get("/admin", (req, resp) => {
  resp.render("./admin/index.ejs")
})

module.exports = router
