function mapCallback(func, arr) {
    // TODO: 여기에 코드를 작성합니다.
      for(let i = 0;i<arr.length;i++){
        arr[i] = func(arr[i]);
      }
      return arr
  }
  