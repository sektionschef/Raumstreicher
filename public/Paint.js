class Paint {
    constructor(position_x, position_y, width, height) {
        this.position_x = position_x;
        this.position_y = position_y;
        this.width = width;
        this.height = height;
        this.buffer = createGraphics(this.width, this.height);

        this.strokeWeight = 2;
        this.opacity = "9C";  // #24ccc9
        this.color = color("#64C7D3" + this.opacity);

        this.brush_size = 20

        this.counter = 0;
        this.counter_max = 100;


    }

    show() {
        translate(this.position_x, this.position_y);

        if (this.counter < this.counter_max) {

            this.strokeWeight = this.strokeWeight;// + getRandomFromInterval(-0.1, 0.1);

            this.counter += 1;

            this.buffer.strokeWeight(this.strokeWeight);
            this.buffer.stroke(this.color);
            this.buffer.noFill();

            let begin_x = getRandomFromInterval(0, this.width)
            let begin_y = getRandomFromInterval(0, this.height)


            this.buffer.beginShape();
            this.buffer.curveVertex(begin_x, begin_y);
            this.buffer.curveVertex(begin_x, begin_y);
            this.current_x = begin_x;
            this.current_y = begin_y;
            for (var i = 0; i < 20; i++) {
                this.current_x += getRandomFromInterval(-this.brush_size, this.brush_size);
                this.current_y += getRandomFromInterval(-this.brush_size, this.brush_size);
                this.buffer.curveVertex(this.current_x, this.current_y)
            }
            let end_x = this.current_x + getRandomFromInterval(-this.brush_size, this.brush_size);
            let end_y = this.current_y + getRandomFromInterval(-this.brush_size, this.brush_size);
            this.buffer.curveVertex(end_x, end_y);
            this.buffer.curveVertex(end_x, end_y);
            // this.buffer.curveVertex(this.current_x + this.brush_size, this.current_y + this.brush_size);
            // this.buffer.curveVertex(this.current_x + this.brush_size, this.current_y + this.brush_size);
            this.buffer.endShape();
        }
    }

}