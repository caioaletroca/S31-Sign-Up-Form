var Script = Ractive.extend({
	el: 'body',

	data: function() {
		return {
			//Navegation Bar Control
			nav_left_position: -500,
			nav_height: 0,
			nav_display: 'none',

			//Animation
			animation_trigger: false,
		}
	},

	server: qwest,
	api: 'http://192.168.25.219:8080',

	CheckSpecialCharacters: function(text) {
		return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(text);
	},

	start: function() {
		this.server.base = this.api;

		this.set('nav_height', document.documentElement.scrollHeight);

		/*
		$.ajaxSetup({
		    headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			}
		});
		*/
	},

	//Mobile Control
	OpenNavegation: function() {
		this.set('nav_display', 'flex');
		this.animate('nav_left_position', 0, {
			easing: 'easeOut',
			duration: 300,
		});
	},

	CloseNavegation: function() {
		this.animate('nav_left_position', -500, {
			easing: 'easeInOut',
			duration: 300,
		}).then( function() {
			this.set('nav_display', 'none');
		});
	},
});