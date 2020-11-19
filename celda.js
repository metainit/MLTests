function Cell(i, j, w){
  this.i = i;
  this.j =j;
  this.x = i*w,
  this.y = j*w;
  this.w = w;
  this.vecinos=0;

  this.mina = false;
  this.revelada = false;
}

Cell.prototype.show = function() {

  stroke(0);
  noFill();
  rect(this.x, this.y, this.w, this.w);
  if (this.revelada){
    if (this.mina){
      fill(127);
      ellipse(this.x+this.w*0.5, this.y+this.w*0.5, this.w * 0.5);
    } else {
      fill(200);
      rect(this.x, this.y, this.w, this.w);
      if(this.vecinos > 0){
        textAlign(CENTER);
        fill(0);
        textSize(w/2);
        text(this.vecinos, this.x+this.w*0.5,this.y+this.w*0.7);
      }
    }
  }
}

Cell.prototype.contarMinas = function(){
  if (this.mina){
    this.vecinos = -1;
    return;
  }
  var total = 0;

  for( var xoff = -1; xoff <= 1; xoff++){
    for( var yoff = -1; yoff <= 1; yoff++){
      var i = this.i + xoff;
      var j = this.j + yoff;
      if( i > -1 && i < cols && j > -1  && j < rows){
        var vecino = grid[i][j];
        if(vecino.mina){
          total++;
        }
      }
    }
  }
  this.vecinos = total;
}

Cell.prototype.contiene = function(x, y){
  return (x > this.x && x < this.x + this.w && y > this.y && y < this.y+this.w);
}

Cell.prototype.revela = function(x, y){
  this.revelada = true;
  if(this.vecinos == 0){
    //vaciar casillas sin vecinos
    this.vaciado();
  }
}

Cell.prototype.vaciado = function(){
  for( var xoff = -1; xoff <= 1; xoff++){
    for( var yoff = -1; yoff <= 1; yoff++){
      var i = this.i + xoff;
      var j = this.j + yoff;
      if( i > -1 && i < cols && j > -1  && j < rows){
        var vecino = grid[i][j];
        if(!vecino.mina && !vecino.revelada){
          vecino.revela();
        }
      }
    }
  }
}
