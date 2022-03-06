// trace, debug, info, warn, error
// const SWITCH_LOGGING_LEVEL = "warn";
const SWITCH_LOGGING_LEVEL = "info";
// const SWITCH_LOGGING_LEVEL = "debug";

// Ukraine = "#0057b7"
// Ukraine_ = "#ffd700"

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

MINIMIMUM_DISTANCE = CANVAS_WIDTH / 20;
STROKE_SIZE = 1;
STROKE_DISTORT = getRandomFromInterval(0, 0.2);

PAIRING_COUNT = Math.floor(getRandomFromInterval(4, 10));
DISTANCE_BETWEEN_LINES = 30;

logging.info("FXHASH: " + fxhash);
logging.info("Grid: " + GRID);

BACKGROUND_COLOR = "#273043";  // "#f5f5f5";
TOP_COLOR = "#EFF6EE";
INSIDE_COLOR = "#9197AE";


// STUPID
STROKE_COLOR = "#273043" // "#5e5e5e"; 
// STROKE_COLOR = "#ffffff";
STROKE_NOISE = 1;
STROKE_NOISE_2 = 3;
STROKE_SIZE = 1;

BACKGROUND_NOISE = getRandomFromInterval(5, 20);

let dotty;

function preload() {
  font = loadFont('SourceSansPro-Regular.otf');
}

function setup() {
  logging.setLevel(SWITCH_LOGGING_LEVEL);

  let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, WEBGL).parent('canvasHolder');
  grid = new Grid(COUNT_OF_POINTS_X, COUNT_OF_POINTS_Y, MINIMIMUM_DISTANCE, PAIRING_COUNT, MAX_HEIGHT);

  // backback = new Background(BACKGROUND_COLOR, BACKGROUND_NOISE);

  // dotty = createGraphics(width, height);

  // dotty.push();
  // dotty.noStroke();

  // dotty.fill(color(TOP_COLOR));
  // dotty.rect(0, 0, 100, 100);

  // for (var i = 0; i < 750; i++) {
  //   dotty.fill(brightenColor(distortColor(color(TOP_COLOR), 20), -20));
  //   dotty.circle(getRandomFromInterval(0, 100), getRandomFromInterval(0, 100), 3);
  // }
  // dotty.pop();

  resize_canvas();
}


function draw() {
  translate(-width / 2, -height / 2, 0);
  camera(mouseX, mouseY, width * 1.5, width / 2, height / 2, 0, 0, 1, 0);

  ambientLight(255, 255, 255);
  // directionalLight(255, 255, 255, 0.25, 0.25, -1);
  // directionalLight(255, 255, 255, 0, 0, -1);

  // pointLight(255, 255, 255, width / 2, height / 2, 700);
  // pointLight(255, 255, 255, width, height, 700);
  // pointLight(255, 255, 255, 0, height, 900);

  ambientMaterial(255);
  // specularMaterial(255);

  background(BACKGROUND_COLOR);

  // // grid.show_grid_debug();

  grid.show_boxes();


  // image(dotty, 0, 0, dotty.width, dotty.height)
  // image(backback.buffer, 0, 0, backback.buffer * SCALING_FACTOR, backback.buffer * SCALING_FACTOR);
}

