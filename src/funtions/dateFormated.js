export const getFormattedDate = () => {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let hrs = date.getHours();
    let min = date.getMinutes();
    let seg = date.getSeconds();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    hrs = hrs < 10 ? '0' + hrs : hrs;
    min = min < 10 ? '0' + min : min;
    seg = seg < 10 ? '0' + seg : seg;

    return `${year}${month}${day}-${hrs}${min}${seg}`;
}
