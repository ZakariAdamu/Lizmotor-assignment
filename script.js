const hoverMe = document.getElementById("hover-me");

const research1 = document.getElementById("research1");
const research2 = document.getElementById("research2");

hoverMe.addEventListener("mouseover", (e) => {
	research1.style.display = "grid";
});
hoverMe.addEventListener("mouseover", (e) => {
	research2.style.display = "grid";
});
