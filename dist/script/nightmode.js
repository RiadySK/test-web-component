function getNightMode() {
  return JSON.parse(localStorage.getItem("nightmode")) || false;
}

function setNightMode(mode) {
  localStorage.setItem("nightmode", mode);
}

function detectNight() {
  let nightmode = getNightMode();
  let body = document.querySelector('body');

  if (nightmode) {
    body.classList.add('nightmode');
  }
}

function switchNight() {
  let nightmode = getNightMode();
  console.log(nightmode)
  if (nightmode == false) {
    setNightMode(true);
  } else {
    setNightMode(false);
  }

  window.location.reload();
  window.external.reinit();
}