// make a getRow function
// 1. should accept two arguments (a sudoku grid [array of arrays] and row index)
// 2. return an array containing the numbers in specified row
function getRow(puzzle, row) {
  // console.log("getRow:", puzzle[row]);
  return puzzle[row]; // return is putting all the numbers in the declared row into an array
}

// make a getColumn function
// 1. should accept a sudoku grid and a column index
// 2. return an array containing the numbers in specified column
function getColumn(puzzle, column) {
  let columnArray = []; // create a new array

  for (let i = 0; i < puzzle.length; i++) {
    let columnNumbers = puzzle[i][column]; // this will grab the numbers from the index of the column
    // columnArray = columnNumbers; // won't work because it will not return to a new array.
    columnArray.push(columnNumbers); // .push will add the numbers into the new array
  }
  // console.log("getColumn:", columnArray);
  return columnArray; // return will make the new array with the numbers of the column(going up/down)
}

// make a getSection function
// 1. should accept 3 arguments; a sudoku grid, and x and y coordinate for one of the
// puzzles 3x3 subgrid
// 2. should return an array with all the numbers in the specified subgrid
function getSection(puzzle, x, y) {
  x *= 3; // row index * 3 will get to the subgrid's beginning index ex: beginning of each subgrid is 0 3 & 6
  y *= 3; // column index * 3 will get to the subgrid's beginning index

  let subGrid = []; // makes an array with the numbers in the subgrid

  for (let i = x; i < x + 3; i++) {
    // will get 3 index from the row of the subgrid
    for (let j = y; j < y + 3; j++) {
      // will get 3 index from the column of the row
      let values = puzzle[i][j]; // combines x & y result is number of row x and column y
      // console.log('number in subgrid',[puzzle[i][j]], 'index of x(row)', [i], 'index of y(column)', [j]);
      // subGrid = values; doesnt put into an array
      subGrid.push(values); // .push will add the numbers into the new array
    }
  }
  // console.log("getSection:", subGrid);
  return subGrid; // return will make the new array with the numbers of the subgrids
}
// 1. write a function that goes thru the numbers in the grid 1-9 and checks for no repeats in numbers.

function includes1to9(arr) {
  //console.log('array called:', arr)
  for (let i = 1; i <= 9; i++) { // loop thru numbers 1-9. When a number is not found -1 will be the index
    //console.log('check number:',i, 'number is at index:', arr.indexOf(i))
    if (arr.indexOf(i) === -1) { // when a number is not found indexOf is -1
       return false;
    }
  }
  return true;
}

// make a sudokuIsValid function
// 1. make a new array to get all arrays in the puzzle
// 2. for loops to get each arrays and update new array: rows, columns, & subgrids
// 3. check each arrays to make sure there is no duplicate numbers

function sudokuIsValid(puzzle) {
  let validator = []; //new array to be updated after each loop
  
  //loops for rows and columns
  for (let i = 0; i < 9; i++) { // for loop to get index 1 - 9
    // console.log('current index:',i)
    let row = getRow(puzzle, i);
    let col = getColumn(puzzle, i);
    //console.log('row is', row, 'col is', col);
    validator.push(row, col); // push row and column array into validator array
  }
   console.log('row and column: ',validator)
  
  // loop for subgrid
  // when getSection is called, the index called are between 0-2  ex: getSection(puzzle, 0, 0), getSection(puzzle, 2, 2), 
  for (let i = 0; i <= 2; i++) { // get row index
    // console.log('row index:', i)
    for (let j = 0; j <= 2; j++) { // get column index
      // console.log('column index', j)
      let subgrid = getSection(puzzle, i, j);
      validator.push(subgrid);
      // console.log(getSection(puzzle, i, j))
    }
    // console.log('rows, columns, & subgrids:',validator)
    
    // loop to check if the arrays have duplicate numbers
  }
  for (let i = 0; i < validator.length; i++) { // goes thru all the index of validator
    console.log('index being checked',i); 
    if(!includes1to9(validator[i])) { // if includes1to9 will stop the loop if the index being check comes back false
      return false;
    } 
  }
  return true;
}


//puzzle is the sudoku grid
let puzzle = [
// ss 0 0    ss 0 1    ss 0 2    
  [8, 9, 5,  7, 4, 2,  1, 3, 6], // row 0
  [2, 7, 1,  9, 6, 3,  4, 8, 5], // row 1
  [4, 6, 3,  5, 8, 1,  7, 9, 2], // row 2
// ss 1 0    ss 1 1    ss 1 2
  [9, 3, 4,  6, 1, 7,  2, 5, 8], // row 3
  [5, 1, 7,  2, 3, 8,  9, 6, 4], // row 4
  [6, 8, 2,  4, 5, 9,  3, 7, 1], // rpw 5
// ss 2 0    ss 2 1    ss 2 2 
  [1, 5, 9,  8, 7, 4,  6, 2, 3], // row 6
  [7, 4, 6,  3, 2, 5,  8, 1, 9], // row 7
  [3, 2, 8,  1, 9, 6,  5, 4, 7]  // row 8
// 0  1  2   3  4  5   6  7  8  column
];

sudokuIsValid(puzzle);
//console.log('puzzle is:', sudokuIsValid(puzzle));
// => true

let p8zzle = [
// ss 0 0    ss 0 1    ss 0 2  
  [8, 9, 5,  7, 4, 2,  1, 3, 6], // row 0
  [8, 7, 1,  9, 6, 3,  4, 8, 5], // row 1 
  [4, 6, 3,  5, 8, 1,  7, 9, 2], // row 2
// ss 1 0    ss 1 1    ss 1 2
  [9, 3, 4,  6, 1, 7,  2, 5, 8], // row 3
  [5, 1, 7,  2, 3, 8,  9, 6, 4], // row 4
  [6, 8, 2,  4, 5, 9,  3, 7, 1], // row 5
// ss 2 0    ss 2 1    ss 2 2  
  [1, 5, 9,  8, 7, 4,  6, 2, 3], // row 6
  [7, 4, 6,  3, 2, 5,  8, 1, 9], // row 7
  [3, 2, 8,  1, 9, 6,  5, 4, 7]  // row 8
// 0  1  2   3  4  5   6  7  8  column
];

//sudokuIsValid(p8zzle);
//console.log('p8zzle is:', sudokuIsValid(p8zzle))
// => false

getRow(puzzle, 8);
// -> [ 3,2,8,1,9,6,5,4,7 ]

getRow(puzzle, 0);
// -> [ 8,9,5,7,4,2,1,3,6 ]

getColumn(puzzle, 0);
// -> [ 8,2,4,9,5,6,1,7,3 ]

getColumn(puzzle, 8);
// -> [ 6,5,2,8,4,1,3,9,7 ]

getSection(puzzle, 0, 0);
// -> [ 8,9,5,2,7,1,4,6,3 ]

// This grabs the values from column 0 and row 1 (second from the top left)
getSection(puzzle, 0, 1);
// -> [ 7,4,2,9,6,3,5,8,1 ]

// check if includes 1 - 9 --- true
includes1to9(getSection(puzzle, 0, 0))
//console.log('sudoku array checked is:',includes1to9(getSection(puzzle, 0, 0)))

// check if working with duplicate numbers found --- false
includes1to9(getColumn(p8zzle, 0))
// console.log('sudoku array checked is:',includes1to9(getColumn(p8zzle, 0)))

