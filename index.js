document.getElementById('colorForm').addEventListener('submit', function (e) {
    e.preventDefault();


    const colorHexMap = {
        red: "#FF0000",
        blue: "#0000FF",
        green: "#008000"
    };

    const colorInput = document.getElementById('colorInput').value.trim().toLowerCase();

  
    if (colorHexMap[colorInput]) {
        Swal.fire({
            title: `Color: ${colorInput}`,
            text: `Hex Code: ${colorHexMap[colorInput]}`,
            icon: 'success',
            background: colorHexMap[colorInput],
            color: '#FFF',
            confirmButtonText: 'OK',
        });
    } else {
        Swal.fire({
            title: 'Invalid Color!',
            text: 'Please enter a valid color name (e.g., red, blue, green).',
            icon: 'error',
        });
    }
});
