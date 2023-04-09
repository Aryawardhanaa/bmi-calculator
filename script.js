const calculateBtn = document.getElementById('hitung');
const weightInput = document.getElementById('berat');
const heightInput = document.getElementById('tinggi');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', function () {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100;

    if (isNaN(weight) || isNaN(height)) {
        resultDiv.innerHTML = 'Input tidak Benar';
    } else {
        const bmi = weight / (height * height);
        const bmiKategori = getBMIKategori(bmi);
        resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(1)} Which means you're (${bmiKategori})`;
    }
});

function getBMIKategori(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}
