function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function (n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}

function formatVideoTime(time) {
	time = parseInt(time);
	if (typeof time !== 'number' || time < 0) {
		return time
	}
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time
	return (minute < 10 ? '0' : '') +  minute.toString() + '\'' + (second < 10 ? '0' : '') +  second + '\'\'';
}

function formatVideoTime2(time) {
	time = parseInt(time);
	if (typeof time !== 'number' || time < 0) {
		return time
	}
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time
	return (minute < 10 ? '0' : '') +  minute.toString() + ':' + (second < 10 ? '0' : '') + second;
}

module.exports = {
	formatTime: formatTime,
	formatVideoTime: formatVideoTime,
	formatVideoTime2: formatVideoTime2
}
