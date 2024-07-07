//Развернуть каждое слово в предложении
//Пример: "Welcome to this Javascript Guide!" должно стать "emocleW ot siht tpircsavaJ !ediuG"

let str = "Welcome to this Javascript Guide!" 
let A = str.split('').reverse().join('').split(' ').reverse().join(" ")

console.log(A)

// удаление дубликатов
const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
const new_Array = new Set(array)

console.log(...new_Array);

// Перестановка элементов массива в обратном порядке
const reversedArray = [10, 20, 30, 40, 50];
const reversedArray_2 = reversedArray.reverse()

console.log(reversedArray_2);

// Конкатенация двух массивов
const arr_1 = [1, 2, 3];
const arr_2 = [4, 5, 6];

const newArr = arr_1.concat(arr_2)

console.log(newArr);

// Фильтрация по четным числам
const filterNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filtr = filterNum.filter(function(num){
    return num % 2 === 0
})
console.log(filtr);

// преобразовать элементы массива в верхний регистр
const words = ['hello', 'world', 'javascript', 'coding']

const newWords = words.map(function(verx){
    return verx.toUpperCase()
})

console.log(newWords);

//  поиск минимального и максимального числа
const minimalArr = [15, 22, 43, 54, 5, 23];
const searchNum = Math.min(...minimalArr)
const searchNum1 = Math.max(...minimalArr)

console.log(searchNum, searchNum1);

// ! Группировка элементов по определенному критерию (ключ name) Написать функцию которая будет группировать элементы по ключу name
const group = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Alice', age: 22 }];

// Функция для разворота строки Напишите функцию, которая принимает строку и возвращает её перевёрнутую версию. 

const reverseString = 'London'
const reverseCity = reverseString.split("").reverse().join('')

console.log(reverseCity);

// ! Поиск наибольшего числа в массиве Напишите функцию, которая принимает массив чисел и возвращает наибольшее число в массиве.

const findMax = arr => {
    let max = arr[0]
for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
return max
}
console.log(findMax([14,28,6,8,1]));

// ! ---------------------------------------------------------------------------------------------------------------------------------

// Удаление дубликатов из массива Напишите функцию, которая принимает массив и возвращает новый массив без дубликатов.

const Dublicat = (arr) => {
    return [...new Set(arr)];
};

const arr = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
console.log(Dublicat(arr))

// Проверка на палиндром Напишите функцию, которая принимает строку и проверяет, является ли она палиндромом (читается одинаково спереди назад и сзади вперёд).

const isPalindrome = str => {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('')
}
console.log(isPalindrome('Шалаш'));


// ! Факториал числа Напишите функцию, которая принимает число и возвращает его факториал.

const factorial = num => {};

// Сумма всех чисел в массиве Напишите функцию, которая принимает массив чисел и возвращает их сумму.

const sumArray = arr => {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
};

console.log(sumArray([10,50]));

// ! Фибоначчи Напишите функцию, которая принимает число `n` и возвращает n-е число Фибоначчи.

const fibonacci = (n) => {}

// ! Проверка на анаграмму Напишите функцию, которая принимает две строки и проверяет, являются ли они анаграммами (состоят из одинаковых букв в разном порядке).

const isAnagram = (str1, str2) => {

}

// !Фильтрация массива по предикату
// !Напишите функцию, которая принимает массив и функцию-предикат, и возвращает новый массив, содержащий только те элементы, для которых предикат возвращает `true`.
const filterArray = (arr, predicate) => {
    let a = []
    for(let i = 0; i < arr.length; i++) {predicate(arr[i]){
        a.push(arr[i])
    }
}
return result
}