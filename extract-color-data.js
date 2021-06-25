/*
    base example using node https://lokeshdhakar.com/projects/color-thief/ 
*/

const ColorThief = require('colorthief');

var resolve = require('resolve');

//const img = resolve(process.cwd(), 'rainbow.jpg');
const img = 'rainbow.jpg'
console.log(img);


ColorThief.getColor(img)
    .then(color => { console.log(color) })
    .catch(err => { console.log(err) })

ColorThief.getPalette(img, 5)
    .then(palette => { console.log(palette) })
    .catch(err => { console.log(err) })