$('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
});

const form =document.getElementById('form');

$("#submit-form").validate({
       
        submitHandler:function(form){
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbxTV1PmFUqev5rPq_2W-KIRSA5GlvusggjJ7M_o/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Message submitted successfully")
                    window.location.reload()
                },
                error:function (err){
                    alert("Something Error")
                }
            })
        }
    })

form.addEventListener('submit',(e)=>{
        e.preventDefault();

        function validate(){
           validateName();
           validatePlace();
           validateGender();
           validateEmail();
           validateNumber();
           validateEmployment();
           validateEducational();
           validateCollege();
           validateYog();
           validateAboutYou();
           validatewhyjoinSPS();
           validateMotivates();
           validateHeared();
           validateAgree();
           sendToMail();
        }
        validate();
        
       
           
});



let fullName = document.getElementById('fullName');
let place=document.getElementById('place');
let gender = document.getElementById('gender');
let email = document.getElementById('email');
let number = document.getElementById('number');
let Employment = document.getElementById('Employment');
let Educational = document.getElementById('Educational');
let College = document.getElementById('College');
let yog=document.getElementById('yog');
let aboutYou=document.getElementById('aboutYou');
let whyjoinSPS=document.getElementById('whyjoinSPS');
let Motivates=document.getElementById('motivates');
let heared=document.getElementById('heared');
let agree=document.getElementById('agree');



function validateName(){
        let data =fullName.value.trim();
        let length=data.length;
        let message;
        let formControl= fullName.parentElement;
        let error;

        if(data=='' || length==null){
                message='field is required';
                error=true;

        }else if(length <4){
                message='the field contain minimum 4  alphabats '
                error = true;
        }else if(length > 30){
                message='the field contain maximum 30  alphabats '
                error = true;

        }else{
            var regex = /^[a-zA-Z ]{4,30}$/;
            if(!regex.test(data)){
                message="the field only contain  alphabats "
                error = true;

            }else{
                    message="  ";
                    error=false;
            }
        }

        if(error){
                formControl.className='formControl error';
        }else{
                formControl.className='formControl success';
        }
       let msg=formControl.querySelector('.msg');
       msg.innerHTML=message;

}
function validatePlace(){
        
        let data = place.value.trim();
        let length=data.length;
        let message;
        let error;

        if(data=='' || length==null){
                message='field is required';
                error=true;

        }else if(length <4){
                message='the field contain minimum 4  alphabats '
                error = true;
        }else if(length > 30){
                message='the field contain maximum 30  alphabats '
                error = true;

        }else{
            var regex = /^[a-zA-Z ]{4,30}$/;
            if(!regex.test(data)){
                message="the field only contain  alphabats "
                error = true;

            }else{
                    message="  ";
                    error=false;
            }
        }
        let formControl= place.parentElement;
        if(error){
                formControl.className='formControl error';
        }else{
                formControl.className=' success formControl';
        }
       let msg=formControl.querySelector('.msg');
       msg.innerHTML=message;

}
function validateGender(){
        
        let data = gender.value
        
        let message;
        let error;

        if(data=='' || data==null){
                message='field is required';
                error=true;

        }else{
                message="  ";
                error=false;
            
        }
        let formControl= gender.parentElement;
        if(error){
                formControl.className='formControl error';
        }else{
                formControl.className=' success formControl';
        }
       let msg=formControl.querySelector('.msg');
       msg.innerHTML=message;

}
function validateEmail(){
        
        let data = email.value.trim();
        let length=data.length;
        let message;
        let error;

        if(data=='' || length==null){
                message='field is required';
                error=true;

        }else if(length <4){
                message='invalid format '
                error = true;
        }else{
            var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            if(!regex.test(data)){
                message="invalid format "
                error = true;

            }else{
                    message="  ";
                    error=false;
            }
        }
        let formControl= email.parentElement;
        if(error){
                formControl.className='formControl error';
        }else{
                formControl.className=' success formControl';
        }
       let msg=formControl.querySelector('.msg');
       msg.innerHTML=message;

}
function validateNumber(){
        
        let data = number.value.trim();
        let length=data.length;
        let message;
        let error;

        if(data=='' || length==null){
                message='field is required';
                error=true;

        }else if(length <10){
                message='invalid format '
                error = true;
        }else if(length >10){
                message='invalid format '
                error = true;
        }else{
            var regex = /^[0-9]*$/;
            if(!regex.test(data)){
                message="invalid format "
                error = true;

            }else{
                    message="  ";
                    error=false;
            }
        }
        let formControl= number.parentElement;
        if(error){
                formControl.className='formControl error';
        }else{
                formControl.className=' success formControl';
        }
       let msg=formControl.querySelector('.msg');
       msg.innerHTML=message;

}
function validateEmployment(){
        
        let data = Employment.value;
        let message;
        let error;

        if(data=='' || data==null || data==false){
                message='field is required';
                error=true;

        }else{
            
                message="  ";
                error=false;
        }
        
        let formControl= Employment.parentElement;
        if(error){
                formControl.className='formControl error';
        }else{
                formControl.className=' success formControl';
        }
       let msg=formControl.querySelector('.msg');
       msg.innerHTML=message;

}
function validateEducational(){
        
        let data = Educational.value;
        let message;
        let error;

        if(data=='' || data==null || data==false){
                message='field is required';
                error=true;

        }else{
            
                message="  ";
                error=false;
        }
        
        let formControl= Educational.parentElement;
        if(error){
                formControl.className='formControl error';
        }else{
                formControl.className=' success formControl';
        }
       let msg=formControl.querySelector('.msg');
       msg.innerHTML=message;

}
function validateCollege(){
        let data =College.value.trim();
        let length=data.length;
        let message;
        let formControl= College.parentElement;
        let error;

        if(data=='' || length==null){
                message='field is required';
                error=true;

        }else if(length <4){
                message='the field contain minimum 4  alphabats '
                error = true;
        }else{
            var regex = /^[a-zA-Z ]{4,50}$/;
            if(!regex.test(data)){
                message="the field only contain  alphabats "
                error = true;

            }else{
                    message="  ";
                    error=false;
            }
        }

        if(error){
                formControl.className='formControl error';
        }else{
                formControl.className='formControl success';
        }
       let msg=formControl.querySelector('.msg');
       msg.innerHTML=message;

}
function validateYog(){
        let data = yog.value.trim();
        let length=data.length;
        let message;
        let error;

        if(data=='' || length==null){
                message='field is required';
                error=true;

        }else if(data < 1950){
                message='invalid format '
                error = true;
        }else if(data >2021){
                message='invalid format '
                error = true;
        }else{
           
           message="  ";
           error=false;
            
        }
        let formControl= yog.parentElement;
        if(error){
                formControl.className='formControl error';
        }else{
                formControl.className=' success formControl';
        }
       let msg=formControl.querySelector('.msg');
       msg.innerHTML=message;

}
function validateAboutYou(){
        let data =aboutYou.value.trim();
        let length=data.length;
        let message;
        let formControl= aboutYou.parentElement;
        let error;

        if(data=='' || length==null){
                message='field is required';
                error=true;

        }else{
          
                message="  ";
                error=false;
            
        }

        if(error){
                formControl.className='formControl error';
        }else{
                formControl.className='formControl success';
        }
       let msg=formControl.querySelector('.msg');
       msg.innerHTML=message;

}
function validatewhyjoinSPS(){
        let data =whyjoinSPS.value.trim();
        let length=data.length;
        let message;
        let formControl= whyjoinSPS.parentElement;
        let error;

        if(data=='' || length==null){
                message='field is required';
                error=true;

        }else{
          
                message="  ";
                error=false;
            
        }

        if(error){
                formControl.className='formControl error';
        }else{
                formControl.className='formControl success';
        }
       let msg=formControl.querySelector('.msg');
       msg.innerHTML=message;

}
function validateMotivates(){
        let data =motivates.value.trim();
        let length=data.length;
        let message;
        let formControl= motivates.parentElement;
        let error;

        if(data=='' || length==null){
                message='field is required';
                error=true;

        }else{
          
                message="  ";
                error=false;
            
        }

        if(error){
                formControl.className='formControl error';
        }else{
                formControl.className='formControl success';
        }
       let msg=formControl.querySelector('.msg');
       msg.innerHTML=message;

}
function validateHeared(){
        let data = heared.value;
        let message;
        let error;

        if(data==''){
                message='field is required';
                error=true;

        }else{
            
                message="  ";
                error=false;
        }
        
        let formControl= heared.parentElement;
        if(error){
                formControl.className='formControl error';
        }else{
                formControl.className=' success formControl';
        }
       let msg=formControl.querySelector('.msg');
       msg.innerHTML=message;

}
function validateAgree(){
        let data = agree.checked
        let message;
        let error;

        if(data==false){
                message='field is required';
                error=true;

        }else{
                message="  ";
                error=false;
            
        }
        let formControl= agree.parentElement;
        if(error){
                formControl.className='formControl error';
        }else{
                formControl.className=' success formControl';
        }
       let msg=formControl.querySelector('.msg');
       msg.innerHTML=message;

}

