/*
Given a utc code in milliseconds

must convert to local time, 
"Tue, 30 May 2023 04:30:30 GMT"
as an example of local time

default is the currnet time in milliseconds
*/

function getFormatedTime(utc_code = Date.now()) {
    console.log(utc_code);
    const now = new Date(utc_code);
    const month = now.getMonth();
    const day_of_week = now.getDay();
    const day = now.getDate();
    const year = now.getFullYear();
    let hours = now.getHours();
    const mintues = now.getMinutes();
    const seconds = now.getSeconds();
    let meridiem;
    if (hours < 12) {
        meridiem = 'AM';
    } else if (hours === 12) {
        meridiem = 'PM';
    } else {
        meridiem = 'PM';
        hours -= 12;
    }
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
    const date = `${days[day_of_week]}, ${day} ${months[month]} ${year}`;
    const time = `${hours < 10 ? '0' + hours : hours}:${mintues < 10 ? '0' + mintues : mintues}:${seconds < 10 ? '0' + seconds : seconds} ${meridiem}`;
    const dateTime = time+'  '+date;
    return dateTime;
}

console.log(getTime(1685063356964));