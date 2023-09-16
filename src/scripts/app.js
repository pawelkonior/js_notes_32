const data = [
    {
        name: "pawel",
        city: "krakow",
        age: 37,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: "aleksandra",
        city: "lodz",
        age: 31,
        hobbies: ['movies', 'dance', 'food']
    },
    {
        name: "marcel",
        city: "krakow",
        age: 28,
        hobbies: ['photography', 'bikes', 'parties']
    },
    {
        name: "tomasz",
        city: "wroclaw",
        age: 22,
        hobbies: ['league of legends', 'motocykle']
    },
    {
        name: "romek",
        city: "sierpc",
        age: 20,
        hobbies: ["programming", "sport", "games"]
    },
    {
        name: "andrzej",
        city: "kolin",
        age: 34,
        hobbies: ['anime', 'games', 'sleep']
    },
    {
        name: "marcin",
        city: "knurow",
        age: 40,
        hobbies: ['bike', 'swimming', 'else']
    },
    {
        name: "wojtek",
        city: "czeladz",
        age: 49,
        hobbies: ["bicykle", "drums", "animals"]
    },
    {
        name: "przemek",
        city: "katowice",
        age: 28,
        hobbies: [`css`, `cars`, `drugs`]
    },
    {
        name: "monika",
        city: "poznan",
        age: 35,
        hobbies: ["board games", "reading", "japanese culture"],
    },
    {
        name: "szymon",
        city: "krakow",
        age: 28,
        hobbies: ["sport", "combat", "money"],
    },
    {
        name: "nataliia",
        city: "sambor",
        age: 30,
        hobbies: ["law", "bjd", "pencil_drawing", "painting_clothes", "clay_statues", "board_games"]
    },
    {
        name: "mateusz",
        city: "sulechow",
        age: 26,
        hobbies: ["history", "military", "astronomy"]
    }
]


// policz średnią wieku

let totalAge = 0;

// for (let i = 0; i < data.length; i++) {
//     totalAge += data[i].age
// }

// for (const person of data){
//     totalAge += person.age;
// }
let counter = 0;

// while (counter < data.length) {
//     totalAge += data[counter].age;
//     counter++;
// }
// do {
//     totalAge += data[counter].age;
//     counter++;
// }
// while (counter < data.length);
//
// const result = totalAge / data.length;
// console.log(result);

// console.log(data.length);

const totalAgesColl = data.map((person) => person.age);
const totalAgesSum = totalAgesColl.reduce((acc, ce, idx, arr) => acc + ce);


// Array.prototype.map = function (cb) {
//     const temp = [];
//
//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i], i, this))
//     }
//
//     return temp;
// }
//
// const d = [1, 2, 3, 4];
// const result = d.map((item, index) => {
//     return item * index < 3
// });

// result => [true, true, false, false]


// Policz średnią wieku ludzi spoza krakow
//

// function calculateAvgAge(items) {
//     let totalAge = 0;
//     let counter = 0;
//
//     for (const item of items){
//         if (item.city !== 'krakow'){
//             totalAge += item.age;
//             counter++;
//         }
//     }
//
//     return totalAge / counter;
// }


Array.prototype.myFilter = function (fn) {
    const tmp = [];

    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            tmp.push(this[i]);
        }
    }

    return tmp;
}


function calculateAvgAge(items) {
    const people = items.filter((item) => item.city !== 'krakow');
    const totalAge = people.reduce((acc, ce) => acc + ce.age, 0);
    return totalAge / people.length;
}


// const result = calculateAvgAge(data);


// Podaj liczbę wszystkich unikalnych hobbies
// function countHobbies(elements) {
//     let hobbies = [];
//
//     for (const element of elements) {
//         // hobbies.concat(element.hobbies)
//         // hobbies = [...hobbies, ...element.hobbies]
//         for (const hobby of element.hobbies) {
//             hobbies.push(hobby)
//         }
//     }
//
//     // elements.forEach((element) => {
//     //
//     // })
//
//     return (new Set(hobbies)).size
// }

const countHobbies = (elements) => (new Set(elements.flatMap((element) => element.hobbies))).size;


// const result = countHobbies(data);
// console.log(result)

// Sprawdź, czy są z nami starzy ludzie, jeżeli ktokolwiek ma więcej niz 30 lat zwróc true, inaczej false

const isOldPeople = (items) => {
    for (const item of items) {
        if (item.age > 30) {
            return true;
        }
    }

    return false;
}

// const isOldPeople2 = (items) => items.some((item) => item.age > 30);

// console.log(isOldPeople(data));

// czy wszyscy są młodzi i piękni, true/false

const youngAndBeautiful = (items) => {
    for (const item of items){
        if (item.age > 18){
            return false
        }
    }

    return true;
}


// const youngAndBeautiful2 = (items) => items.every((itemAlboElement) => itemAlboElement.age < 18);

// podaj imiona ludzi, którzy kochają js

const getJSLovers = (people) => {
    const result = []

    for(const person of people){
        if(person.hobbies.includes('js')){
            result.push(person.name)
        }
    }

    return result
}

const getJSLovers2 = (people) => people
    .filter((person) => person.hobbies.includes('js'))
    .map((person) => person.name);

console.log(getJSLovers(data));
