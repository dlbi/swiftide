// Notice Modal
const noticeModal = document.querySelector('#myNoticeModal');
let closeNotice = document.querySelector('#close');
let closeNoticeBtn = document.querySelector('#close-pop');

setTimeout(
    function(){
        noticeModal.style.display = 'block';
    }
    , 5000
);
window.onclick = function(event) {
    if (event.target === noticeModal) {
        noticeModal.style.display = 'none';
    }
};
closeNotice.addEventListener('click', function(){
    noticeModal.style.display = 'none';
});
closeNoticeBtn.addEventListener('click', function(){
    noticeModal.style.display = 'none';
})
// MODAL BEGINNING
const modal = document.querySelector('#myModal');
const ibtn = document.querySelector('#openIModal');
const tbtn = document.querySelector('#openTModal');
const cabtn = document.querySelector('#openCAModal');
const cpbtn = document.querySelector('#openCPModal');
let span = document.getElementsByClassName('close');
let formName = document.querySelector('.exam-name');
let examType = ['IELTS', 'TOEFL', 'CAE', 'CPE'];

ibtn.onclick = function() {
    modal.style.display = 'block';
    formName.textContent = examType[0];
    formName.style.fontSize = '1rem';
};
span.onclick = function() {
    modal.style.display = 'none';
    noticeModal.style.display = 'none';
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