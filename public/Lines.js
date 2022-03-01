class Line {
    constructor(canvas, orientation, x, y, limit_x, limit_y) {
        this.canvas = canvas;
        this.orientation = orientation;
        this.x = x;
        this.y = y;
        this.limit_x = limit_x;
        this.limit_y = limit_y;
        this.history = [];
        this.line_color = distortColor(color(STROKE_COLOR), STROKE_NOISE);
        // this.line_color_second = color("black");
        // this.line_color = distortColor(color(STROKE_COLOR), STROKE_NOISE);
        // this.line_color_second = distortColor(color(STROKE_COLOR), STROKE_NOISE_2);

        this.run_complete = false;
        this.stroke_size_dynamic = STROKE_SIZE;
        // this.stroke_size_dynamic = 1;
        // this.stroke_speed = STROKE_SPEED
        // this.stroke_speed = 1;
        this.stroke_speed = getRandomFromInterval(0.8, 1);
    }

    draw() {

        if (this.run_complete == false) {

            if (this.orientation == "x") {
                if (this.x <= this.limit_x) {
                    this.x += this.stroke_speed;
                    this.y = this.y + getRandomFromInterval(-1 * STROKE_DISTORT, STROKE_DISTORT);
                    // if (frameCount % STROKE_RESOLUTION == 0) {
                    //     this.history.push(createVector(this.x, this.y));
                    // }
                } else {
                    this.run_complete = true;
                }
            } else if (this.orientation == "y") {
                if (this.y <= this.limit_y) {
                    this.y += this.stroke_speed;
                    this.x = this.x + getRandomFromInterval(-1 * STROKE_DISTORT, STROKE_DISTORT);
                    // if (frameCount % STROKE_RESOLUTION == 0) {
                    //     this.history.push(createVector(this.x, this.y));
                    // }
                } else {
                    this.run_complete = true;
                }
            } else if (this.orientation == "xy") {
                if (this.x <= this.limit_x && this.y <= this.limit_y) {
                    this.x += this.stroke_speed;
                    this.y += this.stroke_speed;
                    this.x = this.x + getRandomFromInterval(-1 * STROKE_DISTORT, STROKE_DISTORT);
                    this.y = this.y + getRandomFromInterval(-1 * STROKE_DISTORT, STROKE_DISTORT);
                    // if (frameCount % STROKE_RESOLUTION == 0) {
                    //     this.history.push(createVector(this.x, this.y));
                    // }
                } else {
                    this.run_complete = true;
                }
            } else if (this.orientation == "yx") {
                if (this.x <= this.limit_x && this.y >= this.limit_y) {
                    this.x += this.stroke_speed;
                    this.y -= this.stroke_speed;
                    this.x = this.x + getRandomFromInterval(-1 * STROKE_DISTORT, STROKE_DISTORT);
                    this.y = this.y + getRandomFromInterval(-1 * STROKE_DISTORT, STROKE_DISTORT);
                    // if (frameCount % STROKE_RESOLUTION == 0) {
                    //     this.history.push(createVector(this.x, this.y));
                    // }
                } else {
                    this.run_complete = true;
                }
            }

            // traces with history
            // push();
            // strokeWeight(STROKE_SIZE);
            // stroke(this.line_color);
            // noFill();
            // beginShape();
            // for (let i = 0; i < this.history.length; i++) {
            //     vertex(this.history[i].x * SCALING_FACTOR, this.history[i].y * SCALING_FACTOR);
            // }
            // endShape();
            // pop();

            // NEW
            if (frameCount % 5 == 0) {
                // STROKE_SIZE = getRandomFromInterval(1, 3);
                this.stroke_size_dynamic += this.stroke_size_dynamic * getRandomFromInterval(-0.05, 0.05);
            }

            // brush
            this.canvas.push();
            this.canvas.noStroke();
            this.canvas.fill(this.line_color);
            this.canvas.circle(this.x * SCALING_FACTOR, this.y * SCALING_FACTOR, this.stroke_size_dynamic);
            // this.canvas.fill(0);
            // this.canvas.fill(this.line_color_second);
            // this.canvas.circle(this.x * SCALING_FACTOR, this.y * SCALING_FACTOR, 1);
            this.canvas.pop()
        }
    }
}

class Lines {
    constructor(canvas, distance_between_lines) {
        this.canvas = canvas;
        this.x_start = 0;
        this.y_start = 0;
        this.x_stop = this.canvas.width;
        this.y_stop = this.canvas.height;
        this.distance_between_lines = distance_between_lines;

        this.bodies = [];
        this.all_lines_complete = false;

        let chosen_axis = getRandomFromList(["x", "y", "xy", "yx", "blank"])
        logging.debug(chosen_axis + " axis randomly chosen.");

        if (chosen_axis == "x") {
            this.count_lines = (this.y_stop - this.y_start) / this.distance_between_lines;

            for (let i = 0; i < this.count_lines; i++) {
                this.bodies.push(new Line(
                    this.canvas,
                    chosen_axis,
                    (this.x_start),
                    (this.y_start + this.distance_between_lines * i),
                    (this.x_stop),
                    this.y_stop));
            }
        } else if (chosen_axis == "y") {
            this.count_lines = (this.x_stop - this.x_start) / this.distance_between_lines;

            for (let i = 0; i < this.count_lines; i++) {
                this.bodies.push(new Line(
                    this.canvas,
                    chosen_axis,
                    (this.x_start + this.distance_between_lines * i),
                    this.y_start,
                    this.x_stop,
                    this.y_stop));
            }
        } else if (chosen_axis == "xy") {
            this.count_lines = (this.x_stop - this.x_start) / this.distance_between_lines;

            for (let i = 0; i < this.count_lines; i++) {
                this.bodies.push(new Line(
                    this.canvas,
                    chosen_axis,
                    (this.x_start + this.distance_between_lines * i),
                    this.y_start,
                    this.x_stop,
                    this.y_stop));
            }
            this.count_lines = (this.y_stop - this.y_start) / this.distance_between_lines;
            // skip first one
            for (let i = 1; i < this.count_lines; i++) {
                this.bodies.push(new Line(
                    this.canvas,
                    chosen_axis,
                    (this.x_start),
                    (this.y_start + this.distance_between_lines * i),
                    this.x_stop,
                    this.y_stop));
            }
        } else if (chosen_axis == "yx") {
            this.count_lines = (this.x_stop - this.x_start) / this.distance_between_lines;

            for (let i = 0; i < this.count_lines; i++) {
                this.bodies.push(new Line(
                    this.canvas,
                    chosen_axis,
                    this.x_start + this.distance_between_lines * i,
                    (this.y_stop),
                    this.x_stop,
                    (this.y_start)
                )
                );
            }
            this.count_lines = (this.y_stop - this.y_start) / this.distance_between_lines;

            for (let i = 1; i < this.count_lines; i++) {
                this.bodies.push(new Line(
                    this.canvas,
                    chosen_axis,
                    this.x_start,
                    (this.y_stop - this.distance_between_lines * i),
                    this.x_stop,
                    this.y_start
                )
                );
            }
        } else if (chosen_axis == "blank") {
        }
    }

    draw_lines() {
        for (let line of this.bodies) {
            line.draw();
        }
        this.check_all_complete();
    }

    check_all_complete() {
        // skip if already complete
        if (this.all_lines_complete == false) {
            this.all_lines_complete = true;
            for (var line of this.bodies) {
                if (line.run_complete == false) {
                    this.all_lines_complete = false;
                }
            }
            // console.log("finished");
        }
    }
}