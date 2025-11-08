 function cep(v) {
    // Remove tudo que não for número
    console.log(v);
    v.value = v.value.replace(/\D/g, '');
    
    // Insere o hífen após o quinto dígito
    v.value = v.value.replace(/(\d{5})(\d)/, '$1-$2');
}

function camposPreenchidos(form) {
    // Verifica se o campo CEP tem exatamente 9 caracteres (ex: 12345-678)
    if (form.cep.value !== "" && form.cep.value.length === 9) {
        return true;
    } 
    return false;   
}
