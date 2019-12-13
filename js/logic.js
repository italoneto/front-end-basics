function Input(valueInput) {

    if (valueInput >= 10 && valueInput <= 100) {
        RandomNumber(valueInput);
    } else {
        document.getElementById("inputNumber").focus();
        alert("Por favor, digite um número entre 10 e 100.");
    }

}

function RandomNumber(num) {

    var randomNumbers = [];

    for (let index = 0; index < num; index++) {
        randomNumbers[index] = Math.round(Math.random() * 100);
    }

    addValue(randomNumbers, "random");

    var orgdNumbers = randomNumbers.sort((a, b) => a - b);
    addValue(orgdNumbers, "sorted");

    var revSort = randomNumbers.sort((a, b) => b - a);
    addValue(revSort, "revSorted");

    function addValue(number) {
        var gener = document.createElement("P");
        gener.innerHTML = number;
    }
}
