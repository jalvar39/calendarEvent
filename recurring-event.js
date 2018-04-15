/**
 * Recurrong Event Object
 * arg eventsList is a list of Event objects
 */

var RecurringCalendarEvent = function(name, loc, eventsList) {
	Object.defineProperty(this, 'name', {value: name, writable: false});
	Object.defineProperty(this, 'loc', {value: loc, writable: false});
	Object.defineProperty(this, 'eventsList', {value: eventsList, writable: false});

	this.toString = function() {
		var eventString = name + " at " + loc + ": \n";
		for (i = 0; i < eventsList.length; i++) {
			eventString += eventsList[i] + "\n";
		}
		return eventString;
	}
};