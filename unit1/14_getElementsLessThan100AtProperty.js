function lessThan100(number) {
    if(typeof number ==='number'){
      return number < 100;
    }
    return false;
  }
  
  function getElementsLessThan100AtProperty(obj, property) {
    // TODO: 여기에 코드를 작성합니다.
    let key = obj[property];
    let result = [];
    if(property in obj && Array.isArray(key)){
    result =  key.filter(lessThan100);
    }
    return result;
  }
  