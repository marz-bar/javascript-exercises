/*The goal of this function:
1. Read an Array and any number of additional arguments.
2. If there is only one or no arguments entered then return the first argument
3. Declare an empty array.
4. Compare the values of the Array(argument 0) against all additional arguments.
5. Write unique values to the empty array and return.
*/
/* my version
const removeFromArray = function(oldArray) {
  if(arguments.length <= 1) return arguments[0];
  
  const argumentsLength = arguments.length;

  let finalArray = [];
  let targetedElement;
  
  for (let i = 1; i < argumentsLength; i++) { 
    //first argument checking against array
    targetedElement = oldArray.indexOf(arguments[i]);

    //Loop continues until targetedElement doesn't exist in the Array.
    while(targetedElement !== -1){
      oldArray.splice(targetedElement,1);
      targetedElement = oldArray.indexOf(arguments[i],targetedElement);
    }
  }
  finalArray = oldArray;
  
  return finalArray;
};
*/

//Learned and improved version

const removeFromArray = function (array,...args) {
    let finalArray = [];

    array.forEach(item => {
      if(!args.includes(item)) {
        finalArray.push(item);
      }
    });
  return finalArray;
};

// Do not edit below this line 
module.exports = removeFromArray;
