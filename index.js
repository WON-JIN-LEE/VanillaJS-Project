'use strict';

// //String
// const what = "Wonjin";
// //Boolean
// const what = true;
// //Number
// const what = 666;
// //Float
// const what = 55.1;

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(daysOfWeek);

const nicoInfo = {
    name: "Wonjin",
    age: 33,
    gender: "Male",
    isHandosme: true,
    favMovies: [
        "Along the gods", "LOTR", " Oldboy"
    ],
    favFood: [
        {
            name: "kimchi",
            fatty: false
        },
        {
            name: "Cheese buger",
            fatty: true
        }
    ]
};

console.log(nicoInfo.gender);

nicoInfo.gender = "Female";

console.log(nicoInfo.gender);

console.log(nicoInfo);

console.log(nicoInfo.favFood[0].fatty);
console.log(nicoInfo.favFood[1].fatty);
