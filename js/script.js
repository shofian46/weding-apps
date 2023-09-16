simplyCountdown('.simply-countdown', {
  year: 2024, // required
  month: 11, // required
  day: 20, // required
  hours: 8, // Default is 0 [0-23] integer
  words: { //words displayed into the countdown
    days: { singular: 'hari', plural: 'hari' },
    hours: { singular: 'jam', plural: 'jam' },
    minutes: { singular: 'menit', plural: 'menit' },
    seconds: { singular: 'detik', plural: 'detik' }
  },
});

// Offcanvas
const stickyTop = document.querySelector('.sticky-top');

const offcanvas = document.querySelector('.offcanvas');

offcanvas.addEventListener('show.bs.offcanvas', function () {
  stickyTop.style.overflow = 'visible';
});

offcanvas.addEventListener('hidden.bs.offcanvas', function () {
  stickyTop.style.overflow = 'hidden';
});

// Disablescroll
const rootElement = document.querySelector(":root");
function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  }

  rootElement.style.scrollBehavior = 'auto';
}

function enableScroll() {
  window.onscroll = function () { }
  rootElement.style.scrollBehavior = 'smooth';
  localStorage.setItem('opened', 'true');
}

if (!localStorage.getItem('opened')) {
  disableScroll();
}


// Alert success message
window.addEventListener("load", function () {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
      .then(() => {
        Swal.fire(
          'Terimakasih!',
          'Konfirmasi kehadiran berhasil terkirim!',
          'success'
        )
      })
  });
});
