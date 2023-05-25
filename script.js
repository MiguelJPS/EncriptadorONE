const ingresoTexto = document.getElementById("ingresoTexto");
const buttonEncriptar = document.getElementById("buttonEncriptar");
const buttonDesencriptar = document.getElementById("buttonDesencriptar");
const buttonCopiar = document.getElementById("buttonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal"); 
const munheco = document.getElementById("munheco");
const rightInfo = document.getElementById("rightInfo");
const right = document.getElementById("right");

let reemplazar = [["e","enter"],["o","ober"],["i","imes"],["a","ai"],["u","ufat"]]

const remplace = (nuevoValor) =>{
    mensajeFinal.innerHTML = nuevoValor;
    munheco.classList.add("oculto");
    rightInfo.style.display = "none";
    buttonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
    ingresoTexto.value = "";
    
}

buttonEncriptar.addEventListener("click",() => {
    const texto = ingresoTexto.value.toLowerCase();
    if(texto != ""){
        function encriptar(newText){
            for(let i=0; i < reemplazar.length; i++){
                if(newText.includes(reemplazar[i][0])){
                    newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
                };
            };
            return newText;
        }
    } else{
        alert("Ingrese texto a encriptar");
    }    
    remplace(encriptar(texto)) 
});
buttonDesencriptar.addEventListener("click",() => {
    const texto = ingresoTexto.value.toLowerCase();
    if(texto != ""){
        function desencriptar(newText){
            for(let i=0; i < reemplazar.length; i++){
                if(newText.includes(reemplazar[i][1])){
                    newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
                };
            };
            return newText;
        }
    } else{
        alert("Ingrese texto a desencriptar");
    }
   remplace(desencriptar(texto)) 
   
});

buttonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    texto.select();
    document.execCommand('copy')


    mensajeFinal.innerHTML = "";
    munheco.classList.remove("oculto");
    rightInfo.style.display = "block";
    buttonCopiar.style.display = "none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");  
    ingresoTexto.focus();
})