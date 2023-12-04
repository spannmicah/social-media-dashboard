const dark = document.getElementById("dark");
const light = document.getElementById("light");
const body = document.querySelector("body");

// handle light/dark mode ------------------------

const setDarkMode = () => {
	if (dark.checked) {
		body.classList.add("dark");
		body.classList.remove("light");
		localStorage.setItem("colorMode", "dark");
	}
};

const setLightMode = () => {
	if (light.checked) {
		body.classList.add("light");
		body.classList.remove("dark");
		localStorage.setItem("colorMode", "light");
	}
};

// local storage ----------------------------------

const checkMode = () => {
	if (window.matchMedia("(prefers-color-scheme: light)").matches) {
		light.click();
	} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		dark.click();
	}
};

const checkModeChange = () => {
	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", (e) => {
			checkMode();
		});
};

const setColorMode = () => {
	if (localStorage.getItem("colorMode") == "dark") {
		setDarkMode();
		dark.click();
	} else if (localStorage.getItem("colorMode") == "light") {
		setLightMode();
		light.click();
	}
};

dark.addEventListener("click", setDarkMode);
light.addEventListener("click", setLightMode);
setColorMode();
checkMode();
checkModeChange();
