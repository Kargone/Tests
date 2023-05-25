function getTime() {
    const today = new Date();
    const month = today.getMonth();
    const day = today.getDate();
    const year = today.getFullYear();
    const date = `${month + 1}-${day}-${year}`;
    let hours = today.getHours();
    const mintues = today.getMinutes();
    const seconds = today.getSeconds();
    let meridiem;
    if (hours < 12) {
        meridiem = 'AM';
    } else if (hours === 12) {
        meridiem = 'PM';
    } else {
        meridiem = 'PM';
        hours -= 12;
    }
    const time = `${hours < 10 ? '0' + hours : hours}:${mintues < 10 ? '0' + mintues : mintues}:${seconds < 10 ? '0' + seconds : seconds} ${meridiem}`;
    const dateTime = time+'  '+date;
    return dateTime;
}

function afkTime(since) {
    let milliseconds = Date.now() - since;
    let days = Math.floor(milliseconds / 1000 / 60 / 60 / 24);
    milliseconds -= days * 1000 * 60 * 60 * 24;
    days = days > 0? `${days} ${days === 1? 'day' : 'days'} ` : '';
    let hours = Math.floor(milliseconds / 1000 / 60 / 60);
    milliseconds -= hours * 1000 * 60 * 60;
    hours = hours > 0? `${hours} ${hours === 1? 'hour' : 'hours'} ` : '';
    let minutes = Math.floor(milliseconds / 1000 / 60);
    milliseconds -= minutes * 1000 * 60;
    minutes = minutes > 0? `${minutes} ${minutes === 1? 'minute' : 'minutes'} ` : '';
    let seconds = Math.floor(milliseconds / 1000);
    milliseconds -= seconds * 1000;
    seconds = seconds > 0? `${seconds} ${seconds === 1? 'second' : 'seconds'} ` : '';
    const timeSince = `${days}${hours}${minutes}${seconds}`;
    return timeSince;
}

// console.log(getTime());
// console.log('Time since 12:55:40 PM', afkTime(1683568540137));

class Date {
    constructor() {
        console.log('what');
    }
}

const today = new Date();
today.getMonth()