function callbackOnly(callback, response) {
    // TODO: 여기에 코드를 작성합니다.
    if(response.status === 'fail'){
      return 'Somthing went worng!';
    }else{
        return callback(response.data);
      }
    
  }
  