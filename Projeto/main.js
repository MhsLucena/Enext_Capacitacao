/*Modal de login*/

var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        display = "none";
    }
}
function pagInicial(){

        window.location.href = "../travel/main_responsavel.html";
    
}


/*Slides Quem somos*/


var myIndex = 0;
slides();

function slides() {
  var x = document.getElementsByClassName("slide-show");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(slides, 1000); 
}


/*Função alert do fale conosco*/

function enviarEmail(){

    alert("Te encaminhamos uma mensagem no seu e-mail, aguarde um instante");
}


