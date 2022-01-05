// Moving average / Скользящая средняя
// https://ru.wikipedia.org/wiki/%D0%A1%D0%BA%D0%BE%D0%BB%D1%8C%D0%B7%D1%8F%D1%89%D0%B0%D1%8F_%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D1%8F%D1%8F

const foo = (timeseries, K) => {
    const result = []
    const reducer = (prev, cur) => prev + cur;

    const N = timeseries.length - K + 1

    for (let i = 0; i < N ; i++) {
        const arr = timeseries.slice(i, K+i)
        const avarageValue = arr.reduce(reducer) / K
        result.push(avarageValue)
    }
    return result
}

const ttt = foo([4, 3, 8, 1, 5, 6, 3], 3)

console.log('result', ttt)