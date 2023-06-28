
const geoLocation = require('./utils.js/geocode')
const forecast = require('./utils.js/forecast')

const address = process.argv[2]

if (!address){
    return console.log('please input a valid address search')
}
geoLocation(address, (error, data) => {
    if(error){
       return console.log(error);
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if(error){
            return console.log(error);
        }
            console.log(data.location)
            console.log(forecastData);
    });
});