const express =require("express")
const ApiData = require("../api/ApiData")
const Data= express.Router()
Data.route("/").get(ApiData.apiController)
module.exports = Data