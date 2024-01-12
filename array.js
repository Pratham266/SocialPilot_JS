//Array methods

arr=[11,12,'Pratham',7,{k:"v"},12]

//1.for...each
arr.forEach(el => {console.log(el);});

//2.indexoF
console.log("Index of : ",arr.indexOf('Pratham'));

//3.lastIndexOf
console.log("lastIndexOf : ",arr.lastIndexOf(12));

//4.includes
console.log(arr.includes(7));
console.log(arr.includes(8));

//5.find
const ages = [3, 10,45, 22, 18, 20];

function checkAge(age) {
  return age > 18;
}

function myFunction() {
  console.log(ages.find(checkAge));
}

myFunction();

//6.findIndex
const ages1 = [3, 10,45, 22, 18, 20];

function checkAge(age) {
  return age > 18;
}

console.log(ages1.findIndex(checkAge));

//7.filter
const num = [1,2,3,4,5,6]
const upNum = num.filter(num=>num % 2==0)
console.log(upNum);

//8.map
const sqNum = num.map(num=>num*2)
console.log(sqNum);

//9.sort
const sortNum = num.sort()
console.log(sortNum);
//10.reverse
console.log(num.reverse())

//11.split
const stmt = 'Pratham Barot Janakkumar'
const spArray = stmt.split(' ')
console.log(spArray);

//12.join
const jnArray  = spArray.join('*')
console.log(jnArray);

//13.reduce
const numbers= [1,2,3,4,5]
const sum = numbers.reduce((acc,num)=>acc+num,0)
console.log(("reduce",sum));

//14.some
const number = [1, 2, 3, 4, 5];

const hasGreaterThanThree = number.some((num) => num > 3);

console.log(hasGreaterThanThree); 

//15.every
const numbe= [2, 4, 6, 8, 10];
const allEven = numbe.every(num => num % 2 === 0);
console.log(allEven);

//17.reduceright
const product = [1,2,3,4]
const ans = product.reduceRight((acc, num) => acc * num, 1);
console.log(ans);