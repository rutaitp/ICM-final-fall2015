function Particle(_x, _y, _size) {
  this.possX = _x;
  this.possY = _y;
  this.velX = random(-3, 3);
  this.velY = random(-15, 15);
  this.accX = 0;
  this.accY = 0;
  this.velReduction = 0.99;
  this.rad = _size;
  this.rotateSpd = random(0.05, 0.2);

  this.update = function() {
    if (this.possY > height) {
      this.velY = -this.velY * 0.5;
      this.possY = height;
    }
    if (this.possX < 0) {
      this.velX = -this.velX;
      this.possX = 0;
    }
    if (this.possX > width) {
      this.velX = -this.velX;
      this.possX = width;
    }
    // apply acc to vel
    this.velX = this.velX + this.accX;
    this.velY = this.velY + this.accY;
    // apply vel to pos
    this.possX = this.possX + this.velX;
    this.possY = this.possY + this.velY;
    // reset acc
    this.accX = 0;
    this.accY = 0;
    // add friction
    this.velX = this.velX * this.velReduction;
    this.velY = this.velY * this.velReduction;
  }
  this.applyForce = function(_x, _y) {
    this.accX = _x;
    this.accY = _y;
  }
  this.applyAttraction = function(_originX, _originY) {
    //this.accX = (_originX - this.posX) * 0.01;
    this.accY = 1;
  }

  this.display = function() {
    noStroke();
    if (state == 12) {
      fill(color(random(255), random(255), random(255)));
    } else {
      fill(255);
    }
    //var newX = this.posX + sin(frameCount * this.rotateSpd) * this.size;
    //var newY = this.posY + cos(frameCount * this.rotateSpd) * this.size;
    ellipse(this.possX, this.possY, this.rad / 2, this.rad / 2);
  }
}