class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    setInterval(() => {
      const currentDate = new Date();
      const time = this.targetDate - currentDate;
      this.refsUpd(this.calculate(time));
    }, 1000);
  }

  calculate(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return {
      days: days,
      hours: hours,
      mins: mins,
      secs: secs,
    };
  }

  refsUpd({ days, hours, mins, secs }) {
    const timerDaysRef = document.querySelector('[data-value="days"]');
    const timerHoursRef = document.querySelector('[data-value="hours"]');
    const timerMinsRef = document.querySelector('[data-value="mins"]');
    const timerSecsRef = document.querySelector('[data-value="secs"]');

    timerDaysRef.textContent = days;
    timerHoursRef.textContent = hours;
    timerMinsRef.textContent = mins;
    timerSecsRef.textContent = secs;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 31, 2022"),
});

timer.start();
