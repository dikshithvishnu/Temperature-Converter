function temperatureConverter_C(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML = (valNum * (9 / 5)) + 32;
    document.getElementById("outputKelvin").innerHTML = valNum + 273.15;
}

function temperatureConverter_F(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum - 32) / 1.8;
    document.getElementById("outputKelvin_1").innerHTML = ((valNum - 32) / 1.8) + 273.15;
}
function temperatureConverter_K(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius_1").innerHTML = valNum - 273.15;
    document.getElementById("outputFahrenheit_1").innerHTML = ((valNum - 273.15) * 1.8) + 32;
}