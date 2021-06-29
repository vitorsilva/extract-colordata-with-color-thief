/*
    -- base example using node https://lokeshdhakar.com/projects/color-thief/ 
    -- second test with all color
*/

const ColorThief = require('colorthief');

var resolve = require('resolve');

//const img = resolve(process.cwd(), 'rainbow.jpg');
//const img = 'rainbow.jpg'
//console.log(img);

var a;

async function start() {

    var imgs = ["D:\\ONE DRIVE - PESSOAL\\OneDrive\\Site_Doutoramento\\Ficheiros-Base\\_Fotos AT_APP\\AT_20180907_IMG_5974.JPG"];
    var totalColors = [];

    for (let i = 0; i < imgs.length; i++) {

        var colors = await getColors(imgs[i]);
        totalColors.push({
            img: imgs[i],
            colors: colors
        });
    }

    console.log("TotalColors:");
    console.table(totalColors[0].colors);

    //SAVE

}

async function getColors(img) {
    var result = [];
    var dominantColor = await ColorThief.getColor(img);
    result.push(dominantColor);

//    var palette = await ColorThief.getPalette(img, 5)
//    result.push(...palette);
    return result;
}

start();

//console.log(a);




// nomeficheiro, cordominante    
// nomeficheiro, paleta1, paleta12, ....