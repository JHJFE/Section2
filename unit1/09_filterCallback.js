function filterCallback(func, arr) {
    // TODO: 여기에 코드를 작성합니다.
    let result = []
    for(let i =0 ;i<arr.length;i++){
      if(func(arr[i])){
        result.push(arr[i])
      }
    }
    return result;
  }
  