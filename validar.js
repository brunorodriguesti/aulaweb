function HabilitarCampo(opcao){ 
  if(opcao){
    document.formulario.nome.disabled = false;
} else{
    document.formulario.nome.value = "Bruno é massa";        
    document.formulario.nome.disabled = true;
}
}
