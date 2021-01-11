/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let row = grid.length
    let col = grid[0].length
    let res = 0
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if(grid[i][j]){
                //如果为（上下左右）边缘 或 上下左右为水
                if(i<row-1&&!grid[i+1][j]||i==row-1)   res++
                if(i>0&&!grid[i-1][j]||i==0)   res++
                if(j<col-1&&!grid[i][j+1]||j==col-1)   res++
                if(j>0&&!grid[i][j-1]||j==0)   res++
            }
        }
        
    }
    return res
};

console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]))