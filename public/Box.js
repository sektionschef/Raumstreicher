class Box {
    constructor(width, height, depth, x, y, z, top = true, bottom = false) {
        this.width = width;
        this.height = height;
        this.depth = depth;

        // first top paint

        this.x = x;
        this.y = y;
        this.z = z;
        this.depth_current = 0;
        this.boxes_emerged = false;

        this.bottom = bottom;
        this.top = top;

        this.texture_side_up = createGraphics(this.width, this.depth);
        this.texture_side_down = createGraphics(this.depth, this.width);
        this.texture_side_left = createGraphics(this.depth, this.height);
        this.texture_side_right = createGraphics(this.depth, this.height);
        this.texture_top = createGraphics(this.width, this.height);
        this.texture_bottom = createGraphics(this.width, this.height);

        this.top_bottom_fully_painted = false;

        let opacity_val = "ff";
        // let opacity_val = "9e";
        // this.texture_side_up.background(color(INSIDE_COLOR + opacity_val));
        // this.texture_side_down.background(color(INSIDE_COLOR + opacity_val));
        // this.texture_side_left.background(color(INSIDE_COLOR + opacity_val));
        // this.texture_side_right.background(color(INSIDE_COLOR + opacity_val));

        // this.texture_top.background(color(TOP_COLOR + opacity_val));
        // this.texture_bottom.background(color(TOP_COLOR + opacity_val));

        this.side_up_lines = new Lines(this.texture_side_up, DISTANCE_BETWEEN_LINES)
        this.side_down_lines = new Lines(this.texture_side_down, DISTANCE_BETWEEN_LINES)
        this.side_left_lines = new Lines(this.texture_side_left, DISTANCE_BETWEEN_LINES)
        this.side_right_lines = new Lines(this.texture_side_right, DISTANCE_BETWEEN_LINES)

        this.top_lines = new Lines(this.texture_top, DISTANCE_BETWEEN_LINES)
        this.bottom_lines = new Lines(this.texture_bottom, DISTANCE_BETWEEN_LINES)


        this.side_up_paint = new Paint(this.texture_side_up.width, this.texture_side_up.height, INSIDE_COLOR);
        this.side_down_paint = new Paint(this.texture_side_down.width, this.texture_side_down.height, INSIDE_COLOR);
        this.side_left_paint = new Paint(this.texture_side_left.width, this.texture_side_left.height, INSIDE_COLOR);
        this.side_right_paint = new Paint(this.texture_side_right.width, this.texture_side_right.height, INSIDE_COLOR);

        this.top_paint = new Paint(this.texture_top.width, this.texture_top.height, TOP_COLOR);
        this.bottom_paint = new Paint(this.texture_bottom.width, this.texture_bottom.height, TOP_COLOR);

    }

    draw_lines() {
        this.side_up_lines.draw_lines();
        this.side_down_lines.draw_lines();
        this.side_left_lines.draw_lines();
        this.side_right_lines.draw_lines();

        if (this.top == true) {
            this.top_lines.draw_lines();
        }
        this.bottom_lines.draw_lines();

        this.side_up_lines.check_all_complete();
        this.side_down_lines.check_all_complete();
        this.side_left_lines.check_all_complete();
        this.side_right_lines.check_all_complete();

        this.top_lines.check_all_complete();
        this.bottom_lines.check_all_complete();
    }

    show() {
        if (this.top_bottom_fully_painted == true) {
            if (this.depth_current <= this.depth) {
                this.depth_current += 1;
            } else {
                this.boxes_emerged = true;
            }
        }

        if (this.boxes_emerged == true) {
            this.draw_lines();
        }

        if (this.top == true) {
            this.top_paint.show(this.texture_top);
        }
        if (this.bottom == true) {
            this.bottom_paint.show(this.texture_bottom);
        }

        if (this.top_paint.area_fully_painted == true | this.bottom_paint.area_fully_painted == true) {
            this.top_bottom_fully_painted = true;
        }

        // if (this.top_bottom_fully_painted == true) {
        if (this.boxes_emerged == true) {
            this.side_up_paint.show(this.texture_side_up);
            this.side_down_paint.show(this.texture_side_down);
            this.side_left_paint.show(this.texture_side_left);
            this.side_right_paint.show(this.texture_side_right);
        }


        // image(paint.buffer, 0, 0, backback.buffer * SCALING_FACTOR, backback.buffer * SCALING_FACTOR);

        // side up
        push();
        translate(this.x, this.y, this.z);
        // if (this.side_up_lines.all_lines_complete == true) {
        if (this.boxes_emerged == false) {
            beginShape(CLOSE);
            noFill();
            strokeWeight(4);
            stroke(INSIDE_COLOR);
            textureMode(NORMAL);
        } else {
            beginShape();
            texture(this.side_up_paint.buffer);
        }
        vertex(0, 0, 0, 0, 0);
        vertex(this.width, 0, 0, 1, 0);
        vertex(this.width, 0, this.depth_current, 1, 1);
        vertex(0, 0, this.depth_current, 0, 1);
        endShape();
        // }
        pop();


        // // side left
        push();
        translate(this.x, this.y, this.z);
        if (this.boxes_emerged == false) {
            beginShape(CLOSE);
            noFill();
            strokeWeight(4);
            stroke(INSIDE_COLOR);
            textureMode(NORMAL);
        } else {
            beginShape();
            texture(this.side_left_paint.buffer);
        }
        textureMode(NORMAL);
        vertex(0, this.height, this.depth_current, 0, 0);
        vertex(0, this.height, 0, 1, 0);
        vertex(0, 0, 0, 1, 1);
        vertex(0, 0, this.depth_current, 0, 1);
        endShape();
        pop();

        // // side down
        push();
        translate(this.x, this.y, this.z);
        if (this.boxes_emerged == false) {
            beginShape(CLOSE);
            noFill();
            strokeWeight(4);
            stroke(INSIDE_COLOR);
            textureMode(NORMAL);
        } else {
            beginShape();
            texture(this.side_down_paint.buffer);
        }
        textureMode(NORMAL);
        vertex(this.width, this.height, 0, 0, 0);
        vertex(this.width, this.height, this.depth_current, 1, 0);
        vertex(0, this.height, this.depth_current, 1, 1);
        vertex(0, this.height, 0, 0, 1);
        endShape()
        pop();

        // // side right
        push();
        translate(this.x, this.y, this.z);
        if (this.boxes_emerged == false) {
            beginShape(CLOSE);
            noFill();
            strokeWeight(4);
            stroke(INSIDE_COLOR);
            textureMode(NORMAL);
        } else {
            beginShape();
            texture(this.side_right_paint.buffer);
        }
        textureMode(NORMAL);

        vertex(this.width, this.height, 0, 0, 0);
        vertex(this.width, this.height, this.depth_current, 1, 0);
        vertex(this.width, 0, this.depth_current, 1, 1);
        vertex(this.width, 0, 0, 0, 1);
        endShape()
        pop();

        // side top
        if (this.top == true) {
            push();
            translate(this.x, this.y, this.z);

            texture(this.top_paint.buffer);
            textureMode(NORMAL);
            beginShape();
            vertex(0, 0, this.depth_current, 0, 0);
            vertex(this.width, 0, this.depth_current, 1, 0);
            vertex(this.width, this.height, this.depth_current, 1, 1);
            vertex(0, this.height, this.depth_current, 0, 1);

            endShape();
            pop();
        }

        // // side bottom
        if (this.bottom == true) {
            push();
            translate(this.x, this.y, this.z);
            // image(this.texture_bottom);
            // texture(this.texture_bottom);
            texture(this.bottom_paint.buffer);
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