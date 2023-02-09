const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function borrar (){
    var value = pantalla.value;
    var newValue = value.substring(0,value.length - 1);
    pantalla.value = newValue;
}

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    
}


function encriptar(scriptEncriptado) {
    let matrizCodigo = [["e","enter"], ["i","inter"], ["a","ai"],["o","ober"],["u","ufet"]];
    scriptEncriptado = scriptEncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (scriptEncriptado.includes(matrizCodigo[i][0])) {
            scriptEncriptado = scriptEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }//primer error sencillo resuelto
        
    }

    return scriptEncriptado
}




function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
   
    
}


function desencriptar(scriptDesencriptado) {
    let matrizCodigo = [["e","enter"], ["i","inter"], ["a","ai"],["o","ober"],["u","ufet"]];
    scriptDesencriptado = scriptDesencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (scriptDesencriptado.includes(matrizCodigo[i][1])) {
            scriptDesencriptado = scriptDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
        
    }

    return scriptDesencriptado
}




