```javascript
"use strict";

const amIFat = true;
console.log(amIFat);

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeed = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeed);

daysOfWeed.push("sun");
daysOfWeed.pop();

console.log(daysOfWeed);

const player = {
  name: "jin",
  points: 10,
  fat: true,
};

player.points += 20;
player.fat = false;
player.lastName = "Won";
console.log(player);
console.log(player.name);
console.log(player["name"]);

function sayHello(nameOfPerson, age) {
  console.log("Hello! my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 13);
sayHello("jin", 23);
sayHello("1");
sayHello("2");
```
