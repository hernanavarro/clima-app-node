const axios = require('axios');


const getLugarLatLng = async(dir) => {



    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${dir}&appid=ba76014c3aac5994e2dde7beada575a0&units=metric`)


    //if (resp.data.Results.length === 0) {
    //    throw new Error(`No hay resultados para ${dir}`);
    //}

    const direccion = resp.data.name;
    const lat = resp.data.coord.lat;
    const lng = resp.data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}