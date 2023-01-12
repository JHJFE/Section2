function removeElement(arr, discarder) {
    // TODO: 여기에 코드를 작성합니다.
    function skip(num){
      return num !== discarder;
    }
    return arr.filter(skip);
  }
  