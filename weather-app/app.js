const forecast = require('./utils.js/forecast');
const geocode = require('./utils.js/geocode');

//get address input from user
const address = process.argv[2];

if(!address){
   return console.log('Please provide a search address')
}
geocode(address, (error, data) => {
    if(error){
        return console.log(error);
    };
    forecast(data.latitude, data.longitude, (error, forecastdata) => {
        console.log(data.location);
        console.log(forecastdata);
    });
});
