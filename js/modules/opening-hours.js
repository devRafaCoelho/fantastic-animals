export default class OpeningHours {
  constructor(openingHours) {
    this.openingHours = document.querySelector(openingHours);
  }

  handleOpeningHoursData() {
    this.weekDay = this.openingHours.dataset.week.split(",").map(Number);
    this.weekHour = this.openingHours.dataset.hour.split(",").map(Number);
  }

  handleNowData() {
    this.nowDate = new Date();
    this.nowDay = this.nowDate.getDate();
    this.nowHour = this.nowDate.getUTCHours() - 3;
  }

  handleIsOpen() {
    const isOpenDay = this.weekDay.indexOf(this.nowDay) !== -1;
    const isOpenHour =
      this.nowHour >= this.weekHour[0] && this.nowHour < this.weekHour[1];

    return isOpenDay && isOpenHour;
  }

  openActive() {
    if (this.handleIsOpen()) {
      this.openingHours.classList.add("open");
    }
  }

  init() {
    this.handleOpeningHoursData();
    this.handleNowData();
    this.openActive();
    return this;
  }
}
