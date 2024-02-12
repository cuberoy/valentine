var no_button = document.getElementById('no-btn');
var yes_button = document.getElementById('yes-btn');
var heart = document.getElementById('heart');
var gif = document.getElementById('gif');
var text = document.getElementById('text');
var yesCurrentFontSize = window.getComputedStyle(text, null).getPropertyValue('font-size');
var windowWidth = window.innerWidth;
var btnContainer = document.querySelector('.btn-container');
var mainContainer = document.querySelector('.main-container');
var rejects = ["No", "Are you sure?", "Really Sure?", "Are you positive?", "Are you absolutely sure?", "Pookie please", "Just think about it", "If you say no, I'll be really sad", "I'll be very very sad", "I'll be very very very sad", "I'll be very very very very sad", "Ok fine, I'll stop asking...", "Just kidding, PLEASE SAY YES", "I'll be very very very very very sad", "You're breaking my heart ;(", "Give me a chance", "I REALLY want you", "Pleaseeee...", "I will cry if you say no TT", "We will have lots of fun", "Pretty please?", "I know you are lying", "Pwease say YES", "I'll be REALLY sad ;(", "Don't be shy", "You are making it difficult for me ;(", "Think about it again", "Think harder..", "Think hardest...", "Pretty pleaseee TT", "Pretty prettie pleasee..", "Pretty prettie pwetti pwease...", "LAST chance!!!", "I'll really stop asking..", "Don't test me >:(", "HMPH Fine!!", "JUST KIDDING TT", "Just say YES"];
var rejectCounts = 1;

no_button.addEventListener('click', function() {
  no_button.textContent = rejects[rejectCounts];
  rejectCounts += 1;
  if (rejectCounts >= rejects.length) {
    rejectCounts = 0;
  }
  var newFontSize = (parseFloat(yesCurrentFontSize) + 40) + 'px';
  yesCurrentFontSize = newFontSize;
  yes_button.style.fontSize = newFontSize;
  updateDir();
});

yes_button.addEventListener('click', function() {
  gif.src= 'https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif'
  text.textContent = 'Ok yay!!! <3';
  no_button.style.display = 'none';
  yes_button.style.display = 'none';
  heart.style.display = "block";
});

function updateDir() {
  if (btnContainer.offsetWidth > windowWidth) {
    btnContainer.style.flexDirection = "column";
  }
}

function updateWrap() {
  if (mainContainer.offsetWidth > windowWidth) {
    text.innerHTML = 'Will you be my<br>Valentine?';
  }
}
updateWrap();