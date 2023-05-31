function logar(){
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;

  if (login == senha) {
    alert("Não podem ser iguais");
  } else {
    alert("Sucesso");
    location.href = "home.html";
  }
}

function reg(){
  var Fname = document.getElementById("firstname").value;
  var Lname = document.getElementById("lastname").value;
  var uSr = document.getElementById("user").value;
  var pas = document.getElementById("pass").value;

  if(uSr == pas){
    alert("Nao podem ser iguais!");
  }else{
    alert("Registro feito!");
    location.href = "reghome.html";
  }
}

