Person = Ember.Object.extend({
  name: null,
  isHappy: true
});
var people = [
  Person.create({ name: 'chen', isHappy: true }),
  Person.create({ name: 'ubuntuvim', isHappy: false }),
  Person.create({ name: 'i2cao.xyz', isHappy: true }),
  Person.create({ name: '123', isHappy: false }),
  Person.create({ name: 'ibeginner.sinaapp.com', isHappy: false })
];
var every = people.every(function(person, index, self) {
  if (person.get('isHappy'))
    return true;
});
console.log('every = ' + every);

var some = people.some(function(person, index, self) {
  if (person.get('isHappy'))
    return true;
});
console.log('some = ' + some);  
