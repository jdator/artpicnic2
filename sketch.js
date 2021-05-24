function _(selector){
  return

document.querySelector(selector);
}

function setup() {
  let canvas = createCanvas(1000, 600);
  canvas.parent("canvas-wrapper");
  

}

function mouseDragged(){
  let type = _("#pen-pencil").checked?"pencil":"brush";
  let size = parseInt(_("#pen-size").value);
  let color = _("#pen-color").value;
  fill(color);
  stroke(color);

if (type == "pencil"){
    line(pmouseX, pmouseY, mouseX, mouseY);
  } else {
    ellipse(mouseX, mouseY, size, size);
  }

}

function keyTyped(){

  if (key === 's'){

    //save image
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {

    //clear image
    clear();
  }
}
