const axios = require('axios');

const getClima = async(lat, lng) => {


    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat}&lon=${lng}&appid=ba76014c3aac5994e2dde7beada575a0&units=metric`)

    return resp.data.main.temp;


}

module.exports = {
    getClima
}