

function setup() {
  createCanvas(1040, 663);



  strokeWeight(10);
}

function draw() {

  if (mouseIsPressed){

  line(mouseX, mouseY, pmouseX, pmouseY);
  }

}

function keyTyped(){

  if (key === 's'){
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {

    clear();
  }
}
