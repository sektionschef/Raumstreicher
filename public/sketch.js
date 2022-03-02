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
DISTANCE_BETWEEN_LINES = 20;

logging.info("FXHASH: " + fxhash);
logging.info("Grid: " + GRID);

BACKGROUND_COLOR = "#dbdbdb";

// STUPID
STROKE_COLOR = "#5e5e5e";
// STROKE_COLOR = "#ffffff";
STROKE_NOISE = 1;
STROKE_NOISE_2 = 3;
STROKE_SIZE = 1;

BACKGROUND_NOISE = getRandomFromInterval(5, 20);

let kitten;

function preload() {
  font = loadFont('SourceSansPro-Regular.otf');
  kitten = loadImage("kitten.jpg");
}

function setup() {
  logging.setLevel(SWITCH_LOGGING_LEVEL);

  let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, WEBGL).parent('canvasHolder');
  grid = new Grid(COUNT_OF_POINTS_X, COUNT_OF_POINTS_Y, MINIMIMUM_DISTANCE, PAIRING_COUNT, MAX_HEIGHT);

  backback = new Background(BACKGROUND_COLOR, BACKGROUND_NOISE);

  // DUMMY
  // dummy = createGraphics(500, 500);
  // dummy.background(255);
  // dummy.background("red");
  // lines = new Lines(dummy, 15);

  resize_canvas();
}


function draw() {
  translate(-width / 2, -height / 2, 0);
  // camera(mouseX, mouseY, width * 1.5, width / 2, height / 2, 0, 0, 1, 0);

  // background(BACKGROUND_COLOR);
  // image(backback.buffer, 0, 0, backback.buffer * SCALING_FACTOR, backback.buffer * SCALING_FACTOR);

  ambientLight(255, 255, 255);
  // directionalLight(255, 0, 0, 0);
  // pointLight(0, 0, 255, mouseX - 200, mouseY - 200, 200);



  // grid.show_grid_debug();

  // grid.show_boxes();

  // DUMMY
  // lines.draw_lines();
  // image(dummy, 500, 500);
  // texture(dummy);
  // // box(500);

  // beginShape();
  // vertex(0, 0, 0, 0, 0);
  // vertex(500, 0, 0, 1, 0);
  // vertex(500, 500, 0, 1, 1);
  // vertex(0, 500, 0, 0, 1);
  // endShape();


  // dummy vertices

  let max = 100
  strokeWeight(1);
  stroke(color("blue"));
  noFill();
  let begin_x = getRandomFromInterval(0, max)
  let begin_y = getRandomFromInterval(0, max)
  let end_x = getRandomFromInterval(0, max)
  let end_y = getRandomFromInterval(0, max)


  beginShape();
  curveVertex(begin_x, begin_y);
  curveVertex(begin_x, begin_y);
  for (var i = 0; i < 7; i++) {
    curveVertex(getRandomFromInterval(0, max), getRandomFromInterval(0, max))
  }
  curveVertex(end_x, end_y);
  curveVertex(end_x, end_y);
  endShape();
}

