function keep(arr, keeper) {
    // TODO: 여기에 코드를 작성합니다.
    function keep(num){
      return num === keeper;
    }
    return arr.filter(keep);
  }
  