// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

function printerError(s) {
    // your code
let totalSize=s.toUpperCase().split("")
const error=[]
totalSize.map((item)=>{
if(item.charCodeAt(0) - 64 > 13){
error.push(item)
}
})
return`${error.length}/${totalSize.length+1}`
}

function printerError(s) {
    let totalSize = s.split("");
    const error = [];
    totalSize.map((item) => {
        if (item.charCodeAt(0) > 'm'.charCodeAt(0)) {
            error.push(item);
        }
    });
    return `${error.length}/${totalSize.length}`;
}

// Q2
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
    // Program Me
  const countbits=n.toString(2)
  // console.log(countbits)
  const data=countbits.split("").filter((item)=>{
  // console.log(item)
  return item == 1
  })
  console.log(data)
  
  return data.length
  };
  
  countBits(1234)


  const getbinary=(num)=>{
    let count=0;
    let div=num
    for(let i=0;div>=1;i++){
            console.log(div)
      if(div%2===1){
          count++
      }
      div=Math.floor(div / 2)
    }

    return count
}

console.log(getbinary(1234))


// Q3
// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcissistic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153


function narcissistic(value) {

    // Code me to return true or false
  let armstrongNumber=value.toString().split("")
  let val=armstrongNumber.map((item)=>{
  let conertedvalue=1
  for(let i=0;i<armstrongNumber.length;i++){
  conertedvalue*=item
  }
  return conertedvalue
  })
  const sum=val.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  
  return sum===value
}
narcissistic(153)

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    const newString=s1+s2
    const newArray=[]
    newString.split("").map((item)=>{
    if(newArray.includes(item)){
    return
    }else{
    newArray.push(item)}
    })
    return newArray.sort().join("")
    }


//     Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false 

    function isTriangle(a,b,c){
        if(a<1||b<1||c<1 ){
        return false
        }
        else if(a+b>c && b+c>a && c+a>b){
        console.log("in if")
        return true
        }else{
        console.log("in else")
        return false 
        }
        }