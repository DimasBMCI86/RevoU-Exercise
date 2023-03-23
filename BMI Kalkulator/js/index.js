const form = document.querySelector('form');
const result = document.querySelector('#result');
// menambahkan variable reset
// var $reset = $('#reset');

// menambahkan event pada tombol submit
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const height = parseInt(form.elements.height.value);
    const weight = parseInt(form.elements.weight.value);
    const gender = form.elements.gender.value;
    const bmi = calculateBMI(height, weight);
    const status = getStatus(bmi, gender);
    result.textContent = `BMI Anda Adalah: ${bmi.toFixed(1)}(${status})`;
});
    
// membuat fungsi kalkulasi
function calculateBMI(height, weight) {
    const heightM = height / 100;
    return weight / (heightM * heightM);
}

// print hasil status
function getStatus(bmi, gender) {
    if (gender === 'male') {
      if (bmi < 20) {
        return 'wah anda kurus...';
    } else if (bmi < 25) {
        return 'berat anda normal';
    } else if (bmi < 30) {
        return 'waduh sepertinya anda sedikit gemuk. itu bagus tapi jangan terlalu gemuk.';      
    } else {
        return 'astaga anda kegemukan. harap berolahraga agar badan tetap sehat!';
        }
} else {
    if (bmi < 18) {
        return 'anda kurus';
    } else if (bmi < 23) {
        return 'berat badan normal';
    } else if (bmi < 28) {
        return 'anda sedikit gemuk';
    } else {
        return 'waduh anda mengalami obesitas. harap berolahraga agar badan tetap sehat!'
    }
}
}


document.getElementsByClassName("form");

// membuat fungsi reset pada input form
// $reset.on('click', function(e) {
//     e.preventDefault();
function clearResult(){
    document.getElementById('height').value = "";
    document.getElementById('weight').value = "";    
}
