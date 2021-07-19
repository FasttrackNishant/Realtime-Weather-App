console.log("This is the weather app tutorial");


const tempstatus = '{%tempstatus%}';
const getcurrDay = () => {

    const weekday = ["Sun", "Mon", "Tue", "Wedn", "Thu", "Friday", "Sat"];
    let date = new Date();
    // console.log(date);
    output = weekday[date.getDay()];
    return output;

};

const getcurrmonth = () => {

    const monthday = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let date = new Date();
    const month = (monthday[date.getMonth()]);
    const day = date.getDate();
    output = ` ${month} | ${day}`;
    return output;
}

const getcurrTime = () => {
    let date = new Date();



    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    output = `| ${hours}:${minutes}:${seconds} ${ampm}`;
    return output;

}
const currTime = document.getElementById('currTime');

currTime.innerHTML = ` ${getcurrDay()} ${getcurrmonth()} ${getcurrTime()}`;