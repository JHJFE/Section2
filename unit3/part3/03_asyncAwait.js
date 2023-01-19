async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다
  let result = {}
  await fetch(newsURL)
  .then(obj1 => obj1.json())
  .then(newsD => result.news = newsD.data)
  
  await fetch(weatherURL)
  .then(obj2 => obj2.json())
  .then(weatherD => result.weather = weatherD)

  return result;
}
if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}
