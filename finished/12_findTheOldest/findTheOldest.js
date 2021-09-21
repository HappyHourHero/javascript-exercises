let d = new Date
let year = d.getFullYear()

const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const findTheOldest = function(obj) {

  let array = []

  for (let person of obj) {
  if (!person.yearOfDeath) {
    person.yearOfDeath = year
  }
    array.push(person.yearOfDeath - person.yearOfBirth)
  }
  let sorted = array.sort((a,b) => {
    return a-b
  })

  for (let person of obj) {
    if (person.yearOfDeath - person.yearOfBirth == sorted[sorted.length -1]) {
      return person
    } 
  }

}; 


module.exports = findTheOldest;
