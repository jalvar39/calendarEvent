/**
 * Event Object
 * args start and end time are Javascript Date objects
 */

var CalendarEvent = function(name, loc, startTime, endTime) {
    Object.defineProperty(this, 'name', {value: name, writable: false});
    Object.defineProperty(this, 'loc', {value: loc, writable: false});
    Object.defineProperty(this, 'startTime', {value: startTime, writable: false});
    Object.defineProperty(this, 'endTime', {value: endTime, writable: false});

    this.toString = function() {
        var eventString = name + " at " + loc + ": " + startTime.toString() + "-" + endTime.toString();
        return eventString;
    }

    this.dupeEvent = function(years, months, days) {
        var newStartTime = new Date(startTime.valueOf());
        var newEndTime = new Date(endTime.valueOf());
        newStartTime.setFullYear(startTime.getFullYear() + years);
        newStartTime.setMonth(startTime.getMonth() + months);
        newStartTime.setDate(startTime.getDate() + days);
        newEndTime.setFullYear(endTime.getFullYear() + years);
        newEndTime.setMonth(endTime.getMonth() + months);
        newEndTime.setDate(endTime.getDate() + days);
        return new CalendarEvent(name, loc, newStartTime, newEndTime);
    }

    // This function compares two dates.
    // Given a target date, this function returns false if the target date occurs before the start date
    // of this event object.
    this.before = function(targetDate) {
        var targetYear = targetDate.getFullYear();
        var targetMonth = targetDate.getMonth();
        var targetDay = targetDate.getDate();

        var year = startTime.getFullYear();
        var month = startTime.getMonth();
        var date = startTime.getDate();

        if (targetYear < year && targetMonth < month && targetDate < date) {
            return false;
        }
        return true;
    }
};