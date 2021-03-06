class Grid {
    constructor(count_of_points_x, count_of_points_y, minimum_distance, pairing_count, max_height, min_height) {
        this.count_of_points_x = count_of_points_x;
        this.count_of_points_y = count_of_points_y;
        this.minimum_distance = minimum_distance;
        this.pairing_count = pairing_count;
        this.max_height = max_height;
        this.min_height = min_height;

        this.width_points = [-width / 2];
        this.height_points = [-height / 2];

        logging.debug(this.count_of_points_x + " random points on x axis.");
        logging.debug(this.count_of_points_y + " random points on y axis.");

        this.create_coordinates();

        this.columns_count = this.width_points.length - 1;
        this.row_count = this.height_points.length - 1;
        this.boxes_count = (this.columns_count) * (this.row_count)
        logging.debug("Grid with " + this.columns_count + " columns, " + this.row_count + " rows, " + this.boxes_count + " boxes and " + this.pairing_count + " planned pairings.")


        this.virtual_boxes = [];
        this.possible_pairings_x = [];
        this.possible_pairings_y = [];
        this.real_boxes = [];

        this.boxes_completely_run = false;

        this.create_virtual_boxes();
        this.scout_possible_pairings();

        // populate the resulting boxes
        this.real_boxes = this.virtual_boxes;

        for (var i = 0; i < this.pairing_count; i++) {
            if (this.pairing_count > 0 && this.possible_pairings_x.length > 0 && this.possible_pairings_y.length > 0) {
                this.choose_pairing();
                this.pair();
                this.remove_used_pairs();
            }
        }
        logging.debug("The real boxes are:");
        logging.debug(this.real_boxes);

        this.delete_boxes();
        this.create_boxes();
    }


    create_coordinates() {

        for (let i = 0; i < this.count_of_points_x; i++) {
            this.width_points.push(Math.floor(getRandomFromInterval(-width / 2, (width / 2 - this.minimum_distance))));
        }
        for (let i = 0; i < this.count_of_points_y; i++) {
            this.height_points.push(Math.floor(getRandomFromInterval(-height / 2, (height / - this.minimum_distance))));
        }

        // add width and height
        this.width_points.push(width / 2);
        this.height_points.push(height / 2);

        // simple sort
        this.width_points.sort(function (a, b) {
            return a - b;
        });
        this.height_points.sort(function (a, b) {
            return a - b;
        });

        // remove violating minimum distance
        for (var i = this.width_points.length - 1; i >= 0; i--) {
            if ((this.width_points[(i)] - this.width_points[i - 1]) < this.minimum_distance) {
                if (this.width_points[i] != width / 2) {  // do not remove the width value
                    this.width_points.splice(i, 1);
                }
            }
        }

        for (var i = this.height_points.length - 1; i >= 0; i--) {
            if ((this.height_points[(i)] - this.height_points[i - 1]) < this.minimum_distance) {
                if (this.height_points[i] != height / 2) {
                    this.height_points.splice(i, 1);
                }
            }
        }

        logging.debug("Coordinates of points on x axis: " + this.width_points);
        logging.debug("Coordinates of points on y axis: " + this.height_points);
    }

    create_virtual_boxes() {
        this.label_counter = 0;

        for (let v = 0; v < (this.row_count); v++) {
            for (let i = 0; i < (this.columns_count); i++) {
                this.label_counter += 1;

                this.virtual_boxes.push({
                    label: (this.label_counter),
                    a: {
                        x: this.width_points[i],
                        y: this.height_points[v]
                    },
                    b: {
                        x: this.width_points[i + 1],
                        y: this.height_points[v]
                    },
                    c: {
                        x: this.width_points[i + 1],
                        y: this.height_points[v + 1]
                    },
                    d: {
                        x: this.width_points[i],
                        y: this.height_points[v + 1]
                    },
                })
            }
        }
        logging.debug("Virtual boxes:")
        logging.debug(this.virtual_boxes)
    }

    scout_possible_pairings() {

        // skip boxes at the end of the row
        for (let i = 0; i < this.virtual_boxes.length; i++) {
            if (this.virtual_boxes[i].label % this.columns_count != 0) {
                this.possible_pairings_x.push({
                    left: this.virtual_boxes[i].label,
                    right: this.virtual_boxes[(i + 1)].label
                })
            }
            // skip last row
            if (this.virtual_boxes[i].label <= (this.virtual_boxes.length - this.columns_count)) {
                this.possible_pairings_y.push({
                    left: this.virtual_boxes[i].label,
                    // right: this.virtual_boxes[(i + this.row_count + 1)].label  // next row
                    right: this.virtual_boxes[(i + this.columns_count)].label  // next row
                })
            }
        }

        logging.debug(this.possible_pairings_x.length + " possible combinations for x:");
        logging.debug(this.possible_pairings_x);
        logging.debug(this.possible_pairings_y.length + " possible combinations for y: ");
        logging.debug(this.possible_pairings_y);
    }

    choose_pairing() {

        if (fxrand() >= 0.5) {
            this.chosen_axis = "x"
            this.chosen = getRandomFromList(this.possible_pairings_x)
            logging.debug("Pairing on the x axis with:");
            logging.debug(this.chosen);
        } else {
            this.chosen_axis = "y"
            this.chosen = getRandomFromList(this.possible_pairings_y)
            logging.debug("Pairing on the y axis with:");
            logging.debug(this.chosen);
        }
    }

    pair() {

        let left_temp;
        let right_temp;

        for (let box of this.virtual_boxes) {
            if (box.label == this.chosen.left) {
                left_temp = {
                    a: box.a, b: box.b, c: box.c, d: box.d
                }
                this.left_label = box.label
            } else if (box.label == this.chosen.right) {
                right_temp = {
                    a: box.a, b: box.b, c: box.c, d: box.d
                }
                this.right_label = box.label;
            } else {
            }
        }

        if (this.chosen_axis == "x") {
            this.paired_box = {
                label: this.left_label + "+" + this.right_label,
                a: {
                    x: left_temp.a.x,
                    y: left_temp.a.y
                },
                b: {
                    x: right_temp.b.x,
                    y: right_temp.b.y
                },
                c: {
                    x: right_temp.c.x,
                    y: right_temp.c.y
                },
                d: {
                    x: left_temp.d.x,
                    y: left_temp.d.y
                },
            };
        } else {
            this.paired_box = {
                label: this.left_label + "+" + this.right_label,
                a: {
                    x: left_temp.a.x,
                    y: left_temp.a.y
                },
                b: {
                    x: left_temp.b.x,
                    y: left_temp.b.y
                },
                c: {
                    x: right_temp.c.x,
                    y: right_temp.c.y
                },
                d: {
                    x: right_temp.d.x,
                    y: right_temp.d.y
                },
            };
        }

        logging.debug("Adding the newly paired box: ");
        logging.debug(this.paired_box);

        this.real_boxes.push(this.paired_box)

        logging.debug("Remove original boxes from array.");
        for (var i = this.real_boxes.length - 1; i >= 0; i--) {
            if (this.real_boxes[i].label == this.left_label) {
                this.real_boxes.splice(i, 1);
            }
            if (this.real_boxes[i].label == this.right_label) {
                this.real_boxes.splice(i, 1);
            }
        }
    }

    remove_used_pairs() {
        logging.debug("Remove used pairs from both pools.")
        for (var i = this.possible_pairings_x.length - 1; i >= 0; i--) {

            if (
                this.possible_pairings_x[i].left == this.chosen.left ||
                this.possible_pairings_x[i].left == this.chosen.right ||
                this.possible_pairings_x[i].right == this.chosen.left ||
                this.possible_pairings_x[i].right == this.chosen.right
            ) {
                this.possible_pairings_x.splice(i, 1);
            }
        }
        for (var i = this.possible_pairings_y.length - 1; i >= 0; i--) {
            if (
                this.possible_pairings_y[i].left == this.chosen.left ||
                this.possible_pairings_y[i].left == this.chosen.right ||
                this.possible_pairings_y[i].right == this.chosen.left ||
                this.possible_pairings_y[i].right == this.chosen.right
            ) {
                this.possible_pairings_y.splice(i, 1);
            }
        }
    }

    delete_boxes() {
        for (var i = this.real_boxes.length - 1; i >= 0; i--) {
            if (fxrand() < 0.1) {
                // this.real_boxes[(i)]
                this.real_boxes.splice(i, 1);
            }
        }
    }


    create_boxes() {
        let height;
        let open;
        let z;

        for (let box_real of this.real_boxes) {
            height = getRandomFromInterval(this.min_height, this.max_height);
            z = height - getRandomFromInterval(0, (height - this.min_height));
            open = getRandomFromList([true, false]);
            box_real.body = new Box((box_real.c.x - box_real.a.x), (box_real.c.y - box_real.a.y), height, box_real.a.x, box_real.a.y, z, open, !open);
        }
    }

    show_boxes() {
        for (let box_real of this.real_boxes) {
            box_real.body.show();
        }
    }


    check_boxes_complete() {
        this.boxes_completely_run = true;
        for (let box_real of this.real_boxes) {
            if (box_real.body.box_complete == false) {
                this.boxes_completely_run = false;
            }
        }
    }

    show_grid_debug() {
        let center_x;
        let center_y;


        push();
        textFont(font);
        textSize(20 * SCALING_FACTOR);
        rectMode(CORNERS);
        for (let box_real of this.real_boxes) {
            // console.log(box_real.label);
            // fill(133);
            // fill(255);
            noFill();
            if (logging.getLevel() <= 1) {
                strokeWeight(3);
                stroke(51);
            } else {
                noStroke();
            }
            if (logging.getLevel() <= 1) {
                rect(box_real.a.x * SCALING_FACTOR, box_real.a.y * SCALING_FACTOR, box_real.c.x * SCALING_FACTOR, box_real.c.y * SCALING_FACTOR);
                fill(0)
                center_x = (box_real.b.x - box_real.a.x) / 2 * SCALING_FACTOR
                center_y = (box_real.d.y - box_real.a.y) / 2 * SCALING_FACTOR
                // text is ressource hungry
                // text(box_real.label, (box_real.a.x + center_x) * SCALING_FACTOR, (box_real.a.y + center_y) * SCALING_FACTOR);
            }
        }
        pop();
    }
}