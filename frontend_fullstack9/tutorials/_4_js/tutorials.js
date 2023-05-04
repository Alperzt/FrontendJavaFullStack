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
let dizi = ["Alper","Ankara","asd"];
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
console.log(Math.floor(Math.random()*9+1));


