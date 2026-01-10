const findTheOldest = function (people) {
  let oldestPerson = people.reduce((oldest, current) => {
    return getAge(oldest) > getAge(current) ? oldest : current;
  });
  return oldestPerson;
};

function getAge(person) {
  if (person.yearOfDeath) {
    return person.yearOfDeath - person.yearOfBirth;
  }
  return new Date().getFullYear() - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
