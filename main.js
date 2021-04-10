caixaTexto = document.getElementById("textSend")

caixaTexto.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        enviaMensagem(e);
    }
});

function enviaMensagem(){
    if(caixaTexto.value){
        mensagemTexto = document.createElement("message");
        mensagemTexto.innerHTML = caixaTexto.value
        caixaTexto.value = ""

        novaMensagemDireita = document.createElement("div");
        novaMensagemDireita.className = "boxChat right"
        novaMensagemDireita.innerHTML = "Você diz:"
        novaMensagemDireita.appendChild(document.createElement('br'));
        novaMensagemDireita.appendChild(mensagemTexto);

        novaMensagem = document.createElement("div");
        novaMensagem.setAttribute("id", "divMessage");
        novaMensagem.appendChild(novaMensagemDireita);

        document.getElementById("messages").appendChild(novaMensagem);

        window.scroll({
            top: document.getElementById('messages').offsetHeight,
            behavior: 'smooth'
          });
    }
}