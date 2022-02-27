// trace, debug, info, warn, error
// const SWITCH_LOGGING_LEVEL = "warn";
// const SWITCH_LOGGING_LEVEL = "info";
const SWITCH_LOGGING_LEVEL = "debug";

const CANVAS_WIDTH = 1080;
const CANVAS_HEIGHT = CANVAS_WIDTH;

let SCALING_FACTOR = 1;
let rescaling_width;
let rescaling_height;

let grid;

COUNT_OF_POINTS_X = Math.floor(getRandomFromInterval(5, 15));  // 1-5
COUNT_OF_POINTS_Y = Math.floor(getRandomFromInterval(5, 15));  // 1-5
GRID = COUNT_OF_POINTS_X + "x" + COUNT_OF_POINTS_Y;
MAX_HEIGHT = 400;

MINIMIMUM_DISTANCE = CANVAS_WIDTH / 20
STROKE_DISTORT = getRandomFromInterval(0.1, 0.4);

PAIRING_COUNT = Math.floor(getRandomFromInterval(4, 10));
DISTANCE_BETWEEN_LINES = 10;

logging.info("FXHASH: " + fxhash);
logging.info("Grid: " + GRID);

// STUPID
STROKE_COLOR = "#ffd700";
STROKE_NOISE = 3;
STROKE_NOISE_2 = 3;
STROKE_SIZE = 1;

let kitten;

function preload() {
  font = loadFont('SourceSansPro-Regular.otf');
  kitten = loadImage("kitten.jpg");
}

function setup() {
  logging.setLevel(SWITCH_LOGGING_LEVEL);

  let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, WEBGL).parent('canvasHolder');
  grid = new Grid(COUNT_OF_POINTS_X, COUNT_OF_POINTS_Y, MINIMIMUM_DISTANCE, PAIRING_COUNT, MAX_HEIGHT);


  dummy = createGraphics(500, 500);
  lines = new Lines(dummy, 0, 0, 500, 500, 0, 0, 5);
  dummy.background(255);

  resize_canvas();
}


function draw() {
  translate(-width / 2, -height / 2, 0);

  ambientLight(255, 255, 255);

  background(100);

  // camera(mouseX, mouseY, width * 1.5, width / 2, height / 2, 0, 0, 1, 0);


  // grid.show_grid_debug();

  // grid.show_boxes();

  lines.draw();
  // image(dummy, 0, 0);
  texture(dummy);
  // box(500);

  beginShape();
  vertex(0, 0, 0, 0, 0);
  vertex(500, 0, 0, 1, 0);
  vertex(500, 500, 0, 1, 1);
  vertex(0, 500, 0, 0, 1);
  endShape();

}

