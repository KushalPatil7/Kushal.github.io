// alert("Hello");
var rn1= Math.random()*6;

rn1=Math.floor(rn1)+1;
var image1="dice"+rn1+".png";
var src1="images/"+image1;
var im1=document.querySelectorAll("img")[0];
im1.setAttribute("src",src1);
var rn2= Math.random()*6;
rn2= Math.floor(rn2)+1;
var image2="dice"+rn2+".png";
var src2="images/"+image2;
var im2= document.querySelectorAll("img")[1];
im2.setAttribute("src",src2);
 if(rn1>rn2){
     document.querySelector("h1").innerHTML="PLAYER 1 WINS";

    
 }
 else if(rn1<rn2) {
     document.querySelector("h1").innerHTML="PLAYER 2 WINS";
 }
 else{
    document.querySelector("h1").innerHTML="Draw";
 }