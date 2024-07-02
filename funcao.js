function areaCirculo(raio) {
  let area = Math.PI * raio * raio;
  console.log("Area do círculo é " + area);
}

function areaTriangulo(base, altura) {
  let ar = (base * altura) / 2;
  console.log("A área do triângulo é " + ar);
}

function areaRetangulo(a, b) {
  let aRet = a * b;
  console.log("A área do retângulo é " + aRet);
}
module.exports = { areaCirculo, areaTriangulo, areaRetangulo };
