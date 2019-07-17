var firstName = 'John';
var lastName = 'Paul';

console.log(firstName +" "+lastName);

if (firstName === 'John')
{
    console.log('Welcome ' + firstName);
}
else{
    console.log('Who are You');
}
function sendCars(day, ...carIds) {
    carIds.forEach( id => console.log(id) );
}
sendCars('Monday', 1, 2, 3);

console.log(Number.parseInt('2523'));

let o = {
    carId: 123,
    getId: function(prefix) {
        return prefix + this.carId;
    }
};

let newCar = { carId: 456};
let newFn = { carId: 789};
console.log(o.getId.apply(newCar, ['ID: ']), o.getId.apply(newFn, ['ID: ']));