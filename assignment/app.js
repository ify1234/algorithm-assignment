// This task is to give you a feel of basic JavaScript algorithms.

// 1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.

// Note:

// - Round up your answers to 4 decimal places (hint: use the toFixed method)
// - 1F = (C - 32)/ 1.8 (e.g 0deg C = -17.7778 deg F)
// - if the parameter passed is not a number and cannot be converted to a valid number, return a string with the format below:
//     `${parameter} is not a valid number but a/an ${parameter's type}.`
// You can use the following cases as guides:

// - convertFahrToCelsius(0) should return `-17.7778`
// - convertFahrToCelsius("0") should return `-17.7778`
// - convertFahrToCelsius([1,2,3]) should return `[1,2,3] is not a valid number but a/an array.`
// - convertFahrToCelsius({temp: 0}) should return `{temp: 0} is  not a valid number but a/an object.`
 

function convertFahrToCelsius(F) {
  let celsius = (F - 32) / 1.8;
  let message = `${F} is not a valid number but a/an ${typeof (F)}`;
  let n = celsius.toFixed(4);
  if ( typeof F === "number" || typeof F === "string") {
    return n;
  } else {
    return message;
  }
}

// type numbers here
console.log(convertFahrToCelsius(2));
console.log(convertFahrToCelsius("1"));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({temp: 0}));



// 2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces factors of 2, 3, and 5 with "yu", "gi" and "oh", logs the resulting array to the console then returns the resulting array.

function checkYuGiOh(n) {
  var arr = [...Array(n).keys()]
  
  var checker = {2:"yu", 3:"gi", 5:"oh"}

  var newList = [];
  for (var i = 1; i< n-1; i++){
    var data ="";
    for (const [key, value] of Object.entries(checker)) {
      
      if (arr[i] % key == 0) {
        if (data === "") {
         data=  data + value;
        } else {
           data=  data +"-" +value;
      }
      }
    
    }
    if (data == "") {
      newList.push(arr[i])
    } else {
      newList.push(data)
    }
      
   

    // if ((arr[i]%2 )=== 0) {
    //   newList.push("yu");
    // }else if ((arr[i]%3 )=== 0 ) {
    //   newList.push("gi")
    // }
    //  else if ((arr[i]%5 )=== 0) {
    //   newList.push("oh")
    // } else {
      
    //    newList.push(arr[i])
    // }


  }
 

  return newList;


}
console.log(checkYuGiOh(60))

// Note:

// - for strings that have multiple factors, use hyphens as separators
// e.g 10 === "yu-oh", 30 === "yu-gi-oh"
// - perform checks on your input and return `invalid parameter: ${parameter}` if an invalid parameter - i.e. a string that can't be converted to a number or another data type - is passed. 
// Use the following cases as guides:

// - checkYuGiOh(10) should return [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
// - checkYuGiOh("5") should return [1, "yu", "gi", "yu", "oh"]
// - checkYuGiOh("fizzbuzz is meh") should return `invalid parameter: "fizzbuzz is meh"`


// const checkYuGiOh = function(n) {
 
//   return [n + n];
// }
// console.log(checkYuGiOh(10));

// const checkYuGiOh = (n) => {
//   let output = 10;
//   for (let counter = 0; counter <= n; counter++) {
//     output += n
//   }
//   return [output];
// };
// console.log(checkYuGiOh(100))