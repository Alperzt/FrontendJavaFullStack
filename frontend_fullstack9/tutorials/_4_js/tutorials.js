//var Globaldir ve aynı isimde kullanılır
var numberData = 11;
var numberData = 22;
console.log(numberData);

// let Localdir aynı isimle yazılmaz
let numberData2 = 33;
let numberData3 = 33;
numberData3 = 66;
console.log(numberData3)

// const localdir aynı isimle yazılmaz ve değiştirilemez
const numberData4 = 44;
const numberData5 = 55;
// yapılamaz numberData5 = 44;
console.log(numberData5)

let degiskenAdi = "Merhabalar";
console.log(degiskenAdi);

let typeOfData = typeof degiskenAdi;
console.log(typeOfData);

// instanceof
let dizi = ["Alper", "Ankara", "asd"];
console.log(dizi instanceof Array); // => True
console.log(dizi instanceof Object); // => True
console.log(dizi instanceof Number); // => False
console.log(dizi instanceof String); // => False

/*
// prompt
let userData = prompt("Lütfen bir şeyler yazınız");
alert(userData);

// cast
let userData2 = String(prompt("Lütfen bir şeyler daha yazınız"));
alert(userData2);

let userData3 = Number(prompt("Lütfen sayı giriniz"));
alert(Math.sqrt(userData3));
*/
// Math rastgele
console.log(Math.floor(Math.random() * 9 + 1));

// ÖDEV
// let userData = prompt("1. sayıyı girin");
// let userData1 = prompt("2. sayıyı girin");
// let minimum = Math.min(userData,userData1);
// let maximum = Math.max(userData,userData1)
// console.log("İki sayıdan en küçüğü : " + minimum);
// console.log("İki sayıdan en büyüğü : " + maximum);
// console.log("İki sayıdan en büyüğünün karekökü : " + Math.sqrt(Math.abs(maximum)));
// console.log("İki sayıdan en büyüğünün karekökünün üste yuvarlanmış hali : " + Math.ceil(Math.sqrt(Math.abs(maximum))));
// console.log("İki sayının en küçüğünün mutlak değeri : " + Math.abs(minimum));
// console.log("Küçüğü alt taban büyüğü üst taban : " + Math.pow(minimum,maximum));

// let vocabulary = "asd bsd csd dsd";
// let userData = prompt();
// console.log(vocabulary.replace(vocabulary.substring(0,vocabulary.indexOf(" ")),userData));

// 1
function returnsuzParametresiz() {
    console.log("1 -returnsuz Parametresiz")
}
returnsuzParametresiz();
// 2
function returnsuzParametreli(name) {
    console.log("2- returnsuz Parametreli " + name)
}
returnsuzParametreli("Hamit");
// 3
function returnluParametresiz() {
    return "3- returnlu Parametresiz";
}
let data3 = returnluParametresiz();
console.log(data3);
// 4
function returnluParametreli(name, surname) {
    return "4- returnlu Parametreli " + String(name).toUpperCase() + " surname=" + surname;
}
let data4 = returnluParametreli("Hamit", "Mızrak");
console.log(data4);

let anonymousFunction = function () {
    console.log("anonymous function");
}
anonymousFunction();
let arrowFunction = () => {
    console.log(arrowFunction);
}
arrowFunction();

// let tryCatchTutorials = () => {
//     try {
//         var number = Number(prompt("Lütfen bir sayıı giriniz"));
//         number=number**2;
//         window.alertx("sayının karesi : " + number);
//         console.log("çalışmayacak alan");
//     } catch (error) {
//         console.error("hata mesajı-1 : " + error.message);
//         console.error("hata mesajı-2 : " + error.name);
//         console.error("hata mesajı-3 : " + error);
//     }
//     finally{
//         console.log("mecburi çalışacak alan");
//     }
//     console.log("çalışacak alan" +number);
// }

// let pword = prompt("şifre girin");
// if (pword != 661){
//     throw "izinsiz giriş"
// }
// else{
//    console.log("hg");
// }

// let birinci  = (number) => {
//     number = number**2;
//     return number;
// }

// let ikinci = () => {
//     let number = Number(prompt("sayı"));
//     let result = birinci(number);
//     console.log(result);
// }
// let ucuncu  = (number) => {
//     number = number**2;
//     return number;
// }
// let dorduncu = (callBackFunction) => {
//     let number = Number(prompt("sayı"));
//     let result = callBackFunction(number);
//     console.log(result);
// }
// dorduncu(ucuncu);
// dizi
let arrayTutorials = () => {
    let array = [44, 33, 11, 22, true, "array", 44.23];
    console.log(array);
    console.log(typeof array);
    console.log(array[0]);
    console.log(array[3]);
    console.log(array[array.length - 1]);

    array.push(66);
    console.log(array);

    array.unshift(99);
    console.log(array);

    array.pop();
    console.log(array);

    array.shift();
    console.log(array);
}
//arrayTutorials();

////////////////////
let arrayDataSet = () => {
    let numberData = [];
    for (let i = 0; i <= 4; i++) {
        numberData[i] = Math.floor(Math.random() * 9 + 1);
    }
    return numberData;
}

let arrayTutorials2 = function () {
    //console.log(arrayDataSet());
    let array = arrayDataSet();

    console.log("1-*************");
    // 1.YOL iterative for
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    console.log("2-*************");
    // 2.YOL  for in
    for (let temp in array) {
        console.log(temp + " => " + array[temp]);
        console.log(`${temp} => ${array[temp]}`);
    }

    console.log("3-*************");
    // 3.YOL  for of
    for (let temp of array) {
        console.log(temp);
    }

    // Anonymous Function (ForEach)
    console.log("4-*************");
    // 4.YOL forEach => value, index, array
    array.forEach(function (value, index, array) {
        console.log(`${index} => ${value}`);
        //console.log(array);
    });

    // Arrow Function (ForEach)
    // Escape Character (\)
    console.log("\n5-*************");
    // 5.YOL forEach => value, index, array
    array.forEach((value, index, array) => {
        console.log(`${index} => ${value}`);
        //console.log(array);
    });

}
arrayTutorials2();
document.writeln("<br/>Ekran44");
document.write("Alper");
console.log(Math.PI);
console.log(4 / "2");
let vocabulary = " Javascript Öğreniyorum Javascript   ";
console.log(vocabulary.trim());//trim başındaki ve sonundaki boşlukları kaldırıyor
console.log(vocabulary.substring(11).toUpperCase()); // 11 den itibaren yaz


// ÖDEV
// let userData = String(prompt("yaz"));
// console.log("karakter sayısı : " + userData.length);
// console.log("boşluksuz karakter sayısı : " + userData.trim().length);
// console.log(userData.toLowerCase());
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")), "javascript"));
// console.log(userData.startsWith("javascript"));
// console.log(userData.endsWith("javascript"));
// console.log(userData.charAt(0));
// console.log(userData.concat("-ben js öğreniyorum"));
// console.log(userData.substring(0,4));

//ÖDEV
// function negativeOrPositive() {
//     let number = Number(prompt("sayıyı gir"));
//     if (number > 0) {
//         console.log("pozitif");
//     }
//     else if (number<0){
//         console.log("negatif");
//     }
//     else if (number == 0) {
//         console.log("notr");    
//     }
// }
// negativeOrPositive();

// ÖDEV
// let oddOrEven = function (){
//     let number1 = Number(prompt("tek mi çift mi : "));
//     let result = (number1%2 == 0) ? String("even") : String("odd");
//     return result;
// } 
// let value = oddOrEven();
// console.log(value);

let arrowHourFunction = () => {
    let date = new Date().getHours();
    if (date == 17) {
        console.log("saat öğlen 5");
    }
}
arrowHourFunction();

// let data = Number(prompt("haftanın hangi günü"));
// switch (data) {
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;
//     default:
//         console.error("the number must be in between 1-7");
//         break;
// }

let alinanSayi = 5;
if (alinanSayi < 1) {
    throw new ("The number must be bigger than 1 !!!");
}
if (alinanSayi == 44) {
    throw new ("Congratulations you have found the secret key! But it stops the program from running");
}
let toplamSayiFonksiyon = () => {
    console.log("from 1 to " + alinanSayi + " there is " + alinanSayi + " number(s)");
}
toplamSayiFonksiyon();
let sayiToplamiFonksiyonu = () => {
    let sum = 0;
    for (let i = 1; i <= alinanSayi; i++) {
        sum += i;
    }
    console.log("the summation of the numbers from 1 to " + alinanSayi + " is " + sum);
}
sayiToplamiFonksiyonu();

let oddNumberFunction = () => {
    let oddArray = [];
    let oddNumbersSum = 0;
    for (let i = 0; i < alinanSayi; i++) {
        if ((i + 1) % 2 != 0) {
            oddArray.push(i + 1);
            oddNumbersSum += i + 1;
        }
    }
    console.log("Tek sayılar toplamı : " + oddNumbersSum);
    console.log("The odd number(s) from 1 to " + alinanSayi + " : " + oddArray + " and there is " + oddArray.length + " number(s)");
}
oddNumberFunction();

let evenNumberFunction = () => {
    let evenArray = [];
    let evenNumbersSum = 0;
    for (let i = 0; i <= alinanSayi; i++) {
        if ((i) % 2 == 0) {
            evenArray.push(i);
            evenNumbersSum += i;
        }
    }
    console.log("Çift sayılar toplamı : " + evenNumbersSum);
    console.log("The even number(s) from 1 to " + alinanSayi + " : " + evenArray + " and there is " + evenArray.length + " number(s)");
}
evenNumberFunction();

let sevenIsEvil = () => {
    let sum = 0;
    for (let i = 1; i <= alinanSayi; i++) {
        if (i == 7) {
            continue;
        }
        sum += i;
    }
    console.log("summation except 7 is " + sum);
}
sevenIsEvil();
let aboveHundredIsEvil = () => {
    let sum = 0;
    let i = 1
    for (i = 1; i <= alinanSayi; i++) {
        if (i > 100) {
            console.log("I can only go up to 100 sorry :( so summation from 1 to 100 is " + sum);
            break;
        }
        sum += i;
    }
    if (i <= 100) {
        console.log("summation is : " + sum);
    }
}
aboveHundredIsEvil();


// let x = Number(prompt("x değerini girin : "));
// let k = Number(prompt("k değerini girin : "));
// function formula(a,b) {
//     console.log("y = 3x + 4k is our formula\n with the values you gave y : " +(3*x + 4*k));
// }
// formula();

// let degree = Number(prompt("dereceyi girin"));
// let fahrenayt = (degree) => {
//     console.log("Fahrenayt değeri :" + ((degree * 9/5 ) + 32 ));
// }
// fahrenayt(degree);
let array = [44, 33, 11, 22, true, "array", 44.23];
// array.unshift(99);
// console.log(array);
// array.sort();
// console.log("SORT Küçükten Büyüğe  " + array);
// array.reverse();
// console.log("REVERSE " + array);

// array.sort().reverse();
// console.log("SORT.REVERSE  Büyükten Küçüğe   " + array);

for (let temp in array) {
    console.log(temp + " => " + array[temp]);
    // console.log(`${temp} => ${array[temp]}`);
}
console.log("3-*************");
// 3.YOL  for of
for (let temp of array) {
    console.log(temp);
}
let kelime = "merhabalar nasıl gidiyor";
let result4 = kelime.split(" ");
console.log(result4);
let result5 = array.toString().split(" ");
console.log(result5);
console.log("*** Filter *****");
let eslemeData = array.map((value, index, array) => {
    return Math.pow(value, 2);
}).forEach((value, index, array) => {
    console.log(`${index} => ${value}`);
});
let doldurData= array.fill(3);
console.log(doldurData)
