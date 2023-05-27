function chama() {
    var num1 = document.getElementById('n1'),value;
    var num2 = document.getElementById('n2'),value;
    document.getElementById('n1').value = num2
    document.getElementById('n2').value = num1
    console.log(num1 + ' - ' + num2);

}
function alterarQtde(quantidade) {
    document.getElementById('qtd').value += parseInt(quantidade);

}