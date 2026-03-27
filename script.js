function openPopup(img){
let popup=document.getElementById("imagePopup");
let popupImg=document.getElementById("popupImg");
popup.style.display="block";
popupImg.src=img.src;
}

document.querySelector(".close").onclick=function(){
document.getElementById("imagePopup").style.display="none";
};


function generateArt(){

let arts=[

{
title:"Mandala Art",
image:"mandala.jpg",
desc:"Mandala art represents balance and harmony."
},

{
title:"Pencil Sketch",
image:"pencil.jpg",
desc:"Pencil sketching focuses on shading and realistic drawing."
},

{
title:"Watercolor Painting",
image:"watercolor.jpg",
desc:"Watercolor painting uses transparent flowing colors."
},

{
title:"Pop Art",
image:"pop.jpg",
desc:"Pop art uses bold colors inspired by popular culture."
},

{
title:"Abstract Art",
image:"abstract.jpg",
desc:"Abstract art uses colors, shapes, and patterns to express ideas instead of realistic objects."
},

{
title:"Mehendi Art",
image:"mehendi.jpg",
desc:"Mehendi art is a traditional decorative design drawn on hands using natural henna paste."
},

{
title:"Rangoli Art",
image:"rangoli.jpg",
desc:"Rangoli art is a colorful floor design created using powders, flowers, or rice during festivals."
},

{
title:"Charcoal Drawing",
image:"charcoal.jpg",
desc:"Charcoal drawing is a sketching technique that uses charcoal sticks to create deep shadows and textures."
},

{
title:"Oil Painting",
image:"oil.jpg",
desc:"Oil painting is a classic art style where pigments are mixed with oil to create rich and detailed paintings."
},

{
title:"Calligraphy",
image:"calligraphy.jpg",
desc:"Calligraphy is the art of beautiful handwriting using special pens and decorative lettering styles."
},

{
title:"Digital Painting",
image:"digital.jpg",
desc:"Digital painting is created using modern design software."
}

];

let random=Math.floor(Math.random()*arts.length);

document.getElementById("randomImage").src=arts[random].image;
document.getElementById("randomTitle").innerText=arts[random].title;
document.getElementById("randomDescription").innerText=arts[random].desc;
}


window.onload=function(){

let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");

let drawing=false;

canvas.addEventListener("mousedown",function(e){
drawing=true;
ctx.beginPath();
ctx.moveTo(e.offsetX,e.offsetY);
});

canvas.addEventListener("mouseup",function(){
drawing=false;
});

canvas.addEventListener("mousemove",function(e){

if(!drawing) return;

let color=document.getElementById("colorPicker").value;
let size=document.getElementById("brushSize").value;

ctx.strokeStyle=color;
ctx.lineWidth=size;
ctx.lineCap="round";

ctx.lineTo(e.offsetX,e.offsetY);
ctx.stroke();

});

}


function eraser(){
document.getElementById("colorPicker").value="#ffffff";
}

function clearCanvas(){
let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");
ctx.clearRect(0,0,canvas.width,canvas.height);
}

function saveDrawing(){
let canvas=document.getElementById("canvas");
let link=document.createElement("a");
link.download="my_sketch.png";
link.href=canvas.toDataURL();
link.click();
}

function validateForm(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;

if(name=="" || email==""){
alert("Please fill all fields");
return false;
}

alert("Message sent successfully!");
return true;

}