//number 1
var user = {};
console.log(user);
user.name = 'John';
console.log(user);
user.surname = 'Mike';
console.log(user);
user.name = 'Peter';
console.log(user);
delete user.name;
console.log(user);
//As expected, every change to the user object is reflecting for every log.

//number 2
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};

console.log(fruit.apple + fruit.pear + fruit.peach);