//<!--_________PROMEDIO____________-->
function promedio() {
    let num1, num2, resultado, promedio;
    num1 = Number(prompt("Ingresar la 1° calificación:"));
    num2 = Number(prompt("Ingresar la 2° calificación:"));

    resultado = num1 + num2;
    promedio = resultado / 2;

    alert("Tu promedio es: " + promedio);
}
//<!--_________CALCULADORA____________-->
function suma() {
    let num1 = Number(prompt("Ingresar el primer número:"));
    let num2 = Number(prompt("Ingresar el segundo número:"));
    let resultado = num1 + num2;
    alert("El resultado de la suma es: " + resultado);
}

function resta() {
    let num1 = Number(prompt("Ingresar el primer número:"));
    let num2 = Number(prompt("Ingresar el segundo número:"));
    let resultado = num1 - num2;
    alert("El resultado de la resta es: " + resultado);
}

function multiplicacion() {
    let num1 = Number(prompt("Ingresar el primer número:"));
    let num2 = Number(prompt("Ingresar el segundo número:"));
    let resultado = num1 * num2;
    alert("El resultado de la multiplicación es: " + resultado);
}

function division() {
    let num1 = Number(prompt("Ingresar el primer número:"));
    let num2 = Number(prompt("Ingresar el segundo número:"));

    if (num2 !== 0) {
        let resultado = num1 / num2;
        alert("El resultado de la división es: " + resultado);
    } else {
        alert("No se puede dividir entre cero");
    }
}

