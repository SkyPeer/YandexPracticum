// Moving average (Optimization)
// https://ru.wikipedia.org/wiki/%D0%A1%D0%BA%D0%BE%D0%BB%D1%8C%D0%B7%D1%8F%D1%89%D0%B0%D1%8F_%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D1%8F%D1%8F

const foo = (timeseries, K) => {
    const result = []
    let current_sum = 0
    const reducer = (prev, cur) => prev + cur;

    const N = timeseries.length - K

    current_sum = timeseries.slice(0, K).reduce(reducer)
    result.push(current_sum / K)
    for (let i = 0; i < N ; i++) {
        let current_avg = 0
        current_sum -= timeseries[i]
        current_sum += timeseries[i+K]
        current_avg = current_sum / K

        console.log('current_avg', current_avg)

        if(!isNaN(current_avg)) {
            result.push(current_avg)
        }

    }
    return result.join(' ')
}

const ttt = foo([1,2,3,4,5,6,7,'ttt'], 4) //  2.5 3.5 4.5 5.5
console.log('ttt', ttt)