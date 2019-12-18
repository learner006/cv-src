const request = require('request');
const say = require("../../say");

const options = {
    url: 'https://www.reddit.com/r/funny.json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'my-reddit-client'
    }
};

say(options);
//process.exit();

request(options, function(err, res, body) {
    let json = JSON.parse(body);
    console.log(json);
});