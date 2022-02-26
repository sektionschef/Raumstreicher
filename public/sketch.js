// trace, debug, info, warn, error
// const SWITCH_LOGGING_LEVEL = "warn";
// const SWITCH_LOGGING_LEVEL = "info";
const SWITCH_LOGGING_LEVEL = "debug";

const CANVAS_WIDTH = 1080;
const CANVAS_HEIGHT = CANVAS_WIDTH;

let SCALING_FACTOR = 1;
let rescaling_width;
let rescaling_height;

COUNT_OF_POINTS_X = Math.floor(getRandomFromInterval(1, 5));  // 1-5
COUNT_OF_POINTS_Y = Math.floor(getRandomFromInterval(1, 5));  // 1-5
GRID = COUNT_OF_POINTS_X + "x" + COUNT_OF_POINTS_Y;

MINIMIMUM_DISTANCE = CANVAS_WIDTH / 20

PAIRING_COUNT = Math.floor(getRandomFromInterval(1, 4));

DISTANCE_BETWEEN_LINES = 10;

logging.info("FXHASH: " + fxhash);
logging.info("Grid: " + GRID);


function preload() {
  font = loadFont('SourceSansPro-Regular.otf');
}

function setup() {
  logging.setLevel(SWITCH_LOGGING_LEVEL);

  let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, WEBGL).parent('canvasHolder');

  box = new Box(200, 100, 300, 0, 0, 0, top = true);

  let grid = new Grid(COUNT_OF_POINTS_X, COUNT_OF_POINTS_Y, MINIMIMUM_DISTANCE, PAIRING_COUNT);
}


function draw() {
  ambientLight(255, 255, 255);

  background(200);

  camera(mouseX, mouseY, 1080, 0, 0, 0, 0, 1, 0);

  box.show();

}

