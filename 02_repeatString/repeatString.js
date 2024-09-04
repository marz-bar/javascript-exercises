const repeatString = function(stringToRepeat, numberOfTimes) {
    if (numberOfTimes < 0) return 'ERROR';
    let finalString = "";
    while(numberOfTimes > 0) {
        finalString += stringToRepeat;
        numberOfTimes--;
    }
    return finalString;  
};

// Do not edit below this line
module.exports = repeatString;
