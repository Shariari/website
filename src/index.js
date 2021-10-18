const express = require("express")
const session = require("express-session")
const http = require("http")
const path = require("path")

const routes = require("./routes.js")

/**
 * Express init
 */
const app = express()
const port = process.env.PORT || 3000

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "assets")))
app.use(express.json())
app.use(session({
  secret: "whatIsScretBro",
  resave: true,
  saveUninitialized: true
}))

// Use routes in web app
app.use("/", routes)

module.exports = {
  app
}

// Create server and listen in port 3000
const server = http.createServer(app)
server.listen(port, function () {
  console.clear(); console.log("[info] server is running in port %d", port)
})
