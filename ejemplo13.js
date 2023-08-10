function sumar(){
    let numeros = pedirNumeros("Ingrese el primer numero", "Ingrese el segundo numero")

    let resultado = calcularSuma(numeros[0], numeros[1])
    
    mostrar("La suma es", resultado)
}

function restar(){
    let numeros = pedirNumeros("Ingrese el primer numero", "Ingrese el segundo numero")
    
    let resultado = calcularResta(numeros[0], numeros[1])

    mostrar("La resta es", resultado)
}



function multiplicar(){
    let numeros = pedirNumeros("Ingrese el primer numero","Ingrese el segundo numero")
    let resultado = calcularMultiplicacion(numeros[0], numeros[1])
    mostrar("El resultado es ", resultado)

}

function division(){
    let numeros = pedirNumeros("Ingrese el primer numero", "Ingrese el segundo numero")

    let resultado = calculaDivision(numeros[0], numeros[1])

    mostrar("El resultado es", resultado)
}

function pedirNumeros(titulo1, titulo2){
    let numero1 = Number(prompt(titulo1))
    let numero2 = Number(prompt(titulo2))

    let numeros = [numero1, numero2]

    return numeros   
}

function calcularSuma(n1, n2){
    return n1 + n2
}

function calcularResta(n1, n2){
    return n1 - n2
}

function calcularMultiplicacion(n1, n2){
    return n1 * n2
}

function calculaDivision(n1, n2){
    return n1 / n2
}

function mostrar(titulo, resultado){
    alert(titulo + ": \n" + resultado)
}





