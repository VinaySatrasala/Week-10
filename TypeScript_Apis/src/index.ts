// // Task1: Add two variabeles which are inside of a interface
// interface User{
//     name:string,
//     age:number
// }

// function ageSum(user1:User , user2:User):number{
//     return user1.age + user2.age;
// }

// console.log(ageSum({name:"vinay",age:20},{name:"vinay",age:20}))


// // Pick : can create other type from selectig some properties from a exsisting type

// interface User{
//     id:number,
//     name:string,
//     age:number,
//     email:string,
//     createdAt:Date
// }

// type userInfo = Pick<User, "name" | "age">;
// let user:userInfo = {
//     name:"vinay",
//     age:20
// }



// Partial : it makes all the properties of a type optional
interface User{
    id:number,
    name:string,
    age:number,
    email:string,
    createdAt:Date
}

type userInfo = Partial<User>;
let user:userInfo = {
    name:"vinay",
    age:20
}

console.log(user)

const a = [1,2,3]
a[0] = 4
// this can be possible you can change value of a const but not reference of a const
// readonly : if you want props of object should also not want change you use readonly
type User2 = {
    readonly id:number,
    name:string,
    age:number
}

const u:User2 = {
    id:1,
    name:"vinay",
    age:20
}

// u.id = 2; // error
// u.name = "kumar" // error
console.log(u)

// Readonly: if you want props of object should also not want change you use readonly
interface Config {
    endpoint:string,
    apiKey:string
}
const config : Readonly<Config> = {
    endpoint:"https://api.example.com",
    apiKey:"abc123"
}



