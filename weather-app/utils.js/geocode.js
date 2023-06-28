const request = require('request');

//Geo-location server setup

const geoLocation = (address, callback) => {

    geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/ ' + address + '.json?access_token=pk.eyJ1IjoiZGFuaXZldCIsImEiOiJjbGgxMjV1OHAwZmliM2VvaDdzOW0yeHByIn0.l_G-81CNE38lrbaeJQCpGw&limit=1';
    
    request({ url: geocodeURL, json: true}, (error, response) => {
        if(error){
            callback('Unable for fetch location', undefined);
        }else if(response.body.features.length === 0){
            callback('Invalid location address, try another search', undefined);
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                locatiion: response.body.features[0].place_name
            });
        };
    });
    };

    module.exports = geoLocation;