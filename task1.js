//1.Anagram
const checkAnagram = (st1,st2)=>{
    const string1 = st1.split('').sort().join('');
    const string2 = st2.split('').sort().join('');
    return string1==string2;
}
console.log(checkAnagram("abcd","cdba"));


//2.find some of given number in recurrsion
const countSumOfNumber = (number)=>{
    if(number < 10){
        return number;
    }else{
        return number%10 + countSumOfNumber(Math.floor(number/10))
    }
}
console.log( countSumOfNumber(1748));


//3.give number of array and collect odd values from that array using recursion
const filterArrayWithOdd = (arr,index)=>{
    if(index >= arr.length){
        return [];
    }

    const ele = arr[index];

    const result  = ele % 2 !== 0 ? [ele]:[];

    return result.concat(filterArrayWithOdd(arr,index+1))
}

const arr = [1,2,3,4,5,6]
console.log(filterArrayWithOdd(arr,0));


//4.count frequency for number and it's square = we have 1st argument as a array and 2nd argument as a array and all element in first array should be present in 2nd array as a square
const checkSquarePresent = (arr1,square1)=>{
    const arr = arr1.sort().reverse();
    const square = square1.sort().reverse();

    for (let i=0;i<arr.length;i++){
        if(square.includes(arr[i]*arr[i])){
            square.shift()
        }else{
            return false;
        }
    }
    return true;
}
const arr1 = [3,3,2,1]
const sq1 = [9,9,9,4,4,4,1,1,1]

console.log(checkSquarePresent(arr1,sq1));

