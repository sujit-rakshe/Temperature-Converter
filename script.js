function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const originalUnit = document.getElementById("unit").value;
    const targetUnit = document.getElementById("targetUnit").value;
  
    if (originalUnit === targetUnit) {
      document.getElementById("result").textContent = "Please select a different target unit.";
      return;
    }
  
    let convertedTemperature;
  
    if (originalUnit === "celsius") {
      if (targetUnit === "fahrenheit") {
        convertedTemperature = (temperature * 9/5) + 32;
      } else if (targetUnit === "kelvin") {
        convertedTemperature = temperature + 273.15;
      }
    } else if (originalUnit === "fahrenheit") {
      if (targetUnit === "celsius") {
        convertedTemperature = (temperature - 32) * 5/9;
      } else if (targetUnit === "kelvin") {
        convertedTemperature = (temperature - 32) * 5/9 + 273.15;
      }
    } else if (originalUnit === "kelvin") {
      if (targetUnit === "celsius") {
        convertedTemperature = temperature - 273.15;
      } else if (targetUnit === "fahrenheit") {
        convertedTemperature = (temperature - 273.15) * 9/5 + 32;
      }
    }
  
    if (convertedTemperature !== undefined) {
      document.getElementById("result").textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${targetUnit}`;
    } else {
      document.getElementById("result").textContent = "Invalid conversion";
    }
  }
  
  document.getElementById("convertButton").addEventListener("click", convertTemperature);
  
  document.getElementById("temperature").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      convertTemperature();
    }
  });
  