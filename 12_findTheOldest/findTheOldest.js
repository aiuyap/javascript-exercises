const findTheOldest = function(person) {
    const oldestPerson = person.reduce((currentOldest, currentPerson) => {
        let age = 0;
        let oldestAge = 0;
        if (currentPerson.yearOfDeath === undefined) {
             age = new Date().getFullYear() - currentPerson.yearOfBirth;
        } else {
             age = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        }
        
        if (currentOldest.yearOfDeath === undefined) {
            oldestAge = new Date().getFullYear() - currentOldest.yearOfBirth;
        } else {
            oldestAge = currentOldest.yearOfDeath - currentOldest.yearOfBirth;
        }

        if(age >= oldestAge) {
            currentOldest = currentPerson;
        }
        return currentOldest;
    });
    return oldestPerson;
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
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

  console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
