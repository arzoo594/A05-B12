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

const callButtons = document.querySelectorAll('.call-btn');
const coinCountEl = document.getElementById('coin-count');
const callHistoryList = document.getElementById('call-history-list');
const clearHistoryBtn = document.getElementById('clear-history');


function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}

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
      const newCoin = coinNumber - 20;
      coinCountEl.innerHTML = `${newCoin} <img class="w-[30px] h-[30px]" src="./B12-A5-Emergency-Hotline/assets/coin.png" alt="">`;
      const li = document.createElement('li');
      li.textContent = `${serviceName} (${number}) - ${getCurrentTime()}`;
      callHistoryList.appendChild(li);
    }

});

  
}

clearHistoryBtn.addEventListener('click', function () {
  callHistoryList.innerHTML = '';
});

// copy button function

const navCopyBtn = document.querySelector("nav .copy-btn");
let copyCount = 0;
const copyButtons = document.querySelectorAll(".card .copy-btn");

for (const btn of copyButtons) {
  btn.addEventListener("click", function () {
    const number = btn.closest(".card").querySelector("h1.text-3xl").innerText;
    navigator.clipboard.writeText(number);
    alert(`Number copied: ${number}`);
    copyCount++;
    navCopyBtn.innerText = `${copyCount} Copy`;
  });
}
