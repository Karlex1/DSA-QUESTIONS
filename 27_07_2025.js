function nonDivisibleSubset(k, s) {
    // Write your code here
    let map={}
    for(let num of s){
        if(map[num%k]){
        map[num%k]+=1}
        else{
            map[num%k]=1
        }
    }
    let length=0;
        if(map[0]){
            length+=1;
        }
    for(let i=1;i<=Math.floor(k/2);i++){
if(i===k-i){
    length+=1
}else{
    length+=Math.max(map[i]|| 0,map[k-i]|| 0);
}
    }
    return length
}
