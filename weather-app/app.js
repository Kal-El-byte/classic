const forecast = require('./utils.js/forecast');
const geocode = require('./utils.js/geocode');

//get address input from user
const address = process.argv[2];

if(!address){
   return console.log('Please provide a search address')
}
// The input of forecast comes from output of geocode
geocode(address, (error, {latitude, longitude, location} = {}) => {
    if(error){
        return console.log(error);
    };
    forecast(latitude, longitude, (error, forecastdata) => {
        console.log(location);
        console.log(forecastdata);
    });
});
