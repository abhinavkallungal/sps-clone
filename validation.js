console.log("submit");
const form =document.getElementById('#form');
const fullName =document.getElementById('fullName');
const place =document.getElementById('place');
const gender =document.getElementById('gender');
const email =document.getElementById('email');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
        console.log("submit");
    checkInput();
});

function checkInput(){
    const fullNameValue=fullName.ariaValueMax.trim();
    const placeValue=place.ariaValueMax.trim();
    const genderValue=gender.ariaValueMax.trim();
    const emailValue=email.ariaValueMax.trim();

    if(fullNameValue==''){
        setErrorFor(fullName,"full name empty");
    }else{
        //success
    }
}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const span = formControl.querySelector("span");
    span.innerText=message;
    formControl.className='formControl.error'
}
