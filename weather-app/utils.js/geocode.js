const request = require('request');

const geocode = (address, callback) => {
    geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/ ' + address + '.json?access_token=pk.eyJ1IjoiZGFuaXZldCIsImEiOiJjbGgxMjV1OHAwZmliM2VvaDdzOW0yeHByIn0.l_G-81CNE38lrbaeJQCpGw&limit=1';
    
    request( { url: geocodeURL, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to location service', undefined);
        }else if(response.body.features.length === 0){
            callback('location search could not be found, try another search', undefined);
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            });
        };
    });
    };

    module.exports = geocode