let capturer;
let btn;

function record() { 
  capturer = new CCapture({
  format: 'gif',
  framerate: 180,
});

capturer.start();
btn.textContent = "stop recording";
btn.onclick = e => {
capturer.stop();
capturer.save();
capturer = null;
btn.textContent = "start recording";
btn.onclick = record;
};
}

const palabras = [
    "liberation", 
    "freedom", 
    "sovereignty", 
    "indigenous technoscience", 
    "rural dreams"
]

function setup() {
createCanvas(windowWidth, windowHeight);
frameRate(180);
btn =  document.createElement("button");
btn.textContent = "start recording";
document.body.appendChild(btn);
btn.onclick = record;
  //btn.click(); //start recording automatically

  // capturer.start(
  // );
background(255);
textSize(24);
noStroke();
textFont("Times");
}

function draw() { 
for(let i = 0; i<10; i++){
    const rand = int(random(0, palabras.length-1));
    fill(0);
    textSize(random(5, 50));
    text(palabras[rand], random(width), random(height));
    
  }
  
  fill(255);
  ellipse(mouseX, mouseY, windowWidth/4);
  
  if (capturer) {
      capturer.capture(document.getElementById("defaultCanvas0"));
    }
}

