let people = {
    name: 'Ivan',
    age: 23,
    favouriteLanguage: 'JavaScript'
};

for (let key in people) {
    console.log(`${key} -> ${people[key]}`);
}
console.log(people);
