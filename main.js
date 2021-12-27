var last_position_touch_x, last_position_touch_y;
var current_position_touch_x, current_position_touch_y;
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");    
    color = "black";
    width_of_line = 2;
var width = screen.width;
new_width=screen.width-70;
new_height=screen.height-300;

if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touch_start);

function my_touch_start(e){
    console.log("my_touch_start");
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    last_position_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_touch_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touch_move);
function my_touch_move(e){
    console.log("my_touch_move");
    var current_position_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    var current_position_touch_y=e.touches[0].clientY-canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
console.log("last position of touch x = "+ last_position_touch_x +"last position of touch y = " + last_position_touch_y);
ctx.moveTo(last_position_touch_x, last_position_touch_y);


console.log("current position of touch x = "+ current_position_touch_x +"current position of touch y = " + current_position_touch_y);
ctx.lineTo(current_position_touch_x, current_position_touch_y);
ctx.stroke();

last_position_touch_x=current_position_touch_x;
last_position_touch_y=current_position_touch_y;
}