let result;
document.querySelector('#fullName').addEventListener('change',(event)=>{
    console.log(event.target.value);
    result=event.target.value;
    console.log(result.length);
    if(result==null || result ==' '){
        alert("lessthan one");
    }else if(result.length<4){
        alert("minimum 4 leter");
    }else if(result.length>30){
        alert("maximum 30 leters");
    }
})