// MODAL BEGINNING
const modal = document.querySelector('#myModal');
const ibtn = document.querySelector('#openIModal');
const tbtn = document.querySelector('#openTModal');
const cabtn = document.querySelector('#openCAModal');
const cpbtn = document.querySelector('#openCPModal');
let span = document.querySelector('.close');
let formName = document.querySelector('.exam-name');
let examType = ['IELTS', 'TOEFL', 'CAE', 'CPE'];

ibtn.onclick = function() {
    modal.style.display = 'block';
    formName.textContent = examType[0];
    formName.style.fontSize = '1rem';
};
span.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

tbtn.onclick = function() {
    modal.style.display = 'block';
    formName.textContent = examType[1];
    formName.style.fontSize = '1rem';
};
cabtn.onclick = function() {
    modal.style.display = 'block';
    formName.textContent = examType[2];
    formName.style.fontSize = '1rem';
};

cpbtn.onclick = function() {
    modal.style.display = 'block';
    formName.textContent = examType[3];
    formName.style.fontSize = '1rem';
};
// MODAL ENDING

// set conditionals, if form is empty, display error else if form is not empty, 'next' button should appear...
// form validation ()
const fname = document.forms['myForm']['First_Name'].value;
// console.log(fname);
const lname = document.forms['myForm']['Last_Name'].value;
// console.log(lname);
const email = document.forms['myForm']['Email'].value;
const radioterms = document.forms['myForm']['radio'].value;
let examFormInputs = [fname, lname, email, radioterms];
const startBtn = document.querySelector('.startBtn');
const nextBtn = document.querySelector('.next');
startBtn.addEventListener('click', function(){
    nextBtn.textContent = 'Next';
    nextBtn.classList.add('next-style');
});
nextBtn.addEventListener('click', function(){
    
})
// const=;
// const=;
// const=;
// function validateForm() {
//     // use an array to get all the inputs, then if array[values] = "" alert error
//     let x = document.forms['myForm'];
//     // ['First_Name'].value
//     console.log(x);
//     if (x == ""){
//         alert ('name cannot be blank');
//         return false;
//     }

// }
// validateForm()