const request = require('request');

//forecast weather api
const url = 'http://api.weatherstack.com/current?access_key=9863ad178291d21b0085414c8bc0fec7&query=New%York';

request({  url: url, json: true}, (error, response) => {
    if (error){
        console.log('Unable to connect to weather service')
    }else if (response.body.error){
        console.log('Invalid weather address, try another search')
    }else{
    console.log(response.body.current.weather_descriptions + ', It is currently ' + response.body.current.temperature + '°C out' + '. There is a ' + response.body.current.precip + '% chance of rain')
    }
})