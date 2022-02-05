// примитивные
//
// number - 12345
// string - "qwerty"
// boolean - true, false
// undefined  - неопределеонное   значеня
// null  - нулевое значения
// bigint
// symbol
//
// ссылочный сложный
//
// object -
//
//
// констант
//
// 3.14
//
// 2.17
//
// const pi = 3.14
//
// console. log(pi)
//
// //let
// let name = 'new york'
//
//  console. log (name)
//
//
// Match operations
//
// +
//
// -
//
// /
//
// *
//
// %
//
// **
//
//
// let year = 2021
// let year2 = 2000
//
//
// console. log(year - year2)
//
//
// let year = 2021
//
// year = 3000
//
// year = 5000
//
//
//
// let a = 10
//
// let b = 2
//
// let c = 10
//
// let d = 10
//
//
// console.log(Math.pow(a,b))
//
// console. log(Math.round( year / 100))
//
// console. log(Math.floor( year / 100))
//
// console. log(Math.ceil( year / 100))
//
// console. log(Math.trunc(10.99999999999987654321123456777777777))
// console. log(Math.trunc(98.098765432345678909876543))
//
//
// console.log(Math.floor(Math.random() * 10 )+ 1 )
// console.log(Math.trunc(Math.random() * 10 )+ 1 )
//
//
// Match.floor() - 21.9
//
// Match.round()  - 22
//
// Match.ceil() - 21
//
// Match.trunc()
//
// Match.random()
//
// Match.pow()
//
// Match.abs
//
// console.log(Math.abs(-5))
//222
// // ///////////////2222222222222222222/////////////////////////
// STRINGS - строки

// let country = "Kyrgyzstan"
// console.log(country[0])
// console.log(country.length)
// console.log(country[(country.length - 1) / 2 - 1])
// console.log(country[country.length - 2])


// string  - строка

// let name = 'lyrgalbek'
//
// console.log(name.length)
//

//
// let messege = 'MotionWeb is a developing company in Kyrgyzstan, Bishkek'
//


// console.log(messege.slice(0,10))
// console.log(messege.substr(0,9))
// console.log(messege.substring(0,10))
//
// console.log(messege.slice(37,47))
// console.log(messege.substr(37,10))
// console.log(messege.substring(37,47))
//
// console.log(messege.slice(26,34))
// console.log(messege.substr(26, 7))
// console.log(messege.substring(26,34))


// 1 - задание
//
// let num = '10'
// console.log(num)

// 2 - задание
// let a = 10
// let b = 2
// let c = 5
// console.log(a + b + c)

// 3 - задание
// let num = 100
// console.log(num * 2)

// 4 - задание

// let num = 67
// console.log(num % 10)

// 5 - задание
// let a = 15
// let b = 2
// console.log(a + b)
// console.log(a / b)
// console.log(a * b)
// console.log(a - b)

// 6 - задание
// let c = 15;
// let d = 2;
// let result = c + d;
// console.log(result)

// 7 - задание

// let a = 30
// let b = 15
// let c = a + b
//
// console.log(c % 4)

//

// 8 - задание

// let a = 17
// let b = 10
// let c = 7
// let d = 4
//
// let result = c + d
//
//
// console.log(a - b)
// console.log(result)
//

// 9  - задание

// let a = '10'
// console.log(result)
// console.log(a + b)

// 10  - зад
// // let b = '99'
// // let result = a + b
// //ание


// ИНТЕРПОЛЯЦИЯ
// шаблонный литерал

// let username = 'BILL'
// let secondusername = 'Isaak'
// let string = 'hello' + username
// let string1 = 'my name is'
// console.log(string)
// console.log(string1)
//
// console.log(username[username.length - 1])


// let days = 345
// let earth = 'Земля'
// let people = '7 млрд'
// let sun = 'Солнце'
//
// let string = `В нашем году ${days} дней. Днём у нас светит ${sun}. Население планеты ${earth} составляет примерно ${people}. человек.`
// console.log(string)

// number


// +
// Number()
//parseInt
// let n = '20'
//
// console.log(+ n)
// console.log(Number(n))
// console.log(parseInt(n))

// string

//toString()
//String()
// * ''
// let num = 10
// console.log(String(num))
// console.log(num.toString())
// console.log( 7 + '')

// //type of
// // тип
// let flag = true
// let a = {}
//
// console.log(typeof num)
// console.log(typeof n)
// console.log(typeof flag)
// console.log(typeof a)
//

// if()
// else
// ===
// ==
// =

// console.log('7' === '7')
//
// if (typeof flag === 'number') {
//     console.log('hello')
// }
// else {
//     console.log('goode bue!')
// }


// let age = 18
//
// if (age >= 16 && age < 30){
//     console.log('машинага уруксат')
// }
// else if (age ===18){
//     console.log('арамияга бар')
// }
// else if (age > 18 && age < 30){
//     console.log('уйлон')
// }
// else if (age <= 30){
//     console.log('тезирек уйлон')
// }
// else if (age > 30 && age < 40){
//     console.log('мылтык атканга болот')
// }
// else if ( age > 50)
// {
//     console.log('пенсия')
// }
// else {
//     console.log('бир аз чоной')
// }


// let number = 20
// let second = 30
// if (number > 30 && second > 20)
// {
//     console.log(true)
// }
// else {
//     console.log(false)
// }
// || - дизьюекция - логикалык кошуу - же

//&& - каньюнкция - логикалык кобойтуу  -  жана
//true = 1
//false = 0

// console.log(true || false || false)
// console.log(true && false && false)


// задания 1

// let a = 10
// console.log(true)

// задания 2
// let a = 50
// let b = 100
// if  (a > b){
//     console.log('a больше б')
// }
//     else{
//         console.log('a меньше b')
//     }

//3..3 ворпос

// let a = -2
// if (a > 0) {
//     console.log('positive')
// } else if (a === 0) {
//     console.log('ravno')
// } else if (a < 0) {
//     console.log('negative')
// }

//9 - вопрос


// задания 4

// let number = 45
//
// if (number === 45){
//     console.log('Четное число')
// }
// else{
//     console.log('Не четное число')
// }


// задания 5
// let a = 10
// let b = 2
// let result = a / b
//
// console.log(result)


// задания 7
// let s = true
// console.log(typeof s)

// задания 8

// let a = 7
//
// if (a === 2){
//     console.log('Верно')
// }else if (a <= 9){
//     console.log('Верно')
// }
//
// else {
//     console.log('Не верно')
// }


//
//
// let month = 5
// if (month >= 6 && month <= 8 ){
//     console.log('жай')
// }
// else if (month >= 8 && month <= 11){
//     console.log('куз')
// }
// else if (month === 12 || month === 1 || month === 2){
//     console.log('кыш')
// }
// else if (month >= 3 && month <= 6){
//     console.log('жаз')
// }
// else {
//     console.log('мындай ай жок')
//


// 11. Вам дана переменная month. В ней лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
// 12. Вам дана переменная day. В ней лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// 13. Вам дана переменная a='12345'. Проверьте, что первым символом этой переменной является цифра 1, 2 или 3. Если это так – выведите ‘да’, в противном случае выведите ‘нет’.


// 4. Вам дана переменная number=45. Составьте условие, по которому будет выводиться в консоль "Четное число", "Нечетное число".

//  4 задание
// let  number = 45
//     if (number % 2  === 0){
//         console.log('четное число')
//     }
//     else    {
//         console.log('не четное число')
//     }

//


// 5. Вам даны две переменные a=10, b=2. Составьте условие, по которому, остаток деления a на b, будет выводиться консоль "Четное число", "Нечетное число".
// 5 задание
// let a = 10
// let b = 2
// if ((a / b) % 2 ===0) {
//     console.log('jup san')
// }
// else {
//     console.log('tak san')
// }


// 6. Вам дана переменная s. Составьте условие, по которому в консоль будет выводится тип этой переменной - "boolean", "number", "string".
// 6 задание

// type of

// let n = 2
// console.log(typeof n)

// let n = true
// console.log(typeof n)

// let n = {}
// console.log(false + 4)
//
// let s = true + true + 'true'
//1 + 1 + true
//2true

// if (typeof s === "boolean"){
//     console.log("boolean")
// }
// else if (typeof s === "number"){
//     console.log("number")
// }
// else {
//     console.log("string")
// }

//true //boolean
// '' //string
//10  /number
//
//
// 8. Вам дана переменная а. Если переменная a равна трем или равна семи, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной в консоль.
// 8 задание

// let a = 9
// // let b = 7
// if (a === 3 || a === 7){
//     console.log(a + 7)
// }
// else{
//     console.log(a / 10)
// }
//
//
// 9. Вам даны переменные а , b. Если переменная a равна или меньше 0, а переменная b больше или равна 5, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
// 9 задание
// let a = 9
// let b = 5
// if((a > 4 && a < 10) || (b > 7 || b < 17)){
//     console.log('oba')
// }
// else{
//     console.log('jok')
// }
// console.log('12' && '000' && 'javascript' && 0)
//
// console.log(0 || 'java' || 'javascript' || 0)


// 10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти, или переменная b больше или равна 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// 10 задание

// let day = 5
//
// if (day > 0 && day < 11) {
//     console.log(1)
// } else if (day > 11 && day < 21) {
//     console.log(2)
// } else if (day > 20 && day <= 31) {
//     console.log(3)
// }
// let a = '12345'
// console.log(a[0])
// if (+a[0] === 1 || +a[0] === 2 || +a[0] === 3){
//     console.log('oba')
// }
// else {
//     console.log('jok')
// }

// 1. Вам дана переменная str = 'Nevis ITDB TECH'. Выведите в консоль длину первого слова.

// let str = 'Nevis ITDB TECH'
// console.log(str.length)
// console.log(str.substr(0,5))


// 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО, только нижним регистром.
// let str = 'УЖАСНО'
// console.log('УЖАСНО'.toLowerCase())

// 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально, только верхним регистром.
// let str =  'максимально УЖАСНО'
// console.log('максимально УЖАСНО'.toUpperCase())

// 4. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль каждый символ этой строки, используя метод split.
// Пример : [ 'C','o','d','i','n','g',' ','i','s',' ','t','h','e',' ', 'L','O','V','E',' ','o','f',' ','m','y',' ','L','I','F','E','!' ]
// let str = 'Максимально Ужасно'
// console.log(str.split(''))


// 5. Вам дана переменная str = 'Максимально Ужасно, переделывай'. Выведите в консоль все слова этой строки,
// используя метод split. Пример: [ 'Максимально' 'ужасно', 'переделывай'. ]

// let str = 'Максимально Ужасно переделывай'
// console.log(str.split('Максимально Ужасно,переделывай'))
// console.log(str.split('максимально'))
// console.log(str.split('Ужасно'))
// console.log(str. split('переделывай'))


// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно', используя метод slice.

// let str = 'Максимально Ужасно'
// console.log(str.substring(5,30))


// 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У, использую метод charAt.

// let str = 'Максимально Ужасно'
// console.log(str.charAt(12))


// // 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные строки, используя метод concat.
//
// let str = 'Максимально'
// let str2 = 'Ужасно'
// console.log(str.concat(str2))


// 9. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс слова 'Ужасно'.

// let str = 'Максимально Ужасно'
// console.log( str.indexOf('Максимально Ужасно'))


// 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1 раза", если букв 'a'

// встречается более 1 раза, иначе "встречается менее одного раза"
// let str = 'Максимально Ужасно'


// 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в консоль первую букву каждого слова строки в верхний регистр.

// let str = 'макСИМАЛЬНО ужаСНО'
// console.log(str.toString().lastIndexOf(2))


// 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения буквы а.

// let str = 'максимально ужасно'
// console.log(str,to)


//
// 9. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс слова 'Ужасно'.
// 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения буквы а.
// 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего буквы о.
// 16. Вам дана переменная str = 'Максимально Ужасно'. Проверьте, есть ли буква "в" в данной строке, если да, то выведите "Да", иначе - "нет".
//

// 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1 раза", если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"

// let str = 'Максимално Ужасно'
// console.log(str.indexOf('M'))
// if (str.indexOf('a') > -1){
//     console.log('кездешти')
// }
// else {
//     console.log('кездешкен жок')
// }
// 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в консоль первую букву каждого слова строки в верхний регистр.
// let c = 'макСИМАЛЬНО ужаСНО'
// let a = c[1]
// let b = c[11]
// let s = c[19]
// console.log(a.toUpperCase() +c.slice(1,12).toLowerCase()+b.toUpperCase()+ c.slice(11,19).toLowerCase())

// let name = 'jyrgal'
// let surname = 'jyldyzbek uulu'
// console.log(name.toUpperCase() [0])
//
//
//
// 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice) и выведите в консоль.

// let str = 'aaa bbb ccc'
// console.log(str.substr(4,3))
// console.log(str.substring(4,7))
// console.log(str.slice(4,7))


// 15. Вам дана переменная str = '17-02-2021'. Преобразуйте эту дату в формат '31/12/2025' и выведите в консоль.
// let str = '17-02-2021'
// console.log(str.replace(/-/g,'/'))


// 17. Вам дана переменная str = 'АаааааА'. Проверьте, если первая буква в строке совпадает с последней, если да, то выведите в консоль "Совпадает", иначе - "Не совпадает".
// let str = 'AaaaaaA'
// if (str[0] === str[str.length - 1]){
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// 18. Вам дана переменная str = 'Максимально'. Проверьте, если буква л, встречается в первой половине строки, или последней. Если в первой, то выведите в консоль - "В первой половине", иначе - "Во второй половине".
// let str = 'Максимально'
// let s = 'л'
// if (str.indexOf(s) === Math.floor(str.length / 2)){
//     console.log(1)
// }
// else {
//     console.log(2)
// }


//////////////////////////////функция/////////////////////////////////////
//FUNCTION DELARETION - ОБЬЯВЛЕНИЕ ФУНКЦИИ


//FUNCTION EXPRESSION - ВЫРАЖЕНИЕ ФУНКЦИИ


// ARROW FUNCTION - СТРЕЛОЧНАЯ ФУНКЦИЯ


//LIFE - IMAMEDIATE INVOCED EXPRESSION - САМОВЫЗЫВАЮЩФЯСЯ ФУНКЦИЯ

////////////////////////////FUNCTION DELARETION////////////////////////////
//
// function sum(a,b){
//
//     return a + b
// }
//
// console.log(sum(10,20))
//
// function multiply(a,b){
//     return a * b
// }
//
// console.log(multiply(10,20))
//
// function divide(a,b){
//     return a / b
// }
//
// console.log(divide(10,20))
//
// function rem(a,b){
//     return a % b
// }
//
// console.log(rem(10,20))
//
//
//
// function cub(a,b){
//     return a - b
// }
//
// console.log(cub(10,20))
//
//
//
// function pow(a,b){
//     return a ** b
// }
//
// console.log(pow(10,20))


//multiply() *
//divide() /
//rem() %
//sub() -
//pow() **


// 1. Вам дана переменная str = 'Nevis ITDB TECH'. Выведите в консоль длину первого слова.

// let str = 'Nevis ITDB TECH'
//
// function len (str){
//     return str. length
// }
//
// console.log(len(str))


// 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО, только нижним регистром.


// 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально, только верхним регистром.
// 4. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль каждый символ этой строки, используя метод split. Пример : [ 'C','o','d','i','n','g',' ','i','s',' ','t','h','e',' ', 'L','O','V','E',' ','o','f',' ','m','y',' ','L','I','F','E','!' ]
// 5. Вам дана переменная str = 'Максимально Ужасно, переделывай'. Выведите в консоль все слова этой строки, используя метод split. Пример: [ 'Максимально' 'ужасно', 'переделывай'. ]
// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно', используя метод slice.
// 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У, использую метод charAt.
// 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные строки, используя метод concat.
// 9. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс слова 'Ужасно'.
// 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1 раза", если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"
// 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в консоль первую букву каждого слова строки в верхний регистр.
// 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения буквы а.
// 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего буквы о.
// 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice) и выведите в консоль.
// 15. Вам дана переменная str = '17-02-2021'. Преобразуйте эту дату в формат '31/12/2025' и выведите в консоль.
// 16. Вам дана переменная str = 'Максимально Ужасно'. Проверьте, есть ли буква "в" в данной строке, если да, то выведите "Да", иначе - "нет".
// 17. Вам дана переменная str = 'АаааааА'. Проверьте, если первая буква в строке совпадает с последней, если да, то выведите в консоль "Совпадает", иначе - "Не совпадает".
// 18. Вам дана переменная str = 'Максимально'. Проверьте, если буква л, встречается в первой половине строки, или последней. Если в первой, то выведите в консоль - "В первой половине", иначе - "Во второй половине".


// функция => 7 => '7'
// let str = 7
//
// function len (str){
//     return str + ''
// }
//
// console.log(len(str))

//
// function f(num) {
//     return String(num)
// }
//
// console.log(f(7))


// function converter(number) {
//     if (number > 0) {
//         return number * -1
//     } else if (number < 0) {
//         return number * -1
//     }
// }
//
// console.log(converter(10))


// function a(str){
//   if (typeof str === "number"){
//       return Number(str)
//   }
//   else if( typeof str === "string"){
//       return  String(str)
//   }
//
// }
//
// console.log(a(10))


// function century(year) {
//     // Finish this :)
//     return (Math.ceil(year/100))
// }
//
// console.log(century(1))


// function lovefunc(flower1, flower2) {
// moment of truth
// return (flower1 + flower2) % 2 ===1
//     if ((flower1 + flower2) % 2 === 1) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(lovefunc(3,2))


// function usdcny (usd){
//     return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
// }
//
// console.log(usdcny(100))


// 1. Вам дана переменная str = 'Nevis ITDB TECH'. Выведите в консоль длину первого слова.
// // let str = 'Nevis ITDB TECH'
// // function len (wrait){
// //     return wrait.length
// // }
// //
// // console.log(len(str))
//
// // 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО, только нижним регистром.
// //   let str=('Максимально Ужасно')
// // function desc(str){
// //     return str.toLowerCase()
// // }
// //
// // console.log(desc(str))
// // 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально, только верхним регистром.
// // let str = 'максимально УЖАСНО'
// //
// //  function desc(str){
// //      return str.toUpperCase()
// // }
// //
// //  console.log(desc(str))
// // 4. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль каждый символ этой строки, используя метод split. Пример : [ 'C','o','d','i','n','g',' ','i','s',' ','t','h','e',' ', 'L','O','V','E',' ','o','f',' ','m','y',' ','L','I','F','E','!' ]
// // let str = 'Максимально Ужасно'
// // function der(top){
// //     return top.split('Максимально Ужасно')
// // }
// //
// // console.log(der(str))
// // 5. Вам дана переменная str = 'Максимально Ужасно, переделывай'. Выведите в консоль все слова этой строки, используя метод split. Пример: [ 'Максимально' 'ужасно', 'переделывай'. ]
// // let str = 'максимально Ужасно переделывай'
// // function mit(der){
// //     return der.split(' ')
// // }
// // console.log(mit(str))
//
// // 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно', используя метод slice.
// let str = 'Максимально Ужасно'
// function red (edr){
//     return edr.slice(5,18)
// }
// console.log(red(str))
// // 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У, использую метод charAt.
// // let str = 'Максимально Ужасно'
// // function dre(red){
// //     return red.charAt(12)
// // }
// //
// // console.log(dre(str))
// // 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные строки, используя метод concat.
// // let str = 'Максимально'
// // let str2 ='Ужасно'
// // function top(cte){
// //     return cte.concat(str+str2)
// // }
// //
// // console.log(top(str))
// // 9. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс слова 'Ужасно'.
// // let str = 'Максимально Ужасно'
// // function ser(awe){
// //     return awe.indexOf(12,17)
// // }
// //
// // console.log(ser(str))
// // 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1 раза", если букв 'a'
// встречается более 1 раза, иначе "встречается менее одного раза"
// let str = 'максимально ужасно'
//
// function fer(sew){
//     return sew.indexOf( 'максимально ужасно')
// }
//
// console.log(fer(str))

// // 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в консоль первую букву каждого слова строки в верхний регистр.

// 1. Вам дана переменная str = 'Nevis ITDB TECH'. Выведите в консоль длину первого слова.
// // let str = 'Nevis ITDB TECH'
// // function len (wrait){
// //     return wrait.length
// // }
// //
// // console.log(len(str))
//
// // 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО, только нижним регистром.
// //   let str=('Максимально Ужасно')
// // function desc(str){
// //     return str.toLowerCase()
// // }
// //
// // console.log(desc(str))
// // 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально, только верхним регистром.
// // let str = 'максимально УЖАСНО'
// //
// //  function desc(str){
// //      return str.toUpperCase()
// // }
// //
// //  console.log(desc(str))
// // 4. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль каждый символ этой строки, используя метод split. Пример : [ 'C','o','d','i','n','g',' ','i','s',' ','t','h','e',' ', 'L','O','V','E',' ','o','f',' ','m','y',' ','L','I','F','E','!' ]
// // let str = 'Максимально Ужасно'
// // function der(top){
// //     return top.split('Максимально Ужасно')
// // }
// //
// // console.log(der(str))
// // 5. Вам дана переменная str = 'Максимально Ужасно, переделывай'. Выведите в консоль все слова этой строки, используя метод split. Пример: [ 'Максимально' 'ужасно', 'переделывай'. ]
// // let str = 'максимально Ужасно переделывай'
// // function mit(der){
// //     return der.split(' ')
// // }
// // console.log(mit(str))
//
// // 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно', используя метод slice.
// // let str = 'Максимально Ужасно'
// // function red (edr){
// //     return edr.slice(5,18)
// // }
// //
// // console.log(red(str))


// // 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У, использую метод charAt.
// let str = 'Максимально Ужасно'
// function dre(red){
//     return red.charAt(12)
// }
//
// console.log(dre(str))


// // 8. Вам даны переменные str = 'Максимально', str2 = c. Выведите в консоль соединенные строки, используя метод concat.
// function task8(str, str2){
//     return str+str2
// }
//
// console.log(task8('Максимально', 'Ужасно'))


// // 9. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс слова 'Ужасно'.
//
// let str = 'Максимально Ужасно'
// function ser(awe){
//     return awe.slice(12,18)
// }
//
// console.log(ser(str))


// // 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1 раза", если букв 'a'
// встречается более 1 раза, иначе "встречается менее одного раза"

// function  task10 (str){
//     if (str.includes('а')){
//         return true
//     }
//     else {
//         return false
//     }
// }
//
// console.log(task10('Максимально Ужасно'))

// // 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в консоль первую букву каждого слова строки в верхний регистр.
// let str1 = 'макСИМАЛЬНО ужаСНО'
// let a = str1[0]
// let str2 = 'макСИМАЛЬНО ужаСНО'
// let b = str2 [12]
//
// function len(str1, str2) {
//     return (a.toUpperCase() + str1.slice(1, 12).toLowerCase() + (b.toUpperCase() + str2.slice(13, 19).toLowerCase()))
// }
//
// console.log(len(str1, str2))

// 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения буквы а.
// let str = 'Максимально Ужасно'
//
// function dre(sre){
//     return sre.indexOf('а')
// }
//
// console.log(dre(str))


// 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего буквы о.

// let str = 'Максимально Ужасно'
//
// function red(str){
// return str.lastIndexOf('о')
// }
//
// console.log(red(str))

// 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice) и выведите в консоль.


// function task14(str){
//     // return str.substr(3,5)
//
//     // return str.substring(3,7)
//
//     return str.slice(3,7)
// }
//
// console.log(task14('aaa bbb ccc'))
// console.log(str.substr(4,3))
// console.log(str.substring(4,7))
// console.log(str.slice(4,7))

// 16. Вам дана переменная str = 'Максимально Ужасно'. Проверьте, есть ли буква "в" в данной строке, если да, то выведите "Да", иначе - "нет".

// function task16(str) {
//     if (str.includes('в')) {
//         return 'да'
//     } else {
//         return 'нет'
//     }
// }
//
// console.log(task16('Максимально Ужасно'))

// 17. Вам дана переменная str = 'АаааааА'. Проверьте, если первая буква в строке совпадает с последней, если да, то выведите в консоль "Совпадает", иначе - "Не совпадает".

// function task17(str) {
//    if (str[0] === str[str.length - 1]){
//        return true
//    }
//    else


//        return false
//    }
// }
//
// console.log(task17('АаааааА'))

// 18. Вам дана переменная str = 'Максимально'. Проверьте, если буква л, встречается в первой половине строки, или последней.
// Если в первой, то выведите в консоль - "В первой половине", иначе - "Во второй половине".

// function task18(str){
//     let symbol = str.indexOf('л')
//     if (symbol === Math.floor(str.length/2)){
//         console.log(1)
//     }
//     else {
//         console.log(2)
//     }
// }
//
// console.log(task18('Максимально'))


////////////////////////////////ARROW-----function////////////////////////////////

// const myFunction = (a,b) =>{
//     return a + b
// }
// console.log(myFunction(20,  10))


// const greet = (name) =>{
//     return `hello ${name}`
// }
// console.log(greet('askar'))


// const rentalCarCost = (d) => {
//     if (d >= 3 && d < 7){
//         return(d * 40) - 20
//     }
//     else if(d >= 7) {
//         return (d * 40) - 50
//     }
//     return d - 40
// }
// console.log(rentalCarCost(2))


// ARRAY  --  МАССИВ

// набор,колеккция данных

// [1,"qwerty", true, undefined, null, {}, []]

// let arr = [12, true]
// arr[2] = false
// arr[100] = 100
//
// arr[100] = true
// console.log(arr)
//
//
// let newArr = [123, 123]
// newArr[90] = 10
//
// console.log(newArr)


// map

// let arr = [12, true,[5]]
// let  arr2 = arr.map(function (el){
//     return el ** 0
// })
// console.log(arr2)


// let a = [12, 12, 12, 12, 12, '12', '12', '12']
// const sub = (a) => {
//     return a.map(function (el) {
//         if (typeof el === 'number'){
//             return '12'
//
//     }
// else
//     {
//         return parseInt(el)
//     }
// }
// )
//
// }
// console.log(sub(a))


// let numbers = new Array(100)
//     .fill(0)
//     .map(function (el,index){
//         return el + index  + 1
//     })
// console.log(numbers)

// map (),
// 'жуп сан',
// 'так сан'.


// 1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// let  arr = ['a', 'b', 'c']
// arr.push('1,2,3')
// console.log(arr)

// 2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let  arr = [1, 2, 3]
// let arr2 = [4,5,6]
// console.log()
// 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let a = [1, 2, 3]
// a.push(4, 5, 6)
// console.log(a)

// 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let a = [1, 2, 3]
// a.unshift(4, 5, 6)
// console.log(a)

// 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let a = ['js', 'css', 'jq']
// console.log(a[0])


// 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// let a = ['js', 'css', 'jq']
// console.log(a['2'])


// 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// let a = [1, 2, 3, 4, 5]
// let b = a.slice(0,3)
// console.log(b)

// 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// let a = [1, 2, 3, 4, 5]
// let b = a.slice(3,5)
// console.log(b)


// 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let a = [1, 2, 3, 4, 5]
// a.splice(1,2)
// console.log(a)


// 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// let a = [1, 2, 3, 4, 5]
// let b =  a.splice(1,3)
// console.log(b)
// 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let a = [1, 2, 3, 4, 5]
//  a.splice(3, 0,'a', 'b', 'c')
// console.log(a)


// 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//  let a = [1, 2, 3, 4, 5]
//  a.splice(1,0, 'a', 'b',2,3,4, 'c',5, 'e')
//  console.log(a)


// 13  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
///////////////////////SORT/////////////////////////
// let c = [12,23,4,43,3,6,7,35,68,1]
// let sortedArr = c.sort(function (a, b){
//     return a - b
// })
// console.log(sortedArr)


// let fruit = ['арбузы', 'бананы', 'Вишня']
//
// let sortedSymbol = fruit.sort((a,b) => {
//     return a.toLowerCase() > b.toLowerCase() ? 1 : -1
// })
// console.log(sortedSymbol)


// 14 биринчи элемент кайтарып берет
// let array = [1,2,3,4,5,6,7,8,9];
// function getFirst(array){
//     return array[0]
// }
// console.log(getFirst(array))

// 15 акыркы элемент кайтарып берет
// function getLast(array){
//     return array[array.length-1]
// }


// 1. Выведите столбец чисел от 1 до 50.
// 2. Создайте переменную с пустым массивом, заполните массив 10-ю элементами X с помощью цикла.
// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла for выведите все эти элементы в консоль.
// 4. Вам дан массив с элементами [5, 2, 1, 2]. С помощью цикла for найдите произведение элементов этого массива.
// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.
// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
// 8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
// 13. Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите сумму квадратов элементов этого массива.
// 16. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
// 17. Создайте переменную с пустым массивом, заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
// 18. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.
// 19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].Создайте цикл, который выводит нечетные числа, которые больше 10.
// 20. Вам дана строка 'jzvzszrzpz'. Измените каждую вторую букву на верхний регистр.

//
//Арность
// function a(a) {
// } //1 арная
// function b(a, b) {
// } //2  арная
//
//
// // Мисал
//
// function sum(a, b, c) {
//     return a + b + c
// }
// sum(2,2,2)
//
// let result = curry(sum)
//
// result(2)(2)(2);
// result(2, 2)(2);
// result(2)(2, 2);
//
//
// function curry(f) {
//     return function curried(...args) {
//         if (args.length >= f.length) {
//             return f.apply(this, args)
//         } else  {
//             return (...args2 ) => {
//                 return curried.apply(this, args.concat(args2))
//             }
//         }
//     }
// }


// const Isolenta = curry(sum)
// const PlusTwo = Isolenta(2)
//
// console.log(PlusTwo(2,2))


//break

// let i = 0;
//
// while (i < 6) {
//     if (i === 3) {
//         break;
//     }
//     i = i + 1;
// }
//
// console.log(i);

// i = 0;
// n = 0;
// while (i < 5) {
//     i++;
//     if (i === 3) {
//         continue;
//     }
//     n += i;
// }
// console.log(n)

// for (let i = 0; i <= 5; i++) {
//     if (i === 3) {
//         break;
//     }
//     console.log(i)
// }

// const obj2 = [
//     {id: 1, name: 'Joomart'},
//     {id: 2, name: 'Marlis'},
// ]
//
// let result = obj2.find(el => el.name === 'Marlis' )
// console.log(result)
// const obj = {
//     1: {id: 1, name: 'Joomart'},
//     2: {id: 2, name: 'Marlis'},
// }
//
// console.log(obj[2])


// const obj = {
//     1: {id: 1, title: 'Dastan'},
//     2: {id: 2, title: 'Igor'},
// }
//
//
// const array = [
//     {id: 1, title: 'Dastan'},
//     {id: 2, title: 'Igor'},
// ]
//
//
// console.log(array.find(el => el.id === 2))
// console.log(obj[2])


//Синтактический сахар
//spread


// const array = [3, 4, 4, 5]
// const arr2 = [...array, 2,4]
// console.log(arr2)

// const  array = [4,7,8,9]
//
//
// const array1 = [...array, 99,77]
//
// console.log(array1)

// const  obj1 = {
//     name: 'DASTAN',
//     age: 99
//
// }
// const obj2 = {...obj1, position: 2}
// console.log(obj2)


//spread obj
// const obj = {
//     mark: 'BMW',
//     year: 2009
// }
// const obj2 = {...obj, color: 'red'}
//
// console.log(obj2)


//REST operator
//
// const arr = [4, 7, 2, 9, 45, 65]
//
// const [firstItem, secondItem, ...args] = arr
// console.log(args)
// console.log(firstItem)
// console.log(secondItem)


//
// const [firstItem, secondItem, ...args] = arr
//
// console.log(firstItem)
// console.log(secondItem)
// console.log(args)


// function func (...args) {
//         return args
// }
// console.log(func(2,4,5,2))

// function foo(item, ...args) {
//     console.log(arguments.length)
//     return item * 2
// }
//
// console.log(foo(2,3,4,56))


// const foo = ( ...args) => {
//     return args
// }
//
// console.log(foo(2, 3, 4, 56))

// Ленивая инициализация

// const foo = (name = 'User') =>  name
//
// console.log(foo('Dastan'))


// const foo = (name = 'User') => {
//     return name
// }
// console.log(foo('Das'))


// медоты сокращения
// const obj3 = {
//     func: function () {
//         return 'SALAM'
//     },
//     func2: () => {
//         return 'Hi'
//     }
// }
// console.log(obj3.func(), obj3.func2())
// console.log(obj3.func2())


// const obj2 = {
//     func: function () {
//         return 'hi'
//     },
//     func2() {
//         return 'new syntax'
//     }
// }
// console.log(obj2.func())
// console.log(obj2.func2())
//
// const array = 'A B C D E F';
//
// const arr2 = array.split(' ').join('')
// console.log(arr2)


// const str = 'A B C D E F';
// const result  = str.split(' ').reverse().join('')
//
// console.log(result)


//Carrying


// function sum(item) {
//     return function (b) {
//         return function (c) {
//             return item + b + c
//         }
//     }
// }
// const sum = a => b => c => a + b + c
// console.log(sum(1)(2)(3))
// console.log(sum(2)(3)(5))
// console.log(sum(6)(2)(5))
// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

// const sum = a => b => c => a + b + c
// //
// console.log(sum(4)(5)(8))
// console.log(sum(4)(5)(6))


// const square = (width, height) => {
//         return width * height
// }
// console.log(square(2, 40))
// console.log(square(2, 50))
// const square = w => h => {
//         return w * h
// }
// const square2 = square(20)
//
// console.log(square2(20))

//

// const square = w => h => {
//     return w * h
// }
// const square2 = square(20)

// console.log(square2(2))
// console.log(square2(5))
// console.log(square2(7))

//
// const baseRequest = (host, url) => {
//     return `${host}${url}`
// }
// const baseRequest = host => baseUrl => url => {
//     return `${host}${baseUrl}${url}`
// }
//
// const baseSendRequest = baseRequest('https://motion-webllc.com/')
//
// const baseUrlRequest = baseSendRequest('search/')
// // console.log(baseRequest('https://motion-web.io/', 'search/vk'))
// // console.log(baseRequest('https://motion-web.io/', 'search/instagram'))
// // console.log(baseRequest('https://motion-web.io/', 'search/facebook'))
// console.log(baseUrlRequest('instagram'))
// console.log(baseUrlRequest('facebook'))


// Замыкание
// function foo(a) {
//     let count = a;
//     return () => {
//         count = count + 1
//         console.log(count)
//     }
// }

// let uuu = foo(1)
// console.log(uuu())
// console.log(uuu())
// console.log(uuu())
// console.log(uuu())
// console.log(uuu())


// function foo() {
//     let count = 0;
//     return {
//         positionLeft() {
//             return count = count +1
//         },
//         positionRight() {
//             return count = count - 1
//         },
//         clear() {
//             count = 1
//         }
//     }
// }
//
// const tetris = foo()
//
// console.log(tetris.positionLeft())//1
// console.log(tetris.positionLeft())//2
// console.log(tetris.positionLeft())//3
// //
// // console.log(tetris.clear())
// console.log(tetris.positionRight())//2
// console.log(tetris.positionRight())//1
// console.log(tetris.positionRight())//0
// //
// console.log(tetris.clear())
// console.log(tetris.positionRight() )//-1


// function makeAdder(x) {
//     return function(y) {
//         return x + y;
//     };
// }

// const makeAdder = x => y => x + y
//
// const add5 = makeAdder(5);
// const add10 = makeAdder(10);
//
// console.log(add5(2));  // 7
// console.log(add10(2)); // 12


// const Counter = (function() {
//     let privateCounter = 0;
//     function changeBy(val) {
//         privateCounter += val;
//     }
//     return {
//         increment: function() {
//             changeBy(1);
//         },
//         decrement: function() {
//             changeBy(-1);
//         },
//         value: function() {
//             return privateCounter;
//         }
//     };
// })();
//
// console.log(Counter.value()); /* Alerts 0 */
// Counter.increment();
// console.log(Counter.value())
// Counter.decrement()
// Counter.increment();
// console.log(Counter.value()); /* Alerts 2 */
// Counter.decrement();
// // Counter.decrement();
// console.log(Counter.value())


// Задача:
//     напиши функцию, которая принимает 1 параметр.
//     при первом вызове, она его запоминает, при втором,- - суммирует переданый параметр с тем, что передали первый раз и тд
// и всё это с замыканиями
// например
// sum(3) = 3
// sum(5) = 8
// sum(228) = 236

// function func(a) {
//     return () => {
//
//     }
// }

// console.log(func(1))


//
// (function () {
//     function sum (val) {
//         let temp = val;
//         sum = function() {
//             const arg = arguments[0] ? arguments[0] : 0;
//             return temp = temp + arg;
//         };
//         return sum();
//     }
//     console.log(sum(4));
//     console.log(sum(7));
//     console.log(sum(228));
// })();


// const obg = {
//     name: "Myrzabek",
//     position: 'JavaScript developer',
//     func: function () {
//         return this.position;
//     }
// }
// console.log(obg.func())


// function obj2() {
//     let user = { name: "Джон" };
//     let admin = { name: "Админ" };
//     return user.name
// }
//
// console.log(obj2())
// let user = {
//     firstName: "Илья",
//     sayHi() {
//         let arrow = () => console.log(this.firstName);
//         arrow();
//     }
// };
//
// user.sayHi();


// //
// const num = [['ab','abc'],['abcd']]
// const nums = num.join().split()
// console.log(nums)


// let arr1 = [1,2,3,4,5];
// let arr2 = [1,12,3,8,5];
// let arr3 = arr1.concat(arr2);
// // console.log(arr3)
//
// let arr4 = arr3.filter((item,index) => {
//     return arr3.indexOf(item) !== index;
// })
//
// console.log(arr4)


// const obj = [
//     {token: '1'},
//     {token: '2', value: 23},
//     {token: '3', name: 'superman'},
//     {token: '4'}
// ]
// let result = obj.reduce((acc, rec) => {
//    return `${acc.token} : ${rec.token}`
//
// }, {})
// console.log(result)

//
// let arr = [{token: '1'},{token: '2', value:23},{token: '3', name:'superman'},{token: '4'}];

// let str = 'hello,world,abra,carabfa,re,wrewer,rwer'
//
// let result = str.split(',').map((el) => {
//             return `${el}(${el.length})`
//         }
//     ).join()
// console.log(result)
// let arr = [
//     {token: '1'},
//     {token: '2', value: 23},
//     {token: '3', name: 'superman'},
//     {token: '4'}
// ]
//
// let result = arr.reduce((acc, rec) => (
//     acc[rec.token] = rec, acc
// ), {})
// console.log(result)

//CONTEXT


//
// const person = {
//     name: 'Aman',
//     age: 21,
//     logInfo: function (job, phone) {
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}, age: ${this.age}`)
//         console.log(`Job is ${job}`)
//         console.log(`Phone is ${phone}`)
//         console.groupEnd()
//     }
//
// }
//
// const Joomart = {
//     name: 'Jooma',
//     age: 12
// }
//
// person.logInfo('32', 3)
// person.logInfo.bind(Joomart, 'Front-end', '+99659959959')()
// person.logInfo.call(Joomart, 'Front-end', '+99659959959')
// person.logInfo.apply(Joomart, ['Front-end', '+99659959959'])

///======
// const array = [1, 2, 3, 4, 5]

// const multBy = (arr, n) => arr.map((i) => i * n)
//
//
// console.log(multBy(array, 3))


// Array.prototype.jump = function (i) {
//     return this.map(function (n)  {
//         return i * n
//     })
// }
//
// console.log(array.jump(3))


//this возвращает родительский объект
// Контекст это тело родительского объекта

//
// let test = {
//     props: 25,
//     func:  () =>  {
//         return this
//     },
//     func2: function () {
//         return this.props
//     }
// }
// console.log(test.func())
// console.log(test.func2())

// console.log(this)

// let kitty = {
//     name: 'Kitty',
//     tasks: ['спать', 'есть' ,'шуметь'],
//     showTasks: function () {
//         return this.tasks.forEach((task) => {
//             console.log(`${this.name} хочет ${task}`)
//         })
//     }
// }
//  kitty.showTasks()

// let kitty = {
//     name: 'Kitty',
//     tasks: ['спать', 'есть' ,'шуметь'],
//     showTasks: function () {
//         return this.tasks
//     }
// }
//
// console.log(  kitty.showTasks()   )


// const arr = [7,4,7]


// console.log(arr
//     .map(el => el * 2)
//     .filter(el => el % 4  === 0)
// )


function init(num) {
    let value = num;
    return {

        add: function (val) {
            value = value + val
            return this
        },
        sub: function (val) {
            value = value - val;
            return this
        },
        value: function () {
            return value
        }
    }
}

console.log(init(10).add(10).sub(2).value())


