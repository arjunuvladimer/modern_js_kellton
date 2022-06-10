// ARRAYS
var array1 = [1,2,3,4] // Single Dimensional Array
console.log(array1[2])
var array2 = [[1,2],[3,4]] // Multi Dimensional Array
var array3 = [[[1,2,3]]]
console.log(array3[0][0][2])

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


