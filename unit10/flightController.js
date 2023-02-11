const flights = require('../repository/flightList');
const fs = require('fs');


module.exports = {
  // [GET] /flight
  // 요청 된 파라미터 departure_times, arrival_times 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  // 요청 된 파라미터 departure, destination 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  findAll: (req, res) => {
    const { departure_times, arrival_times, destination, departure } = req.query;//쿼리문에 해당하는 것들을 객체로 만들어 key와 value로 담은 객체 생성
    // TODO: 머리 속으로 생각하기 위한 ex) {departure_times : 12:00:00, arrival_times : 3:00:00, destination : 'BSU', departure : 'ICN'}
    let searchFlight = flights

    if(departure_times && arrival_times){//조건으로 출발 시간과 도착 시간이 있을 경우
      searchFlight = searchFlight.filter((flights)=>(departure_times === flights.departure_times && arrival_times === flights.arrival_times))
    }
    if(destination && departure){//조건으로 도착지와 출발지가  있을 경우
      searchFlight = searchFlight.filter((flights)=>(destination === flights.destination && departure === flights.departure))
    }
    
    return res.json(searchFlight); // 검색된 자료를 json형식으로 응답에 담음
  },
  // [GET] /flight/:uuid
  // 요청 된 uuid 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: (req, res) => {
    const { uuid } = req.params;// 마지막 / ? uuid로 구조분해 할당하면 안되나요   
    // TODO:// ex) uuid : af6fa55c-da65-47dd-af23-578fdba44bed
    let searchFlight = flights
    searchFlight = flights.filter(flights=>
      flights.uuid === uuid)
   
   // console.log(name)
    return res.json(searchFlight); // 검색된 자료를 json형식으로 응답에 담음
  },

  // Advanced
  // [PUT] /flight/:uuid 요청을 수행합니다.
  // 요청 된 uuid 값과 동일한 uuid 값을 가진 항공편 데이터를 요쳥 된 Body 데이터로 수정합니다.
  update: (req, res) => {
    const { uuid } = req.params;
    const bodyData = req.body;


     // TODO:
    let updateData = [];
    if(uuid){
      updateData = flights.filter((data) => data.uuid === uuid)// 배열안에 객체가 담김, id 필터링이니까 요소가 1개
    }
    updateData = Object.assign((updateData[0]),bodyData)//원본을 업데이트하면서 응답에 담기 위한 정보 담기
    //spread 사용시 원본에는 업데이트가 안이루어져 갱신 효과x
    return res.status(200).json(updateData); // 응답으로 해당 객체 담기
  }
};
