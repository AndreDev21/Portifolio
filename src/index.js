/*

OBJETIVO - QUANDO CLICARMOS NA ABA TEMOS QUE MOSTRAR O CONTEUDO
DA ABA QUE FOI CLICADA PAELO USUARIO E ESCONDER O CUNTEUDO DA ABA ANTERIOR

- PASSO 1 - dar um jeito  de pegar os lementos que representam as abas no HTML

- PASSO 2 - identificar o clique no elemento da aba

- PASSO 3 - quansdo o usuaio clicar, desmarcar a aba selecionada

- PASSO 4 - marcar a aba como selecionada

- PASSO 5 - esconder o conteudo anterior

- PASSO 6 - mostrar o conteido da aba selecionada

*/

const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click", function() {
        if(aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba)

        mostrarConteudoAba(aba)
        
        
    })
})

function selecionarAba(aba){
    
    const abaSelecionado = document.querySelector(".aba.selecionado");
        abaSelecionado.classList.remove("selecionado");
        aba.classList.add("selecionado");
}

function mostrarConteudoAba(aba){
    
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");

        const idInformacoesAba = `informacao-${aba.id}`;

        const mostraInformacao = document.getElementById(idInformacoesAba);
        mostraInformacao.classList.add("selecionado");
}