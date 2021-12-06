const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

// Pasos

//1
let emptyArray = [];

// 2

let fiveElements = [1,2,3,4,5];

// 3

fiveElements.length;

//4

console.log(fiveElements[0]);

console.log(fiveElements[2]);


console.log(fiveElements[4]);

// 5

let mexiedDataTypes = [4, true, "españa", 0.2, [], null, "francia"];

// 6

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 7

console.log(itCompanies);

// 8

console.log(itCompanies.length);

// 9

console.log(itCompanies[0]);

console.log(itCompanies[3]);

console.log(itCompanies[itCompanies.length-1]);

// 10

for(let company of itCompanies) {
  console.log(company);
}

// 11

itCompanies.map(c => c.toUpperCase()).forEach(c => console.log(c));

// 12

console.log(`${itCompanies.slice(0,6).join(", ")} and ${itCompanies[itCompanies.length-1]} are bit IT companies.`);

// 13

console.log(itCompanies.includes("Apple") ? "Apple" : "commpany is not found");

// 14

// "string".match returns an array with the match but if the match doesn't find returns a NULL

let filterCompaniesO = [];

itCompanies.forEach(c => c.match(/o/g)?.length > 1 ? filterCompaniesO.push(c) : "this companie doesn't have one or more O's" );

console.log(filterCompaniesO);

// let r = "osososos".match(/r/g)?.length > 1 ? "si" : "no"

// console.log("\n ", r);

// 15

console.log("sort: ", itCompanies.sort());

// 16

console.log("reverse", itCompanies.reverse());

// 17

console.log("slice", itCompanies.slice(0, 4));

// 18
// itCompanies.forEach(c => console.log(`\n${c}`));
console.log("slice last 3", itCompanies.slice(itCompanies.length-3, itCompanies.length));

// 19





