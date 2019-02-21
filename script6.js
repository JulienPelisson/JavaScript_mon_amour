const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

let bornAfter70 = [];
let fullName = [];
let date = 2019;
let alphaSoup = [];

for(let i = 0; i < entrepreneurs.length; i++){
  
  //méthode qui sort un array des entrepreneurs nés dans les 70s

  if((entrepreneurs[i].year >= 1970) && (entrepreneurs[i].year < 1980)){
    bornAfter70.push(entrepreneurs[i])
  };

  fullName.push(entrepreneurs[i].first + " " + entrepreneurs[i].last);

  console.log(date - entrepreneurs[i].year);

  alphaSoup.push(entrepreneurs[i].last);
};

console.log(bornAfter70)
console.log(fullName)
alphaSoup.sort
console.log(alphaSoup)