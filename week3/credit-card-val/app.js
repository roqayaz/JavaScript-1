

const validateCreditNumber = (creditNum) => {

    //length of 16 character
    const lengthCharacter = (creditNum) => {
        if (creditNum.length === 16) {
        return true
    }else{
        console.log(`Invalid! The input ${creditNum} should contain 16 characters.`)
    }}
    
    //all be number
    const allNumbers = (creditNum) => {
        let isNum = /^\d+$/.test(num);
        if(isNum){
            return true
        }else{
            console.log(`Invalid! The input ${creditNum} should contain only numbers!`)
        } 
    }

    //at least two different number
    const differentNumbers = (creditNum) => {
        for(let i=0; i<creditNum.length; i++){
            if (creditNum[0] === creditNum[i]){
                return true
            }else{
                console.log(`Invalid! The input ${creditNum} should contain at least 2 different types of numbers!`)
            }
        }
    }

    //the last number be even 

    const lastBeEven = (creditNum) =>{
        if (creditNum[16] % 2 === 0){
          return true
        }else{
            console.log(`Invalid! The last number of input ${creditNum} must be even `)
        }
    }

    //the sum of all number must be greater then 16.
    const sumOfAll = (creditNum) => {
        function sumStr(str){
            let strArr = str.split("");
            let sum = strArr.reduce(function(total, num){
              return parseFloat(total) + parseFloat(num);
            });
        
            return sum;
        };
        if (sumStr(num) > 16) {
            return true
        }else{
            console.log(`Invalid! The input ${creditNum} should contains the numbers that must be greater than 16!`)
        }
    }





}
/* 
const validateCreditNumber = (num) => {
  let isNum = /^\d+$/.test(num);
  
  if( num[16] % 2 === 0 && sumStr(num) > 16 &&  isNum  &&num.length === 16
    ){
  console.log(num);
  } else {
console.log(`error`)
  }



};
 */
validateCreditNumber('992332119201111');
validateCreditNumber('1100000000000002');