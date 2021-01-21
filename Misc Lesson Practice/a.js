const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const form1= document.querySelector('.d');
// extraneous but still usable const username = document.querySelector('#username');
const usernamePattern = /^[a-zA-Z].{6,12}$/;

form.addEventListener('submit', e => {
e.preventDefault();

const username = form.username.value;


if(usernamePattern.test(username)){
    feedback.textContent=('this username is valid');
} else { feedback.textContent=('this username is invalid');

}

});

//live feedback

form.username.addEventListener('keyup', a => {
    //console.log(e.target.value); //form.username.value can be substituted for e.target.value
    if(usernamePattern.test(a.target.value)){
        form.username.setAttribute('class','success');
    }
    else{ 
        form.username.setAttribute('class','failure');
    }

});



