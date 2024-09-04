const sumAll = function(firstNumber,secondNumber) {
  let checkFirstNumber = typeof(firstNumber);
  let checkSecondNumber = typeof(secondNumber);
  let results = 0;

  //Verify if both parameters are numbers
  if(checkFirstNumber != "number" || checkSecondNumber != "number"){ 
    return "ERROR";
  }
  //Verify if both numbers are positive
  if(firstNumber < 0 || secondNumber < 0){ 
    return "ERROR";
  }
  
  //Checks for larger second number
  //If first number is larger then swaps
  if(firstNumber > secondNumber)
  {
    let temp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = temp;
  }

  for(let i = firstNumber; i <= secondNumber; i++){
    results += i;
  }
  return results;
};

// Do not edit below this line
module.exports = sumAll;
