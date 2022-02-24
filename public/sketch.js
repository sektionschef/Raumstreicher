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

  box = new Box(200, 100, 300, 0, 0, 0, top = true);
}


function draw() {
  ambientLight(255, 255, 255);

  background(200);

  if (frameCount % 3 == 0) {
    counter += 1;
  }

  camera(mouseX, mouseY, 1080, 0, 0, 0, 0, 1, 0);

  box.show();

}

