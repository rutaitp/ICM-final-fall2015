//all the variables
var myParticles = [];
var input;
var video;
var canvas;
var col;
var myCircle;
var myCircle1;
var myRectangle;
var myTriangle;
var vol;
var items;
var id;
var mic;
var col1;
var fft;
var h1;
var h2;

var state = 0;

var isFullScreen = false;

function setup() {
  //input
  input = select('#search');
  input.style("width", "600px");
  input.style("height", "100px");
  input.style("font-size", "22px");
  input.style("font-family", "raleway");
  input.style("font-style", "bold");
  input.style("text-align", "center");
  input.style("color", "white");
  input.style("background-color", "black");
  input.style("border", "ridge");
  input.style("border-width", "medium");
  input.style("border-color", "white");
  input.changed(search);
  input.position(30, 630);

  //fullscreen button
  var fullButton = select('#press');
  fullButton.mousePressed(canvasFullScreen);
  fullButton.position(1030, 630);
  fullButton.style("color", "white");
  fullButton.style("background-color", "black");
  fullButton.style("border-width", "medium");
  fullButton.style("border-color", "white");
  fullButton.style("font-family", "raleway");
  fullButton.style("font-style", "bold");
  fullButton.style("font-size", "14px");

  //start canvas
  var c0Button = select('#zero');
  c0Button.mousePressed(refresh);
  c0Button.position(1120, 630);
  c0Button.style("color", "white");
  c0Button.style("background-color", "black");
  c0Button.style("border-width", "medium");
  c0Button.style("border-color", "white");
  c0Button.style("font-family", "raleway");
  c0Button.style("font-style", "bold");
  c0Button.style("font-size", "14px");

  //canvas 1 button
  var c1Button = select('#one');
  c1Button.mousePressed(white1);
  c1Button.position(1200, 500);
  c1Button.style("color", "white");
  c1Button.style("background-color", "black");
  c1Button.style("border-width", "thin");
  c1Button.style("border-color", "white");

  //canvas2 button
  var c2Button = select('#two');
  c2Button.mousePressed(white2);
  c2Button.position(1225, 500);
  c2Button.style("color", "white");
  c2Button.style("background-color", "black");
  c2Button.style("border-width", "thin");
  c2Button.style("border-color", "white");

  //canvas3 button
  var c3Button = select('#three');
  c3Button.mousePressed(white3);
  c3Button.position(1250, 500);
  c3Button.style("color", "white");
  c3Button.style("background-color", "black");
  c3Button.style("border-width", "thin");
  c3Button.style("border-color", "white");

  //canvas4 button
  var c4Button = select('#four');
  c4Button.mousePressed(white4);
  c4Button.position(1275, 500);
  c4Button.style("color", "white");
  c4Button.style("background-color", "black");
  c4Button.style("border-width", "thin");
  c4Button.style("border-color", "white");

  //canvas5 button
  var c5Button = select('#five');
  c5Button.mousePressed(white5);
  c5Button.position(1300, 500);
  c5Button.style("color", "white");
  c5Button.style("background-color", "black");
  c5Button.style("border-width", "thin");
  c5Button.style("border-color", "white");

  //canvas6 button
  var c6Button = select('#six');
  c6Button.mousePressed(white6);
  c6Button.position(1325, 500);
  c6Button.style("color", "white");
  c6Button.style("background-color", "black");
  c6Button.style("border-width", "thin");
  c6Button.style("border-color", "white");

  //canvas7 button
  var c7Button = select('#seven');
  c7Button.mousePressed(color1);
  c7Button.position(1200, 575);
  c7Button.style("color", "white");
  c7Button.style("background-color", "black");
  c7Button.style("border-width", "thin");
  c7Button.style("border-color", "white");

  //canvas8 button
  var c8Button = select('#eight');
  c8Button.mousePressed(color2);
  c8Button.position(1225, 575);
  c8Button.style("color", "white");
  c8Button.style("background-color", "black");
  c8Button.style("border-width", "thin");
  c8Button.style("border-color", "white");

  //canvas9 button
  var c9Button = select('#nine');
  c9Button.mousePressed(color3);
  c9Button.position(1250, 575);
  c9Button.style("color", "white");
  c9Button.style("background-color", "black");
  c9Button.style("border-width", "thin");
  c9Button.style("border-color", "white");

  //canvas10 button
  var c10Button = select('#ten');
  c10Button.mousePressed(color4);
  c10Button.position(1275, 575);
  c10Button.style("color", "white");
  c10Button.style("background-color", "black");
  c10Button.style("border-width", "thin");
  c10Button.style("border-color", "white");

  //canvas11 button
  var c11Button = select('#eleven');
  c11Button.mousePressed(color5);
  c11Button.position(1300, 575);
  c11Button.style("color", "white");
  c11Button.style("background-color", "black");
  c11Button.style("border-width", "thin");
  c11Button.style("border-color", "white");

  //canvas12 button
  var c12Button = select('#twelve');
  c12Button.mousePressed(color6);
  c12Button.position(1325, 575);
  c12Button.style("color", "white");
  c12Button.style("background-color", "black");
  c12Button.style("border-width", "thin");
  c12Button.style("border-color", "white");

  //canvas13 button
  var c13Button = select('#thirteen');
  c13Button.mousePressed(fftAnalyze);
  c13Button.position(1350, 500);
  c13Button.style("color", "white");
  c13Button.style("background-color", "black");
  c13Button.style("border-width", "thin");
  c13Button.style("border-color", "white");

  //canvas14 button
  var c14Button = select('#fourteen');
  c14Button.mousePressed(waveForm);
  c14Button.position(1375, 500);
  c14Button.style("color", "white");
  c14Button.style("background-color", "black");
  c14Button.style("border-width", "thin");
  c14Button.style("border-color", "white");

  //canvas15 button
  var c15Button = select('#fifteen');
  c15Button.mousePressed(fftColor);
  c15Button.position(1350, 575);
  c15Button.style("color", "white");
  c15Button.style("background-color", "black");
  c15Button.style("border-width", "thin");
  c15Button.style("border-color", "white");

  //canvas16 button
  var c16Button = select('#sixteen');
  c16Button.mousePressed(waveColor);
  c16Button.position(1375, 575);
  c16Button.style("color", "white");
  c16Button.style("background-color", "black");
  c16Button.style("border-width", "thin");
  c16Button.style("border-color", "white");

  function refresh() {
    state = 0;
  }

  function white1() {
    state = 1;
  }

  function white2() {
    state = 2;
  }

  function white3() {
    state = 3;
  }

  function white4() {
    state = 4;
  }

  function white5() {
    state = 5;
  }

  function white6() {
    state = 6;
  }

  function color1() {
    state = 7;
  }

  function color2() {
    state = 8;
  }

  function color3() {
    state = 9;
  }

  function color4() {
    state = 10;
  }

  function color5() {
    state = 11;
  }

  function color6() {
    state = 12;
  }

  function fftAnalyze() {
    state = 13;
  }

  function waveForm() {
    state = 14;
  }

  function fftColor() {
    state = 15;
  }

  function waveColor() {
    state = 16;
  }

  //canvas1
  canvas = createCanvas(1150, 550);
  canvas.position(30, 50);
  canvas.style("border", "ridge");
  canvas.style("border-width", "medium");
  canvas.style("border-color", "white");


  //mic in
  mic = new p5.AudioIn();

  //visual header
  h1 = createElement('h1', '2. Choose visual for your music');
  h1.position(1200, 410);
  h1.style("color", "white");
  h1.style("font-size", "17px");
  h1.style("font-family", "raleway");
  h1.style("font-style", "bold");
  h1.style("text-decoration", "underline");
  h1.style("text-align", "left");
  h1.style("border", "none");

  //white
  h2 = createElement('h2', 'White');
  h2.position(1200, 450);
  h2.style("color", "white");
  h2.style("font-size", "16px");
  h2.style("font-family", "raleway");
  h2.style("font-style", "bold");
  h2.style("text-align", "left");
  h2.style("border", "ridge");
  h2.style("border-width", "medium");
  h2.style("border-color", "white");

  //color
  h3 = createElement('h3', 'Color');
  h3.position(1200, 525);
  h3.style("color", "white");
  h3.style("font-size", "16px");
  h3.style("font-family", "raleway");
  h3.style("font-style", "bold");
  h3.style("text-align", "left");
  h3.style("border", "ridge");
  h3.style("border-width", "medium");
  h3.style("border-color", "white");


  //fft
  fft = new p5.FFT();
  fft.setInput(mic);
}

function search() {
  var term = input.value();
  var apiKey = "AIzaSyBgIFC18Q9CV74m6qhM9QzAzCe97P7ZJFM";
  var url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&q=' + term + '&key=' + apiKey + '&type=playlist&maxResults=1&order=viewCount&safeSearch=moderate';

  println(url);

  loadJSON(url, gotData);

  for (var i = 0; i < 100; i++) {
    myParticles.push(new Particle(random(width), random(height), random(10, 20)));
  }
}

function gotData(data) {
  items = data.items;
  id = items[0].id.playlistId;

  if (video) {
    var div = document.getElementById("test");
    div.parentNode.removeChild(div);
    if (id) {
      makeDiv(id);
      mic.start();
    }
  } else {
    if (id) {
      makeDiv(id);
      mic.start();
    }
  }
}

function makeDiv(videoId) {
  var embed = '<iframe width="300" height="100" src="https://www.youtube.com/embed/videoseries?list=' + videoId +
    '" frameborder="100" allowfullscreen></iframe>';
  video = createElement('div', embed);
  video.id("test");
  video.position(680, 630);
  video.style("border", "ridge");
  video.style("border-width", "thin");
  video.style("border-color", "white");
  console.log(video);
}

function draw() {

  micLevel = mic.getLevel();

  if (state == 0) {
    background(0);
  } else if (state == 1) {
    background(0);
    // video.hide();
    push();
    col = color(255);

    myCircle = {
      size: 5,
      gap: 20
    };
    var howManyTimes = width / myCircle.size;
    var startX = myCircle.size / 2;
    var startY = myCircle.size / 2;

    stroke(0);
    strokeWeight(1);
    fill(col);

    // visual circles
    for (var x = 0; x < howManyTimes; x++) {
      for (var y = 0; y < howManyTimes; y++) {
        var posX = startX + (myCircle.size + myCircle.gap) * x;
        var posY = startY + (myCircle.size + myCircle.gap) * y;
        //distance
        //dist (x1, y1, x2, y2);
        var distanceFromCenter = dist(width / 2, height / 2, posX, posY);
        var newSize = myCircle.size * (width - distanceFromCenter) / width;
        // micLevel = mic.getLevel();
        ellipse(posX, posY, newSize + micLevel * 200, newSize + micLevel * 200);
      }
    }
    pop();
  } else if (state == 2) {
    background(0);
    push();
    col = color(255);

    myRectangle = {
      size: 3,
      gap: 20
    };
    var howManyTimes = width / myRectangle.size;
    var startX = myRectangle.size / 2;
    var startY = myRectangle.size / 2;

    stroke(0);
    strokeWeight(1);
    fill(col);

    // visual rectangles
    for (var x = 0; x < howManyTimes; x++) {
      for (var y = 0; y < howManyTimes; y++) {
        var posX = startX + (myRectangle.size + myRectangle.gap) * x;
        var posY = startY + (myRectangle.size + myRectangle.gap) * y;
        //distance
        //dist (x1, y1, x2, y2);
        var distanceFromCenter = dist(width / 2, height / 2, posX, posY);
        var newSize = myRectangle.size * (width - distanceFromCenter) / width;
        // micLevel = mic.getLevel();
        rect(posX, posY, newSize + micLevel * 200, newSize + micLevel * 200);
      }
    }
    pop();
  } else if (state == 3) {
    background(0);
    push();
    col = color(255);

    myTriangle = {
      w: 20 + micLevel * 200,
      h: 20 + micLevel * 200
    };
    var howManyTimes = width / myTriangle.w;
    stroke(0);
    strokeWeight(1);
    fill(col);

    // visual triangles
    for (var y = 0; y < howManyTimes; y++) { // connected to y location
      for (var x = 0; x < howManyTimes; x++) { // connected to x location
        var posX = myTriangle.w * x;
        var posY = myTriangle.h * y;
        triangle(posX, posY, posX, posY + myTriangle.h, posX + myTriangle.w, posY + myTriangle.h);
      }
    }
    pop();
  } else if (state == 4) {
    background(0);
    push();
    fill(255, 255, 255); // white
    ellipse(random(100, 900), random(100, 600), micLevel * 2000, micLevel * 2000);

  } else if (state == 5) {
    fill(255);
    ellipse(random(100, 900), random(100, 600), micLevel * 2000, micLevel * 2000);
  } else if (state == 6) {
    //this code is courtesy of my classmate Sabrina: http://sabrinaaa.com/2015/10/28/icm_week_8_play_with_sound/
    background(0);
    var newVol = map(micLevel, 0.0, 1.0, 0, 1000);

    for (var i = 0; i < myParticles.length; i++) {
      var particle = myParticles[i];
      if (particle.possY > height - 10) {
        particle.applyForce(newVol / particle.rad * random(-0.3, 0.3), -newVol / particle.rad * random(0.8, 1.2));
        particle.update();
      }
    }
    for (var i = 0; i < myParticles.length; i++) {
      myParticles[i].applyAttraction(width / 2, height / 2);
      myParticles[i].update();
      myParticles[i].display();
    }
    pop();
  } else if (state == 7) {
    background(0);
    push();
    col = color(random(255), random(255), random(255));

    myCircle1 = {
      size: 5,
      gap: 20
    };
    var howManyTimes = width / myCircle1.size;
    var startX = myCircle1.size / 2;
    var startY = myCircle1.size / 2;

    stroke(0);
    strokeWeight(1);
    fill(col);

    // visual circles
    for (var x = 0; x < howManyTimes; x++) {
      for (var y = 0; y < howManyTimes; y++) {
        var posX = startX + (myCircle1.size + myCircle1.gap) * x;
        var posY = startY + (myCircle1.size + myCircle1.gap) * y;
        //distance
        //dist (x1, y1, x2, y2);
        var distanceFromCenter = dist(width / 2, height / 2, posX, posY);
        var newSize = myCircle1.size * (width - distanceFromCenter) / width;
        // micLevel = mic.getLevel();
        ellipse(posX, posY, newSize + micLevel * 200, newSize + micLevel * 200);
      }
    }
    pop();
  } else if (state == 8) {
    // background(150, 150, 150);
    push();
    col = color(random(255), random(255), random(255));

    myRectangle = {
      size: 3,
      gap: 20
    };
    var howManyTimes = width / myRectangle.size;
    var startX = myRectangle.size / 2;
    var startY = myRectangle.size / 2;

    stroke(0);
    strokeWeight(1);
    fill(col);

    // visual rectangles
    for (var x = 0; x < howManyTimes; x++) {
      for (var y = 0; y < howManyTimes; y++) {
        var posX = startX + (myRectangle.size + myRectangle.gap) * x;
        var posY = startY + (myRectangle.size + myRectangle.gap) * y;
        //distance
        //dist (x1, y1, x2, y2);
        var distanceFromCenter = dist(width / 2, height / 2, posX, posY);
        var newSize = myRectangle.size * (width - distanceFromCenter) / width;
        // micLevel = mic.getLevel();
        rect(posX, posY, newSize + micLevel * 200, newSize + micLevel * 200);
      }
    }
    pop();
  } else if (state == 9) {
    background(0);
    push();
    col = color(random(255), random(255), random(255));

    myTriangle = {
      w: 20 + micLevel * 200,
      h: 20 + micLevel * 200
    };
    var howManyTimes = width / myTriangle.w;
    stroke(0);
    strokeWeight(1);
    fill(col);

    // visual triangles
    for (var y = 0; y < howManyTimes; y++) { // connected to y location
      for (var x = 0; x < howManyTimes; x++) { // connected to x location
        var posX = myTriangle.w * x;
        var posY = myTriangle.h * y;
        triangle(posX, posY, posX, posY + myTriangle.h, posX + myTriangle.w, posY + myTriangle.h);
      }
    }
    pop();
  } else if (state == 10) {
    background(0);
    push();
    fill(color(random(255), random(255), random(255))); // white
    ellipse(random(100, 900), random(100, 600), micLevel * 2000, micLevel * 2000);
    pop();
  } else if (state == 11) {
    push();
    fill(random(255), random(255), random(255));
    ellipse(random(100, 900), random(100, 600), micLevel * 2000, micLevel * 2000);
    pop();
  } else if (state == 12) {
    //this code is courtesy of my classmate Sabrina: http://sabrinaaa.com/2015/10/28/icm_week_8_play_with_sound/
    background(0);
    push();
    col1 = color(random(255), random(255), random(255));
    fill(col1);
    var newVol = map(micLevel, 0.0, 1.0, 0, 1000);

    for (var i = 0; i < myParticles.length; i++) {
      var particle = myParticles[i];
      if (particle.possY > height - 10) {
        particle.applyForce(newVol / particle.rad * random(-0.3, 0.3), -newVol / particle.rad * random(0.8, 1.2));
        particle.update();
      }
    }
    for (var i = 0; i < myParticles.length; i++) {
      myParticles[i].applyAttraction(width / 2, height / 2);
      myParticles[i].update();
      myParticles[i].display();
    }
    pop();
  } else if (state == 13) {
    background(0);
    var spectrum = fft.analyze();
    push();
    noFill();
    stroke(255);
    beginShape();
    for (var i = 0; i < spectrum.length; i++) {
      vertex(i, map(spectrum[i], 0, 255, height, 0));
    }
    endShape();
    pop();
  } else if (state == 14) {
    background(0);
    var waveform = fft.waveform();
    push();
    beginShape();
    for (var i = 0; i < waveform.length; i++) {
      var waveformX = map(i, 0, waveform.length, 0, width);
      var waveformY = map(waveform[i], -1, 1, 0, height);
      noFill();
      stroke(255);
      vertex(waveformX, waveformY);
    }
    endShape();
    pop();
  } else if (state == 15) {
    background(0);
    var spectrum = fft.analyze();
    push();
    noFill();
    stroke(random(0, 255), random(0, 255), 255);
    beginShape();
    for (var i = 0; i < spectrum.length; i++) {
      vertex(i, map(spectrum[i], 0, 255, height, 0));
    }
    endShape();
    pop();
  } else if (state == 16) {
    background(0);
    var waveform = fft.waveform();
    push();
    beginShape();
    for (var i = 0; i < waveform.length; i++) {
      var waveformX = map(i, 0, waveform.length, 0, width);
      var waveformY = map(waveform[i], -1, 1, 0, height);
      noStroke();
      fill(random(0, 255), random(0, 255), 255);
      vertex(waveformX, waveformY);
    }
    endShape();
    pop();
  }
}

function canvasFullScreen() {
  var fs = fullScreen(canvas);
  fullScreen(!fs);
  if (!fs) {
    setTimeout(function() {
      console.log('changing');
      if (video) {
        video.hide();
      }
      h1.hide();
      h2.hide();
      h3.hide();
      canvas.style("border", "none");
      noCursor();
      resizeCanvas(windowWidth, windowHeight);
      canvas.position(0, 0);
    }, 1000)
  }
}

function keyPressed() {
  if (keyCode === ESCAPE) {
    resizeCanvas(1150, 550);
    canvas.position(30, 50);
    video.show();
    h1.show();
    h2.show();
    h3.show();
    canvas.style("border", "ridge");
  }
}