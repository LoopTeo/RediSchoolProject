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
