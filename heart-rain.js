function createHeartRain() {
  const heartRain = document.createElement("div");
  heartRain.classList.add("heart-rain");
  heartRain.style.left = Math.random() * 100 + "vw";
  heartRain.style.animationDuration = Math.random() * 2 + 3 + "s";
  heartRain.innerText ='❤';
  document.body.appendChild(heartRain);
  setTimeout(() => {
    heartRain.remove();
  }, 5000);
}

function createHeartRain2() {
  const heartRain2 = document.createElement("div");
  heartRain2.classList.add("heart-rain-2");
  heartRain2.style.left = Math.random() * 100 + "vw";
  heartRain2.style.animationDuration = Math.random() * 2 + 3 + "s";
  heartRain2.innerText ='❤';  
  document.body.appendChild(heartRain2);
  setTimeout(() => {
    heartRain2.remove();
  }, 5000);
}

function startHeartRain() {
  setInterval(createHeartRain, 75);
  setInterval(createHeartRain2, 75);
}