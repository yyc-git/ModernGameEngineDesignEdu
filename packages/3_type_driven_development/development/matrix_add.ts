// type matrix<RowCount, ColCount> = {
//     rowCount: RowCount,
//     colCount: ColCount
//     value: Float32Array
// }

// declare function createMatrix<RowCount extends number, ColCount extends number>(rowCount: RowCount, colCount: ColCount, value: Array<number>):
//     matrix<RowCount, ColCount>;
// // [typeof value]["length"] extends RowCount * ColCount ? 
// // [typeof value]["length"] extends RowCount  ? 
// // matrix<RowCount, ColCount> : null;
// // function createMatrix<RowCount extends number, ColCount extends number>(rowCount: RowCount, colCount: ColCount, value: Array<number>): matrix<RowCount, ColCount>{
// //     return {
// //         rowCount,
// //         colCount,
// //         value: new Float32Array(value)
// //     }
// // }

// // declare function add(mat1: matrix<RowCount, ColCount>, mat2: matrix<RowCount, ColCount>): matrix<RowCount, ColCount>;
// // declare function add<RowCount1 extends number,RowCount2 extends number, ColCount1 extends number, ColCount2 extends number>(mat1: matrix<RowCount1, ColCount1>, mat2: matrix<RowCount2, ColCount2>):  RowCount1 extends RowCount2 ? ColCount1 extends ColCount2 ?  matrix<RowCount1, ColCount1> : never : never;
// function add<RowCount1 extends number, RowCount2 extends number, ColCount1 extends number, ColCount2 extends number>(mat1: matrix<RowCount1, ColCount1>, mat2: matrix<RowCount2, ColCount2>): RowCount1 extends RowCount2 ? ColCount1 extends ColCount2 ? matrix<RowCount1, ColCount1> : never : never;
// function add(mat1, mat2) {
//     return mat2;
// }


// // let mat1 = createMatrix(4, 3, [1, 2, 3, 4, 5, 6]);
// let mat1 = createMatrix(2, 3, [1, 2, 3, 4, 5, 6]);
// let mat2 = createMatrix(2, 3, [3, 1, 1, 2, 2, 3]);

// // let resultMat = add<2,3>(mat1, mat2);
// let resultMat = add(mat1, mat2);
// console.log(resultMat.value);





type matrix<RowCount, ColCount> = {
    rowCount: RowCount,
    colCount: ColCount
    value: Float32Array
}

declare function createMatrix<RowCount extends number, ColCount extends number>(rowCount: RowCount, colCount: ColCount, value: Array<number>):
    matrix<RowCount, ColCount>;
// [typeof value]["length"] extends RowCount * ColCount ? 
// [typeof value]["length"] extends RowCount  ? 
// matrix<RowCount, ColCount> : null;
// function createMatrix<RowCount extends number, ColCount extends number>(rowCount: RowCount, colCount: ColCount, value: Array<number>): matrix<RowCount, ColCount>{
//     return {
//         rowCount,
//         colCount,
//         value: new Float32Array(value)
//     }
// }

// declare function add<RowCount, ColCount>(mat1: matrix<RowCount, ColCount>, mat2: matrix<RowCount, ColCount>): matrix<RowCount, ColCount>;
// declare function add<RowCount1 extends number,RowCount2 extends number, ColCount1 extends number, ColCount2 extends number>(mat1: matrix<RowCount1, ColCount1>, mat2: matrix<RowCount2, ColCount2>):  RowCount1 extends RowCount2 ? ColCount1 extends ColCount2 ?  matrix<RowCount1, ColCount1> : never : never;
function add<RowCount1 extends number, RowCount2 extends number, ColCount1 extends number, ColCount2 extends number>(mat1: matrix<RowCount1, ColCount1>, mat2: matrix<RowCount2, ColCount2>): RowCount1 extends RowCount2 ? ColCount1 extends ColCount2 ? matrix<RowCount1, ColCount1> : never : never;
function add(mat1, mat2) {
    return mat1;
}


// let mat1 = createMatrix(2, 5, [1, 2, 3, 4, 5, 6]);
let mat1 = createMatrix(2, 3, [1, 2, 3, 4, 5, 6]);
let mat2 = createMatrix(2, 3, [3, 1, 1, 2, 2, 3]);

let resultMat = add(mat1, mat2);
// let resultMat = add(mat1, mat2);
console.log(resultMat.value);
