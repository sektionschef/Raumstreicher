class Box {
    constructor(width, height, depth, x, y, z, top = true, bottom = false) {
        this.width = width;
        this.height = height;
        this.depth = depth;

        this.x = x;
        this.y = y;
        this.z = z;

        this.bottom = bottom;
        this.top = top;

        this.texture_side_up = createGraphics(this.width, this.depth);
        // this.texture_side_up.background(color("#0057b7"));
        this.side_up_lines = new Lines(this.texture_side_up, this.x, this.y, this.x + this.width, this.y + this.height, 0, 0, 15)
        this.texture_side_up.fill(color("green"));

        this.texture_side_down = createGraphics(this.width, this.depth);
        this.texture_side_down.background(color("#0057b7"));
        this.texture_side_left = createGraphics(this.height, this.depth);
        this.texture_side_left.background(color("#0057b7"));
        this.texture_side_right = createGraphics(this.height, this.depth);
        this.texture_side_right.background(color("#0057b7"));

        this.texture_top = createGraphics(this.width, this.height);
        // this.texture_top.background(color("#ffd700"));
        // this.texture_top_lines = new Lines(this.texture_top, this.x, this.y, this.x + this.width, this.y + this.height, 0, 0, 15)

        this.texture_bottom = createGraphics(this.width, this.height);
        this.texture_bottom.background(color("#ffd700"));

        image(this.texture_top);
        image(this.texture_side_up);
    }

    show() {

        this.side_up_lines.show();
        // this.texture_top_lines.show();

        push();
        translate(this.x, this.y, 0);

        // side up
        beginShape();
        texture(this.texture_side_up);
        vertex(0, 0, 0);
        vertex(this.width, 0, 0);
        vertex(this.width, 0, this.depth);
        vertex(0, 0, this.depth);
        endShape();

        // side left
        beginShape();
        texture(this.texture_side_left);
        vertex(0, this.height, this.depth);
        vertex(0, this.height, 0);
        vertex(0, 0, 0);
        vertex(0, 0, this.depth);
        endShape();

        // side down
        beginShape();
        texture(this.texture_side_down);
        vertex(this.width, this.height, 0);
        vertex(this.width, this.height, this.depth);
        vertex(0, this.height, this.depth);
        vertex(0, this.height, 0);
        endShape()

        // side right
        beginShape();
        texture(this.texture_side_right);
        vertex(this.width, this.height, 0);
        vertex(this.width, this.height, this.depth);
        vertex(this.width, 0, this.depth);
        vertex(this.width, 0, 0);
        endShape()

        // side top
        if (this.top == true) {
            this.texture_top.background("red");
            this.texture_top.fill(color("green"));
            this.texture_top.circle(10, 10, 15);
            texture(this.texture_top);
            beginShape();
            vertex(0, 0, this.depth, 0, 0);
            vertex(this.width, 0, this.depth, 1, 0);
            vertex(this.width, this.height, this.depth, 1, 1);
            vertex(0, this.height, this.depth, 0, 1);
            endShape();
        }

        // side bottom
        if (this.bottom == true) {
            texture(this.texture_bottom);
            beginShape();
            vertex(0, 0, 0, 0, 0);
            vertex(this.width, 0, 0, 1, 0);
            vertex(this.width, this.height, 0, 1, 1);
            vertex(0, this.height, 0, 0, 1);
            endShape()
        }

        pop();
    }
}