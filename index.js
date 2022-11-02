const boxes = document.querySelectorAll(".project-main");
window.addEventListener("scroll", checkBoxes);
checkBoxes();
function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  console.log(boxes);
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

// function darkMode() {
// 		var element = document.body;
// 		var content = document.getElementById("DarkModetext");
// 		element.className = "dark-mode";
// 		// content.innerText = "Dark Mode is ON";
// 	}
// 	function lightMode() {
// 		var element = document.body;
// 		var content = document.getElementById("DarkModetext");
// 		element.className = "light-mode";
// 		// content.innerText = "Dark Mode is OFF";
// 	}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
const btn = document.getElementById("moon");

btn.addEventListener("click", function onClick() {
  btn.style.backgroundColor = "white";
  btn.style.color = "black";
});
