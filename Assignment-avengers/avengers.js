const fs = require("node:fs");
const data = require("./Data/data.json")
const title = require("./Assets/title.json")
const power = require("./Assets/power.json")
const city = require("./Assets/city.json")
const randomTitleIndex = Math.floor(Math.random() * title.length);
const randomPowerIndex = Math.floor(Math.random() * power.length);
const randomCityIndex = Math.floor(Math.random() * city.length);
const randomTitle = title[randomTitleIndex];
const avengers = {
  title: randomTitle,
  power: power[randomPowerIndex],
  city: city[randomCityIndex],
  relatedImg: imageMapping[randomTitle] | "images/default.jpg", 

};
data.avengers.push(avengers);
console.log(data);

fs.writeFileSync("data/data.json", JSON.stringify(data, null, 2), "utf-8");