const images = ["0.jpg", "1.jpg", "2.jpg","3.jpg","4.jpg" ,"5.jpg" ,"6.jpg" ,"7.jpg" ,"8.jpg" ,"9.jpg" ,"italy.jpg","spain.jpg","greenstar.jpg"  ];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const backImage = document.createElement("img");

backImage.src = `img/${chosenImage}`;
backImage.classList.add("backImage");
document.body.appendChild(backImage);
