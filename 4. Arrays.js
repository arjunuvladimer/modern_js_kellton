// ARRAYS
// var array1 = [1,2,3,4] // Single Dimensional Array
// console.log(array1[2])
// var array2 = [[1,2],[3,4]] // Multi Dimensional Array
// var array3 = [[[1,2,3]]]
// console.log(array3[0][0][2])

// MATRICES
// ADDITION OF MATRICES
// MATRIX 1 => 2X2 MATRIX
// 1 2
// 3 4
// MATRIX 2 => 2X2 MATRIX
// 5 6 
// 7 8
// MATRIX 1 + MATRIX 2
// 1+5 2+6
// 3+7 4+8
// 6 8
// 10 12

var matrix1 = [[1,2],[3,4]]
var matrix2 = [[5,6],[7,8]]
var sum = [[],[]]

for(var i = 0; i < matrix1.length; i++){
    for(var j= 0; j < matrix2.length; j++){
        sum[i][j] = matrix1[i][j] + matrix2[i][j]
    //  sum[0][0] = matrix1[0][0] + matrix2[0][0]
    //  sum[0][0] = 1 + 5 // i=0, j=0
    //  sum[0][1] = matrix1[0][1] + matrix2[0][1]
    //  sum[0][1] = 2 + 6 // i=0, j=1
    //  sum[1][0] = matrix1[1][0] + matrix2[1][0]
    //  sum[1][0] = 3 + 7 // i=1, j=0
    //  sum[1][1] = matrix1[1][1] + matrix2[1][1]
    //  sum[1][1] = 4 + 8 // i=1, j=1
    }
}
console.log(sum)

// Mutiplication of Matrix
// ADDITION OF MATRICES
// MATRIX 1 => 2X2 MATRIX   MATRIX 2
// 1 2                      5 6
// 3 4                      7 8

// MATRIX 1 * MATRIX 2
// 1*5 + 2*7    1*6 + 2*8
// 3*5 + 4*7    3*6 + 4*8
var a = 10

for(var i = 0; i < matrix1.length; i++){
    for(var j= 0; j < matrix2.length; j++){
        for(var k = 0; k < matrix1.length; k++){
            sum[i][j] += matrix1[i][k] * matrix2[k][j]
       //   sum[0][0] += matrix1[0][0] * matrix2[0][0]
       //   sum[0][0] += 1 * 5 // i=0, j=0, k=0
       //   sum[0][0] += matrix1[0][1] * matrix2[1][0]
       //   sum[0][0] += 2 * 7 // i=0, j=0, k=1
       //   sum[0][0] = 1 * 5 + 2 * 7
       //   sum[0][1] += matrix1[0][0] * matrix2[0][1]
       //   sum[0][1] += 1 * 6 // i=0, j=1, k=0
       //   sum[0][1] += matrix1[0][1] * matrix2[1][1]
       //   sum[0][1] += 2 * 8 // i=0, j=1, k=1
     }
    }
}


var array1 = new Array(1,2,3,4) // Array Constructor
var array2 = [5,6,7,8]
var array3 = [9,10,11,12] 

// 1. Concat Method
// Syntax: Array.concat()
// Used: Merging two or more arrays
var newArray = array1.concat(array2,array3)
console.log(`Concat Method ${newArray}`)

// 2. Every Method
// Syntax: Array.every(callback)
// It gives boolean value as an output
var isBigEnough = [12,9,44].every(function checkElement(val, idx){
    return (idx <=2)
})
console.log(`Every Method Result: ${isBigEnough}`)

// 3. Filter Method
// Syntax: Array.filter(callback)
var filterArray = [12,5,8,130,44]
var filteredArray = filterArray.filter((element, index) => {
    return element > 8
})
console.log(`Filter Method Result: ${filteredArray}` )

// 4. For Each Method
// Syntax: Array.forEach(callback)
var forEachArray = [1,2,3,4,5,23,123]
var newForEachArray = forEachArray.forEach((element, index) => {
    console.log(`Element ${element}`)
})
console.log(newForEachArray)

// 5. Index of Method
// Syntax: Array.indexOf(searchElement)
var indexOfArray = [12,5,8,130]
var newIndexOfArray = indexOfArray.indexOf(8)
console.log(`Index Of Method: ${newIndexOfArray}`)

// 6. Join Method
// Syntax: Array.join(seperator)
var joinArray = ["Hello","How", "Are", "You"]
var newJoinArray = joinArray.join(" WOw ")
console.log(`Join Method: ${ newJoinArray}`)

// 7. Split Method
// Syntax: String.split() // Return an Array
var stringWithCommas = "I , want, to, come, home"
var wordArray = stringWithCommas.split(" , ")
console.log(`Split Method: ${ wordArray}`)

// 8. Last Index of 
// Syntax: Array.lastindexof(searchElement)
var indexLast = [12,5,8,9,6,7,9]
console.log(`Last Index of Method: ${indexLast.lastIndexOf(8)}`)

// 9. Map Method (*****)
// Syntax: Array.map(callback)
var arrayForMap = [1,2,3,4,5,5,6]
var newArrayForMap = arrayForMap.map((element) => element * 2)
console.log(`Map Method: ${newArrayForMap}`)

// - Every => boolean value
// - Filter => filters and returns filtered values array
// - For Each => iteration gives output for every iteration
// - Map => iteration gives output atlast
// - Some => returns a boolean value just like every
// - Find => stops iteration when there is a true element that shows up

// 10. Pop Method
// Pops the last element in the array
console.log(["me",'him',"you"].pop())

// 11. Push Method
// Pushes a new element to the existing array and also changes the index position
var pushArray =["william","john","chris","david"] 
var indexPositionPushed = pushArray.push('Larry')
console.log(`Push Method: ${indexPositionPushed}`)

// 12. Reduce Method // Memoization Technique
// Array.reduce(callback) // Left to Right
var arrayReduce = [12,1,2,3].reduce((left,right) => left+right)
// 12+1=>13 +  13+2=>15  15+3
console.log(`Reduce Method: ${arrayReduce}`)

// 13. Reduce Right // Right to Left
// Array.reduceRight(callback)
var arrayReduceRight = [0,2,-5,5].reduceRight((right,left) => right - left)
console.log(`Reduce Right Method: ${arrayReduceRight}`)

// 14. Reverse // reverse an array // index positions also get changed
// Array.reverse
var arrayReverse = [1,23,4,5,6,7]
console.log(`Array Reverse: ${arrayReverse.reverse()}`)

// 15. Shift // Index Position is changed
var arrayShift = [1,2,3,4,5]
var newArrayShift = arrayShift.shift()
console.log(`Shift Array: ${arrayShift}`)

// 16. Slice 
var arraySlice = [7,1,23,13,123,187]
var sliceArray = arraySlice.slice(2,5)
console.log(`Slice Method: ${sliceArray}`)

// 17. Splice
var arraySplice = [7,1,23,13,123,187]
var splicedArray = arraySplice.splice(2,3,'javascript','es6')
console.log(`Spliced Method: ${arraySplice}`)

// 18. Unshift
var arrayUnshift = [10,20,30,40,50,70,80]
arrayUnshift.unshift(2,5)
console.log(arrayUnshift)

// 19. Some
// Syntax: Array.some(callback())
var arraySome = [12,5,8,1,2].some((element, index) => element >=10)
console.log(`Array Some Method: ${arraySome}`)

// 20. Sort
var arraySort = ['e','b','c','d','a']
console.log(`Array Sort ${arraySort.sort()}`)

// 21. toString & toLocaleString
console.log(`To String Method ${typeof [1,2,3,4,5].toLocaleString()}`)

// ES6 Methods
// 22.  Find // Whenever it is true it is going to stop the iteration of elements
var num = [0,2,3,4,5]
var oddNumber = num.find((element) => element %2 == 1)
console.log(`Find Method: ${oddNumber}`)
