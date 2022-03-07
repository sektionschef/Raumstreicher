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
MAX_HEIGHT = 200;
MIN_HEIGHT = 40;

MINIMIMUM_DISTANCE = CANVAS_WIDTH / 20;
STROKE_SIZE = 1;
STROKE_DISTORT = getRandomFromInterval(0, 0.2);

PAIRING_COUNT = Math.floor(getRandomFromInterval(4, 10));
DISTANCE_BETWEEN_LINES = 30;

logging.info("FXHASH: " + fxhash);
logging.info("Grid: " + GRID);

let PALETTES = [
  {
    name: "Mel Brooks",
    top_color: "#EFF6EE",
    inside_color: "#9197AE",
    background_color: "#273043"
  },
  {
    name: "Ukraine",
    top_color: "#ffd700",
    inside_color: "#0057b7",
    background_color: "#000000"
  },
  {
    name: "bobbycorn",
    top_color: "#F5F5F5",
    inside_color: "#087E8B",
    background_color: "#3C3C3C"
  },
  {
    name: "maypole",
    top_color: "#EDF7F6",
    inside_color: "#F19953",
    background_color: "#2660A4"
  },
  {
    name: "manfred bauer",
    top_color: "#FFD899",
    inside_color: "#20A39E",
    background_color: "#EF5B5B"
  },
  {
    name: "butterfred",
    top_color: "#B8F2E6",
    inside_color: "#FAF3DD",
    background_color: "#FFA69E"
  },
  {
    name: "gianni",
    top_color: "#EAF0CE",
    inside_color: "#C0C5C1",
    background_color: "#7D8491"
  },
  {
    name: "Ian",
    top_color: "#071108",
    inside_color: "#364652",
    background_color: "#BFB1C1"
  },
  {
    name: "Ginger",
    top_color: "#41EAD4",
    inside_color: "#011627",
    background_color: "#F71735",
  },
  {
    name: "Simone Minestrone",
    top_color: "#62B6CB",
    inside_color: "#1B4965",
    background_color: "#BEE9E8",
  },
  {
    name: "Hunger",
    top_color: "#FF9FE5",
    inside_color: "#2B50AA",
    background_color: "#272727",
  },
  {
    name: "Shakespeare",
    top_color: "#A93F55",
    inside_color: "#F2545B",
    background_color: "#19323C",
  },
  {
    name: "Ladies night",
    top_color: "#0075F2",
    inside_color: "#FF5C7A",
    background_color: "#D5CAC3",
  },
]


let CHOSEN_PALETTE = getRandomFromList(PALETTES);

TOP_COLOR = CHOSEN_PALETTE.top_color;
INSIDE_COLOR = CHOSEN_PALETTE.inside_color;
BACKGROUND_COLOR = CHOSEN_PALETTE.background_color;  // "#f5f5f5";


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
  grid = new Grid(COUNT_OF_POINTS_X, COUNT_OF_POINTS_Y, MINIMIMUM_DISTANCE, PAIRING_COUNT, MAX_HEIGHT, MIN_HEIGHT);

  // backback = new Background(BACKGROUND_COLOR, BACKGROUND_NOISE);

  // painty = new Paint(width, height, TOP_COLOR);

  resize_canvas();
}


function draw() {
  translate(-width / 2, -height / 2, 0);

  // camera(width / 2, height / 2, (height / 0.65) / SCALING_FACTOR, width / 2, height / 2, 0, 0, 1, 0);

  camera(mouseX, mouseY, (height / 0.65), width / 2, height / 2, 0, 0, 1, 0);
  // orbitControl();

  ambientLight(255, 255, 255);
  // directionalLight(255, 255, 255, 0.25, 0.25, -1);
  // directionalLight(255, 255, 255, 0, 0, -1);

  // pointLight(255, 255, 255, width / 2, height / 2, 600);
  // pointLight(255, 255, 255, width, height, 700);
  // pointLight(255, 255, 255, 0, height, 700);
  // pointLight(255, 255, 255, width / 4 * 3, height / 4 * 3, 600);

  ambientMaterial(255);
  // specularMaterial(255);

  background(BACKGROUND_COLOR);

  // // grid.show_grid_debug();

  grid.show_boxes();

  // image(backback.buffer, 0, 0, backback.buffer * SCALING_FACTOR, backback.buffer * SCALING_FACTOR);

  // painty.show();

  // image(painty.buffer, 0, 0)


  // push();
  // translate(width / 2, height / 2, 300);
  // fill("red");
  // sphere(40);
  // pop();
}

