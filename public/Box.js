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
    }

    show() {
        push();
        translate(this.x, this.y, 0);

        // side up
        beginShape();
        vertex(0, 0, 0);
        vertex(this.width, 0, 0);
        vertex(this.width, 0, this.depth);
        vertex(0, 0, this.depth);
        endShape();

        // side left
        beginShape();
        vertex(0, this.height, this.depth);
        vertex(0, this.height, 0);
        vertex(0, 0, 0);
        vertex(0, 0, this.depth);
        endShape();

        // side down
        beginShape();
        vertex(this.width, this.height, 0);
        vertex(this.width, this.height, this.depth);
        vertex(0, this.height, this.depth);
        vertex(0, this.height, 0);
        endShape()

        // side right
        beginShape();
        vertex(this.width, this.height, 0);
        vertex(this.width, this.height, this.depth);
        vertex(this.width, 0, this.depth);
        vertex(this.width, 0, 0);
        endShape()

        // side top
        if (this.top == true) {
            beginShape();
            vertex(0, 0, this.depth);
            vertex(this.width, 0, this.depth);
            vertex(this.width, this.height, this.depth);
            vertex(0, this.height, this.depth);
            endShape()
        }

        // side bottom
        if (this.bottom == true) {
            beginShape();
            vertex(0, 0, 0);
            vertex(this.width, 0, 0);
            vertex(this.width, this.height, 0);
            vertex(0, this.height, 0);
            endShape()
        }

        pop();
    }
}