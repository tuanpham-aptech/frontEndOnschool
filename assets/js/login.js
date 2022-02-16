var button = document.querySelector('.button');
var user = document.querySelector('#user');
var pass = document.querySelector('#pass');
user.addEventListener('textInput', userInputHandler);
pass.addEventListener('textInput', passInputHandler);
function validate(){
    if(user.value.length==0){
        user.style.border="1px solid red";
        user.focus();
        return false;
    }
    if(pass.value.length==0){
        pass.style.border="1px solid red";
        pass.focus();
        return false;
    }
}

function passInputHandler(){
    if(pass.value.length > 0){
        pass.style.border="1px solid silver";
        console.log(pass.value);
        return true;
    }
}
function userInputHandler(){
    if(user.value.length > 0){
        user.style.border="1px solid silver";
        console.log(user.value);
        return true;
    }

}