{ //variáveis

  //menu

  var preJogo = 0; //telas da história (0-14)
  var animacao = "a"; //animação do título no inicio do jogo (a/b)
  var mouse = "nao", espaco = "nao"; //mouse/espaco pressionado (sim/não)
  var audio = "musicaToque"; //tipo de áudio (mudo/toque/musica/musicaToque)
  var estado = "inicio"; //estado do jogo (inicio/instrucoes/historia/transicao/jogo/fimDeJogo)

  var reset, reset0; //botão de reiniciar o jogo
  var fundo1, fundo2, fundo3; //backgrounds do jogo
  var controle, controle1; //imagem dos controles do jogo
  var perdeu, perdeuVida, perdeuCombustivel; //imagens de fim de jogo
  var jogar, jogar1, instrucoes, instrucoes1; //botões da tela inicial
  var tituloA, tituloB, tituloC, titulo0, titulo1; //imagens do nome do jogo
  var som, somA0, somB0, somC0, somD0, somA1, somB1, somC1, somD1; //botões de som
  var menu, menuA, menuB, menuC0, menuC1, seta, seta1, skip, skip1; //botões da história

  //jogo

  var asteroidesQ = 0, lixosQ = 0; //qunatidade de asteroides e lixos pegos
  var vidaQ = 197, bateriaQ = 197; //quantidade da vida do jogador / bateria da nave
  var tipoDeMorte; //determina o modo em que o jogador perdeu o jogo (asteroides/combustível)

  var misseis, asteroides, lixos, enegias, reparos, bombas; //grupos dos sprites

  //sprites (0: preto e branco / 1+: colorido / M: sprite do menu da tela de jogo)
  var missel, missel0, missel1, missel2, missel3, missel4, missel5;
  var asteroide, asteroide0, asteroide1, asteroideM;
  var universo, universo0A, universo0B, universo1;
  var bomba, bomba0, bomba1, explosao0, explosao1;
  var bateria, bateria0, bateria1;
  var energia, energia0, energia1;
  var lixo, lixo0, lixo1, lixoM;
  var reparo, reparo0, reparo1;
  var marte, marte0, marte1;
  var nastd, nastd0, nastd1;
  var poli, poli0, poli1;
  var vida, vida0, vida1;
  var banner1, banner2;
}

{ //pre carregamento e configurações

  const pre_carregamento = document.querySelector("div.pre-carregamento"); //carregamento da página

  function preCarregamento(){
    pre_carregamento.style.opacity = "0";
    setTimeout(() => {
      pre_carregamento.style.display = "none";
    }, 1500);
  }

  function preload(){

    //menu

    fundo1 = loadImage("Images/menu/fundo1.jpg");
    fundo2 = loadImage("Images/menu/fundo2.jpg");
    fundo3 = loadImage("Images/menu/fundo3.jpg")

    jogar1 = loadImage("Images/menu/jogar.png");
    titulo0 = loadImage("Images/menu/titulo0.png");
    titulo1 = loadImage("Images/menu/titulo1.png");
    instrucoes1 = loadImage("Images/menu/instrucoes.png");

    somA0 = loadImage("Images/som/somA0.png");
    somB0 = loadImage("Images/som/somB0.png");
    somC0 = loadImage("Images/som/somC0.png");
    somD0 = loadImage("Images/som/somD0.png");
    somA1 = loadImage("Images/som/somA1.png");
    somB1 = loadImage("Images/som/somB1.png");
    somC1 = loadImage("Images/som/somC1.png");
    somD1 = loadImage("Images/som/somD1.png");

    skip1 = loadImage("Images/seta/skip.png");
    menuA = loadImage("Images/menu/menuA.png");
    menuB = loadImage("Images/menu/menuB.png");
    menuC0 = loadImage("Images/menu/menuC0.png");
    menuC1 = loadImage("Images/menu/menuC1.png");
    reset0 = loadImage("Images/reset/reset.png");
    controle1 = loadImage("Images/menu/controle.png");

    //sprites   

    seta1 = loadImage("Images/seta/seta.png");

    nastd0 = loadImage("Images/nastd/nastd0.png");
    nastd1 = loadImage("Images/nastd/nastd1.png");

    poli0 = loadImage("Images/poli/poli0.png");
    poli1 = loadImage("Images/poli/poli1.png");

    missel0 = loadImage("Images/missel/missel0.png");
    missel1 = loadImage("Images/missel/missel1.png");
    missel2 = loadImage("Images/missel/missel2.png");
    missel3 = loadImage("Images/missel/missel3.png");
    missel4 = loadImage("Images/missel/missel4.png");
    missel5 = loadImage("Images/missel/missel5.png");

    asteroide0 = loadImage("Images/asteroide/asteroide0.png");
    asteroide1 = loadImage("Images/asteroide/asteroide1.png");

    lixo0 = loadImage("Images/lixo/lixo0.png");
    lixo1 = loadImage("Images/lixo/lixo1.png");

    universo0A = loadImage("Images/universo/universo0A.png");
    universo0B = loadImage("Images/universo/universo0B.png");
    universo1 = loadImage("Images/universo/universo1.png");

    vida0 = loadImage("Images/vida/vida0.png");
    vida1 = loadImage("Images/vida/vida1.png");

    reparo0 = loadImage("Images/reparo/reparo0.png");
    reparo1 = loadImage("Images/reparo/reparo1.png");

    bateria0 = loadImage("Images/bateria/bateria0.png");
    bateria1 = loadImage("Images/bateria/bateria1.png");

    energia0 = loadImage("Images/energia/energia0.png");
    energia1 = loadImage("Images/energia/energia1.png");

    bomba0 = loadImage("Images/bomba/bomba0.png");
    bomba1 = loadImage("Images/bomba/bomba1.png");

    explosao0 = loadImage("Images/bomba/explosao0.png");
    explosao1 = loadImage("Images/bomba/explosao1.png");
  }

  function setup(){

    createCanvas(windowWidth, windowHeight); 
    
    marte0 = loadAnimation(
      "Images/marte/marte1A.png",
      "Images/marte/marte0B.png",
      "Images/marte/marte0C.png",
      "Images/marte/marte0D.png",
      "Images/marte/marte0D.png"
    );
    
    marte1 = loadAnimation(
      "Images/marte/marte1A.png",
      "Images/marte/marte1B.png",
      "Images/marte/marte1C.png",
      "Images/marte/marte1D.png"
    );

    perdeuVida = loadAnimation("Images/perdeu/perdeuVida.png");
    perdeuCombustivel = loadAnimation("Images/perdeu/perdeuCombustivel.png");

    instrucoes = createSprite(width/2, 280);
    instrucoes.setCollider("rectangle", 0, 0, 560, 232);
    instrucoes.addImage(instrucoes1);
    instrucoes.visible = false;
    instrucoes.scale = 0.45;

    jogar = createSprite(width/2, instrucoes.y-150);
    jogar.setCollider("rectangle", 0, 0, 560, 232);
    jogar.addImage(jogar1);
    jogar.visible = false;
    jogar.scale = 0.45;

    tituloA = createSprite(width/2-150, instrucoes.y+240);
    tituloA.addImage(titulo1);
    tituloA.visible = false;
    tituloA.velocityX = 5;

    tituloB = createSprite(-2000, instrucoes.y+240);
    tituloB.addImage(titulo1);
    tituloB.visible = false;
    tituloB.velocityX = 5;

    tituloC = createSprite(135, 35);
    tituloC.addImage(titulo0);
    tituloC.visible = false;
    tituloC.scale = 0.4;
    
    controle = createSprite(width/2, height/2-30);
    controle.addImage(controle1);
    controle.visible = false;
    controle.scale = 1.8;

    skip = createSprite(width-50, height-47);
    skip.addImage(skip1);
    skip.visible = false;
    skip.scale = 0.25;
    
    menu = createSprite();
    som = createSprite();

    perdeu = createSprite(width/2, height/2-140);
    perdeu.addAnimation("perdeuCombustivel", perdeuCombustivel);
    perdeu.addAnimation("perdeuVida", perdeuVida);
    perdeu.visible = false;

    reset = createSprite(width/2+100, height/2+110);
    reset.setCollider("circle", 0, 30, 150);
    reset.addImage(reset0);
    reset.visible = false;
    reset.scale = 0.35;

    marte = createSprite(width/2, height/2);
    marte.addAnimation("girando", marte1);
    marte.addAnimation("mudando", marte0);
    marte.frameDelay = 30;
    marte.visible = false;
    marte.scale = 1.2;

    seta = createSprite(width/2, height-45);
    seta.setCollider("rectangle", 0, 0, 450, 300);
    seta.addImage(seta1);
    seta.visible = false;
    seta.scale = 0.25;

    banner1 = createSprite(width/2, 42.5, width, 85);
    banner1.shapeColor = 255;
    banner1.visible = false;
    banner1.depth = 1;

    banner2 = createSprite(width/2, height+70, width, 30);

    nastd = createSprite(width/2, height-100);
    nastd.setCollider("rectangle", 0, 10, 300, 510);
    nastd.addImage(nastd0);
    nastd.visible = false;
    nastd.scale = 0.3;
    nastd.depth = 2;

    poli = createSprite(width/2, height/2);
    poli.setCollider("rectangle", 0, 0, 400, 750);
    poli.addImage(poli0);
    poli.visible = false;
    poli.scale = 0.1;
    poli.depth = 2;

    universo = createSprite(width-43, 43);
    universo.addImage(universo0A);
    universo.visible = false;
    universo.scale = 0.2;

    vida = createSprite(330, 25);
    vida.visible = false;
    vida.addImage(vida0);
    vida.scale = 0.06;
    vida.depth = 1;

    bateria = createSprite(330, 57);
    bateria.addImage(bateria0);
    bateria.visible = false;
    bateria.scale = 0.07;
    bateria.depth = 1;

    asteroideM = createSprite(width/2-30, 43);
    asteroideM.addImage(asteroide0);
    asteroideM.visible = false;
    asteroideM.scale = 0.23;

    lixoM = createSprite(width/2+170, 40);
    lixoM.addImage(lixo0);
    lixoM.visible = false;
    lixoM.scale = 0.13;

    asteroides = createGroup();
    misseis = createGroup();
    energias = createGroup();
    reparos = createGroup();
    bombas = createGroup();
    lixos = createGroup();
  }

  function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }
}

function draw(){

  //controle do mouse
  if(mouseDown("leftButton")){
    mouse = "sim";
  }else{
    mouse = "nao";
  }

  if(estado === "inicio"){

    background(fundo1);
    inicio();
    drawSprites();

  }else if(estado === "instrucoes"){

    background(fundo2);
    comoJogar();
    drawSprites();

  }else if(estado === "historia"){

    historia();
    marte.play();

  }else if(estado === "transicao"){

    background("#F5D9AB");
    drawSprites();
    transicao();

  }else if(estado === "jogo"){

    background(255);
    drawSprites();
    jogo();
    marte.pause();

  }else{
    
    background(255);
    drawSprites();
    fimDeJogo();
  }
}

{ //inicio do jogo

  function inicio(){

    //mostra e esconde sprites
    instrucoes.visible = true;
    controle.visible = false;
    banner1.visible = false;
    perdeu.visible = false;
    tituloA.visible = true;
    tituloB.visible = true;
    marte.visible = false;
    reset.visible = false;
    jogar.visible = true;
    menu.visible = false;
    seta.visible = false;
    skip.visible = false;
    som.visible = true;

    //altera valores de variáveis
    asteroidesQ = 0
    bateriaQ = 197;
    vidaQ = 197;
    preJogo = 0;
    lixosQ = 0;
     
    //edita os sprites som e menu

    som.x = width-130, som.y = 110;
    som.addImage(somD1);
    som.scale = 0.35;
  
    menu.x = 80, menu.y = height-80;
    menu.setCollider("circle", 0, 0, 180);
    menu.addImage(menuA);
    menu.scale = 0.3;
  
    //funções do inicio do jogo
    animacaoTitulo();
    botoesInicio();
  }

  function animacaoTitulo(){

    if(tituloA.x > width-333 && animacao === "a"){
      animacao = "b";
      tituloB.x = -330;
    }
  
    if(tituloB.x > width-333 && animacao === "b"){
      animacao = "a";
      tituloA.x = -330;
    }
  }

  function botoesInicio(){

    //animações com o mouse em cima dos botões

    cursor("auto");

    if(mouseIsOver(jogar)){
      jogar.scale = 0.5;
      cursor("pointer");
    }else{
      jogar.scale = 0.45;
    }
  
    if(mouseIsOver(instrucoes)){
      instrucoes.scale = 0.5;
      cursor("pointer");
    }else{
      instrucoes.scale = 0.45;
    }

    //botões pressionados

    if(mousePressedOver(jogar) || mousePressedOver(instrucoes)){
      
      //esconde sprites
      instrucoes.visible = false;
      tituloA.visible = false;
      tituloB.visible = false;
      jogar.visible = false;
      som.visible = false;
  
      //muda o estado do jogo 
      if(mousePressedOver(jogar)){
        marte.changeAnimation("girando");
        estado = "historia";
      }else{
        estado = "instrucoes"; 
      }
    }
  }
  
  function comoJogar(){
  
    //mostra o tutorial e o botão para voltar
    controle.visible = true;
    menu.visible = true;
  
    //animações com o mouse em cima do botão
    if(mouseIsOver(menu)){
      menu.scale = 0.32;
      cursor("pointer");
    }else{
      menu.scale = 0.3;
      cursor("auto");
    }
  
    //botão pressionado
    if(mousePressedOver(menu)){
      estado = "inicio";
    }
  }
}

{ //história do jogo

  function historia(){

    //mostra e esconde sprites
    marte.visible = true;
    skip.visible = true;
    menu.visible = true;
    seta.visible = true;
    som.visible = false;

    //edita os sprites marte e menu

    marte.scale = 1.2;
  
    menu.x = 43, menu.y = height-43;
    menu.setCollider("rectangle", 0, -20, 300, 300);
    menu.addImage(menuB);
   
    //funções da história
    mudarFundo();
    drawSprites();
    botoesHistoria();
    elementos();
  }
  
  function botoesHistoria(){
  
    cursor("auto");
  
    //menu (voltar ao menu)
  
    if(mouseIsOver(menu)){
      menu.scale = 0.27;
      cursor("pointer");
    }else{
      menu.scale = 0.23;
    }
  
    if(mousePressedOver(menu) && mouse === "nao"){
      estado = "inicio";
      preJogo = 0;
    }
  
    //seta (mudar texto)
  
    if(mouseIsOver(seta)){
      seta.scale = 0.3;
      cursor("pointer");
    }else{
      seta.scale = 0.25;
    }
  
    if(mousePressedOver(seta) && mouse === "nao"){
      preJogo++;
    }
  
    //skip (pular história)
  
    if(mouseIsOver(skip)){
      skip.scale = 0.3;
      cursor("pointer");
    }else{
      skip.scale = 0.25;
    }
  
    if(mousePressedOver(skip) && mouse === "nao"){
      marte.changeAnimation("mudando");
      marte.setFrame(0);
      preJogo = 14;
    }
  }
  
  function mudarFundo(){
  
    //o background vai ficando mais claro ao decorrer da história
    if(preJogo === 0){
  
      background("#845919");
  
    }else if(preJogo === 1){
  
      background("#8E6221");
  
    }else if(preJogo === 2){
  
      background("#946D24");
  
    }else if(preJogo === 3){
  
      background("#9C7628");
  
    }else if(preJogo === 4){
  
      background("#AD8034");
  
    }else if(preJogo === 5){
  
      background("#BE8A3F");
  
    }else if(preJogo === 6){
  
      background("#C69646");
  
    }else if(preJogo === 7){
  
      background("#D3A34D");
  
    }else if(preJogo === 8){
  
      background("#D8A959");
  
    }else if(preJogo === 9){
  
      background("#DFAD62");
  
    }else if(preJogo === 10){
  
      background("#E5AF6B");
  
    }else if(preJogo === 11){
  
      background("#E2BA74");
  
    }else if(preJogo === 12){
  
      background("#E7BF82");
  
    }else if(preJogo === 13){
      
      background("#ECC28C");
  
    }else{

      background("#F5DFBA");
    }
  }
  
  function elementos(){

    //fundo da barra de progresso da história
    if(preJogo < 14){
      strokeWeight(3);
      stroke("#16213D");
      fill("lightBlue")
      rect(-10, 40, width+20, 20);
    }
  
    //configurações do texto da história
    textSize(40);
    textAlign(CENTER);
    textFont("Geórgian");

    //mudança de barra de progresso e texto ao decorrer da história
    if(preJogo === 0){
  
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("O ano é 2148...", width/2, height/2+20);
  
    }else if(preJogo === 1){
  
      noStroke();
      fill("#16213D");
      rect(0, 40, width/13, 20);
  
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("Os humanos finalmente", width/2, height/2);
      text("colonizaram Marte!", width/2, height/2+50);
      
    }else if(preJogo === 2){
          
      noStroke();
      fill("#16213D");
      rect(0, 40, width/13*2, 20);
  
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("Mas para que isso", width/2, height/2-50);
      text("acontecesse, eles", width/2, height/2);
      text("poluíram muito o", width/2, height/2+50);
      text("espaço sideral,", width/2, height/2+100);
      
    }else if(preJogo === 3){
  
      noStroke();
      fill("#16213D");
      rect(0, 40, width/13*3, 20);
  
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("e o Sr. Universo não", width/2, height/2);
      text("gostou nadinha disso.", width/2, height/2+50);
      
    }else if(preJogo === 4){
  
      noStroke();
      fill("#16213D");
      rect(0, 40, width/13*4, 20);
  
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("Então ele resolveu", width/2, height/2);
      text("se vingar!", width/2, height/2+50);
  
    }else if(preJogo === 5){
  
      noStroke();
      fill("#16213D");
      rect(0, 40, width/13*5, 20);
  
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("Asteroides foram", width/2, height/2-50);
      text("invocados e lançados", width/2, height/2);
      text("em direção ao", width/2, height/2+50);
      text("Planeta Vermelho,", width/2, height/2+100);
  
    }else if(preJogo === 6){
  
      noStroke();
      fill("#16213D");
      rect(0, 40, width/13*6, 20);
  
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("e a missão agora", width/2, height/2-50);
      text("é impedir que", width/2, height/2);
      text("eles exterminem", width/2, height/2+50);
      text("tudo e todos.", width/2, height/2+100);
  
    }else if(preJogo === 7){
  
      noStroke();
      fill("#16213D");
      rect(0, 40, width/13*7, 20);
  
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("Você acaba de ser", width/2, height/2-80);
      text("convocado para", width/2, height/2-30);
      text("pilotar a NASTD-i,", width/2, height/2+20);
      text("a nave desenvolvida", width/2, height/2+70);
      text("pela SpaceX 2.0", width/2, height/2+120);
  
    }else if(preJogo === 8){
  
    noStroke();
    fill("#16213D");
    rect(0, 40, width/13*8, 20);
  
    fill(255);
    strokeWeight(4);
    stroke("#BC383E");
    text("para aniquilar qualquer", width/2, height/2-50);
    text("tipo de corpo celeste que", width/2, height/2);
    text("seja uma ameaça", width/2, height/2+50);
    text("à população.", width/2, height/2+100);
  
  }else if(preJogo === 9){
  
    noStroke();
    fill("#16213D");
    rect(0, 40, width/13*9, 20);
    
    fill(255);
    strokeWeight(4);
    stroke("#BC383E");
    text("E para deixar o", width/2, height/2-50);
    text("Sr. Universo feliz,", width/2, height/2);
    text("você e a Poli,", width/2, height/2+50);
    text("sua robô assistente,", width/2, height/2+100);
    
    }else if(preJogo === 10){
  
      noStroke();
      fill("#16213D");
      rect(0, 40, width/13*10, 20);
      
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("devem recolher todo", width/2, height/2-30);
      text("o lixo espacial", width/2, height/2+20);
      text("lançado pelos humanos,", width/2, height/2+70);
      
    }else if(preJogo === 11){
  
      noStroke();
      fill("#16213D");
      rect(0, 40, width/13*11, 20);
      
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("só assim ele irá", width/2, height/2-30);
      text("parar de lançar", width/2, height/2+20);
      text("os asteroides.", width/2, height/2+70);
      
    }else if(preJogo === 12){
  
      noStroke();
      fill("#16213D");
      rect(0, 40, width/13*12, 20);
      
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("Defenda-os e", width/2, height/2-30);
      text("torne-se o", width/2, height/2+20);
      text("herói deles.", width/2, height/2+70);
      
    }else if(preJogo === 13){
  
      noStroke();
      fill("#16213D");
      rect(0, 40, width, 20);
      
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("Ahh e boa sorte,", width/2, height/2);
      text("pois você vai precisar!!", width/2, height/2+50);

    }else{ 

      //no final da história o estado do jogo é alterado
      estado = "transicao";

      //o sprite marte muda de animação
      marte.changeAnimation("mudando");
      marte.setFrame(0);

      //e os sprites de botões desaparecem
      menu.visible = false;
      seta.visible = false;
      skip.visible = false;
    }
  }

  function transicao(){

    //esconde o mouse
    noCursor();

    //o sprite marte muda de animação e começa a aumentar de tamanho (transição)
    marte.frameDelay = 30;
    marte.scale += 0.11;

    //quando o sprite mouse cobre toda a tela
    if(marte.scale >= 14){

      mouseX = width/2+100, mouseY = height/2+100; //o mouse muda de posição
      nastd.x = width/2, nastd.y = height-100; //a nave muda de posição
      marte.visible = false; //o sprite marte desaparece
      estado = "jogo"; //e o estado do jogo é alterado
    }
  }
}

{ //jogo

  function jogo(){

    //mostra sprites
    asteroideM.visible = true;
    universo.visible = true;
    perdeu.visible = false;
    bateria.visible = true;
    tituloC.visible = true;
    banner1.visible = true;
    reset.visible = false;
    lixoM.visible = true;
    nastd.visible = true;
    vida.visible = true;
    poli.visible = true;
    menu.visible = true;
    som.visible = true;
  
    //edita os sprites, som e menu

    som.x = width-170, som.y = 45;
    som.addImage(somD0);
    som.scale = 0.2; 

    menu.x = width-295, menu.y = 45;
    menu.addImage(menuC0);
    menu.scale = 0.2;

    gerador();
    nave();
    feedbacks();
    robo();
    botoesJogo();

    if(vidaQ < 10 || bateriaQ <= 1){

      estado = "fimDeJogo";

      lixos.destroyEach();
      misseis.destroyEach();
      reparos.destroyEach();
      energias.destroyEach();
      asteroides.destroyEach();

      if(vidaQ < 10){
        perdeu.changeAnimation("perdeuVida");
      }else{
        perdeu.changeAnimation("perdeuCombustivel");
      }
    }
  }

  function botoesJogo(){
    
    //menu

    if(mouseIsOver(menu)){
      cursor("pointer");
      menu.scale = 0.23;
    }else{
      menu.scale = 0.2;
    }

    if(mousePressedOver(menu)){

      estado = "inicio";

      lixos.destroyEach();
      misseis.destroyEach();
      reparos.destroyEach();
      energias.destroyEach();
      asteroides.destroyEach();

      vida.visible = false;
      poli.visible = false;
      nastd.visible = false;
      lixoM.visible = false;
      tituloC.visible = false;
      bateria.visible = false;
      universo.visible = false;
      asteroideM.visible = false;

      tituloA.x = width/2, tituloB.x = -2000;
    }
  }
  
  function feedbacks(){

    asteroidesLixos();
    barras();      
  }
  
  function asteroidesLixos(){

    fill(0);
    textSize(70);
    strokeWeight(5);
    textAlign(CENTER);
    textFont("Geórgian");
  
    if(asteroidesQ < 10){
      text("0"+asteroidesQ, asteroideM.x+80, 63);
    }else{
      text(asteroidesQ, asteroideM.x+80, 63);
    }
  
    if(lixosQ < 10){
      text("0"+lixosQ, lixoM.x+90, 63);
    }else{
      text(lixosQ, lixoM.x+90, 63);
    }  
  }

  function barras(){

    //barras de vida e combustível

      bateriaQ -= 0.05;

      //externas
      stroke(0);
      fill(255);
      strokeWeight(3);
      rect(vida.x+35, vida.y-10, 200,  20);
      rect(vida.x+35, bateria.y-10, 200, 20);
      //internas
      noStroke();
      fill("#242424");
      rect(vida.x+37, vida.y-8, vidaQ,  17);
      rect(vida.x+37, bateria.y-8, bateriaQ,  17);
  
    //barras do Sr. Universo

      //externa
      stroke(0);
      fill(255);
      strokeWeight(3);
      rectMode(CENTER);
      rect(universo.x, height/2+38, 20, height-110);
  }

  function nave(){
  
    //movimento
  
    if(keyDown("a") || keyDown("LEFT_ARROW")){
      bateriaQ -= 0.2;
      nastd.x -= 15;
    }
  
    if(keyDown("d") || keyDown("RIGHT_ARROW")){
      bateriaQ -= 0.2;
      nastd.x += 15;
    }
  
    if(nastd.x < 45){
      nastd.x = 45;
    }
  
    if(nastd.x > width-105){
      nastd.x = width-105;
    }
  
    //tiro
  
    if(keyDown("space") && espaco === "nao"){
      missel = createSprite(nastd.x, nastd.y-80);
      missel.addImage(missel0);
      missel.velocityY = -10;
      missel.lifetime = 60;
      misseis.add(missel);
      missel.scale = 0.1;
      missel.depth = 0;
      bateriaQ -= 2;
    }
  
    if(keyDown("space")){
      espaco = "sim";
    }else{
      espaco = "nao";
    }

    //colisões

    //asteroides e nave ou tela
    if(nastd.isTouching(asteroides) || banner2.isTouching(asteroides)){
      asteroides.destroyEach();
      vidaQ -= 196/4;
    }

    //asteroides e mísseis
    if(misseis.isTouching(asteroides)){
      asteroides.destroyEach();
      misseis.destroyEach();
      asteroidesQ++;
    }

    //nave e energia
    if(nastd.isTouching(energias)){
      energias.destroyEach();
      bateriaQ = 197;
    }

    //nave e reparo
    if(nastd.isTouching(reparos)){
      reparos.destroyEach();
      if(vidaQ < 197){
        vidaQ += 196/4;
      }
    }
  }
  
  function robo(){
  
    //movimento
  
    if(mouseY < 120){
      cursor("auto");
    }else{
      noCursor();
      poli.x = mouseX;
      poli.y = mouseY;
    }
  
    if(mouseX < 20){
      mouseX = 20;
      poli.x = 20
    }
  
    if(mouseX > width-80){
      mouseX = width-80;
      poli.x = width-80;
    }
  
    if(mouseY > height-37){
      mouseY = height-37;
      poli.y = height-37;
    }
  
    //coleta
    
    if(mousePressedOver(lixo) && mouse === "nao"){
      lixos.destroyEach();
      lixosQ++;
    }
  }
  
  function gerador(){
  
    let posXA = random(60, width-120);
    let posXL = random(60, width-120);
    let posXE = random(60, width-120);
    let posXV = random(60, width-120);
  
    //asteroides
    if(frameCount % 100 === 0){
      asteroide = createSprite(posXA, -10);
      asteroide.setCollider("circle", -10, 0, 130);
      asteroide.addImage(asteroide0);
      asteroides.add(asteroide);
      asteroide.velocityY = 8;
      asteroide.lifetime = 200;
      asteroide.scale = 0.3;
      asteroide.depth = 0;
    }

    //lixos
    if(frameCount % 170 === 0){
      lixo = createSprite(posXL, -10);
      lixo.setCollider("rectangle", 0, 0, 450, 450);
      lixo.addImage(lixo0);
      lixo.lifetime = 200;
      lixo.velocityY = 10;
      lixo.scale = 0.15;
      lixos.add(lixo);
      lixo.depth = 0;
    }
  
    //energia
    if(frameCount % 1200 === 0){
      energia = createSprite(posXE, -10);
      energia.addImage(energia0);
      energia.velocityY = 10;
      energia.lifetime = 200;
      energias.add(energia);
      energia.scale = 0.1;
      energia.depth = 0;
    }
  
    //vida
    if(frameCount % 2500 === 0){
      reparo = createSprite(posXV, -10);
      reparo.addImage(reparo0);
      reparo.velocityY = 5;
      reparo.lifetime = 200;
      reparos.add(reparo);
      reparo.scale = 0.1;
      reparo.depth = 0;
    }
  }
}

{ //fim do jogo

  function fimDeJogo(){

    som.visible = false;
    reset.visible = true;
    vida.visible = false;
    poli.visible = false;
    nastd.visible = false;
    perdeu.visible = true;
    lixoM.visible = false;
    tituloC.visible = false;
    bateria.visible = false;
    universo.visible = false;
    asteroideM.visible = false;

    menu.x = width/2-100, menu.y = height/2+120;
    menu.scale = 0.4;

    botoesFim();
  }

  function botoesFim(){

    cursor("auto");

    //animações com o mouse em cima dos botões


    if(mouseIsOver(menu)){
      cursor("pointer");
      menu.scale = 0.45;
    }else{
      menu.scale = 0.4;
    }

    if(mouseIsOver(reset)){
      cursor("pointer");
      reset.scale = 0.4;
    }else{
      reset.scale = 0.35;
    }

    //botões pressionados 

    if(mousePressedOver(menu) || mousePressedOver(reset)){

      if(mousePressedOver(reset)){

        estado = "jogo";
        asteroidesQ = 0
        bateriaQ = 197;
        vidaQ = 197;
        preJogo = 0;
        lixosQ = 0;

      }else{

        tituloA.x = width/2, tituloB.x = -2000;
        estado = "inicio";
      }
    }
  }
}