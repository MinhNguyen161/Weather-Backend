const { default: axios } = require("axios")


const weatherController = {}
require("dotenv").config()
const apikey = process.env.OPEN_WEATHER_KEY
weatherController.getWeatherData = async (req, res, next) => {
    try {
        console.log("what is re", req.query.city)
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${apikey}&units=metric`
        console.log("url", url)
        const resp = await axios.get(url)
        console.log("resp", resp)
        res.send({ status: "success", data: resp.data })

    }
    catch (err) {
        res.send({ status: "fail", data: err.message })

        console.log(err)
    }
}



module.exports = weatherController