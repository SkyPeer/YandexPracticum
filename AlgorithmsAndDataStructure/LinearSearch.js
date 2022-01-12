// Simple LinearSearch

const arr = [1,7,2,-1,3,5,707,10,2,15]

const findFlement = (data, x) =>{

    for(var i = 0; i < data.length; i++){
        if(data[i] === x) return i
    }
    return -1
}

const ttt = findFlement(arr, 25)
console.log('ttt:', ttt)