var g=0; 
let x=null;
function changewidth(){
   
}
function sd(){
          
          let y= document.getElementById("div1");
          y.innerHTML = g;
          let f= document.getElementById("p");
          f.innerHTML = "%";
          let c= document.getElementById("div2");
          c.style.height="10px" ;
          c.style.width="0px";
          c.style.animation="move";
          c.style.backgroundColor="green";
          c.style.animationDuration="10s";
          c.style.borderRadius="5px"
          g++;
          
          if(g>101){
          clearInterval(x);
          document.getElementById("p1").innerHTML="completed!";
          y.style.display="none";
          f.style.display="none";
          c.style.display="none";
          }      
}
function ad(){
x = setInterval(sd,60);
}