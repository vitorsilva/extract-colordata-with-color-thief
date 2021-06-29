/*
    -- base example using node https://lokeshdhakar.com/projects/color-thief/ 
    -- second test with all color
    -- 
*/

const ColorThief = require('colorthief');

var resolve = require('resolve');

const directory = 'D:\\ONE DRIVE - PESSOAL\\OneDrive\\Site_Doutoramento\\Ficheiros-Base\\_Fotos AT_APP\\';
const path = require('path');
const fs = require('fs')

//const img = resolve(process.cwd(), 'rainbow.jpg');
//const img = 'rainbow.jpg'
//console.log(img);

var a;

async function start() {

    var imgs = await getImagesName();

    var totalColors = [];
    //console.table(imgs);

    for (let i = 0; i < imgs.length; i++) {

        var colors = await getColors(imgs[i].filepath);
        totalColors.push({
            img: imgs[i].filename,
            colors_r: colors[0][0],
            colors_g: colors[0][1],
            colors_b: colors[0][2],
        });
    }

    //console.log("TotalColors:");

    //SAVE
    writeToCSVFile(totalColors);

}

async function getImagesName() {

    // example from https://stackabuse.com/node-list-files-in-a-directory
    var img1 = [];

    fs.readdirSync(directory).forEach(file => {
        if (fs.lstatSync(path.resolve(directory, file)).isDirectory()) {
          //console.log('Directory: ' + file);
        } else {
          //console.log('File: ' + file);
          //add only images
          if (file.substring(file.length-4).toUpperCase() == ".JPG") {
              var o = {filename: file, filepath: path.resolve(directory, file)}
            //img1.push(path.resolve(directory, file));
            img1.push(o);
          }
        }
      });

    return img1;
}

async function getColors(img) {
    var result = [];
    var dominantColor = await ColorThief.getColor(img);
    result.push(dominantColor);

//    var palette = await ColorThief.getPalette(img, 5)
//    result.push(...palette);
    return result;
}

function writeToCSVFile(images) {
    const filename = directory + '\\output-rgb-info.csv';
    fs.writeFile(filename, extractAsCSV(images), err => {
      if (err) {
        console.log('Error writing to csv file', err);
      } else {
        console.log(`saved as ${filename}`);
      }
    });
  }
  
  function extractAsCSV(images) {
    const header = ["imageName,color_r,color_g,color_b"];
    const rows = images.map(image =>
       `${image.img},${image.colors_r},${image.colors_g},${image.colors_b}`
    );
    return header.concat(rows).join("\n");
  }

start();

//console.log(a);




// nomeficheiro, cordominante    
// nomeficheiro, paleta1, paleta12, ....