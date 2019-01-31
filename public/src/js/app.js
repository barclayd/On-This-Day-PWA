const pwaCard = document.querySelector('#pwa');
const pwaCardContent = pwaCard.querySelector('.card__content');
const pwaCardDetails = pwaCard.querySelector('.card__details');
let detailsShown = false;

// execute on every page
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceWorker.js')
      .then(() => {
        console.log('Service worker registered');
      })
}

pwaCard.addEventListener('click', (() => {
  if (!detailsShown) {
    detailsShown = true;
    pwaCardContent.style.opacity = 0;
    pwaCardDetails.style.display = 'block';
    pwaCardContent.style.display = 'none';
    setTimeout(function () {
      pwaCardDetails.style.opacity = 1;
    }, 300);
  } else {
    detailsShown = false;
    pwaCardDetails.style.opacity = 0;
    pwaCardContent.style.display = 'block';
    pwaCardDetails.style.display = 'none';
    setTimeout(function () {
      pwaCardContent.style.opacity = 1;
    }, 300);
  }
}));

document.getElementById("date").innerHTML = new Date().toDateString().slice(0, -4);
