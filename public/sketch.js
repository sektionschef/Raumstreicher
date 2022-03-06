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
  // grid = new Grid(COUNT_OF_POINTS_X, COUNT_OF_POINTS_Y, MINIMIMUM_DISTANCE, PAIRING_COUNT, MAX_HEIGHT);

  // backback = new Background(BACKGROUND_COLOR, BACKGROUND_NOISE);

  dotty = createGraphics(width, height);

  dotty.push();
  dotty.noStroke();
  for (var i = 0; i < 1000; i++) {
    dotty.fill(brightenColor(distortColor(color(TOP_COLOR), 2), 100));
    dotty.circle(getRandomFromInterval(0, dotty.width), getRandomFromInterval(0, dotty.height), 10);
  }

  dotty.pop();

  grainy = createGraphics(width, height);
  let loop_count = 500;
  let size_point = 7;

  grainy.push()
  grainy.noStroke();
  grainy.stroke(color(BACKGROUND_COLOR));
  grainy.strokeWeight(size_point);
  let x = getRandomFromInterval(grainy.width / 8 * 2, grainy.height / 8 * 3);
  let y = getRandomFromInterval(grainy.width / 8 * 7, grainy.height / 8 * 6);
  for (var i = 0; i < loop_count; i++) {
    if (fxrand() > 0.4) {
      grainy.point(x + getRandomFromInterval(-(grainy.width / 12), (grainy.width / 12)), y + getRandomFromInterval(-(grainy.width / 10), (grainy.width / 10)));
    } else if (fxrand() > 0.7) {
      grainy.point(x + getRandomFromInterval(-(grainy.width / 6), (grainy.width / 6)), y + getRandomFromInterval(-(grainy.width / 9), (grainy.width / 9)));
    } else {
      grainy.point(x + getRandomFromInterval(-(grainy.width / 5), (grainy.width / 5)), y + getRandomFromInterval(-(grainy.width / 7), (grainy.width / 7)));
    }
  }

  grainy.pop()


  painty = new Paint(width, height, TOP_COLOR);

  resize_canvas();
}


function draw() {
  camera(0, 0, (height) / tan(PI / 6), 0, 0, 0, 0, 1, 0);
  // camera(0, 0, (height / 2) / tan(PI / 6), 0, 0, 0, 0, 1, 0);
  translate(-width / 2, -height / 2, 0);
  // camera(mouseX, mouseY, width * 1.5, width / 2, height / 2, 0, 0, 1, 0);

  ambientLight(255, 255, 255);
  // directionalLight(255, 255, 255, 0.25, 0.25, -1);
  // directionalLight(255, 255, 255, 0, 0, -1);

  // pointLight(255, 255, 255, width / 2, height / 2, 700);
  // pointLight(255, 255, 255, width, height, 700);
  // pointLight(255, 255, 255, 0, height, 700);

  ambientMaterial(255);
  // specularMaterial(255);

  background(BACKGROUND_COLOR);

  // // grid.show_grid_debug();

  // grid.show_boxes();

  // image(backback.buffer, 0, 0, backback.buffer * SCALING_FACTOR, backback.buffer * SCALING_FACTOR);

  painty.show();

  image(painty.buffer, 0, 0)
  image(dotty, 0, 0, dotty.width, dotty.height)
  image(grainy, 0, 0, grainy.width, grainy.height)

}

