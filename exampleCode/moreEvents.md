```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="index.css" />
    <title>MomentumL</title>
  </head>
  <body>
    <div class="hello">
      <h1>Grab me1</h1>
    </div>
    <script src="app.js"></script>
  </body>
</html>
```

```javascript
const title = document.querySelector(".hello h1");

console.dir(title);

function handleTitleClick() {
  title.style.color = "black";
}

function handleMouseEnter() {
  title.innerText = "Mouse is here";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "aqua";
}

function handleWindowCopy() {
  alert("copy paste");
}

function handleWindowOffline() {
  alert("SoS no WIFI");
}

function handleWindowOnline() {
  alert("Good");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
```

```javascript
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}
h1.addEventListener("click", handleTitleClick);
```

```javascript
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleClick);
```
