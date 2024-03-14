function convertToCelsius() {
    var fahrenheit = parseFloat(document.getElementById('inputFahrenheit').value);
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('inputCelsius').value = celsius.toFixed(2);
}

function convertToFahrenheit() {
    var celsius = parseFloat(document.getElementById('inputCelsius').value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('inputFahrenheit').value = fahrenheit.toFixed(2);
}
