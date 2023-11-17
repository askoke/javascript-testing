// test file imports

const mathTest = require("./mathtest")
const mathTest2 = require("./math_file")

// Integration array

function iteratorToTwenty(){
    const ans = []
    for(let i = 0; i <= 20; i++){
        ans.push(i)
    }
    return ans
}

// Test 1 - mathtest.js

const getObjectsOne = (iterable) => {
    ans = []
    for(let i = 1; i <= iterable.length; i++){
        for(let j = 1; j <= iterable.length; j++){
            const temp = mathTest.matemaatilisedArvutused(i, j)
                ans.push(temp)
        }
    }
    return ans
}

function mathCheck() {
    const data = getObjectsOne(iteratorToTwenty())
    for(let i = 0; i < data.length; i++){
        if(data[i][0] === 15 && data[i][1] === 5 && data[i][2] === 2 && data[i][3] === 50) {
            return `{ summa: ${data[i][0]}, vahe: ${data[i][1]}, jagatis: ${data[i][2]}, korrutis: ${data[i][3]} }`;
        }
    }
    return false
}

console.log(mathCheck())

// Test 2 - math_file.js

const getObjectsTwo = (iterable) => {
    ans = []
    for(let i = 1; i <= iterable.length; i++){
        for(let j = 1; j <= iterable.length; j++){
            const temp = mathTest2.mathList(i, j)
                ans.push(temp)
        }
    }
    return ans
}

function mathCheck2() {
    const data = getObjectsTwo(iteratorToTwenty())
    for(let i = 0; i < data.length; i++){
        if(data[i][0] === 20 && data[i][1] === -16 && data[i][2] === 648 && data[i][3] === 9 && data[i][4] === 2) {
            return `{ summa: ${data[i][0]}, vahe: ${data[i][1]}, jagatis: ${data[i][2]}, korrutis: ${data[i][3]}, täisarvutus: ${data[i][4]} }`;
        }
    }
    return false
}

console.log(mathCheck2())