const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
const basket = [];
console.log(moves[0])
console.log(board[moves[0] - 1][0]);
console.log(board[moves[0] - 1][1]);
console.log(board[moves[0] - 1][2]);
console.log(board[moves[0] - 1][3]);

basket.push(board[moves[0] - 1][3]);

console.log(basket);