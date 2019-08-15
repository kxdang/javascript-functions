//Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
    //Local scope:  num or result
        //Local scope: isFreezing
let convertFahrenheitToCelsius = function(num) {
    let result = (num - 32) * 5/9

    if (num <= 0) {
        let isFreezing = true;
    }


    return result;
}

let tempOne = convertFahrenheitToCelsius(32);
let tempTWo = convertFahrenheitToCelsius(68)