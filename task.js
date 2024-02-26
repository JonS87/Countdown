const spanTimer = document.getElementById('timer')

const intervalId = setInterval(() => {
  let [hours, minutes, seconds] = spanTimer.textContent.split(':');
  let spanTimerValue = (+hours) * 3600 + (+minutes) * 60 + (+seconds);
  if (spanTimerValue > 0) {
    spanTimerValue = spanTimerValue - 1;
    hours = String(Math.floor(spanTimerValue / 3600));
    if (hours.length < 2) {
      hours = String('0' + hours);
    }

    minutes = String(Math.floor((spanTimerValue / 60) % 60));
    if (minutes.length < 2) {
      minutes = String('0' + minutes);
    }

    seconds = String(Math.floor(spanTimerValue % 60));
    if (seconds.length < 2) {
      seconds = String('0' + seconds);
    }

    spanTimer.textContent = hours + ':' + minutes + ':' + seconds;
  } else {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!');
  }
  /*
  if (Number(spanTimer.textContent) > 0) {
    spanTimer.textContent = Number(spanTimer.textContent) - 1;
  } else {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!');
  }
*/
}, 1000)

