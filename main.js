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