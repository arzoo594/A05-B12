// heart  countn js
let count = 0;
const counter = document.getElementById('heart-count');
const heartButtons = document.querySelectorAll('.heart-btn');

for (let heartBtn of heartButtons){
    heartBtn.addEventListener('click',function(){
      count++
      counter.innerText = count;
    })
}

// call button click function
// সব DOM element ধরে রাখি
const callButtons = document.querySelectorAll('.call-btn');
const coinCountEl = document.getElementById('coin-count');
const callHistoryList = document.getElementById('call-history-list');
const clearHistoryBtn = document.getElementById('clear-history');

// সময় বের করার function
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}


// সব call button এর জন্য event listener
for (const button of callButtons) {
  button.addEventListener('click', function () {
    const card = button.closest('div.bg-white');
    const serviceName = card.querySelector('h1.font-bold.mt-2')?.innerText || 'Unknown';
    const number = card.querySelector('h1.font-bold.text-3xl')?.innerText || '---';

    const confirmCall = confirm(`📞 Calling ${serviceName} (${number})`);

    if (confirmCall) {
      const coinText = coinCountEl.innerText.trim();
      const coinNumber = parseInt(coinText);

      if (coinNumber < 20) {
        alert("🚫 Not enough coins to make the call!");
        return;
      }

      // Coin কমাও
      const newCoin = coinNumber - 20;
      coinCountEl.innerHTML = `${newCoin} <img class="w-[30px] h-[30px]" src="./B12-A5-Emergency-Hotline/assets/coin.png" alt="">`;

      // Call history তে add করো
      const li = document.createElement('li');
      li.textContent = `${serviceName} (${number}) - ${getCurrentTime()}`;
      callHistoryList.appendChild(li);
    }

});

  
}

clearHistoryBtn.addEventListener('click', function () {
  callHistoryList.innerHTML = '';
});
