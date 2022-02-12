var bow, arrow;
var bowImage, arrowImage, greenImg, redImg, pinkImg, blueImg, backImg;
var red, blue, green, pink, arrow;

function preload() {
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  greenImg = loadImage("green_balloon0.png");
  redImg = loadImage("red_balloon0.png");
  pinkImg = loadImage("pink_balloon0.png");
  blueImg = loadImage("blue_balloon0.png");
}

function setup() {
  createCanvas(400, 400);

  //criar um plano de fundo
  scene = createSprite(0, 0, 400, 400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5;

  // criar um arco para a flecha
  bow = createSprite(380, 220, 20, 50);
  bow.addImage(bowImage);
  bow.scale = 1;
}

function draw() {
  background(0);
  // mover o chão
  scene.velocityX = -3;

  if (scene.x < 0) {
    scene.x = scene.width / 2;
  }

  //mover o arco
  bow.y = World.mouseY;

  // soltar a flecha quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
  }

  baloes();

  drawSprites();
}

// criar flechas para o arco
function createArrow() {
  arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
 red = createSprite(Math.round(random(20, 370)), 0, 10, 10);
  red.addImage(redImg);
  red.velocityY = 3;
  red.lifetime = 150;
  red.scale = 0.1;
}

function blueBalloon() {
  //crieSprite para o balão
  blue = createSprite( Math.round(random(20, 370)), 0, 10, 10);
  //adicioneImagem para o balão
  blue.addImage(blueImg);
  //adicione velocidade para fazer o balão se mover
  blue.velocityY = 3;
  //mudar a dimensão do balão
  blue.scale = 0.1;
  //atribua tempo de vida ao balão
  blue.lifetime = 150;
}

function greenBalloon() {
  //crieSprite para o balão
  green = createSprite(Math.round(random(20, 370)), 0, 10, 10);
  //adicioneImagem para o balão
  green.addImage(greenImg);
  //adicione velocidade para fazer o balão se mover
  green.velocityY = 3;
  //mudar a dimensão do balão
  green.scale = 0.1;
  //atribua tempo de vida ao balão
  green.lifetime = 150;
}

function pinkBalloon() {
  //crieSprite para o balão
 pink = createSprite(Math.round(random(20, 370)), 0, 10, 10);
  //adicioneImagem para o balão
  pink.addImage(pinkImg);
  //adicione velocidade para fazer o balão se mover
  pink.velocityY = 3;
  //mudar a dimensão do balão
  pink.scale = 1.4;
  //atribua tempo de vida para o balao
  pink.lifetime = 150;
}

function baloes() {
  //mude o valor do balão aleatório para 4
  var select_balloon = Math.round(random(1, 4));

  if (World.frameCount % 60 == 0) {
    switch (select_balloon) {
      case 1:
        redBalloon();
        break;
      case 2:
        blueBalloon();
        break;
      case 3:
        greenBalloon();
        break;
      case 4:
        pinkBalloon();
        break;
      default:
        break;
    }
  }
}
