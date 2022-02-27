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

function preload() {
  font = loadFont('SourceSansPro-Regular.otf');
}

function setup() {
  logging.setLevel(SWITCH_LOGGING_LEVEL);

  let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, WEBGL).parent('canvasHolder');

  // box = new Box(200, 100, 300, 500, 300, 0, top = true);

  grid = new Grid(COUNT_OF_POINTS_X, COUNT_OF_POINTS_Y, MINIMIMUM_DISTANCE, PAIRING_COUNT, MAX_HEIGHT);

  resize_canvas();
}


function draw() {
  translate(-width / 2, -height / 2, 0);

  ambientLight(255, 255, 255);

  background(100);

  camera(mouseX, mouseY, width * 1.5, width / 2, height / 2, 0, 0, 1, 0);


  // grid.show_grid_debug();

  grid.show_boxes();
  // box.show();

}

