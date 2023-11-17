function mathList(a, b){
    let sum = a + b 
    let sub = b - a
    let mult = b * a * a
    let div = Math.floor(a / b)
    let fullList = a + b - Math.floor(a / 2) * b

    return [sum, sub, mult, div, fullList]
}

module.exports = {
    mathList
}

console.log('Teise vastused on: ' + mathList(18, 2))
// oodatav vastus: { summa: 20, vahe: -16, jagatis: 648, korrutis: 9, täisarvutus: 2 }