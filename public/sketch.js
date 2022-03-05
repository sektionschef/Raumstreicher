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

let kitten;

function preload() {
  font = loadFont('SourceSansPro-Regular.otf');
  kitten = loadImage("kitten.jpg");
}

function setup() {
  logging.setLevel(SWITCH_LOGGING_LEVEL);

  let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, WEBGL).parent('canvasHolder');
  grid = new Grid(COUNT_OF_POINTS_X, COUNT_OF_POINTS_Y, MINIMIMUM_DISTANCE, PAIRING_COUNT, MAX_HEIGHT);

  // backback = new Background(BACKGROUND_COLOR, BACKGROUND_NOISE);

  paint = new Paint(400, 50);

  // DUMMY
  // dummy = createGraphics(500, 500);
  // dummy.background(255);
  // dummy.background("red");
  // lines = new Lines(dummy, 15);

  resize_canvas();
}


function draw() {
  translate(-width / 2, -height / 2, 0);
  camera(mouseX, mouseY, width * 1.5, width / 2, height / 2, 0, 0, 1, 0);

  ambientLight(255, 255, 255);
  // directionalLight(255, -width / 2, -height / 2, -1);
  //move your mouse to change light direction
  // let dirX = (mouseX / width - 0.5) * 2;
  // let dirY = (mouseY / height - 0.5) * 2;
  // directionalLight(250, 250, 250, -dirX, -dirY, -1);
  // pointLight(255, 255, 255, mouseX - 200, mouseY - 200, 1500);

  // ambientMaterial(255);

  background(BACKGROUND_COLOR);
  // image(backback.buffer, 0, 0, backback.buffer * SCALING_FACTOR, backback.buffer * SCALING_FACTOR);

  paint.show();


  // push();
  // translate(20, 20);
  // image(paint.buffer, 0, 0, paint.buffer * SCALING_FACTOR, paint.buffer * SCALING_FACTOR);
  // pop();


  // grid.show_grid_debug();

  grid.show_boxes();

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


}

