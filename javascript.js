let alerta=document.getElementById("box_resultado")
let texto= document.getElementById("texto")
let boton1= document.getElementById("encriptar")
let boton2= document.getElementById("desencriptar")
let morty= document.getElementById("morty")
let copiar=document.getElementById("copiar")
morty.style.display="none"
copiar.style.display="none"

boton1.addEventListener("click",function(){
    let ingresotext=encriptar(texto.value)
    morty.innerHTML=ingresotext
    morty.style.display="block"
    copiar.style.display="block"
    alerta.style.display="none"
})

function encriptar(paraEncriptar){
    let matrizCodigo= [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for( let i=0; i<matrizCodigo.length; i++){
        if (paraEncriptar.includes(matrizCodigo[i][0])){
            paraEncriptar = paraEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return paraEncriptar;
}

boton2.addEventListener("click",function(){
    let ingresotext=desencriptar(texto.value)
    morty.innerHTML=ingresotext
    morty.style.display="block"
    copiar.style.display="block"
    alerta.style.display="none"
})





function desencriptar(paraDesencriptar){
    let matrizCodigo= [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    for( let i=0; i<matrizCodigo.length; i++){
        if (paraDesencriptar.includes(matrizCodigo[i][0])){
            paraDesencriptar = paraDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return paraDesencriptar;
}


copiar.addEventListener("click",function(){
  morty.select();
  morty.setSelectionRange(0,99999);
navigator.clipboard.writeText(morty.value);
})
