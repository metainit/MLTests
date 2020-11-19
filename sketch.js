//Autor: Martín Enrique
//Buscaminas
//17/12/2020
function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

var grid;
var cols;
var rows;
var w = 40;

var minasTotales = 20;

function setup() {
  createCanvas(500, 500);
  cols = floor(width / w);
  rows = floor(height / w);
  grid = make2DArray(cols, rows);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, w);
    }
  }

  //seleccionar minasTotales
  var options = [];
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      options.push([i,j]);
    }
  }

  for(var n = 0; n< minasTotales;n++){
    var indice = floor(random(options.length)); //genera indice aleatorio
    var choice = options[indice];
    var i = choice[0];
    var j = choice[1];
    //borra el espacio para que no se repita;
    options.splice(indice,1);
    grid[i][j].mina = true;
  }


  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].contarMinas();
    }
  }
}

function gameOver(){
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].revelada = true;
    }
  }
}

function mousePressed(){
  for(var i = 0; i < cols; i++){
    for (var j = 0; j < rows; j++){
      if (grid[i][j].contiene(mouseX, mouseY)){
        grid[i][j].revela();

        if (grid[i][j].mina){
          gameOver();
        }
      }
    }
  }
}

function draw(){
  background(255);
  for(var i = 0; i < cols; i++){
    for (var j = 0; j < rows; j++){
      grid[i][j].show();
    }
  }
}
