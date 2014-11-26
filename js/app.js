particlesJS('particles-js', {
	particles: {
		color: '#fff',
		shape: 'circle',
		opacity: 1,
		size: 2.5,
		size_random: true,
		nb: 100,
		line_linked: {
			enable_auto: true,
			distance: 250,
			color: '#fff',
			opacity: 0.5,
			width: 1,
			condensed_mode: {
				enable: false,
				rotateX: 600,
				rotateY: 600
			}
		},
		anim: {
			enable: true,
			speed: 2.5
		}
	},
	interactivity: {
		enable: true,
		mouse: {
			distance: 250
		},
		detect_on: 'canvas',
		mode: 'grab',
		line_linked: {
			opacity: 0.5
		},
		events: {
			onclick: {
				push_particles: {
					enable: true,
					nb: 4
				}
			}
		}
	},
	retina_detect: true
});

var terminal = new Terminal('terminal', {
	welcome: '<span id="welcome">&nbsp;</span><br><span id="welcome2">&nbsp;</span>'
}, {
	execute: function(cmd, args) {
		switch (cmd) {
			case 'clear':
			terminal.clear();
			return '';

			case 'help':
			return 'Useful commands: apps, app, blog, contact, clear, etc';


			case 'apps':
			case 'app':
			if (args && args[0]) {
				if (args[0] === 'voice') {
					window.open(
						'https://voicepolls.com/',
						'_blank'  
						);
					return '';
				}
				if(args[0] === 'rateme'){
					window.open(
						'http://rateme.today/',
						'_blank'  
						);
					return '';
				}
			}
			return 'Available apps: voice, rateme<br>To open an app type "app voice"';

			case 'blog':
			window.open(
				'https://etiennead.svbtle.com/',
					'_blank' // <- This is what makes it open in a new window.
					);
			return '';
			case 'ver':
			case 'version':
			return '1.0.0';

			case 'sudo':
			case 'node':
			case 'ping':
			case 'grunt':
			case 'rm *':
			case 'npm':
			case 'cd':
			return 'please send me your cv: <a href="mailto:etienne@voicepolls.com">etienne@voicepolls.com</a>';

			case 'contact':
			return 'my email: <a href="mailto:etienne@voicepolls.com">etienne@voicepolls.com</a>';


			case 'ls':
			case 'dir':
			return 'sourcecode public .git .gitignore';

			default:
				// Unknown command.
				return false;
			};
		}
	});

var showText = function(target, msg, index, interval) {

	var el = document.getElementById(target);
	if (index < msg.length) {
		el.innerHTML = el.innerHTML + msg.charAt(index);
		index = index + 1;
		setTimeout(function() {
			showText(target, msg, index, interval);
		}, interval);
	}
}
showText('welcome', 'Welcome to Etienne\'s web page!', 0, 120);
setTimeout(function() {
	showText('welcome2', 'Type "help" if you are lost.', 0, 120);
}, 5200);