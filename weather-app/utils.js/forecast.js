const request = require('request');

//forecast weather api

const forecast = (lat, long, callback) => {
const url = 'http://api.weatherstack.com/current?access_key=9863ad178291d21b0085414c8bc0fec7&query=' + encodeURIComponent(lat) + ', ' + encodeURIComponent(long) + '';

request({  url: url, json: true}, (error, response) => {
    if (error){
        callback('Unable to connect to weather service', undefined);
    }else if (response.body.error){
        callback('Invalid weather address, try another search', undefined);
    }else{
    callback(undefined, response.body.current.weather_descriptions + ', It is currently ' + response.body.current.temperature + '°C out' + '. There is a ' + response.body.current.precip + '% chance of rain');
    };
});
};

module.exports = forecast