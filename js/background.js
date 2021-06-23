const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const backImage = document.createElement("img");

backImage.src = `img/${chosenImage}`;
backImage.classList.add("backImage");
document.body.appendChild(backImage);
