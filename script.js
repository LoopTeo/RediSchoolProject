const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("pages")[0];

toggleButton.addEventListener("click", () => {
	navbarLinks.classList.toggle("active");
});

const email = document.getElementById("email");

email.addEventListener("input", function (event) {
	if (email.validity.typeMismatch) {
		email.setCustomValidity("I am expecting an e-mail address!");
	} else {
		email.setCustomValidity("");
	}
});

document.getElementById("submit").addEventListener("click", function () {
	let confiMessage = document.getElementById("result");
	let completeMessage = document.getElementById("complete");
	let emailAddress = document.getElementById("email").value;
	let subName = document.getElementById("name").value;
	if (
		emailAddress !== "" &&
		subName !== "" &&
		email.validity.typeMismatch == false
	) {
		confiMessage.classList.add("resultActive");
		confiMessage.innerText = subName + " was subscribed sucessfully";
		completeMessage.innerText = "Thank you for completing the form";
		document.getElementById("newsletter-form").reset();
		return false;
	}
});
