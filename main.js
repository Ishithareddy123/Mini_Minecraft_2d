var canvas=new fabric.Canvas("myCanvas");
var block_img_width=30;
var block_img_height=30;
player_x=10;
player_y=10;
player_object="";
img_object="";
function add_player(){
  fabric.Image.fromURL("player.png",function(Img){
  player_object=Img;
  player_object.scaleToWidth(150);
  player_object.scaleToHeight(120);
  player_object.set(
      {
          top:player_y,
          left:player_x,
      }
  );
canvas.add(player_object);
  })  
}
function add_object(ob){
    fabric.Image.fromURL(ob,function(Img){
    img_object=Img;
   img_object.scaleToWidth(block_img_width);
    img_object.scaleToHeight(block_img_height);
    img_object.set(
        {
            top:player_y,
            left:player_x,
        }
    );
  canvas.add(img_object);
    })  
  }
  window.addEventListener("keydown",my_keydown);
  function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(e.shiftKey == true && keypress=='80'){
      block_img_height+=10;
      block_img_width+=10;
    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(e.shiftKey == true && keypress=='77'){
      block_img_height-=10;
      block_img_width-=10;
    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(keypress=='67'){
      add_object("cloud.jpg");
      console.log(keypress);
    }
    if(keypress=='68'){
      add_object("dark_green.png");
      console.log(keypress);
    }
    if(keypress=='71'){
      add_object("ground.png");
      console.log(keypress);
    }
    if(keypress=='76'){
      add_object("light_green.png");
      console.log(keypress);
    }
    if(keypress=='82'){
      add_object("roof.jpg");
      console.log(keypress);
    }
    if(keypress=='84'){
      add_object("trunk.jpg");
      console.log(keypress);
    }
    if(keypress=='81'){
      add_object("unique.png");
      console.log(keypress);
    }
    if(keypress=='87'){
      add_object("wall.jpg");
      console.log(keypress);
    }
    if(keypress=='89'){
      add_object("yellow_wall.png");
      console.log(keypress);
    }
    if(keypress=="37"){
      left();
    }
    if(keypress=="39"){
      right();
    }
    if(keypress=="38"){
      up();
    }
    if(keypress=="40"){
      down()
    }
  }
  function left(){
    if(player_x>0){
      player_x-=block_img_width;
canvas.remove(player_object);
add_player();
    }
    
  }
  function right(){
    if(player_x<750){
      player_x+=block_img_width;
canvas.remove(player_object);
add_player();
    }
    
  }
  function up(){
    if(player_y>0){
      player_y-=block_img_height;
canvas.remove(player_object);
add_player();
    }
    
  }
  function down(){
    if(player_y<580){
      player_y+=block_img_height;
canvas.remove(player_object);
add_player();
    }
    
  }
  function clear(){
    var objects=canvas.getObjects();
    canvas.remove(objects[0]);
  }