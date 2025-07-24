var longestMountain = function(nums) {
    let max = 0;

    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
            let left = i - 1, right = i + 1;

            while (left > 0 && nums[left] > nums[left - 1]) left--;
            while (right < nums.length - 1 && nums[right] > nums[right + 1]) right++;

            max = Math.max(max, right - left + 1);
        }
    }

    return max;
};

var peakIndexInMountainArray = function(arr) {
    let left = 0, right = arr.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < arr[mid + 1]) {
            // peak is to the right
            left = mid + 1;
        } else {
            // peak is at mid or to the left
            right = mid;
        }
    }
    return left; // or right (they are equal here)
};

var orangesRotting = function(grid) {
    let rows = grid.length, cols = grid[0].length;
    let queue = [];
    let fresh = 0;
    
    // Initialize queue with all rotten oranges and count fresh ones
    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(grid[r][c] === 2) {
                queue.push([r, c]);
            } else if(grid[r][c] === 1) {
                fresh++;
            }
        }
    }

    let directions = [[0,1], [1,0], [0,-1], [-1,0]];
    let minutes = 0;
    
    while(queue.length && fresh > 0) {
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let [x, y] = queue.shift();
            for(let [dx, dy] of directions) {
                let nx = x + dx, ny = y + dy;
                if(nx >= 0 && ny >= 0 && nx < rows && ny < cols && grid[nx][ny] === 1) {
                    grid[nx][ny] = 2;
                    fresh--;
                    queue.push([nx, ny]);
                }
            }
        }
        minutes++;
    }

    return fresh === 0 ? minutes : -1;
};
