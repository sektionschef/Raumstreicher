class Box{constructor(t,e,i,h,s,_,r=!0,n=!1){this.width=t,this.height=e,this.depth=i,this.x=h,this.y=s,this.z=_,this.depth_current=0,this.boxes_emerged=!1,this.bottom=n,this.top=r,this.texture_side_up=createGraphics(this.width,this.depth),this.texture_side_down=createGraphics(this.depth,this.width),this.texture_side_left=createGraphics(this.depth,this.height),this.texture_side_right=createGraphics(this.depth,this.height),this.texture_top=createGraphics(this.width,this.height),this.texture_bottom=createGraphics(this.width,this.height),this.top_bottom_fully_painted=!1,this.box_complete=!1,this.side_up_lines=new Lines(this.texture_side_up,DISTANCE_BETWEEN_LINES),this.side_down_lines=new Lines(this.texture_side_down,DISTANCE_BETWEEN_LINES),this.side_left_lines=new Lines(this.texture_side_left,DISTANCE_BETWEEN_LINES),this.side_right_lines=new Lines(this.texture_side_right,DISTANCE_BETWEEN_LINES),this.top_lines=new Lines(this.texture_top,DISTANCE_BETWEEN_LINES),this.bottom_lines=new Lines(this.texture_bottom,DISTANCE_BETWEEN_LINES),this.side_up_paint=new Paint(this.texture_side_up.width,this.texture_side_up.height,INSIDE_COLOR),this.side_down_paint=new Paint(this.texture_side_down.width,this.texture_side_down.height,INSIDE_COLOR),this.side_left_paint=new Paint(this.texture_side_left.width,this.texture_side_left.height,INSIDE_COLOR),this.side_right_paint=new Paint(this.texture_side_right.width,this.texture_side_right.height,INSIDE_COLOR),this.top_paint=new Paint(this.texture_top.width,this.texture_top.height,TOP_COLOR),this.bottom_paint=new Paint(this.texture_bottom.width,this.texture_bottom.height,TOP_COLOR)}draw_lines(){this.side_up_lines.draw_lines(),this.side_down_lines.draw_lines(),this.side_left_lines.draw_lines(),this.side_right_lines.draw_lines(),1==this.top?this.top_lines.draw_lines():this.top_lines.all_lines_complete=!0,this.bottom_lines.draw_lines(),this.side_up_lines.check_all_complete(),this.side_down_lines.check_all_complete(),this.side_left_lines.check_all_complete(),this.side_right_lines.check_all_complete(),this.top_lines.check_all_complete(),this.bottom_lines.check_all_complete()}show(){1==this.top_bottom_fully_painted&&(this.depth_current<=this.depth?this.depth_current+=1:this.boxes_emerged=!0),1==this.boxes_emerged&&this.draw_lines(),0==this.box_complete&&1==this.side_up_lines.all_lines_complete&&1==this.side_down_lines.all_lines_complete&&1==this.side_left_lines.all_lines_complete&&1==this.side_right_lines.all_lines_complete&&1==this.top_lines.all_lines_complete&&1==this.bottom_lines.all_lines_complete&&(this.box_complete=!0,logging.debug("Box finished")),1==this.top&&this.top_paint.show(this.texture_top),1==this.bottom&&this.bottom_paint.show(this.texture_bottom),1==this.top_paint.area_fully_painted|1==this.bottom_paint.area_fully_painted&&(this.top_bottom_fully_painted=!0),1==this.boxes_emerged&&(this.side_up_paint.show(this.texture_side_up),this.side_down_paint.show(this.texture_side_down),this.side_left_paint.show(this.texture_side_left),this.side_right_paint.show(this.texture_side_right)),push(),translate(this.x,this.y,this.z),0==this.boxes_emerged?(beginShape(CLOSE),noFill(),strokeWeight(2),stroke(INSIDE_COLOR),textureMode(NORMAL)):(beginShape(),texture(this.side_up_paint.buffer)),vertex(0,0,0,0,0),vertex(this.width,0,0,1,0),vertex(this.width,0,this.depth_current,1,1),vertex(0,0,this.depth_current,0,1),endShape(),pop(),push(),translate(this.x,this.y,this.z),0==this.boxes_emerged?(beginShape(CLOSE),noFill(),strokeWeight(2),stroke(INSIDE_COLOR),textureMode(NORMAL)):(beginShape(),texture(this.side_left_paint.buffer)),textureMode(NORMAL),vertex(0,this.height,this.depth_current,0,0),vertex(0,this.height,0,1,0),vertex(0,0,0,1,1),vertex(0,0,this.depth_current,0,1),endShape(),pop(),push(),translate(this.x,this.y,this.z),0==this.boxes_emerged?(beginShape(CLOSE),noFill(),strokeWeight(2),stroke(INSIDE_COLOR),textureMode(NORMAL)):(beginShape(),texture(this.side_down_paint.buffer)),textureMode(NORMAL),vertex(this.width,this.height,0,0,0),vertex(this.width,this.height,this.depth_current,1,0),vertex(0,this.height,this.depth_current,1,1),vertex(0,this.height,0,0,1),endShape(),pop(),push(),translate(this.x,this.y,this.z),0==this.boxes_emerged?(beginShape(CLOSE),noFill(),strokeWeight(2),stroke(INSIDE_COLOR),textureMode(NORMAL)):(beginShape(),texture(this.side_right_paint.buffer)),textureMode(NORMAL),vertex(this.width,this.height,0,0,0),vertex(this.width,this.height,this.depth_current,1,0),vertex(this.width,0,this.depth_current,1,1),vertex(this.width,0,0,0,1),endShape(),pop(),1==this.top&&(push(),translate(this.x,this.y,this.z),texture(this.top_paint.buffer),textureMode(NORMAL),beginShape(),vertex(0,0,this.depth_current,0,0),vertex(this.width,0,this.depth_current,1,0),vertex(this.width,this.height,this.depth_current,1,1),vertex(0,this.height,this.depth_current,0,1),endShape(),pop()),1==this.bottom&&(push(),translate(this.x,this.y,this.z),texture(this.bottom_paint.buffer),textureMode(NORMAL),beginShape(),vertex(0,0,0,0,0),vertex(this.width,0,0,1,0),vertex(this.width,this.height,0,1,1),vertex(0,this.height,0,0,1),endShape(),pop())}}