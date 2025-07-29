let result=[]
    let curr=[]
    const backtrack=(i)=>{
        if(i>=nums.length){
            result.push([...curr]);
            return;
        }
        curr.push(nums[i]);
        backtrack(i+1);
        curr.pop()
        backtrack(i+1)
    }
    backtrack(0)
    return result
};


var permute = function(nums) {
    let res=[]
    let curr=[]
    const backtrack=(curr)=>{
        if(curr.length===nums.length){
            res.push([...curr]);
            return;
        }
        for(let num of nums){
            if(curr.includes(num)){
                continue;
            }
            curr.push(num);
            backtrack(curr)
            curr.pop()
        }

    }
    backtrack([]);
    return res;
};
