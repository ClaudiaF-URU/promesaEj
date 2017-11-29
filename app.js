function sumaConPromesa(a, b) {
    return new Promise((res, rej) => {
        console.log(a, b)
        var result = a + b;
        console.log(result)
        if (result >= 10)
            res(`${result} es mayor o igual a 10`);
        else
            rej(`${result} es menor a 10`);
    })
}

function sum() {
    var x = prompt('Primero numero');
    var y = prompt('Segundo numero');

    sumaConPromesa(parseInt(x), parseInt(y)).then(data => {
        alert(data);
    }).catch(e => {
        alert(e);
    })
}

window.onload = sum;