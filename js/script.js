const textarea = document.getElementById("textarea");
const botaoCriptografar = document.getElementById("botaoCriptografar");
const botaoDescriptografar = document.getElementById("botaoDescriptografar");
const botaoCopiar = document.getElementById("botaoCopiar");
const mensagem = document.getElementById("mensagem");
const boneco = document.getElementById("boneco");
const informacao = document.getElementById("informacao");
const secao = document.getElementById("secao");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

let chaves = [["e", "enter"], ["o", "ober"], ["i", "imes"], ["a", "ai"], ["u", "ufat"]];

const textoFinal = (novoTexto) => {
    mensagem.innerHTML =  novoTexto;
    boneco.classList.add("oculto");
    textarea.value = "";
    informacao.style.display = "none";
    botaoCopiar.style.display = "block";
    secao.classList.add("section__rigth__texto");
    mensagem.classList.add("section__rigth__texto");
}

const resetar = () => {     
    mensagem.innerHTML = "";
    boneco.classList.remove("oculto");
    informacao.style.display = "block";
    botaoCopiar.style.display = "none";
    secao.classList.remove("section__rigth__texto");
    mensagem.classList.remove("section__rigth__texto");
    textarea.focus();
}

botaoCriptografar.addEventListener("click", () => {
    const textoInserido = textarea.value.toLowerCase();
    if (textoInserido != "") {
        function criptografar(texto){
            for (let i = 0; i < chaves.length; i++){
                if (texto.includes(chaves[i][0])){
                      texto = texto.replaceAll(chaves[i][0], chaves[i][1]);
                };
            };
              return texto;
        }
    } else {
        alert("Digite um texto para criptografar");
        reset();
    }
       
        textoFinal(criptografar(textoInserido));
 })


 botaoDescriptografar.addEventListener("click", () => {
    const textoInserido = textarea.value.toLowerCase();
    if (textoInserido != "") {
        function descriptografar(texto){
            for (let i = 0; i < chaves.length; i++){
                if (texto.includes(chaves[i][1])){
                    texto = texto.replaceAll(chaves[i][1], chaves[i][0]);
                };
            };
             return texto;
        } 
    } else {
        alert("Digite um texto para descriptografar");
        reset();
    }
   
    textoFinal(descriptografar(textoInserido));
})

botaoCopiar.addEventListener("click", () => {
    let textoInserido = mensagem;
    textoInserido.select();
    document.execCommand('copy');
    alert("Texto copiado");   
    reset();
})