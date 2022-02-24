let on = false; 
var audio = new Audio('airport-bell.mp3'); 
document.querySelector('.sound').addEventListener('click', function(){ 
  if(on===false){ 
    on = true; 
    this.innerHTML = '🔉'; 
    audio.play(); 
  } 
  else { 
    on = false; 
    this.innerHTML = '🔊'; 
    audio.pause(); 
  } 
})