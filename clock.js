function formatDuration(seconds) {
    if (seconds === 0) {
        return 'now';
    } else {
        var years = Math.floor(seconds / (365 * 24 * 60 * 60));
        seconds %= (365 * 24 * 60 * 60);
        var days = Math.floor(seconds / (24 * 60 * 60));
        seconds %= (24 * 60 * 60);
        var hours = Math.floor(seconds / (60 * 60));
        seconds %= (60 * 60);
        var minutes = Math.floor(seconds / 60);
        seconds %= 60;

        var values = [];
        if (years > 0) {
            values.push(years + (years == 1 ? ' year' : ' years'));
        }
        if (days > 0) {
            values.push(days + (days == 1 ? ' day' : ' days'));
        }
        if (hours > 0) {
            values.push(hours + (hours == 1 ? ' hour' : ' hours'));
        }
        if (minutes > 0) {
            values.push(minutes + (minutes == 1 ? ' minute' : ' minutes'));
        }
        if (seconds > 0) {
            values.push(seconds + (seconds == 1 ? ' second' : ' seconds'));
        }

        return values.length > 1 ? values.slice(0, -1).join(', ') + ' and ' + values[values.length - 1] : values[0];
    }
}
