const path = require('path')
const express = require('express');
const hbs = require('hbs')

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//store the express in app variable for easy usage
const app = express();

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

//weather page
app.get('/weather', (err, res) => {
    res.send({
        forecast: '29 °C, Mostly cloudy',
        location: 'Boston'
    });
});

//set url port
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});