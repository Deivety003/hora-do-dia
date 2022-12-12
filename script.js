function carregar() {
  var msg = document.getElementById("msg");
  var xmsg = document.getElementById("xmsg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = 9 //data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    //BOM DIA!
    xmsg.innerHTML = `Bom Dia!`;
    img.src = "manha.png";
    document.body.style.background = "#ffe854";
  } else if (hora >= 12 && hora < 18) {
    //Boa Noite!
    xmsg.innerHTML = `Boa Tarde!`;
    img.src = "tarde.png";
    document.body.style.background = "#e65003";
  } else {
    //Boa Noite
    xmsg.innerHTML = `Boa Noite!`;
    img.src = "noite.png";
    document.body.style.background = "#04213d";
  }
}
