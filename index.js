// print utility
const print = (value) => console.log(value)

// user scores
const scores = [99 ,80, 77, 86,76, 50, 33, 76, 90, 54, 66,76]

// TODO: IDENTIFY THE TIME COMPLEXITY OF THE FOLLOWING ARRAY METHODS
// 1: PUSH
scores.push(25)
    // constant time because push knows to add elements at theend
// 2: POP
scores.pop()

// 3: UNSHIFT
scores.unshift(88)
// linear time because you must assign new indices to the original iytems
// 4: forEach
scores.forEach((element) => {print(element)})
//linear- prints each item



// TODO: CREATE A SIMPLE SEARCH ALGORITHM THAT USES LINEAR TIME COMPLEXITY
const findValueLinear = (value) => {

    let index= -1
    let indices=[]

    for (let i= 0; i<scores.length; i++){
    //print (`index:${i}`)}
    const currValue=scores[i]
    if (currValue===value){
        indices.push(i)
        index= indices
    }
}
    return index
    



}
const FindValueLinearWhile=(value) => { 
    let i= 0
    while(i<scores.length) {
        if (scores(i)===value){
            return i
        }
        i++
    }
    return -1
}

// return the index of the value if present, return -1 if absent
print(`190 is at index: ${findValueLinear(190)}`)
print(`76 is at index: ${findValueLinear(76)}`)
print(`766 is at index: ${findValueLinear(766)}`)


// TODO: CREATE A SIMPLE SEARCH ALGORITHM THAT USES LOGARITHMIC TIME COMPLEXITY
scores.sort((a,b) => a-b)
const findValueLog = (value) => {
    let start= 0
    let end= scores.length -1

    while (start <= end) {

        let middle = Math.floor((start+end)/2) // or parseInt

        if (scores[middle]=== value) {
            return middle
        }
        else if (scores[middle] > value) {
            end= middle -1
        }else {
            start = middle +1
        }
    }

return -1
    // return the index of the value if present, return -1 if absent
    // if array is sorted 
    
}

// recursive approach 
const searchLogRecursive =(value, start, end) => {

    if (start> end) return -1

    let middle = Math.trunc((start+end / 2))

    if (scores[middle] === value) return middle

    if (scores[middle]> value) {
        searchLogRecursive(value, start, middle-1)}

    else (searchLogRecursive(value, middle+1, end))   

    return -1 
}

print(`90 is at index: ${findValueLog(90)}`)
 print(`88 is at index: ${findValueLog(88)}`)
 print(`76 is at index: ${searchLogRecursive(76, 0, scores.length - 1)}`)