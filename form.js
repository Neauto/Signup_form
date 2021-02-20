const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInput();
});

function checkInput() {
    const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const repasswordValue = repassword.value.trim();
	var b1Value = b1.value.trim();
	var b2Value = b2.value.trim();
	

    if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	}else if (!ispassword(passwordValue)) {
		setErrorFor(password, 'The string must contain at least 1 lowercase, 1 uppercase, 1 numeric character, one special character, eight characters or longer');
	} else {
		setSuccessFor(password);
	}
	
	if(repasswordValue === '') {
		setErrorFor(repassword, 'RePassword cannot be blank');
	} else if(passwordValue !== repasswordValue) {
		setErrorFor(repassword, 'Passwords does not match');
	} else{
		setSuccessFor(repassword);
	}
	
	if(b1.checked!==true&&b2.checked!==true){
		setErrorFor2(b1&&b2, 'select a gender');
	}else{
		setSuccessFor2(b1&&b2);
	}
	
    if((usernameValue === '') || (emailValue === '') ||
     (passwordValue === '') || (repasswordValue === '')
      || (!isEmail(emailValue)) || (!ispassword(passwordValue))
	  || (passwordValue !== repasswordValue) || (b1.checked!==true&&b2.checked!==true)) {
        swal("Error", "Incorrect Input", "error");
    } else{
        swal("Success", "Account Created", "success");
    }
}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
function setErrorFor2(input, message) {
	const gen = input.parentElement;
	const small = gen.querySelector('small');
	gen.className = 'gen error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
function setSuccessFor2(input) {
	const gen = input.parentElement;
	gen.className = 'gen success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function ispassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password);
}