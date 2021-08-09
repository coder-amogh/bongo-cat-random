const randomNumber = (min, max) => { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const playBongo = () => {
	const instrument = 0; // bongo code
	const key = Math.round(Math.random());

	$.play(instrument, key, true);

	setTimeout(() => {
		$.play(instrument, key, false);
	}, 100);
}

const playPiano = () => {
	const numStringUpperCase = `${randomNumber(0, 9)}`.toUpperCase();

	const instrument = InstrumentPerKeyEnum[numStringUpperCase];
	const key = KeyEnum[numStringUpperCase];

	$.play(instrument, key, true);

	setTimeout(() => {
		$.play(instrument, key, false);
	}, 100);
}

const main = () => {
	const timeoutForBongo = 750;
	const timeOutForPiano = 750;

	const totalTimeRequired = timeoutForBongo + timeoutForBongo;
	
	const bongoIntervalObj = setInterval(playBongo, 200);

	setTimeout(() => {
		clearInterval(bongoIntervalObj);

		const pianoIntervalObj = setInterval(playPiano, 200);

		setTimeout(() => {
			clearInterval(pianoIntervalObj);
		}, timeOutForPiano);
	}, timeoutForBongo);

	setTimeout(main, totalTimeRequired);
}

main();
