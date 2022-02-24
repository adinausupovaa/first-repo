Деструктуризация;
// let a;
// let b;
// let c;
// let names = ["Ann", "Harry", "Albert"];
// let [a, b, c] = names;
// console.log(a, b, c);
// let a = names[0];
// let b = names[1];
// let c = names[2];

// let names = ["Ann", "Harry", "Albert"];
// let [, , elem3] = names;
// console.log(elem3);
let [elem1, elem2] = names;
console.log(elem1, elem2);
// [elem1, elem2] = [elem2, elem1];
// console.log(elem1, elem2);

// let newArr = [];
// newArr.push(elem1, elem2);
// console.log(newArr);
// let [elem2, elem1] = newArr;
// ! Деструктуризация
// let a;
// let b;
// let c;
// let names = ["Ann", "Harry", "Albert"];
// let [a, b, c] = names;
// console.log(a, b, c);
// let a = names[0];
// let b = names[1];
// let c = names[2];

// let names = ["Ann", "Harry", "Albert"];
// let [, , elem3] = names;
// console.log(elem3);
// let [elem1, elem2] = names;
// console.log(elem1, elem2);
// [elem1, elem2] = [elem2, elem1];
// console.log(elem1, elem2);

// let newArr = [];
// newArr.push(elem1, elem2);
// console.log(newArr);
// let [elem2, elem1] = newArr;
// let name = "Alex";
//!поверхностное капирование
// let user = {
//   name: "Helena",
//   age: 23,
//   skills: ["JavaScript", "React", "Jquery"],
// };
// let {
//   name: newName,
//   age,
//   skills: [skill1, skill2, skill3],
// } = user;
// console.log(name, newName, age, skill1, skill2, skill3);
// !SPREAD operator
// let arr = [1, 1, 1, 3];
// let arr2 = [...arr];
// ! REST operator
// let arr = [1, 1, 1, 3];
// let [num1, ...rest] = arr;
// console.log(num1, rest);

//!ГЛУБОКОЕ КАПИРОВАН
// let user1 ={
//     name:"Helena",
//     age:23,
//     skills: ["JavaScript", "React", "Jquery"]
// };
// let str =JSON. stringify(user1)
// console.log(atr,typeof str);
// let user4 =JS0N.parse(JSON.stringify(user1));
// console.log(user4);

//!деструктуризация структура
let str = "Albert Einstein";
let [a, l, b, e, r, t, ...rest] = str;
console.log(a, l, b, e, r, t, rest);
