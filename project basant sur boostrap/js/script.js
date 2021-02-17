var i = 0;
var txt = document.getElementById("typeWriter").innerText;
var speed = 70;

document.getElementById("typeWriter").innerText = "";
function typeWriter() {

  if (i < txt.length) {
    document.getElementById("typeWriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }else{
    i = 0;
    
    setTimeout(()=>{
      document.getElementById("typeWriter").innerText = "";
      typeWriter();
    },1000);
  }
  
}
typeWriter();