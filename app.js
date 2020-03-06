const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
// const writeStream = fs.createWriteStream
const writeStream = fs.createWriteStream('post.txt');

const URL = process.argv[2]


// Write Headers
writeStream.write(`link \n`);


request(URL, (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        // const siteHeading = $('.title');
        // const element = $('.element');
        // console.log(siteHeading.html());
        // const output = siteHeading.children('h1').text();
        // const output = element.children('a').attr('href').html();
        // console.log(output);

        $('.element').each((i, el) => {
            const link = $(el)
            .find ('a')
            .attr('href');

            console.log(link);
            writeStream.write(`${link} \n`);

        });
        console.log("scraping done");
    }
});

// fs.writeFile('output.txt', JSON.stringify(link, null , 4), function(error){
//     if(error) {
//         console.log(error);

//     }else {
//         console.log("data inputed");

//     }
// });

//removed old comments?