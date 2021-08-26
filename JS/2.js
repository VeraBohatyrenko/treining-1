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
const friends = ["Alex", "Mango", "Kiwi", "Jon"];
let allFriends = friends.join(", ");
console.log(allFriends);

// for (friend of friends) {
//   console.log(friend);
// }
