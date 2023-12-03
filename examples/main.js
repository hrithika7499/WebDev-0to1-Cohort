// let arr=[2,3,4,6,8,55];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2 === 0){
//         console.log(arr[i])
//     }
// }

function sum(num1, num2) {
    let result = num1 + num2;
    displayResult(result);
    displayResultPassive(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);

}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

sum(2,3);