const radius = [1,2,3,4,5]

const area = function(radius){
    return Math.PI * radius*radius;
}
const squareOfRadius = function(radius){
    return radius*radius;
}

const calculate = function(radius,logicFunc){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logicFunc(radius[i]))
    }
    return output;
}
console.log(calculate(radius,area));
console.log(calculate(radius,squareOfRadius));