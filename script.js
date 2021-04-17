function converter(){
 
  var valorDolar = document.querySelector (".dolar").value
  var resultado = parseFloat(valorDolar) * 5.50

 document.querySelector(".resultado").innerHTML =  'O valor em real é: R$ '+ resultado.toFixed(2)
    
}
  
//Revisão

//variáveis var int - float - string

//alert - parseInt - parseFloat - prompt

//operações + somar * multiplicar


//var valorEmDolarTexto = prompt("Digite o valor em U$ e descubra qual o valor em reais para realizar suas compras ")

//var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

//var valorEmReal = valorEmDolarNumero * 5.76
//var valorEmRealFixado = valorEmReal.toFixed(2)

//alert(valorEmRealFixado)