const sub_left = document.createElement('div');
sub_left.setAttribute('id','subLeft');
main.appendChild(sub_left)

/*--1--*/
const sub_left_top = document.createElement('div');
sub_left_top.setAttribute('id','subLeftTop');
subLeft.appendChild(sub_left_top);

const bill_label = document.createElement('label');
bill_label.setAttribute('id','billLabel');
bill_label.innerHTML = "Bill";
sub_left_top.appendChild(bill_label);

const bill_div = document.createElement('div');
bill_div.setAttribute('id','billDiv');
sub_left_top.appendChild(bill_div);

const dollar_icon = document.createElement('img');
dollar_icon.setAttribute('id','dollarIcon');
dollar_icon.src = "images/icondollar.svg";
dollar_icon.alt = "dollar image";
dollar_icon.draggable = "False";
billDiv.appendChild(dollar_icon);


const bill_input = document.createElement('input');
bill_input.setAttribute('id','billInput');
bill_input.type = "number";
bill_input.required = "required";
bill_input.placeholder = "0";
billDiv.appendChild(bill_input);

/**--/////////////////////////////////////////////////////**/
/*--2--*/

const sub_left_mid = document.createElement('div');
sub_left_mid.setAttribute('id','subLeftMid');
subLeft.appendChild(sub_left_mid);

const tip_label = document.createElement('label');
tip_label.setAttribute('id','tipLabel');
tip_label.innerHTML = 'Select Tip %';
subLeftMid.appendChild(tip_label);

const tip_percent = document.createElement('div');
tip_percent.setAttribute('id','tipPercent');
subLeftMid.appendChild(tip_percent);

/****many divs are left here**//***nothing left now*****/

var tip5 = document.createElement("button");
tip5.textContent = '5%';
tip5.setAttribute('id','tipFive');
tip5.classList.add('tipCharge');
tipPercent.appendChild(tip5);

var tip10 = document.createElement("button");
tip10.textContent = '10%';
tip10.setAttribute('id','tipTen');
tip10.classList.add('tipCharge');
tipPercent.appendChild(tip10);

var tip15 = document.createElement("button");
tip15.textContent = '15%';
tip15.setAttribute('id','tipFifteen');
tip15.classList.add('tipCharge');
tipPercent.appendChild(tip15);

var tip25 = document.createElement("button");
tip25.textContent = '25%';
tip25.setAttribute('id','tipTwentyFive');
tip25.classList.add('tipCharge');
tipPercent.appendChild(tip25);

var tip50 = document.createElement("button");
tip50.textContent = '50%';
tip50.setAttribute('id','tipFifty');
tip50.classList.add('tipCharge');
tipPercent.appendChild(tip50);

var custom = document.createElement("input");
custom.setAttribute('id','custom');
custom.type = "number"
custom.classList.add('customCharge');
custom.placeholder = "Custom"
tipPercent.appendChild(custom);

/**--//////////////////////////////////////////////////////**/
/*--3--*/

const sub_left_bottom = document.createElement('div');
sub_left_bottom.setAttribute('id','subLeftBottom');
subLeft.appendChild(sub_left_bottom);

const number_of_people = document.createElement('label');
number_of_people.setAttribute('id','numberOfPeople');
number_of_people.innerHTML = "Number of People";
subLeftBottom.appendChild(number_of_people);

const warningtxt = document.createElement('span');
warningtxt.setAttribute('id','warningText');
subLeftBottom.appendChild(warningtxt);



const people_div = document.createElement('div');
people_div.setAttribute('id','peopleDiv');
subLeftBottom.appendChild(people_div);

/**one pitch still left dollar icon */

const person_icon = document.createElement('img');
person_icon.setAttribute('id','personIcon');
person_icon.src = "images/iconperson.svg";
person_icon.alt = "person logo";
person_icon.draggable = "False";
peopleDiv.appendChild(person_icon);

const people_input = document.createElement('input');
people_input.setAttribute('id','peopleInput');
people_input.type = "number";
people_input.required = "required";
people_input.placeholder = "0";
peopleDiv.appendChild(people_input);

/*========================end==of==left==div==============*/

/*========================start==of==right==div==============*/

const sub_right = document.createElement('div');
sub_right.setAttribute('id','subRight');
main.appendChild(sub_right);
/*//////////////////////////////////////////////*/
/*===================subRightTop===================*/
const sub_right_top = document.createElement('div');
sub_right_top.setAttribute('id','subRightTop');
subRight.appendChild(sub_right_top);
/*==================subRightTop===================*/
const tip_amount_person = document.createElement('div');
tip_amount_person.setAttribute('id','tipAmountPerson');
subRightTop.appendChild(tip_amount_person);

const hfivetop = document.createElement('h5');
hfivetop.classList.add('hFive');
hfivetop.innerHTML = "Tip Amount";
tipAmountPerson.appendChild(hfivetop);

const hsixtop = document.createElement('h6');
hsixtop.classList.add('hSix');
hsixtop.innerHTML = "/ person";
tipAmountPerson.appendChild(hsixtop);
/********************************************/

const tip_amount_money = document.createElement('div');
tip_amount_money.setAttribute('id','tipAmountMoney');
subRightTop.appendChild(tip_amount_money);

const honetop = document.createElement('h1');
honetop.classList.add('hOne');
honetop.setAttribute('id','TAP');
honetop.textContent = "$0.00";
tipAmountMoney.appendChild(honetop);

/*=========================================*/


/*==============subRightMid====================*/
const sub_right_mid = document.createElement('div');
sub_right_mid.setAttribute('id','subRightMid');
subRight.appendChild(sub_right_mid);
/*==============subRightMid=================*/
const total_person = document.createElement('div');
total_person.setAttribute('id','totalPerson');
subRightMid.appendChild(total_person);

const hfivemid = document.createElement('h5');
hfivemid.classList.add('hFive');
hfivemid.innerHTML = "Total";
totalPerson.appendChild(hfivemid);

const hsixmid = document.createElement('h6');
hsixmid.classList.add('hSix');
hsixmid.innerHTML = "/ person";
totalPerson.appendChild(hsixmid);

const total_amount_money = document.createElement('div');
total_amount_money.setAttribute('id','totalAmountMoney');
subRightMid.appendChild(total_amount_money);

const honemid = document.createElement('h1');
honemid.setAttribute('id','TP')
honemid.classList.add('hOne');
honemid.textContent = "$0.00";
totalAmountMoney.appendChild(honemid);
/*=============================================*/



/*=============subRightBottom=====================*/
const sub_right_bottom = document.createElement('div');
sub_right_bottom.setAttribute('id','subRightBottom');
subRight.appendChild(sub_right_bottom);
/*==============subRightBottom===================*/
const btn = document.createElement('button');
btn.setAttribute('id','resetBtn');
btn.innerHTML = "RESET";
subRightBottom.appendChild(btn);

/*dskckscbksbdcbscbksbcksbcbsbcddsbcbsbkschsdbshkcskbkcbsbsdks*/

/*********real logic and math start here*******************/


custom.onkeyup = customCase;

function customCase() {
	let customPercentage = custom.value;
	if (customPercentage == "") {
		document.getElementById('TAP').innerHTML = "$0.00";
		document.getElementById('TP').innerHTML = "$0.00";
	}
	else if(customPercentage == 0){
		let noOfPeople = people_input.value;
		let billData = bill_input.value;
		let zeroTip = billData/noOfPeople;
		document.getElementById('TAP').innerHTML = "$0.00";
		document.getElementById('TP').textContent = "$"+zeroTip.toFixed(2);
	}
	else if (customPercentage > 0){
		let noOfPeople = people_input.value;
		let billData = bill_input.value;
		let perPerson = ((customPercentage/100)*billData)/noOfPeople;
		let totalPerPerson = (billData/noOfPeople)+perPerson;
		console.log(noOfPeople);
		console.log(billData)
		console.log(perPerson);
		console.log(totalPerPerson);
		document.getElementById('TAP').innerHTML = "$"+perPerson.toFixed(2);
		document.getElementById('TP').innerHTML = "$"+totalPerPerson.toFixed(2);
	}
}


/**********************button-5*******************/
const btn5 = document.querySelector('#tipFive');
btn5.addEventListener('click',() => {
	billfunct5();
})
function billfunct5() {
	let noOfPeople = people_input.value;
	let billData = bill_input.value;
	let perPerson = ((5/100)*billData)/noOfPeople;
	let totalPerPerson = (billData/noOfPeople)+perPerson;
	document.getElementById('TAP').innerHTML = "$"+perPerson.toFixed(2);
	document.getElementById('TP').innerHTML = "$"+totalPerPerson.toFixed(2);
}

/**********************button-10*******************/
const btn10 = document.querySelector('#tipTen');
btn10.addEventListener('click',() => {
	billfunct10();
})
function billfunct10() {
	let noOfPeople = people_input.value;
	let billData = bill_input.value;
	let perPerson = ((10/100)*billData)/noOfPeople;
	let totalPerPerson = (billData/noOfPeople)+perPerson;
	document.getElementById('TAP').innerHTML = "$"+perPerson.toFixed(2);
	document.getElementById('TP').innerHTML = "$"+totalPerPerson.toFixed(2);
}

/**********************button-15*******************/
const btn15 = document.querySelector('#tipFifteen');
btn15.addEventListener('click',() => {
	billfunct15();
})
function billfunct15() {
	let noOfPeople = people_input.value;
	let billData = bill_input.value;
	let perPerson = ((15/100)*billData)/noOfPeople;
	let totalPerPerson = (billData/noOfPeople)+perPerson;
	document.getElementById('TAP').innerHTML = "$"+perPerson.toFixed(2);
	document.getElementById('TP').innerHTML = "$"+totalPerPerson.toFixed(2);
}

/**********************button-25*******************/
const btn25 = document.querySelector('#tipTwentyFive');
btn25.addEventListener('click',() => {
	billfunct25();
})
function billfunct25() {
	let noOfPeople = people_input.value;
	let billData = bill_input.value;
	let perPerson = ((25/100)*billData)/noOfPeople;
	let totalPerPerson = (billData/noOfPeople)+perPerson;
	document.getElementById('TAP').innerHTML = "$"+perPerson.toFixed(2);
	document.getElementById('TP').innerHTML = "$"+totalPerPerson.toFixed(2);
}

/**********************button-50*******************/
const btn50 = document.querySelector('#tipFifty');
btn50.addEventListener('click',() => {
	billfunct50();
})
function billfunct50() {
	let noOfPeople = people_input.value;
	let billData = bill_input.value;
	let perPerson = ((50/100)*billData)/noOfPeople;
	let totalPerPerson = (billData/noOfPeople)+perPerson;
	document.getElementById('TAP').innerHTML = "$"+perPerson.toFixed(2);
	document.getElementById('TP').innerHTML = "$"+totalPerPerson.toFixed(2);
}

/****************************************reset data command here ****************************/
const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click',() => {
	people_input.value = "";
	bill_input.value = "";
	custom.value = "";
	honetop.textContent = "$0.00";
	honemid.textContent = "$0.00";
})

setInterval(alertText,100);

function alertText() {
	let x = document.getElementById('peopleInput').value;
	if(x>0 || x == "") {
		document.getElementById('peopleDiv').style.border = "";
		document.getElementById('warningText').textContent = "";
	}
	else if (x == 0) {
	document.getElementById('peopleDiv').style.border = "#B47C6D solid thin";
	document.getElementById('warningText').textContent = "Can't be zero";
	}
}



