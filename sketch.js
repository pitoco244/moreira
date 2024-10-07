function setup() {
    createCanvas(800, 800);
   background("blue");
  }
  
  function draw() {
   
    stroke("blue");
    fill("red");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 30, 45);
    }
  }