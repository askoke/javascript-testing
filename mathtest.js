function matemaatilisedArvutused(a, b){
    let summa = a + b;
    let vahe = a - b;
    let jagatis = Math.floor(a / b);
    let korrutis = a * b;

    return [ summa, vahe, jagatis, korrutis ];
}

module.exports = {
    matemaatilisedArvutused
}

console.log('Esimese vastused on: ' + matemaatilisedArvutused(10, 5));
// oodatav vastus: { summa: 15, vahe: 5, jagatis: 2, korrutis: 50}