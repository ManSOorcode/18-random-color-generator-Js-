const parent = document.querySelector("[parent]");
const button = document.querySelector("[press]");
console.log(parent, button);

parent.addEventListener("click", (e) => {
	if (e.target.classList.contains("button")) {
		parent.style.background = `#${
			Math.trunc(Math.random()) + Math.trunc(Math.random()) + 5
		}${Math.trunc(Math.random() * 70) + 51}`;
		button.style.color = `#${Math.trunc(Math.random() * 1) + 1}${
			Math.trunc(Math.random() * 70) + 51
		}`;
		button.style.background = `#${Math.trunc(Math.random() * 1) + 1}${
			Math.trunc(Math.random() * 70) + 51
		}`;
	}
});

console.log(Math.trunc(Math.random() * 10) + 11);
console.log();
