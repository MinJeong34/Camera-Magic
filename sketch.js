let imgs = [];
let img1, img, img3, img4, img5, img6, img7, img8, img9, img10;
let capture;

let clickRotation = 0;

function preload() {
 
 let c1 = loadImage("c/c1.png");
  imgs.push(c1);
  let c2 = loadImage("c/c2.png");
  imgs.push(c2);
  let c3 = loadImage("c/c3.png");
  imgs.push(c3);
  let r1 = loadImage("r/r1.png");
  imgs.push(r1);
  let r2 = loadImage("r/r2.png");
  imgs.push(r2);
  let r3 = loadImage("r/r3.png");
  imgs.push(r3);
  let b1 = loadImage("b/b1.png");
  imgs.push(b1);
  let b2 = loadImage("b/b2.png");
  imgs.push(b2);
  let b3 = loadImage("b/b3.png");
  imgs.push(b3);
   img1 = loadImage("t1.png");
   img2 = loadImage("t2.png");
   img3 = loadImage("t3.png");
   img4 = loadImage("t4.png");
   img5 = loadImage("t5.png");
   img6 = loadImage("t6.png");
   img7 = loadImage("t7.png");
   img8 = loadImage("t8.png");
   img9 = loadImage("t9.png");
   img10 = loadImage("t10.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  capture = createCapture(VIDEO);
  capture.size(160, 120);
  
}
function mouseReleased () {
  clickRotation = clickRotation + 1;
  if (clickRotation>=3) {
    clickRotation  = 0;
  }
}

function draw() {
  background(200);
  noStroke();
  capture.loadPixels();
  image(img1, 10, 20, 250, 250);
  image(img2, 600, 100, 200, 200);
  image(img3, 400, 180, 140, 140);
  image(img4, 100, 230, 250, 250);
  image(img5, 200, 380, 160, 160);
  image(img6, 300, 300, 140, 140);
  image(img7, 450, 390, 250, 250);
  image(img8, 540, 400, 200, 200);
  image(img9, 700, 380, 140, 140);
  image(img10, 10, 470, 140, 140);
  
  for (let y=0; y<capture.height; y=y+2.5) {
    for (let x=0; x<capture.width; x=x+1) {
      let idx = x + y * capture.width;
      let r = capture.pixels[idx*4];
      let g = capture.pixels[idx*4 + 1];
      let b = capture.pixels[idx*4 + 2];
      let gr = (r + g + b)/3.0; //0~255
      let gri = parseInt(gr/85.5) + clickRotation*3;
      fill(r, g, b, 30);
      rect(x*5, y*5, 10, 10);
      image(imgs[gri], x*5, y*5, 20, 20);
    }
  }
}