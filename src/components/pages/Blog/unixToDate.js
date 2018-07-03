const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export default function unixToDate(unixtimestamp) {
  let date = new Date(unixtimestamp);
  let year = date.getFullYear();
  let month = months[date.getMonth()];
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = '0' + date.getMinutes();

  return `${month}-${day}-${year} ${hours}:${minutes.substr(-2)}`;
}
