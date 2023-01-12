function getIndex(arr, num) {
    // TODO: 여기에 코드를 작성합니다.
    let pos =0;
    function check(value){
      if(value < num){
        pos++;
      }
      return pos;
    }
    arr.map(check);
    return pos;
  }
  