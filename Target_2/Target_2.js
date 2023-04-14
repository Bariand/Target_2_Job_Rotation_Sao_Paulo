
/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 
  
IMPORTANTE:  
	Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */
  
function sequenciaFibonacci() {
	
  const sequencia = [0, 1];
  let n = document.getElementById("id2Input").value;
  let y = 0;
  let resultBool = false;

for (let x = 2; x < n + 1; x += 1) {

  sequencia.push(sequencia[x - 2] + sequencia[x - 1]);

      y = sequencia[x - 2] + sequencia[x - 1];

      if(y == n){
          resultBool = true;
      }   

}

  if(resultBool){
      document.getElementById("id2").innerHTML = "Valor pertence à sequência de Fibonacci.";
  }
  else{
      document.getElementById("id2").innerHTML = "Valor não pertence à sequência de Fibonacci.";
  }
  
}