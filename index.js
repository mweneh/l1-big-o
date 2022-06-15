// print utility
const print = (value) => console.log(value)

// user scores
const scores = [99 ,80, 77, 76, 86, 50, 33, 76, 90, 54, 66, 76]

// TODO: IDENTIFY THE TIME COMPLEXITY OF THE FOLLOWING ARRAY METHODS
// 1: PUSH
scores.push(25)

// 2: POP
scores.pop()

// 3: UNSHIFT
scores.unshift(88)

// 4: forEach
//scores.forEach((element) => {print(element)})


// TODO: CREATE A SIMPLE SEARCH ALGORITHM THAT USES LINEAR TIME COMPLEXITY
const findValueLinear = (value) => {
    let index = []
    for(let i = 0; i < scores.length; i++){
        const score = scores[i]
        print(`index: ${i}`)
        if(score === value){
            index.push(i)
            //return index
        }
    }
    return index
    // return the index of the value if present, return -1 if absent
}
//print(`190 is at index: ${findValueLinear(190)}`)
//print(`76 is at index: ${findValueLinear(76)}`)


// TODO: CREATE A SIMPLE SEARCH ALGORITHM THAT USES LOGARITHMIC TIME COMPLEXITY (HAS BUG, WILL FIX)
scores.sort()
const findValueLog = (value, top, bottom) => {

    let index = -1
    const halfOps = (top + bottom) / 2
    const half = parseInt(halfOps)

    const valBeforeHalf = scores[half - 1]
    if(value < valBeforeHalf){
        // top half
        findValueLog(value, half - 1, 0)
    }else{
        // bottom half
        if(value === scores[half]) {
            index = half
        }
        findValueLog(value, scores.length - 1, half)
    }

    return index

    // return the index of the value if present, return -1 if absent
}
print(parseInt(3/2))

 print(`90 is at index: ${findValueLog(90, scores.length -1 , 0 )}`)
 print(`33 is at index: ${findValueLog(33, scores.length -1 , 0)}`)