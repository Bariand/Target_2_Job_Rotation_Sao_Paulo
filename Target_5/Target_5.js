/*5) Escreva um programa que inverta os caracteres de um string. 
  
IMPORTANTE: 
	a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; 
	b) Evite usar funções prontas, como, por exemplo, reverse; */

  let newStr = "";

  function inverterString() {
  
      let newStr = "";
      let m = document.getElementById("id5Input").value;
  
      for (var i = m.length - 1; i >= 0; i--) { 
          newStr = newStr + m[i];
      }
  
      document.getElementById("id5").innerHTML = newStr;
  }