function calcularIMC() {
  let peso = document.getElementById("peso").value
  let altura = document.getElementById("altura").value

  var IMC = peso / (altura ** 2)
  /* document.getElementById("IMC") */
  /* document.write("IMC = ", IMC.toPrecision(3), "<br>") */

  if (IMC < 18.5) {
    document.getElementById('resultado').innerHTML = `IMC: ${IMC.toPrecision(3)} <br> BAIXO PESO `
  }
  if (IMC <= 24.9 && IMC >= 18.5) {
    document.getElementById('resultado').innerHTML = `IMC:  ${IMC.toPrecision(3)} <br> INTERVALO NORMAL `
  }
  if (IMC <= 29.9 && IMC >= 25) {
    document.getElementById('resultado').innerHTML = `IMC: ${IMC.toPrecision(3)} <br> SOBREPESO `
  }
  if (IMC <= 34.9 && IMC >= 30) {
    document.getElementById('resultado').innerHTML = `IMC:  ${IMC.toPrecision(3)} <br> OBESIDADE CLASSE I `
  }
  if (IMC <= 39.9 && IMC >= 35) {
    document.getElementById('resultado').innerHTML = `IMC:  ${IMC.toPrecision(3)} <br> OBESIDADE CLASSE II `
  }
  if (IMC >= 40) {
    document.getElementById('resultado').innerHTML = `IMC: ${IMC.toPrecision(3)} <br> OBESIDADE CLASSE III `
  }
}