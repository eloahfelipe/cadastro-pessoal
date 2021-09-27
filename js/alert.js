function mostraAlert(){
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var end = document.getElementById("end").value;
    var num = document.getElementById("num").value;
    var cel = document.getElementById("cel").value;
    
    if (nome == "") {
        alert('Preencha o campo com seu nome');
        return false;
    }else if ( cpf == "") {
            alert('Preencha o campo com seu CPF');
            return false;
    }else if ( end == "") {
            alert('Preencha o campo com seu Endereço');
            return false;
    }else if ( num == "") {
            alert('Preencha o campo com o Número de seu Endereço');
            return false;
    }else if ( cel == "") {
            alert('Preencha o campo com o Número de seu Celular');
            return false;
    }else{
    alert("Formulario Enviado com Sucesso!")
    window.location="index.html";
    }

}