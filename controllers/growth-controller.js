const data = require('../dummydata/data.json')
const payload = require('../dummydata/payload.json')
const { growthMiddleWare } = require('../middleware/growthMiddleware')



const getGrowth = async(req , res) => {
    const result = growthMiddleWare(data.data , payload)
    // console.log(result)
    res.send(result)
}

module.exports = {
    getGrowth
}