// trace, debug, info, warn, error
// const SWITCH_LOGGING_LEVEL = "warn";
const SWITCH_LOGGING_LEVEL = "info";
// const SWITCH_LOGGING_LEVEL = "debug";

const CANVAS_WIDTH = 1080;
const CANVAS_HEIGHT = CANVAS_WIDTH;

let SCALING_FACTOR = 1;
let rescaling_width;
let rescaling_height;



logging.info("FXHASH: " + fxhash);


let counter = 0;


function preload() {
  font = loadFont('SourceSansPro-Regular.otf');
}

function setup() {
  logging.setLevel(SWITCH_LOGGING_LEVEL);

  let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, WEBGL).parent('canvasHolder');

}


function draw() {
  ambientLight(0, 0, 255);


  background(200);

  if (frameCount % 3 == 0) {
    counter += 1;
  }

  camera(mouseX, mouseY, 1080, 0, 0, 0, 0, 1, 0);

  push();
  translate(-200, -200, 0);

  // side up
  beginShape();
  vertex(0, 0, 0);
  vertex(200, 0, 0);
  vertex(200, 0, 300);
  vertex(0, 0, 300);
  endShape();

  // side left
  beginShape();
  vertex(0, 100, 300);
  vertex(0, 100, 0);
  vertex(0, 0, 0);
  vertex(0, 0, 300);
  endShape();

  // side down
  beginShape();
  vertex(200, 100, 0);
  vertex(200, 100, 300);
  vertex(0, 100, 300);
  vertex(0, 100, 0);
  endShape()

  // side right
  beginShape();
  vertex(200, 100, 0);
  vertex(200, 100, 300);
  vertex(200, 0, 300);
  vertex(200, 0, 0);
  endShape()

  // side top
  // beginShape();
  // vertex(0, 0, 300);
  // vertex(200, 0, 300);
  // vertex(200, 100, 300);
  // vertex(0, 100, 300);
  // endShape()

  // side top
  beginShape();
  vertex(0, 0, 0);
  vertex(200, 0, 0);
  vertex(200, 100, 0);
  vertex(0, 100, 0);
  endShape()

  pop();

  // push();
  // translate(-50, -300, 0);
  // pop();
}

