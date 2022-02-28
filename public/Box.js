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

        let distance_between_lines = 20;

        this.texture_side_up = createGraphics(this.width, this.depth);
        this.texture_side_down = createGraphics(this.width, this.depth);
        this.texture_side_left = createGraphics(this.height, this.depth);
        this.texture_side_right = createGraphics(this.height, this.depth);
        this.texture_top = createGraphics(this.width, this.height);
        this.texture_bottom = createGraphics(this.width, this.height);

        if (logging.getLevel() <= 1) {
            this.texture_side_up.background(color("#0057b7"));
            this.texture_side_down.background(color("#0057b7"));
            this.texture_side_left.background(color("#0057b7"));
            this.texture_side_right.background(color("#0057b7"));
            this.texture_top.background(color("#ffd700"));
            this.texture_bottom.background(color("#ffd700"));
        } else {
            this.side_up_lines = new Lines(this.texture_side_up, distance_between_lines)
            this.side_down_lines = new Lines(this.texture_side_down, distance_between_lines)
            this.side_left_lines = new Lines(this.texture_side_left, distance_between_lines)
            this.side_right_lines = new Lines(this.texture_side_right, distance_between_lines)

            this.top_lines = new Lines(this.texture_top, distance_between_lines)
            this.bottom_lines = new Lines(this.texture_bottom, distance_between_lines)
        }

        // image(this.texture_side_up);
        // image(this.texture_side_left);
        // image(this.texture_side_down);
        // image(this.texture_side_right);
        // image(this.texture_top);
        // image(this.texture_bottom);


    }

    draw_lines() {
        this.side_up_lines.draw_lines();
        this.side_down_lines.draw_lines();
        this.side_left_lines.draw_lines();
        this.side_right_lines.draw_lines();

        this.top_lines.draw_lines();
        this.bottom_lines.draw_lines();

        this.side_up_lines.check_all_complete();
        this.side_down_lines.check_all_complete();
        this.side_left_lines.check_all_complete();
        this.side_right_lines.check_all_complete();

        this.top_lines.check_all_complete();
        this.bottom_lines.check_all_complete();
    }

    show() {

        if (logging.getLevel() > 1) {
            this.draw_lines();
        }

        push();
        translate(this.x, this.y, 0);
        // if (this.side_up_lines.all_lines_complete == true) {
        // side up
        beginShape();
        // image(this.texture_side_up);
        textureMode(NORMAL);
        texture(this.texture_side_up);
        vertex(0, 0, 0, 0, 0);
        vertex(this.width, 0, 0, 1, 0);
        vertex(this.width, 0, this.depth, 1, 1);
        vertex(0, 0, this.depth, 0, 1);
        endShape();
        // }
        pop();


        // // side left
        push();
        translate(this.x, this.y, 0);
        beginShape();
        // image(this.texture_side_left);
        texture(this.texture_side_left);
        textureMode(NORMAL);
        vertex(0, this.height, this.depth, 0, 0);
        vertex(0, this.height, 0, 1, 0);
        vertex(0, 0, 0, 1, 1);
        vertex(0, 0, this.depth, 0, 1);
        endShape();
        pop();

        // // side down
        push();
        translate(this.x, this.y, 0);
        beginShape();
        // image(this.texture_side_down);
        texture(this.texture_side_down);
        textureMode(NORMAL);
        vertex(this.width, this.height, 0, 0, 0);
        vertex(this.width, this.height, this.depth, 1, 0);
        vertex(0, this.height, this.depth, 1, 1);
        vertex(0, this.height, 0, 0, 1);
        endShape()
        pop();

        // // side right
        push();
        translate(this.x, this.y, 0);
        beginShape();
        // image(this.texture_side_right);
        texture(this.texture_side_right);
        textureMode(NORMAL);

        vertex(this.width, this.height, 0, 0, 0);
        vertex(this.width, this.height, this.depth, 1, 0);
        vertex(this.width, 0, this.depth, 1, 1);
        vertex(this.width, 0, 0, 0, 1);
        endShape()
        pop();

        // side top
        if (this.top == true) {
            push();
            translate(this.x, this.y, 0);
            // if (this.top_lines.all_lines_complete == true) {
            // image(this.texture_top);
            texture(this.texture_top);
            textureMode(NORMAL);
            // } else {
            //     texture(kitten);
            // }
            beginShape();
            vertex(0, 0, this.depth, 0, 0);
            vertex(this.width, 0, this.depth, 1, 0);
            vertex(this.width, this.height, this.depth, 1, 1);
            vertex(0, this.height, this.depth, 0, 1);
            endShape();
            pop();
        }

        // // side bottom
        if (this.bottom == true) {
            push();
            translate(this.x, this.y, 0);
            // image(this.texture_bottom);
            texture(this.texture_bottom);
            textureMode(NORMAL);
            beginShape();
            vertex(0, 0, 0, 0, 0);
            vertex(this.width, 0, 0, 1, 0);
            vertex(this.width, this.height, 0, 1, 1);
            vertex(0, this.height, 0, 0, 1);
            endShape();
            pop();
        }

    }
}