const colorMapping = {
    "red": "#FF0000",
    "green": "#00FF00",
    "blue": "#0000FF",
    "yellow": "#FFFF00",
    "black": "#000000",
    "white": "#FFFFFF",
    "pink": "#FFC0CB",
    "purple": "#800080",
    "orange": "#FFA500",
    "brown": "#A52A2A"
  };

  function translateColor() {
    const input = document.getElementById("colorInput").value.trim().toLowerCase();
    const output = document.getElementById("output");
    const colorBox = document.getElementById("colorBox");

    // Check if the color exists in the mapping
    if (colorMapping[input]) {
      const hexCode = colorMapping[input];
      output.innerHTML = `The hex code for "${input}" is ${hexCode}.`;
      colorBox.style.backgroundColor = hexCode;
    } else {
      output.innerHTML = `<span class="error">Sorry, the color "${input}" is not recognized.</span>`;
      colorBox.style.backgroundColor = "transparent";
    }
  }