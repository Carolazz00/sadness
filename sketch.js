let grafiche = [];
let lettere = [];
/** @type {Font} */
let font;
let angle1 = 0;
let angle2 = 0;
let speed1 = 0.01;
let speed2 = 0.03;

function preload() {
  grafiche = [
    {
      posizione: { riga: 1, colonna: 1},
      sotto: { svg: loadSVG("./assets/A-3.svg"), angolo: -1 },
      centro: { svg: loadSVG("./assets/A-2.svg"), angolo: 1 },
      sopra: { svg: loadSVG("./assets/A-1.svg"), angolo: 2 },
    },
   
    {
      posizione: { riga: 1, colonna: 2 },
      sotto: { svg: loadSVG("./assets/B-3.svg"), angolo: -1 },
      centro: { svg: loadSVG("./assets/B-2.svg"), angolo: 1 },
      sopra: { svg: loadSVG("./assets/B-1.svg"), angolo: 2 },
    },
     {
      posizione: { riga: 1, colonna: 3},
      sotto: { svg: loadSVG("./assets/D-1.svg"), angolo: -1 },
      centro: { svg: loadSVG("./assets/D-2.svg"), angolo: 1 },
      sopra: { svg: loadSVG("./assets/D-3.svg"), angolo: 2 },
    },
   
     {
      posizione: { riga: 2, colonna: 2},
      sotto: { svg: loadSVG("./assets/A-3.svg"), angolo: -1 },
      centro: { svg: loadSVG("./assets/A-2.svg"), angolo: 1 },
      sopra: { svg: loadSVG("./assets/A-1.svg"), angolo: 2 },
    },
   
    {
      posizione: { riga: 2, colonna: 1 },
      sotto: { svg: loadSVG("./assets/B-3.svg"), angolo: -1 },
      centro: { svg: loadSVG("./assets/B-2.svg"), angolo: 1 },
      sopra: { svg: loadSVG("./assets/B-1.svg"), angolo: 2 },
    },
     {
      posizione: { riga: 2, colonna: 3},
      sotto: { svg: loadSVG("./assets/D-1.svg"), angolo: -1 },
      centro: { svg: loadSVG("./assets/D-2.svg"), angolo: 1 },
      sopra: { svg: loadSVG("./assets/D-3.svg"), angolo: 2 },
    },
     {
      posizione: { riga: 3, colonna: 3},
      sotto: { svg: loadSVG("./assets/A-3.svg"), angolo: -1 },
      centro: { svg: loadSVG("./assets/A-2.svg"), angolo: 1 },
      sopra: { svg: loadSVG("./assets/A-1.svg"), angolo: 2 },
    },
   
    {
      posizione: { riga: 3, colonna: 2 },
      sotto: { svg: loadSVG("./assets/B-3.svg"), angolo: -1 },
      centro: { svg: loadSVG("./assets/B-2.svg"), angolo: 1 },
      sopra: { svg: loadSVG("./assets/B-1.svg"), angolo: 2 },
    },
     {
      posizione: { riga: 3, colonna: 1},
      sotto: { svg: loadSVG("./assets/D-1.svg"), angolo: -1 },
      centro: { svg: loadSVG("./assets/D-2.svg"), angolo: 1 },
      sopra: { svg: loadSVG("./assets/D-3.svg"), angolo: 2 },
    },
     {
      posizione: { riga: 4, colonna: 2},
      sotto: { svg: loadSVG("./assets/A-3.svg"), angolo: -1 },
      centro: { svg: loadSVG("./assets/A-2.svg"), angolo: 1 },
      sopra: { svg: loadSVG("./assets/A-1.svg"), angolo: 2 },
    },
   
    {
      posizione: { riga: 4, colonna: 1 },
      sotto: { svg: loadSVG("./assets/B-3.svg"), angolo: -1 },
      centro: { svg: loadSVG("./assets/B-2.svg"), angolo: 1 },
      sopra: { svg: loadSVG("./assets/B-1.svg"), angolo: 2 },
    },
     {
      posizione: { riga: 4, colonna: 3},
      sotto: { svg: loadSVG("./assets/D-1.svg"), angolo: -1 },
      centro: { svg: loadSVG("./assets/D-2.svg"), angolo: 1 },
      sopra: { svg: loadSVG("./assets/D-3.svg"), angolo: 2 },
    },
    
   
   
  ];

  font = loadFont("./fonts/EMOLAND REGULAR_0.TTF");
}

function setup() {
  createCanvas(400, 500, SVG);
  addDownloadButton();
  imageMode(CENTER);
}

function draw() {
  lettere = [
    
    { char: "T", riga: 1, colonna: 1 },
      { char: "P", riga: 1, colonna: 2 },
        { char: "I", riga: 2, colonna: 1 },
          { char: "S", riga: 2, colonna: 2},
            { char: "T", riga: 2, colonna: 3 },
              { char: "E", riga: 3, colonna: 1 },
                { char: "Z", riga: 3, colonna: 2 },
                 { char: "Z", riga: 4, colonna: 2 },
                  { char: "A", riga: 4, colonna: 3 },
    
  ];

  clear();
  background("white");

  angle1 += speed1;
  angle2 += speed2;

  // 先画图形
  for (let grafica of grafiche) {
    disegnaGrafica(grafica);
  }

  // 后画文字
  textFont(font);
  textSize(100);
  textAlign(CENTER, CENTER);
  for (let lettera of lettere) {
    let x = lettera.colonna * 100;
    let y = lettera.riga * 100-5;
    noStroke();
    strokeWeight(0);
    fill("#243e96");
    text(lettera.char, x, y);
  }
  noStroke(); // 关闭描边，以防影响后续绘图
}

function disegnaGrafica(grafica) {
  let x = grafica.posizione.colonna * 100;
  let y = grafica.posizione.riga * 100;

  push();
  translate(x, y);
  rotate(angle1 * grafica.sotto.angolo);
  tint(255, 127)
  image(grafica.sotto.svg, 0, 0,125, 125);
  pop();

  push();
  translate(x, y);
  rotate(angle1 * grafica.centro.angolo);
  tint(255, 127)
  image(grafica.centro.svg, 0, 0,125, 125);
  pop();

  push();
  translate(x, y);
  rotate(angle1 * grafica.sopra.angolo);
  tint(255, 127)
  image(grafica.sopra.svg, 0, 0, 125, 125);
  pop();
}