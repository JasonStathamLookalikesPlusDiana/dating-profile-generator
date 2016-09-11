'use strict';
(function() {
	var content    = document.querySelectorAll('.content');
	var malePics   = document.querySelector('#male-photos');
	var femalePics = document.querySelector('#female-photos');
	var button     = document.querySelector('#view-profile');
	var count 	   = 0;

	malePics.style.display   = 'none';
	femalePics.style.display = 'none';
	content[0].style.display = 'none';
	content[1].style.display = 'none';
	content[2].style.display = 'none';

	function chooseProfile() {
		switch(count) {
			case 0:
				malePics.style.display   = 'none';
				content[2].style.display = 'none';
				femalePics.style.display = 'block';
				content[0].style.display = 'block';
				break;
			case 1:
				femalePics.style.display = 'none';
				content[0].style.display = 'none';
				malePics.style.display   = 'block';
				content[1].style.display = 'block';
				break;
			case 2:
				content[1].style.display = 'none';
				content[2].style.display = 'block';
		}
		count = (count + 1) % 3;
	}
	chooseProfile();
	button.addEventListener('click',chooseProfile);
})()