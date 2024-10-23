//    string metodlari      ////////////////////////////////////////////

let str = "Salom";

// console.log(str.length);    // so'z necha qator ekanini aniqlaydi
// console.log(str.length);

// console.log(str.charAt(0));    // index raqamdagi harfni aniqlovchi charAt
// console.log(str.charAt(2));

// console.log(str.charCodeAt(0));    // unicod raqamini aniqlovchi
// console.log(str.charCodeAt(3));

// console.log(str.concat(` Muhammad, yaxshimisiz`));  // 2 ta yoki xohlagancha so'zlarni bir biriga qo'shadi
// console.log(str.concat(` Ustoz`));

// console.log(str.startsWith("Sa"), str.endsWith("lom"));   //so'zlarnin boshlanishi va tugashida qatnashgan sonlarni true yoki false borligini aniqlaydi
// console.log(str.startsWith("Sa"), str.endsWith("lom"));

// console.log(str.includes("m"));    // so'zda qatnashgan harf borligini aniqlovchi misol: salom qidirlyapti: m javob: true
// console.log(str.includes("S"));

// console.log(str.indexOf("m"));    //   harflarning indexni ya'ni uning tartib raqamini aniqlovchi harflarni chapdan qidiradi
// console.log(str.indexOf("S"));

// console.log(str.lastIndexOf("m")); //  bu ham indexOfga o'xshaydi lekin harflarni o'ngdan qidiradi
// console.log(str.lastIndexOf("S"));

// console.log(str.padEnd(11, "*"));  //   bu metod necha qatorni belgilasa o'sha qatorga yetmay qolgan soz yoki sonning o'rniga biror narsa qo'yadi
// console.log(str.padEnd(11, " -"));

// console.log(str.padStart(10, "*"));   // bu esa qatorning boshidan narsa qo'yadi
// console.log(str.padStart(10, " -"));

// let joy = str + " ";
// console.log(joy.repeat(3));    // bu metod bitta so'zni men kiritgan son bo'yicha takrorlaydi
// console.log(joy.repeat(2));

// console.log(str.replace(" ", ",")); //  bu metod orqali 2 ta sozning orasidagi bosh joy orniga xohlagan belgi qoysa boladi birinchi bosh string bu bosh joy 2-nima qo'yilishi
// console.log(str.replace(" ", ","));

// let str2 = "muhammad qanday qilib vazifani qilding"
// console.log(str2.replaceAll("qanday", "nima"));           // bu metod orqali biror so'zning o'rniga boshqa soz qo'yadi
// console.log(str2.replaceAll("qilding", "bajarding"));

// console.log(str.slice(0, str.length-2));     // bu metod matnni kopy qiladi indexi bo'ylab misol: salom matn  slice 0 dan 2 gacha natija: sal | bu yerda length oxiridan qirqadi
// console.log(str.slice(0, str.length-1));

// console.log(str.split(" "));    // bu metod sozlarni alohida arraylarga bolib beradi
// console.log(str.split(" "));

// let letter = str.at(2);  //bu ham index harfini olib beradi
// console.log(letter);

// let text1 = "      Hello World!      ";  // bu sozning 2 yonidagi bosh joylarni yoqoadi
// let text2 = text1.trim();    // va trimstart va trimend boshidagi va oxiridagi bo'shliqlarni olib beradi
// console.log(text2);

//     array metodlari     //////////////////////////////////////////////////////////////////////

//TODO: push metodi arrayning ichidagi stringa oxiridan string qoshadi

// let fruits = ["apple", "banana"];
// fruits.push("orange");
// console.log(fruits);

// let fruits1 = ["apple", "banana"];
// let push2 = fruits1.push("orange")
// console.log(fruits1);

//TODO: pop metodi arrayni oxiridan element olib tashlaydi

// let fruits = ["apple", "banana", "orange"];
// let lastFruit = fruits.pop();
// console.log(lastFruit);
// console.log(fruits);

// let fruits1 = ["apple", "banana", "orange"];
// console.log(`olib tashlangan string "${fruits1.pop()}"`);
// console.log(fruits1);

//TODO: shift metodi arrayni boshidagi elementni olib tashlaydi

// let fruits = ["apple", "banana", "orange"];
// let firstFruit = fruits.shift();
// console.log(firstFruit);
// console.log(fruits);

// let fruits1 = ["apple", "banana", "orange"];
// console.log(fruits1.shift());
// console.log(fruits1);

//TODO: unshift arrayni boshiga element qo'shadi

// let fruits = ["banana", "orange"];
// fruits.unshift("apple");
// console.log(fruits);

// let fruits1 = ["banana", "orange"];
// let unshift = fruits1.unshift("apple");
// console.log(fruits1);

//TODO: concat 2 yoki undan ortq arraylarn birlashtiradi

// let fruits = ["apple", "banana"];
// let vegetables = ["carrot", "broccoli"];
// let food = fruits.concat(vegetables);
// console.log(food);

// let fruits1 = ["apple", "banana"];
// console.log(fruits1.concat("carrot", "broccoli"));

//TODO: slice metodi arrayni kesib oladi masalan: "apple", "banana", "orange", "kiwi" slice 1 dan 3 gacha natija: "banana", "orange"

// let fruits = ["apple", "banana", "orange", "kiwi"];
// let slicedFruits = fruits.slice(1, 3);
// console.log(slicedFruits);
// console.log(fruits);

// let fruits1 = ["apple", "banana", "orange", "kiwi"];
// console.log(fruits1.slice(1, 3));

// TODO: splice metodi array elementini olib tashlab o'rniga yangi element qoshadi

// let fruits = ["apple", "banana", "orange"];
// fruits.splice(1, 1, "kiwi");
// console.log(fruits);

// let fruits1 = ["apple", "banana", "orange"];
// console.log(`olib tashlandi "${fruits1.splice(1, 1, "kiwi")}"`);
// console.log(fruits1);

// TODO: indexOf Arraydagi nechchanchi indexda turganini aniqlovchi

// let fruits = ["apple", "banana", "orange"];
// let index = fruits.indexOf("orange");
// console.log(index);

// let fruits1 = ["apple", "banana", "orange"];
// console.log(fruits1.indexOf("banana"));

// TODO: includes metodi arrayda element bor yoki yo'qligini bilish

// let fruits = ["apple", "banana", "orange"];
// console.log(fruits.includes("banana"));
// console.log(fruits.includes("kiwi"));

// let fruits1 = ["apple", "banana", "orange"];
// let inc = fruits1.includes("banana")
// let inc1 = fruits1.includes("kiwi")
// console.log(inc);
// console.log(inc1);

// TODO: reverse bu so'zlarni teskari tartibda yozadi

// let fruits = ["apple", "banana", "orange"];
// fruits.reverse();
// console.log(fruits);

// let fruits1 = ["apple", "banana", "orange"];
// console.log(fruits1.reverse());

// TODO: join array elementini string sifatida birlashtiradi

// let fruits = ["apple", "banana", "orange"];
// let joinedFruits = fruits.join(", ");
// console.log(joinedFruits);

// let fruits1 = ["apple", "banana", "orange"];
// console.log(fruits1.join(", "));

// TODO: map array ustidan funksiya yozib uni yangi arrayga qaytaradi

// let numbers = [1, 2, 3];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled);

// let numbers1 = [1, 2, 3];
// let doublet = numbers1.map(num => num > 0);
// console.log(doublet);

// TODO: filter array element shartga mos bo'lsa qiymat qaytaradi

// let numbers = [1, 2, 3, 4];
// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// let numbers1 = [2, 3, 6, 1];
// let evenNumbers1 = numbers1.filter((num) => {
//   if (num % 2 === 0) {
//     console.log(`"${num}" juft son`);
//     return true;
//   } else {
//     console.log(`"${num}" toq son`);
//     return false;
//   }
// });

// TODO: reduce array elementlarini yagona qiymatga qisqartiradi

// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum);

// let numbers1 = [2];
// let sum1 = numbers1.reduce((total, num) => {
//     if (num % 2 === 0) {
//         console.log(`${num} juft son`);
//     } else {
//         console.log(`${num} toq son`);
//     }
//     return total + num;
// }, 0);

// TODO:  forEach Arrayning har bir elementi uchun funksiya bajaradi hech qanday qiymat qaytarmaydi

// let fruits = ["apple", "banana", "orange"];
// fruits.forEach(fruit => console.log(fruit));

// let fruits1 = ["apple", "banana", "orange"];
// for (let i = 0; i < fruits1.length; i++) {
//     console.log(fruits1[i]);
// }

// TODO: find  Shartga mos keluvchi birinchi elementni qaytaradi

// let numbers = [1, 2, 3, 4];
// let firstEven = numbers.find(num => num % 2 === 0);
// console.log(firstEven);

// let ages = [12, 17, 19, 21, 15];
// let firstAdult = ages.find(age => age >= 18);
// console.log(firstAdult);

// TODO: sort Array elementlarini tartiblaydi

// let fruits = ["banana", "apple", "orange"];
// fruits.sort();
// console.log(fruits);

// let numbers = [5, 3, 8, 1, 4];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// TODO: every Arrayning har bir elementi shartga mos keladimi-yo'qligini tekshiradi

// let numbers = [2, 4, 6];
// let allEven = numbers.every(num => num % 2 === 0);
// console.log(allEven);

// let numbers1 = [1, 5, 3, 8];
// let allPositive = numbers.every(num => num > 0);
// console.log(allPositive);

// TODO: some Arraydagi hech bo'lmaganda bir element shartga mos keladimi-yo'qligini tekshiradi

// let numbers = [1, 2, 3, 4];
// let someEven = numbers.some(num => num % 2 === 0);
// console.log(someEven);

// let numbers1 = [-5, -3, 0, 4];
// let hasPositive = numbers.some(num => num > 0);
// console.log(hasPositive);

// TODO: findIndex Shartga mos keluvchi birinchi elementning indeksini qaytaradi

// let numbers = [1, 2, 3, 4];
// let firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
// console.log(firstEvenIndex);

// let numbers1 = [-5, -3, 0, 4, 2];
// let firstPositiveIndex = numbers.findIndex(num => num > 0);
// console.log(firstPositiveIndex);

// TODO: length

// let a=[1, "salom", true]
// console.log(a.length);