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


        // Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

        // Examples:
        
        // * 'abc' =>  ['ab', 'c_']
        // * 'abcdef' => ['ab', 'cd', 'ef']

        function solution(str){
            let arr=[]
            let num=0
        const newStr=str.split("")
        if(newStr.length%2!==0){
            newStr.push("_")
        }
        for(let i=0;i<newStr.length/2;i++){
            arr.push(newStr[num]+newStr[num+1])
            num+=2
        }
        return arr
        
        }



//         Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: https://leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]


        function twoSum(numbers, target) {
            for(let i=0;i<numbers.length;i++){
                 for(let j=1;j<numbers.length;j++){
           if(numbers[i]+numbers[j]=== target){
           return [i,j]
           }
           }
           }
           }

        //    ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

        //    Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
        function rot13(message) {
            const arr = message.split("");
            let newarr = [];
        
            for (let i = 0; i < arr.length; i++) {
                let charCode = arr[i].charCodeAt(0);
        
                // Check if the character is an uppercase letter (A-Z)
                if (charCode >= 65 && charCode <= 90) {
                    // Apply ROT13 with wrap-around
                    charCode = ((charCode - 65 + 13) % 26) + 65;
                    newarr.push(String.fromCharCode(charCode));
                }
                // Check if the character is a lowercase letter (a-z)
                else if (charCode >= 97 && charCode <= 122) {
                    // Apply ROT13 with wrap-around
                    charCode = ((charCode - 97 + 13) % 26) + 97;
                    newarr.push(String.fromCharCode(charCode));
                }
                // If it's not an alphabetic character, keep it as is
                else {
                    newarr.push(arr[i]);
                }
            }
        
            return newarr.join("");
        }
        

//         Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
    const val=text.toLowerCase().split("")
    let obj={}
    for(let i=0;i<val.length;i++){
      if(obj[val[i]]){
          obj[val[i]]+=1
      }else{
          obj[val[i]]=1
      }
    }
     return Object.values(obj).filter((item)=>{
        return item>1
     }).length
    }


//     Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

function comp(array1 = [], array2 = []){
    
    const sortedArray1= array1?.sort((a,b)=>{
         return a-b
     })
       const sortedArray2= array2?.sort((a,b)=>{
         return a-b
     })
       if(sortedArray1?.length !== sortedArray2?.length ){
         return false
     }
   for (let i=0;i<sortedArray1.length;i++){
       if(sortedArray1[i]**2!==sortedArray2[i]){
             return false
       }
   }
    return true
 }
 
//  The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
    let hexValues=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    let hexString=``
  
    const calCulateHex=(r)=>{
        if(r<0){
            r=0
        }else if(r>255){
            r=255
        }
       let q = Math.trunc(r/16)
       let rem = (r%16)
       hexString=hexString+(`${hexValues[q]}${hexValues[rem]}`)
 
    }
     calCulateHex(r)
     calCulateHex(g)
     calCulateHex(b)
    return hexString
 }