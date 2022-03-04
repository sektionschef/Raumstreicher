// verfranst statt harter cut
// constrain mit random kombiniert
// border relative to size

class Paint {
    constructor(position_x, position_y, width, height) {
        this.position_x = position_x;
        this.position_y = position_y;
        this.width = width;
        this.height = height;
        this.border = 5;  // frame for the image

        this.area_discount = this.width * this.height;

        this.buffer = createGraphics(this.width + 2 * this.border, this.height + 2 * this.border);

        // this.strokeWeight = 2;
        this.opacity = "9C";  // #24ccc9
        this.color_master = color("#64C7D3" + this.opacity);

        this.brush_size = 20

        this.counter = 0;
        this.counter_max = 100;


        // create background
        this.buffer.push();
        // this.buffer.background(this.color_master);
        this.buffer.fill(this.color_master);
        this.buffer.noStroke();
        this.buffer.rect(this.border, this.border, width, height);
        this.buffer.pop();
    }

    show() {

        translate(this.position_x, this.position_y);
        this.paint_layer(40, 2, 10);
        this.paint_layer(180, 1, 30);
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

            let begin_x = getRandomFromInterval(this.border, this.width)
            let begin_y = getRandomFromInterval(this.border, this.height)


            this.buffer.beginShape();
            this.buffer.curveVertex(begin_x, begin_y);
            this.buffer.curveVertex(begin_x, begin_y);
            this.current_x = begin_x;
            this.current_y = begin_y;
            for (var i = 0; i < this.brush_loops; i++) {
                // maybe use constrain here 
                this.current_x = constrain(this.current_x + getRandomFromInterval(-this.brush_size, this.brush_size), getRandomFromInterval(0, this.border), getRandomFromInterval((this.width + this.border), this.width + this.border * 2));
                this.current_y = constrain(this.current_y + getRandomFromInterval(-this.brush_size, this.brush_size), getRandomFromInterval(0, this.border), getRandomFromInterval((this.width + this.border), this.width + this.border * 2));
                // this.current_y += getRandomFromInterval(-this.brush_size, this.brush_size);
                this.buffer.curveVertex(this.current_x, this.current_y)
            }
            this.buffer.curveVertex(this.current_x, this.current_y)
            this.buffer.endShape();
        }
    }

}