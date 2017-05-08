var link = document.querySelector(".form-button");
var popup = document.querySelector(".form-visible");
var arrive = document.querySelector(".arrive");

popup.classList.add("form-hidden");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("form-hidden");
	arrive.focus();
});