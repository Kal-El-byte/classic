const path = require('path')
const express = require('express');
const hbs = require('hbs')
const geocode = require('./utils.js/geocode');
const forecast = require('./utils.js/forecast')

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//store the express in app variable for easy usage
const app = express();

const port = process.env.PORT || 3000

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(path.join(publicDirectoryPath)));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Kamelot'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Kamelot'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'Kamelot'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Ooops!!! This help page no longer exist',
        name: 'Kamelot'
    })
})

//weather page
app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address'
        })
    }
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if(error){
            return res.send({error} );
        };
        forecast(latitude, longitude, (error, forecastdata) => {
            if(error){
                return res.send(error)
            }
            res.send({
                address: req.query.address,
                location: location,
                forecast: forecastdata
            });
        });
    });
});

//404 page
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Oops!!! Page not found',
        name: 'Kamelot'
    })
})

//set url port
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});