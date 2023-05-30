const cards = document.querySelector(".cards")


var emaillogado;
femaillogado();

function carregarCatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if(dados == null){
        divcard.innerHTML = "<p>Nenhum item cadastrado</p>";
        cards.appendChild(divcard);
        return null;
    }

    dados.forEach((elemento, indice) => {
        if(elemento.email == emaillogado){
        let divcard = document.createElement("div");
        divcard.setAttribute("class", "card");
        divcard.innerHTML = `<img src="img/${elemento.foto}">
        <div class="cardbtn">
        <a onclick="Alterar(${indice})">Alterar<a/>
         / <a onclick="Excluir(${indice})">Excluir<a/>
        </div>
        `
        cards.appendChild(divcard);}
       
    });
}
carregarCatalogo()


function Excluir (indice){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    if(dados.lenght == 1)
    {localStorage.clear("catalogo");}
    else{
        dados.splice(indice,1);
        localStorage.setItem("catalogo", JSON.stringify(dados));
    }
    window.location.reload();
}

function Alterar(indice){
    var url ="cadastrodotitulo.html?peditar=true&indice="+ encodeURIComponent(indice);
    window.location.href = url;
}function femaillogado(){
    let dados = JSON.parse(sessionStorage.getItem("logado"));
      if (dados == null){
        window.location.assign("login.html");
      } else{
        emaillogado = dados[0].email;
      }
  }


function femaillogado(){
    let dados = JSON.parse(sessionStorage.getItem("logado"));
      if (dados == null){
        window.location.assign("login.html");
      } else{
        emaillogado = dados[0].email;
      }
  }


