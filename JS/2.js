// Масивы
// Доступ к елементам:

// const clients = ["Mango", "Poly", "Ajax"];

// Указывая в скобках индекс элемента мы получаем его значение
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax

//Метод for
// const message = "Welcome to Bahamas!";

// for (let i = 0; i < clients.length; i += 1) {
//   console.log("Logging clients: ", clients[i]);
// }
// const numbers = [];
// for (let i = 0; i < 20; i += 1) {
//   numbers.push(`label-${i}`);
// }

// console.log("numbers: ", numbers); // ['label-0', 'label-1', 'label-2']

// Метод for... of

// const message = "Welcome to Bahamas!";

// // Разбивает строку по разделителю, в данном случае это пробел
// console.log(message.split(" ")); // ["Welcome", "to", "Bahamas!"]

// const a = [1, 2, 3, 4, 5];
// console.log(a.length);
// a.push(6);
// console.log(a);
// console.log(a.length);
// a.pop();
// console.log("pop", a);

// const messages = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < messages.length; i += 1) {
//   result += messages[i];
//   console.log("result", result);
//   console.log(messages[i]);
// }
// console.log(result);

// 1. Перебрать массив
// const numbers = [4, 25, 87, 88, 34, 268];
// let total = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 === 0) {
//     total += numbers[i];
//   }
// }
// console.log(total);

// 2. Создать переменную total
// 3.Выбрать и Сложить четные числа

// const numbers = ["dfsdfgfg", "hjhkuhuk", "thrtjuyi", "sdfdhyui", "yuyoij"];
// const newNumbers = "thrtjuyi";
// let message = "Is not correct";

// for (i = 0; i < numbers.length; i += 1) {
//   // console.log(numbers[i]);
//   if (numbers[i] === newNumbers) {
//     message = "This number is correct";
//     break;
//     // console.log(message);
//   }
//   message = "Is not correct";
// }
// console.log(message);

// for (let number of numbers) {
//   if (number === newNumbers) {
//     message = "This number is correct";
//     break;
//   }
// }
//
// Найти самое маленькое число
// const numbers = [32, 56, 7, 4, 98];
// let minNumber = numbers[0];
// // console.log(minNumber);

// for (const number of numbers) {
//   if (number < minNumber) {
//     minNumber = number;
//   }
// }
// console.log(minNumber);

// Найти самое большое число
// const numbers = [32, 56, 7, 4, 98];
// let maxNumber = numbers[0];
// // console.log(minNumber);

// for (const number of numbers) {
//   if (number > maxNumber) {
//     maxNumber = number;
//   }
// }
// console.log(maxNumber);

// Использование метода "Join"
// const friends = ["Alex", "Mango", "Kiwi", "Jon"];
// let allFriends = friends.join(", ");
// console.log(allFriends);

// const string = "JavaScript";
// // const array = string.split("");
// // console.log(array);
// let invertedString = "";

// for (element of string) {
//   invertedString +=
//     element === element.toUpperCase()
//       ? element.toLowerCase()
//       : element.toUpperCase();
// }
// console.log(invertedString);
//
// #1
// const title = "Ворота Распашные на участок";
// const normalize = title.toLowerCase().split(" ").join("-");

// console.log(normalize);

// console.log(normalize);

// #2
// const array = normalize.split(" ");
// console.log(array);

// const newTitle = array.join("-");
// console.log(newTitle);

// const numbers = [34, 76, 7, 90, 25];
// const newNumbers = [54, 65, 5, 30, 2];
// let total = 0;

// const allArray = numbers.concat(newNumbers);
// for (number of allArray) {
//   total += number;
// }
// console.log(total);

// const fn = function (a) {
//   console.log(a);
//   // return a + 3;
// };
// console.log(fn(5));

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// if (totalSpent >= 50000) {
// discount = GOLD_DISCOUNT;
// } else if (totalSpent >= 20000) {
// discount = SILVER_DISCOUNT;
// } else if (totalSpent >= 5000) {
// discount = BRONZE_DISCOUNT;
// } else (totalSpent < 5000) {
// discount = BASE_DISCOUNT;
// }
//   // Change code above this line
//   return discount;
// }

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case country:
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   // Change code above this line
//   return message;
// }
// console.log(message);

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Change code above this line
// console.log(lastElement);
// console.log(firstElement);

// function getSubstring(string, length) {
//   const substring = (0, string.length); // Change this line

//   return substring;
// }
// console.log(getSubstring("Hello world", 3));

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + "...";
//   }
//   /// Change code above this line
//   return result;
// }

// function formatMessage(message, maxLength) {
//   let result;
//   const messageSlice = message.slice(0, maxLength);
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = `${messageSlice}...`;
//   }
//   /// Change code above this line
//   return result;
// }

// function formatMessage(message, maxLength) {
//   let result =
//     message.length <= maxLength ? message : `${message.slice(0, maxLength)}...`;

//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 11));
// console.log(formatMessage("Curabitur ligula sapien", 23));

// function XO(str) {
//   let arrX = [];
//   let arrO = [];

//   for (const el of str.toLowerCase().split("")) {
//     if (el === "x") {
//       arrX.push(el);
//     } else if (el === "o") {
//       arrO.push(el);
//     }
//   }

//   return arrX.length === arrO.length;
// }

// console.log(XO("ooxx"));
// console.log(XO("xooxx"));
// console.log(XO("ooxXm"));
// console.log(XO("zpzpzpp"));
// console.log(XO("zzoo"));

//Вариант 1

// function a(arr1, arr2) {
//   //  return arr1.sort().toString() === arr2.sort().toString();
//   if (arr1.length !== arr2.length) return false;
//   arr1.sort();
//   arr2.sort();

//   for (let i = 0; i < arr1.length; i += 1) {
//     if (arr1[i] !== arr2[i]) return false;
//   }
//   return true;
// }

// const arr1 = [1, 2, 2, 3, 4];
// const arr2 = [2, 1, 2, 4, 3];
// console.log(a(arr1, arr2));

//Вариант - 2
// function a(arr1, arr2) {
//   return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());

// }

// const arr1 = [1, 2, 2, 3, 4];
// const arr2 = [2, 1, 2, 4, 3];
// console.log(a(arr1, arr2));

// function arraySum(arr) {
//   const b = arr.toString().split(",");
//   let sum = 0;
//   console.log(b);

// for (let i = 0; i < b.length; i += 1) {
//   // console.log(Number(b[i]));
//   console.log(+b[i]);
//   sum += Number.isNaN(Number(b[i])) ? 0 : Number(b[i]);
// }
// //Или

//   for (let el of b) {
//     sum += Number.isNaN(+el) ? 0 : +el;
//   }

//   return sum;
// }
// console.log(arraySum([1, 2, 2, 3, 4]));

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = [0];
// fruits[1];
// fruits[3];

// function getExtremeElements(array) {
//   // Change code below this line
//   const firstLastElement = [];
//   firstLastElement.push(array[0], array[array.length - 1]);
//   // firstLastElement.push(array[array.length - 1]);
//   return firstLastElement;
//   // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// function calculateEngravingPrice(message, pricePerWord) {
//   const stringArray = message.split(" ");

//   return stringArray.length * pricePerWord;
// }

// console.log(calculateEngravingPrice("JavaScript is ftr in my blood", 10));

// function slugify(title) {
//   // Change code below this line
//   const slug = title.toLowerCase().split(" ").join("-");
//   return slug;
//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));

// function includes(array, value) {
//   // Change code below this line
//   for (const element of array) {
//     return element === value;
//     // if (element === value) {
//     //   return true;
//     // }
//     // return false;
//   }

//   // Change code above this line
// }

// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// );

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   }
//   return newArray;

//   // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
