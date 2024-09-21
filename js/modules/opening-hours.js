export default function initOpeningHours() {
  const openingHous = document.querySelector("[data-week]");
  const weekDay = openingHous.dataset.week.split(",").map(Number);
  const weekHour = openingHous.dataset.hour.split(",").map(Number);

  const nowDate = new Date();
  const nowDay = nowDate.getDate();
  const nowHour = nowDate.getHours();

  const isOpenDay = weekDay.indexOf(nowDay) !== -1;
  const isOperHour = nowHour >= weekHour[0] && nowHour < weekHour[1];

  if (isOpenDay && isOperHour) {
    openingHous.classList.add("open");
  }
}
