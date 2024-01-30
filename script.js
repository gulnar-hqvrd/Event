// Keyboard event listener

// Keydown event

const eventFunction = (key) => {
  // alert("event isledi !!!" + key.key)
};

//KeyDown event
document.addEventListener("keydown", (key) => eventFunction(key));

//keyUp event
document.addEventListener("keyup", function (key) {
  console.log("keyup -> Function running" + " " + key.key);
});

//keypress event
document.addEventListener("keypress", (key) => {
  console.log("keypress -> Event Clicked" +  " " + key.key);
});

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key == "y") {
    document.write("Sehife baglanir ....")
    setInterval(() => {
      window.close();
    }, 1500);
  }
});
