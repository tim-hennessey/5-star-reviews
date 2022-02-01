var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;

	var animationWindow = document.getElementById('animationWindow');

    var animData = {
        wrapper: animationWindow,
        animType: 'svg',
        loop: false,
        prerender: true,
        autoplay: false,
        path: './scripts/data.json'
    };

    var anim = bodymovin.loadAnimation(animData);

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		// t.set(banner, {opacity:1});
		t.to(banner, .25, { autoAlpha: 1});

		t.set("#container", {perspective: 600});
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {
		var total = 12;
        var container = document.getElementById("container"), w = window.innerWidth, h = window.innerHeight;

        for (var i = 0; i < total; i++) {
            var Div = document.createElement('div');
            t.set(Div, {
                attr: {class: 'dot'},
                x: R(75, 200),
                y: 125,
                opacity: R(.75, .9)
            });
            container.appendChild(Div);
            animm(Div);
        }

        function animm(elm) {
            t.to(elm, R(1.5, 2), {y:-10, autoAlpha:0, ease: Linear.easeNone, repeat: -1, delay:-10});
            t.to(elm, R(2, 3), {x: '+=30', repeat: -1, yoyo: true, ease: Sine.easeInOut});

            t.to(Div, .5, { autoAlpha: 0, delay: 4, onComplete: animPlay});
            t.to(post, .5, { autoAlpha: 0, delay: 4.25});
        }

        function R(min, max) {
            return min + Math.random() * (max - min)
        }

        function animPlay() {
            anim.play();
        }
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
