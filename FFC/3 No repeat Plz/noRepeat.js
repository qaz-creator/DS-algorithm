function permute(nums, set=[], answer=[]){
  // 1. when nums.length=0
  if(!nums.length) answer.push([...set])

  // 2. nums.length !== 0, loop through nums
  for(let i = 0; i< nums.length; i++){
    const newNums = nums.filter((num,index)=> index!==i)
    set.push(nums[i])
    permute(newNums, set, answer)
    set.pop()
  }
  return answer
}


function permAlone(str) {
  // 1. str -> array, get permutation
  const array = [...str]
  const perms = permute(array)


  // 2. loop through the perms
  let count =0
  for(const perm of perms){
    let repeat= false
    for(let i=0;i<perm.length; i++){
      if(perm[i]==perm[i+1]){
repeat = true
        break
      }
    }
    if(!repeat){
      count ++
    }
  }
  return count
}

permAlone('aab');

