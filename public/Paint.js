// verfranst statt harter cut
// constrain mit random kombiniert
// border relative to size

class Paint {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.border = 7;  // frame for the image

        this.area = this.width * this.height;
        // for area of 20000 use first layer 20 loops and second one 80.

        this.buffer = createGraphics(this.width + 2 * this.border, this.height + 2 * this.border);

        // this.strokeWeight = 2;
        this.color_master = color(TOP_COLOR);

        this.brush_size = 20

        this.counter_max = 70;
        this.counter = 0;


        // create background
        // this.buffer.background(this.color_master);

        this.opacity = "BF";  // #24ccc9
        // this.opacity = "ff";
        this.buffer.push();
        this.buffer.fill(color(TOP_COLOR + this.opacity));
        this.buffer.noStroke();
        this.buffer.rect(this.border, this.border, width, height);
        this.buffer.pop();
    }

    show(on_top_layer) {
        this.paint_layer(this.area / 1000, 3, 5);
        this.paint_layer(this.area / 250, 1, 10);

        if (typeof (on_top_layer) != "undefined") {
            this.buffer.image(on_top_layer, 0, 0, this.buffer.width, this.buffer.height);
        }
    }

    paint_layer(brush_loops, stroke_size, color_noise) {
        this.brush_loops = brush_loops;
        this.stroke_size = stroke_size;
        this.color_noise = color_noise;

        if (this.counter < this.counter_max) {
            this.color = distortColor(this.color_master, this.color_noise);

            this.counter += 1;

            this.buffer.strokeWeight(this.stroke_size);
            this.buffer.stroke(this.color);
            this.buffer.noFill();

            let begin_x = getRandomFromInterval(this.border, this.width + this.border)
            let begin_y = getRandomFromInterval(this.border, this.height + this.border)


            this.buffer.beginShape();
            this.buffer.curveVertex(begin_x, begin_y);
            this.buffer.curveVertex(begin_x, begin_y);
            this.current_x = begin_x;
            this.current_y = begin_y;
            for (var i = 0; i < this.brush_loops; i++) {
                // some distortion at the edges
                if (fxrand() < 0.8) {
                    this.current_x = constrain(this.current_x + getRandomFromInterval(-this.brush_size, this.brush_size), this.border, this.width + this.border);
                    this.current_y = constrain(this.current_y + getRandomFromInterval(-this.brush_size, this.brush_size), this.border, this.height + this.border);
                } else {
                    this.current_x = constrain(this.current_x + getRandomFromInterval(-this.brush_size, this.brush_size), 0, this.width + this.border * 2);
                    this.current_y = constrain(this.current_y + getRandomFromInterval(-this.brush_size, this.brush_size), 0, this.height + this.border * 2);
                }
                // this.current_y += getRandomFromInterval(-this.brush_size, this.brush_size);
                this.buffer.curveVertex(this.current_x, this.current_y)
            }
            this.buffer.curveVertex(this.current_x, this.current_y)
            this.buffer.endShape();
        }
    }
}