function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
  let result = {};

  let datas = [
    fetch(newsURL).then(obj1 => obj1.json()),
    fetch(weatherURL).then(obj2 => obj2.json())
  ]

  return Promise.all(datas).then(all =>{
    result.news = all[0].data;
    result.weather = all[1];
    return result;
  })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}
