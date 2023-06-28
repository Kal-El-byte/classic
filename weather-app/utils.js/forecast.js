const request = require('request');

//weather forecast api
const forecast = (latitude, longitude, callback) => {
const url = 'http://api.weatherstack.com/current?access_key=9863ad178291d21b0085414c8bc0fec7&query= ' + latitude + ', ' + longitude+ ' ';

request({ url: url, json: true}, (error, response) => {
        if(error){
         callback('unable to connect to weather server', undefined);
        }else if(response.body.error){
            callback('unable to find weather location, try another search', undefined)
        }else{
            const forecastData = {
                location : response.body.location.name + ', ' + response.body.location.region + ', ' + response.body.location.country,
                wind : response.body.current.wind_speed,
                PRECIP : response.body.current.precip,
                PRESSURE : response.body.current.pressure,
                weather_Description : response.body.current.weather_descriptions[0],
                TEMPRATURE : response.body.current.temperature + '°C'
            }
        callback(undefined, forecastData);
        };
});
};

module.exports = forecast;