Bargain Counter
===============

If you think this joke is stupid, then your sense of humor is broken.

A simple counter for JavaScript. It doesn't actually do anything directly besides keep time.
As such, it is much better than most drummers. Usage is pretty simple. Create a new instance:

	var timer = new BargainCounter({ go: 'down', duration: { days: 1, hours: 5, minutes: 30, seconds: 12, milliseconds: 350 } });
	
If you want the timer to go up the duration option doesn't factor in - it'll just keep time.
As of right now, it doesn't fire any events or anything. If you want to update every second
you have to do your own watching. It's pretty simple in JavaScript:

	setTimeout(function() {
		/* This returns a hash formatted with these keys
		 * milliseconds
		 * seconds
		 * minutes
		 * hours
		 * days
		 */
		var timeHash = timer.time();
		/* Then you do whatever you want with the hash.
		 * If you want just the milliseconds without all the information parsed out into a
		 * hash, use rawTime.
		 */
		var ms = time.rawTime();
	}, 1000);

