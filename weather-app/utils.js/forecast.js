const request = require('request');

//forecast weather api

const forecast = (lat, long, callback) => {
const url = 'http://api.weatherstack.com/current?access_key=9863ad178291d21b0085414c8bc0fec7&query=' + encodeURIComponent(lat) + ', ' + encodeURIComponent(long) + '';

request({ url, json: true}, (error, {body} = {}) => {
    if (error){
        callback('Unable to connect to weather service', undefined);
    }else if (body.error){
        callback('Invalid weather address, try another search', undefined);
    }else{
    callback(undefined, body.current.weather_descriptions + ', It is currently ' + body.current.temperature + '°C out' + '. There is a ' + body.current.precip + '% chance of rain');
    };
});
};

module.exports = forecast