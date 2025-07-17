 /*JAVASCRIPT WAS LIVESCRIPT*/
   // alert('Welcome dear costumer');
   let balance;
  // localStorage.setItem('ACbal',String(balance));//update bal in localstorage
  let storedbal = localStorage.getItem('ACbal');
  console.log(Number(storedbal));

function returntohome() {
  window.location.href="EUREKA BANK.html"
 // window.open('EUREKA BANK.html');
}
if(storedbal!==null) {
   balance = Number(storedbal);
} else {
    balance=0;
}

function viewBal() {
  console.log(storedbal +' is the previously stored string value');
  if(storedbal!==null) {
    balance = Number(storedbal);
   document.querySelector('.mainDisplay').innerHTML = `Balance : ₹ ${balance}`;
} else {
  alert('Balance null');
}
 }
function addFunds1() {
  balance+=3700000; console.log(balance);
  localStorage.setItem('ACbal',String(balance));
  alert('₹37,00,000 has been credited to your account');
}
function addFunds2() {
  balance+=15500005; console.log(balance);
  localStorage.setItem('ACbal',String(balance));
  alert('₹1 crore 55 lakh and change has been credited to your account');
}
function addFunds3() {
  balance+=6100000; console.log(balance);
  localStorage.setItem('ACbal',String(balance));
  alert('₹61,00,000 has been credited to your account');
}
function addFunds4() {
  balance+=20000; console.log(balance);
  localStorage.setItem('ACbal',String(balance));
  alert('₹19,900 has been credited to your account');
}
function addFunds5() {
  balance+=30000; console.log(balance);
  localStorage.setItem('ACbal',String(balance));
  alert('₹30,000 has been credited to your account');
}
function addFunds6() {
  balance+=30; console.log(balance);
  localStorage.setItem('ACbal',String(balance));
  alert('₹30 has been credited to your account');
}
function plusbtn() {
 const Mydiv = document.getElementById('PopDisplayPAGE2');
 Mydiv.style.display='Block';
 const nameEntered = document.querySelector('.Benificiary-name').value;
 const acnEntered = document.querySelector('.Benificiary-ACN').value;
 
 document.querySelector('.Benificiary-details').innerHTML=`Name:${nameEntered}.\n AC :${acnEntered}`;
}
//send money3
function deduction () {
  const amountToSub = Number(document.querySelector('.Amountded').value);
  console.log(amountToSub +' will be deducted from '+Number(storedbal));
  balance= (Number(storedbal))-amountToSub;
  localStorage.setItem('ACbal',String(balance));
  console.log(`Balance after paying : ${balance}`);
  alert(`Dear Customer,\nAn amount of ₹${amountToSub} has been\n deducted from your account`);
}
function unavail() {
alert('Service unavailable');
}
