//função chama
function chama() {
    //alert('teste');
    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;
    document.getElementById('n1').value = num2;
    document.getElementById('n2').value = num1;
    console.log(num1 + ' - ' + num2);
    
}
function alterarQtde(quantidade) {
    let resultado = document.getElementById('qtd');
    if(quantidade <=0 && resultado.value == 0){
        alert('não pode ter produtos negativos');
    }
    else 
    resultado.value = parseInt(quantidade) + parseInt(resultado.value);

}