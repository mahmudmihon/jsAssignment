
// function for converting kilometer to meter
function kilometerToMeter(kilometerToConvert) {
    if(kilometerToConvert < 0) {
        return 'Value must be a positive number!';
    }

    if(typeof(kilometerToConvert) !== 'number') {
        return 'Value must be a number!';
    }

    var valueToReturnAfterConvert = kilometerToConvert * 1000;

    return valueToReturnAfterConvert;
}

// function for calculating budget
function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {
    
    if((numberOfWatch < 0) || (numberOfPhone < 0) || (numberOfLaptop < 0)) {
        return 'Value must be a positive number!';
    }

    if((typeof(numberOfWatch !== 'number')) || (typeof(numberOfPhone !== 'number')) || (typeof(numberOfLaptop !== 'number'))) {
        return 'Value must be a number!';
    }

    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;

    var totalBudget = (numberOfWatch * watchPrice) + (numberOfPhone * phonePrice) + (numberOfLaptop * laptopPrice);

    return totalBudget;
}

//function for calculating hotel cost
function hotelCost(numberOfDays) {
    
    if(numberOfDays <= 0) {
        return 'Value must be a greater than 0!';
    }

    if(typeof(numberOfDays) !== 'number') {
        return 'Value must be a number!';
    }

    var costForFirstTenDays = 100;
    var costForSecondTenDays = 80;
    var costForRemainingDays = 50;
    var totalCost = 0;

    for(var i = 1; i <= numberOfDays; i++) {
        if(i >= 1 && i <= 10) {
            totalCost += costForFirstTenDays;
        }
        else if(i >= 11 && i <=20 ) {
            totalCost += costForSecondTenDays;
        }
        else {
            totalCost += costForRemainingDays;
        }
    }

    return totalCost;
}

//function for finding largest friend name from an array
function megaFriend(nameOfFriends){
    if(!Array.isArray(nameOfFriends)){
        return 'Value must be an array of names!';
    }

    if(nameOfFriends.length === 0) {
        return 'Array can not be empty!'
    }

    var longestName;
    var longestNameLength = 0;

    for (var i = 0; i < nameOfFriends.length; i++) {
        if(typeof(nameOfFriends[i]) !== 'string') {
            return 'Every element must be a type of string!'
        }
        else {
            if (nameOfFriends[i].length > longestNameLength) {
                longestNameLength = nameOfFriends[i].length;
                longestName = nameOfFriends[i];
            }
        }
    }

    return longestName;
}