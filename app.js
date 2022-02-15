//BMI Calculator Function
function bmiCalculator() {

    var weight = parseInt(document.getElementById("weight").value); //Weigth as a number
    var height = parseInt(document.getElementById("height").value); //Height as a number
    var bmi = (weight / ((height * height) / 10000)).toFixed(2) //BMI calculation fixing up to 2 decimal places


    //Change the text of the result section based on the BMI
    if (bmi < 18.5) {
        document.getElementById("result").innerHTML = "Your body mass index is " + bmi + " which means you are " + "underweight";

    } else if (bmi < 25) {
        document.getElementById("result").innerHTML = "Your body mass index is " + bmi + " which means you are " + "healthy";

    } else if (bmi < 30) {
        document.getElementById("result").innerHTML = "Your body mass index is " + bmi + " which means you are " + "overweight";

    } else if (bmi >= 30) {
        document.getElementById("result").innerHTML = "Your body mass index is " + bmi + " which means you are " + "obese";

    } else if (bmi = isNaN) {
        document.getElementById("result").innerHTML = "Please enter a valid number";
    }

}