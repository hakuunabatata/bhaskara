function Bhaskara() {
    formula = equacao.value
    numsym = '0123456789+-*/,.x'
    error = 0
    for (x = 0; x < formula.length; x++) {
        if (numsym.includes(formula[x]) == false) {
            error = formula[x]
        }
    }
    if (error != 0) {
        alert(`Valor "${error}" Inválido !!!!!`)
    } else {
        formula = formula.replace('-', '+-').replace(',', '.').split('=')
        if (formula.length > 2) {
            alert('Insira uma fórmula valida')
        } else {
            values = (splitvalues(formula))
        }
        calcula(values)
    }
}

function splitvalues(formula) {
    values = {
        a: 0,
        b: 0,
        c: 0
    }
    for (i = 0; i < 2; i++) {
        if (i == 1) {
            mult = -1
        } else {
            mult = 1
        }
        spl = formula[i].split('+')
        for (x = 0; x < spl.length; x++) {
            value = spl[x].toString().replace(' ', '')
            if (value.includes('x^2')) {
                value = Number(value.replace('x^2', ''))
                if (value == 0) {
                    value = 1
                }
                values.a += value * mult
            }
            else if (value.includes('x')) {
                value = Number(value.replace('x', ''))
                if (value == 0) {
                    value = 1
                }
                values.b += value * mult
            } else {
                values.c += Number(value) * mult
            }
        }
    }
    return values
}

function calcula(values) {

    a = Number(values.a)
    b = Number(values.b)
    c = Number(values.c)
    formula = document.getElementById('formula')
    results = document.getElementById('results')
    delta = (b ** 2) - (4 * a * c)
    formula.innerHTML = `${a}X² + ${b}X + ${c} = 0`
    if (delta < 0) {
        results.innerHTML = '<h2>Fórmula sem resultado</h2>'
    } else {
        x1 = 0
        x2 = 0
        raiz = delta ** (1 / 2)
        x1 = - b + raiz / (2 * a)
        x2 = - b - raiz / (2 * a)
        results.innerHTML = `<ul><li>X1: ${x1}</li><li>X2: ${x2}</li</ul>`
    }
}