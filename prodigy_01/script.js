function convertTemp() {
    const inputTemp = parseFloat(document.getElementById
        ('inputTemp').value)
        const fromUnit = document.getElementById('fromUnit').value;
        const toUnit = document.getElementById('toUnit').value;

        if(isNaN(inputTemp)){
            document.getElementById('result').textContent = 'please enter a valid number';
            return;
        }

        let celsius;
        //convert input to celcius first

        switch(fromUnit){
            case 'celsius':
                celcius = inputTemp;
                break;
            case 'fahrenheit':
                celsius = (inputTemp - 32)*5/9;
                break;
            case 'kelvin':
                celcius = inputTemp-273.15;
                break;
        }
        //convert from celcius to target unit

        let result;
        switch(toUnit){
            case 'celcius':
                result = celcius;
                break;
            case 'fahrenheit':
                result = (celcius * 9/5) + 32;
                break;
            case 'kelvin':
                result = celcius + 273.15;
                break;
        }

        document.getElementById('result').textContent = `${inputTemp}° ${fromUnit.charAt(0).toUpperCase()} = ${result.toFixed(2)}° ${toUnit.charAt(0).toUpperCase()}`;
}