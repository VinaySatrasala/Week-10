"use strict";
function ageSum(user1, user2) {
    return user1.age + user2.age;
}
console.log(ageSum({ name: "vinay", age: 20 }, { name: "vinay", age: 20 }));
