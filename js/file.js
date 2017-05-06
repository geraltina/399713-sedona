var link = document.querySelector(".form-button");
var popup = document.querySelector(".form-hidden");
var arrive = document.querySelector(".arrive");

link.addEventListener("click" function (evt) {
	evt.preventDefault();
	popup.classList.toggle("form-visible");
	arrive.focus();
});