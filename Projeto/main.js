/*Modal de login*/

var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        display = "none";
    }
}
function pagInicial(usuario, senha){
        
    var usuario = document.querySelector('#id01 form input[name="e-mail"]').value;
    var senha = document.querySelector('#id01 form input[name="senha"]').value;

        if (usuario.value == 'exemplo@exemplo.com' && senha.value == '12345678') {
            window.location.href = "../Projeto/travel/main_responsavel.html";        
   
        }else{
            alert('Usuario não encontrado');
        }

     
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


