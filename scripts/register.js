// funcion de prueba
function hola(){
	alert("HOLA");
}

var form = document.getElementById("registration-form")
var submitButton = form.querySelector("button");


// TODO: task 1 - get password <input> elements
var passwprdInput = document.getElementById("Password");
var confirmPasswordInput = document.getElementById("ConfirmPassword");

var checkPasswords = function () {
	// TODO: Task 2 - compare passwords
	var passwordMatch = passwprdInput.value === confirmPasswordInput.value;
	
	if (passwordMatch) {
		confirmPasswordInput.setCustomValidity("");
	} else {
		confirmPasswordInput.setCustomValidity("Your password must match with your confirmation.");
	}
}

var addPasswordInputEventListener = function () {
	// TODO: Task 4 - listen for the input
	passwprdInput.addEventListener("input", checkPasswords, false);
	confirmPasswordInput.addEventListener("input", checkPasswords, false);
}

var formSubmissionAttempted = function() {
	form.classList.add("submission-attempted");
}


var addSubmitClickEventListener = function () {
	submitButton.addEventListener("click", formSubmissionAttempted, false);
}

addPasswordInputEventListener();
addSubmitClickEventListener();