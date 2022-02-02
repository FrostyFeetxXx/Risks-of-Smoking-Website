let button = document.getElementById('button');


let times = 1;
button.addEventListener('click', function(){

	if (times == 1) {
		document.querySelector('.text p').innerHTML = "Chewing or snorting tobacco products usually releases more nicotine into the body than smoking."
		times++;
	}

	else if (times == 2) {
		document.querySelector('.text p').innerHTML = "Nicotine is at least as difficult to give up as heroin."
		times++;
	}

	else if (times == 3) {
		document.querySelector('.text p').innerHTML = "The side effects of nicotine can affect the heart, hormones, and gastrointestinal system."
		times++;
	}

	else if (times == 4) {
		document.querySelector('.text p').innerHTML = "Some studies suggest that nicotine may improve memory and concentration."
		times++;
	}

	else if (times == 5) {
		document.querySelector('.text p').innerHTML = "There are more than one billion tobacco smokers worldwide."
		times++;
	}

	else if (times == 6) {
		document.querySelector('.text p').innerHTML = "The FDA took until 1994 to officially recognize nicotine as a drug that produced dependency."
		times++;
	}

	else if (times == 7) {
		document.querySelector('.text p').innerHTML = "Smoking leads to over 480,000 deaths in the country per year"
		times++;
	}

	else if (times == 8) {
		document.querySelector('.text p').innerHTML = "Vapes atomize liquid nicotine by applying heat but without the harmful, oxidative effects of burning"
		times++;
	}

	else if (times == 9) {
		document.querySelector('.text p').innerHTML = "The treatment of nicotine dependency is known as smoking cessation therapy."
		times++;
	}

	else if (times == 10) {
		document.querySelector('.text p').innerHTML = "Mice who were exercising on a wheel after 14 days of being treated with nicotine showed significantly fewer withdrawal symptoms than those who were not."
		times++;
	}

	else {
		document.querySelector('.text p').innerHTML = "Fact Will Appear Here!"
		times = 1;
	}

})



