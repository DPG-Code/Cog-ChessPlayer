const nav = document.getElementById("list");

const open = document.getElementById("open");
const close = document.getElementById("close");

open.addEventListener("click", function() {
	nav.style.display = "flex";
	nav.style.animation = "aparecer 0.5s forwards";
    open.style.display = "none";
});

close.addEventListener("click", function() {
	nav.style.display = "none";
    open.style.display = "flex";
});