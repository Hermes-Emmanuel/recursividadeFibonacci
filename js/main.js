const fibonacciSequence = () => {

    const position = parseInt(document.getElementById("position").value)
    const result = fibonacci(position)
    const output = document.getElementById("sequenceOutput")

    output.innerHTML = `O resultado correspondente a posição <b>${position}</b> 
        informada acima é: <b>${result}</b>.<br>E a sequencia de Fibonacci é a seguinte: `

    for (let i = 1; i <= position; i++) {
        output.innerHTML += `<b>${fibonacci(i)} </b>`
    }
}
const fibonacci = (value) => {
    if (value === 1) return 1
    if (value === 2) return 1
    return fibonacci(value - 1) + fibonacci(value - 2)
}