function getRandomFromInterval(e,a){return fxrand()*(a-e)+e}function getRandomFromList(e){return e[Math.floor(fxrand()*e.length)]}function distortColor(e,a){void 0===a&&(a=10);let n=e.levels[0]+getRandomFromInterval(-a,a),t=e.levels[1]+getRandomFromInterval(-a,a),i=e.levels[2]+getRandomFromInterval(-a,a),r=e.levels[3];return n=Math.min(Math.max(parseInt(n),0),255),t=Math.min(Math.max(parseInt(t),0),255),i=Math.min(Math.max(parseInt(i),0),255),color(n,t,i,r)}function brightenColor(e,a){let n=getRandomFromInterval(-a,a),t=e.levels[0]+n,i=e.levels[1]+n,r=e.levels[2]+n,o=e.levels[3];return t=Math.min(Math.max(parseInt(t),0),255),i=Math.min(Math.max(parseInt(i),0),255),r=Math.min(Math.max(parseInt(r),0),255),color(t,i,r,o)}function windowResized(){logging.debug("Window is resized."),resize_canvas()}function resize_canvas(){rescaling_width=windowWidth/CANVAS_WIDTH,rescaling_height=windowHeight/CANVAS_HEIGHT,rescaling_width<rescaling_height?(logging.debug("Width is smaller than height. Width dominates"),SCALING_FACTOR=rescaling_width):(logging.debug("width is larger than height. Height dominates."),SCALING_FACTOR=rescaling_height),resizeCanvas(CANVAS_WIDTH*SCALING_FACTOR,CANVAS_HEIGHT*SCALING_FACTOR),reset_camera()}function reset_camera(){camera(...CAMERA_DEFAULT)}function keyTyped(){"s"===key?(noLoop(),saveCanvas(canvas,"snapshot","png"),loop()):"r"===key?reset_camera():"c"===key&&camera(0,0,1.5*height/SCALING_FACTOR,0,0,0,0,1,0)}