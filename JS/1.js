// b = 10;
// a = b * 2;
// console.log(a);

// const a = "Hello";

// console.log(a.length);

// let colorEyes;
// const userName = "Вася";
// const user = userName;

// console.log(user);

// 'Оператор typeof'

// undefined
// let a;
// console.log(typeof a); // "undefined"

// null
// const b = null;
// console.log(typeof null); // "object"

// Number
// const c = 5;
// console.log(typeof c); // "number"

// String
// const d = 'JavaScript is awesome!';
// console.log(typeof d); // "string"

// Boolean
// const e = false;
// console.log(typeof e); // "boolean"

// const message = "JavaScript is awesome!";
// alert(message);

/*
 * Просим клиента подтвердить бронь на отель
 * и сохраняем в переменную результат работы confirm
 */
// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);

/*
 * Спрашиваем имя отеля в котором хотел бы остановится клиент
 * и сохраняем в переменную результат вызова prompt
 */
// const hotelName = prompt('Please enter desired hotel name:');
// console.log(hotelName);

/*
 * Важная особенность prompt в том, что не зависимо что ввел пользователь,
 * всегда вернется строка. Тоесть если пользователь ввел 5, то вернется
 * не число 5, а строка "5". Об этом необходимо всегда помнить.
 */
// const value = prompt('Please enter a number!');
// console.log(typeof value); // 'string'
// console.log(value); // '5'

// Операторы сравнения
// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false

// Приведение к числу
// const valueA = '5';
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // 'number'

// const valueB = 'random string';
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // 'number'

// Number.parseInt() и Number.parseFloat()

// // Парсит из строки целое число
// console.log(Number.parseInt('5px')); // 5
// console.log(Number.parseInt('12qwe74')); // 12
// console.log(Number.parseInt('12.46qwe79')); // 12
// console.log(Number.parseInt('qweqwe')); // NaN

// // Парсит из строки дробное число
// console.log(Number.parseFloat('5px')); // 5
// console.log(Number.parseFloat('12qwe74')); // 12
// console.log(Number.parseFloat('12.46qwe79')); // 12.46
// console.log(Number.parseFloat('qweqwe')); // NaN

// const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

// // Объект Math
// //  Math.floor(num) - возвращает наибольшее целое число, меньшее, либо равное указанному
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - возвращает наименьшее целое число,
// // большее, либо равное указанному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - возвращает значение числа, округлённое до ближайшего целого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - возвращает наибольшее число из набора
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - возвращает наименьшее число из набора
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - возведение в степень
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
// console.log(Math.random()); // случайное число между 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // случайное число от 1 до 10

// Свойства и методы строк
// const message = 'Welcome to Bahamas!';

// console.log(message.length); // 19
// console.log('There is nothing impossible to him who will try'.length); // 47

// console.log(message.toLowerCase()); // welcome to bahamas!
// console.log(message.toUpperCase()); // WELCOME TO BAHAMAS!

// // При этом исходная строка не изменяется
// console.log(message); // Welcome to Bahamas!

// console.log(message.indexOf('to')); // 8
// console.log(message.indexOf('hello')); // -1

// // Все методы строк чувствительны к регистру
// console.log(message.includes('welcome')); // false
// console.log(message.includes('Welcome')); // true

// const a = [1, 2, 3, 4, 5];
// const b = "My love! Where are you from?";
// console.log(a.indexOf(4));
// console.log(b.indexOf("W"));

// Шаблонные строки и интерполяция
// // Используя переменные необходимо составить строку с подставленными значениями
// const name = 'Mango';
// const age = 2;
// const mood = 'happy';

// const message =
//   'My name is ' + name + ", I'm " + age + ' years old and ' + mood + '.';

// console.log(message); // My name is Mango, I'm 2 years old and happy.

// /*
//  * Составлять строки с подставляемыми значениями
//  * используя конкатенацию очень неудобно.
//  * На помощь приходят шаблонные строки и интерполяция.
//  */
// const sameMessage = `My name is ${name}, I'm ${age} years old and ${mood}.`;

// console.log(sameMessage); // My name is Mango, I'm 2 years old and happy.

// // В интерполяции можно использовать любое валидное выражение
// console.log(`Результат сложения равен ${2 + 2}.`); // Результат сложения равен 4.

// Инструкция if
// let cost = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// }

// console.log(cost); // 100

// let cost = 0;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// }

// console.log(cost); // 0

// Инструкция if...else
// let cost;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 0

// let cost;
// const subscription = 'pro';

// if (subscription === 'pro') {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 100

// Инструкция else...if
// let cost;
// const subscription = 'premium';

// if (subscription === 'free') {
//   cost = 0;
// } else if (subscription === 'pro') {
//   cost = 100;
// } else if (subscription === 'premium') {
//   cost = 500;
// } else {
//   console.log('Invalid subscription type');
// }

// console.log(cost); // 500

// {условие} ? {выражение если условие правдиво} : {выражение если условие не правдиво}
// let cost;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }
// const cost = subscription === "pro" ? 100 : 0;

// console.log(cost); // 0

// const points = 100;
// const passingScore =
//   points >= 100 ? "Вы проходите дальше" : "Вы не проходите дальше";
// console.log(passingScore);

// Инструкция switch
// let cost;
// const subscription = 'premium';

// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 500;
//     break;

//   default:
//     console.log('Invalid subscription type');
// }

// console.log(cost); // 500

// const a = 5;
// if (true) {
//   const b = 10;
//   console.log(a); //5
//   console.log(b); //10
//   if (true) {
//     const c = 15;
//     console.log(b); //10
//   }
//   console.log(c); //error
// }

// console.log(b); //error

// Цикл — управляющая конструкция в высокоуровневых языках программирования, предназначенная для организации многократного исполнения набора инструкций.
// Тело цикла — последовательность инструкций, предназначенная для многократного исполнения.
// Итерация — единичное выполнение тела цикла.
// Условие выхода — выражение, определяющее будет в очередной раз выполняться итерация, или цикл завершится.
// Счётчик — переменная, хранящая текущий номер итерации. Цикл не обязательно содержит счётчик, и он не обязан быть один, условие выхода из цикла может зависеть от нескольких изменяемых в цикле переменных.

// Сделаем счетчик.
// let counter = 0;

// while (counter < 10) {
//   console.log('counter: ', counter);
//   counter += 1;
// }

// Будем заполнять места в отеле до тех пор пока текущее количество клиентов не будет равно максимально допустимому.
// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// Цикл do...while
// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// Цикл for
// Переменные-счетчики, по традиции, называются буквами i/j/k.

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(i);
// }

// Посчитаем сумму чисел до определенного значения.

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// Вспомним про операцию a % b и выведем остаток от деления используя цикл.
// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// // break
// Выйти из цикла можно не только при проверке условия, но и вообще в любой момент. Эту возможность предоставляет инструкция break. Она полностью прекращает выполнение цикла и передаёт управление на строку за его телом.

// Специально прервем цикл на 5-й итерации.

// for (let i = 0; i < 10; i += 1) {
//   if (i === 5) {
//     console.log('Дошли до 5-й итерации, прерываем цикл!');
//     break;
//   }
// }

// continue
// Директива continue прерывает не весь цикл, а только выполнение текущей итерации. Её используют, если понятно, что на текущей итерации цикла делать больше нечего или вообще ничего делать не нужно и пора переходить на следующую итерацию.

/*
 * Используем цикл для вывода только нечетных чисел.
 * Для чётных i срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }
