const bodyWeight = document.querySelector('#bodyWeight');
const bodyHeight = document.querySelector('#bodyHeight');
const resultBMI = document.querySelector('#result--bmi');
const resultStatus = document.querySelector('#result--status');
const buttonSubmit = document.querySelector('#btn--calculate');

function calculateBMI(){
    const bodyHeightInMeters = bodyHeight.value * 0.01;
    
    const BMI = bodyWeight.value / (bodyHeightInMeters ** 2);
    resultBMI.textContent = BMI;

    if(BMI < 18.5){
        resultStatus.textContent = 'Sepertinya, kamu kekurangan berat badan :(';
    } else if(BMI >= 18.5 && BMI <= 24.9){
        resultStatus.textContent = 'Yeay, Normal! :D';
    } else if(BMI >= 25 && BMI <= 29.9){
        resultStatus.textContent = 'Waduw, agak kelebihan berat badan nih!';
    } else if(BMI >= 30){
        resultStatus.textContent = 'Sepertinya hasil BMI Anda masuk dalam kategori obesitas';
    } else {
        resultStatus.textContent = 'Error';
    }
}

buttonSubmit.addEventListener('click', calculateBMI)
