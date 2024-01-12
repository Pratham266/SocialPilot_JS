//String Functions

st1 = "My name is Pratham Janakkumar Barot";

//1.length
console.log("length : ",st1.length);

//2.substring
let st2 = st1.substring(11,18);
console.log("subsrting : ",st2);

//3.indexOf
console.log(st1.indexOf('is'));

//4.substr
console.log(st1.substr(8,10));

//5.trim
let st3 = "     hello!      ";
console.log(st3.trim())

//6.lastindexOf
console.log(st1.lastIndexOf("a"))

//7.replace
let st4 = st1.replace("Pratham","PRATHAMDEV")
console.log(st4);

//8.charAt
console.log(st1.charAt(3));

//9.search
console.log(st1.search("Pratham"))

//10.toUpperCase
console.log((st1.toUpperCase()));

//11.charCodeAt
let text = "HELLO WORLD";
let code = text.charCodeAt(0);
console.log(code);

//12.slice
let text1 = "JavaScript";
let slicedText = text1.slice(0, 4);
console.log(slicedText); 


//13.split
let st5 = "pratham,janakkumr,barot,idar,gujarat";
let arr5 = st5.split(',')
console.log(arr5);

//14.toLowerCase
console.log(st1.toLowerCase());

//15.concat
let st6 = st1.concat(" At Sabarkantha")
console.log(st6)
