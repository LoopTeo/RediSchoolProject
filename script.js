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

// Lightbox for portofolio

const lightbox = document.createElement("div");

lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll(".lightbox img");
images.forEach((image) => {
	image.addEventListener("click", (e) => {
		lightbox.classList.add("active");

		const img = document.createElement("img");
		img.src = image.src;
		while (lightbox.firstChild) {
			lightbox.removeChild(lightbox.firstChild);
		}
		lightbox.appendChild(img);
	});
});

lightbox.addEventListener("click", (e) => {
	if (e.target !== e.currentTarget) return;
	lightbox.classList.remove("active");
});
