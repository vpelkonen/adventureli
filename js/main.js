
	var findIndexByAttr = function(array, attr, value) {
	    for(var i = 0; i < array.length; i += 1) {
	        if(array[i][attr] === value) {
	            return i;
	        }
	    }
	}

	var sounds = [];

	sounds.push({
		name: "Fire",
		credit: 'Credits to <a href="https://www.freesound.org/people/dobroide/sounds/4211/" target="_blank">dobroide in freesound.org</a>. <a href="http://creativecommons.org/licenses/by/3.0/" target="_blank">CC 3.0</a>',
		urls: ['audio/fire.mp3'],
		autoplay: true,
		loop: false,
		volume: 0.0
	});

	sounds.push({
		name: "Rainstorm",
		urls: ['audio/rainstorm.mp3'],
		autoplay: true,
		loop: false,
		volume: 0.0
	});

	sounds.push({
		name: "Birds",
		urls: ['audio/birds.mp3'],
		autoplay: true,
		loop: false,
		volume: 0.0
	});

	sounds.push({
		name: "Brooding",
		credit: 'Credits to <a href="http://www.freesound.org/people/klankbeeld/sounds/137070/" target="_blank">klankbeeld in freesound.org</a>. <a href="http://creativecommons.org/licenses/by/3.0/" target="_blank">CC 3.0</a>',
		urls: ['audio/brooding.mp3'],
		autoplay: true,
		loop: false,
		volume: 0.0
	});

	sounds.push({
		name: "Waves",
		urls: ['audio/waves.mp3'],
		autoplay: true,
		loop: false,
		volume: 0.0
	});


	var playerControls = [];
	var masterSlider = '<h2>Master</h2><input class="master" type="range" min="0" max="100" value="0"></input>'
	$('body').append(masterSlider);

	// Loop through the sounds
	for(var i=0; i < sounds.length; i++){
		var sound = sounds[i];
		// Init Howler for the sound
		playerControls.push(new Howl(sound));
		// Add a name identifier to the player control object
		playerControls[playerControls.length-1].name = sound.name;
		var elem = '<h2>'+sound.name+'</h2><input class="'+sound.name+'" type="range" min="0" max="100" value="0"></input>';
		sound.credit ? elem += sound.credit : '';
		$('body').append(elem);
	}

	$('input[type="range"]').rangeslider().change(function(){
		var identifier = this.className;
		var vol = this.value;
		// Get the player control object by name
		var control = findIndexByAttr(playerControls, 'name', identifier);
		playerControls[control].volume(vol/100);
		/*playerControls[control].play();*/
		// TODO: stop autoplay and play only when started first
	});

