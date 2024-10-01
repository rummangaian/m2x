const express = require('express')
const { getGrowth } = require('../controllers/growth-controller')
const growthRouter = express.Router()

growthRouter.get('/growth' , getGrowth)

module.exports = {
    growthRouter
};
