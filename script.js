function countDown() {
	let today = new Date();
	let vDate = new Date("2023-7-1");
	const t = vDate.getTime() - today.getTime();

	const day = Math.floor(t / (1000 * 60 * 60 * 24));
	const hour = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minute = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
	const sec = Math.floor((t % (1000 * 60)) / 1000);

	// document.getElementById('year').innerText = today.getFullYear();
	document.getElementById('day').innerText = day;
	document.getElementById('hour').innerText = hour;
	document.getElementById('min').innerText = minute;
	document.getElementById('sec').innerText = sec;

	if (t <= 0) {
		clearTimeout(counter);
		document.querySelector('timers').innerText = 'Expired';
	}
}

setInterval(countDown, 1000);
