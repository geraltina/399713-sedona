var link=document.querySelector(".form-button"),popup=document.querySelector(".form-visible"),arrive=popup.querySelector(".arrive"),departure=popup.querySelector(".departure"),adults=popup.querySelector("[name=adults]"),kids=popup.querySelector("[name=kids]"),storage=localStorage.getItem("adults, kids");popup.classList.add("form-hidden"),link.addEventListener("click",function(a){a.preventDefault(),popup.classList.toggle("form-hidden"),arrive.focus()}),popup.addEventListener("submit",function(a){arrive.value&&departure.value&&adults.value&&kids.value?(localStorage.setItem("adults",adults.value),localStorage.setItem("kids",kids.value)):a.preventDefault()});