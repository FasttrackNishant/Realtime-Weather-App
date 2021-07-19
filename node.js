const http = require('http');
const fs = require('fs');
var requests = require("requests")

const replaceVal = (tempVal, orgVal) => {

    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%mintemp%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%maxtemp%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
    return temperature;
}
const homeFile = fs.readFileSync('index.html', 'utf-8');

const server = http.createServer((req, res) => {
    if (req.url == "/") {

        requests("http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=9af3546c187d071f18c1503a174fb8f9")

        .on("data", (chunk) => {
                const objdata = JSON.parse(chunk);
                const arrData = [objdata];

                const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join(" ");

                res.write(realTimeData);
            })
            .on("end", (err) => {
                if (err) return console.log('connection closed due to errors', err);

                res.end();
            });
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port 8000");
});