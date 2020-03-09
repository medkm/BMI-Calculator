
function bmiCalculator() {
    var answer = document.querySelector("#answer");
    var weight = Number(document.querySelector("#weight").value);
    var height = Number(document.querySelector("#height").value);

    var calculatedBMI = Math.round(weight / Math.pow(height, 2));

    answer.innerHTML = calculatedBMI;//Displays result using DOM manipulation
}


