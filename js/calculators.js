'use strict';

let formBMI = document.getElementById('bmi');
let bmiResult = document.getElementById('bmiResult');

let formIW = document.getElementById('iw');
let iwResult = document.getElementById('iwResult');

formBMI.addEventListener('submit', bmiCalculators);
function bmiCalculators(event) {
	event.preventDefault();
	let weight = Number(event.target.weight.value);
	let height = Number(event.target.height.value);
	let computBmi = weight / (height * height);
	if (computBmi <= 18.5) {
		bmiResult.textContent = `BMI Result : ${computBmi.toFixed(2)} kg/m2, Under Weight.`;
	} if (computBmi > 18.5 && computBmi < 25) {
		bmiResult.textContent = `BMI Result : ${computBmi.toFixed(2)} kg/m2, Normal.`;
	} if (computBmi >= 25.1 && computBmi < 30) {
		bmiResult.textContent = `BMI Result : ${computBmi.toFixed(2)} kg/m2, Over Weight.`;
	} if (computBmi >= 30 && computBmi < 35) {
		bmiResult.textContent = `BMI Result : ${computBmi.toFixed(2)} kg/m2, Obese.`;
	} if (computBmi >= 35 && computBmi < 50) {
		bmiResult.textContent = `BMI Result : ${computBmi.toFixed(2)} kg/m2, Extremly Obese.`;
	} if (computBmi >= 50) {
		bmiResult.textContent = `BMI Result : ${computBmi.toFixed(2)} kg/m2, OOOHH GOD.`;
	}

}


formIW.addEventListener('submit', iwCalculators);
function iwCalculators(event) {
	event.preventDefault();
	let height = Number(event.target.height.value);
	let computiw = (height * height) * 21.7;
	iwResult.textContent = `Ideal wight Result : ${computiw.toFixed(2)} kg`;
}

const nutritionProductBtn = document.getElementById('nutritionProductBtn');

const calcutaionBtn = document.getElementById('calcutaionBtn');

const nutritionProductTab = document.getElementById('nutritionProductTab');

const calcutaionTab = document.getElementById('calcutaionTab');

const calculators = document.getElementById('calculators');

const product = document.getElementById('product');


nutritionProductBtn.addEventListener('click', () => {
	nutritionProductTab.classList.add('active');
	calcutaionTab.classList.remove('active');
	calculators.classList.add('hide');
	product.classList.remove('hide');
});

calcutaionBtn.addEventListener('click', () => {
	nutritionProductTab.classList.remove('active');
	calcutaionTab.classList.add('active');
	calculators.classList.remove('hide');
	product.classList.add('hide');
});




