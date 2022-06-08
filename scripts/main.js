const element = {
	container: document.querySelector(".container"),
	time: document.querySelector("h2"),
	button: document.querySelector(".theButton"),
};

element.button.addEventListener("click", function () {
	element.container.classList.add("container-active");
	element.time.classList.add("time-active");
	this.classList.toggle("clock-effect");

	const inter = setInterval(() => {
		const date = new Date();
		let [hours, minutes, seconds] = [
			date.getHours(),
			date.getMinutes(),
			date.getSeconds(),
		];

		if (seconds === 60) {
			minutes++;
			seconds = 0;
		}
		if (minutes === 60) {
			hours++;
			[minutes, seconds] = [0, 0];
		}
		if (hours === 24) {
			[hours, minutes, seconds] = [0, 0, 0];
		}
		element.time.innerHTML = `${getZero(hours)} : ${getZero(
			minutes
		)} : ${getZero(seconds)}`;
		seconds++;
	}, 500);
});

function getZero(num) {
	const number = num.toString();
	if (number.length === 1) return `0${number}`;
	return number;
}
