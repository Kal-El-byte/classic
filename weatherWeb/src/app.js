const path = require('path')
const express = require('express');

console.log(__dirname);
const publicDirectoryPath = path.join(__dirname, '../public');

//store the express in app variable for easy usage
const app = express();

//server up the path.join directries
//app.use helps to customize the server
app.use(express.static(path.join(publicDirectoryPath)));

//Home page
// app.get('', (err, res) => {
//     res.send('<h1>Home Page</h1>');
// });

//help page
// app.get('/help', (err, res) => {
//     res.send('<h1>Help Page<h2>');
// });

//about page
// app.get('/about', (err, res) => {
//     res.send('<h1>About Page</h1>');
// });

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