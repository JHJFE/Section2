import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getFlight } from '../api/FlightDataApi';
import FlightList from './component/FlightList';
import LoadingIndicator from './component/LoadingIndicator';
import Search from './component/Search';
import Debug from './component/Debug';
// 후반 테스트를 진행할 때 아래 import를 삭제합니다.


export default function Main() {
  // 항공편 검색 조건을 담고 있는 상태
  const [condition, setCondition] = useState({ // Search.js에서 도착지와 출발지를 담을 condition 상태 변경
    departure: 'ICN',
  });

  const [loading,setLoading]=useState(true); // loading 상태가 true일 경우 로딩화면을 데이터가 Fetch가 완료되고 False로 변경후 데이터 화면을
  const [list,setList]=useState([]);// 필터링된 데이터를 담을 상태
  //const [flightList, setFlightList] = useState(json);
 
  // 주어진 검색 키워드에 따라 condition 상태를 변경시켜주는 함수
  const search = ({ departure, destination }) => {
    if (condition.departure !== departure || condition.destination !== destination) {
      console.log('condition 상태를 변경시킵니다');

      setCondition({ departure, destination })
      // TODO: search 함수가 전달 받아온 '항공편 검색 조건' 인자를 condition 상태에 적절하게 담아보세요.
    }
  };

  const filterByCondition = (flight) => {
    let pass = true;
    if (condition.departure) {
      pass = pass && flight.departure === condition.departure;
    }
    if (condition.destination) {
      pass = pass && flight.destination === condition.destination;
    }
    return pass;
  };

  global.search = search; // 실행에는 전혀 지장이 없지만, 테스트를 위해 필요한 코드입니다. 이 코드는 지우지 마세요!

  // TODO: Effeck Hook을 이용해 AJAX 요청을 보내보세요.
  // TODO: 더불어, 네트워크 요청이 진행됨을 보여주는 로딩 컴포넌트(<LoadingIndicator/>)를 제공해보세요.
  useEffect(() => {    
    setLoading(true)// true일때 로딩중 화면 보여주기
    getFlight(condition)// 원하는 데이터 필터링한 프로미스 객체 가져오기
    .then(list => {  // result 값 가져오기
      setList(list) // list 상태를 result로 넣기      
      setLoading(false)// 데이터 가져온 후 Fight List 출력
    })
  }, [condition]) // 출발지, 도착지 변경 될 경우 위의 과정 반복


  // TODO: 테스트 케이스의 지시에 따라 search 함수를 Search 컴포넌트로 내려주세요.
  return (
    <div>
      <Head>
        <title>States Airline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>여행가고 싶을 땐, States Airline</h1>
        <Search onSearch={search} />
        <div className="table">
          <div className="row-header">
            <div className="col">출발</div>
            <div className="col">도착</div>
            <div className="col">출발 시각</div>
            <div className="col">도착 시각</div>
            <div className="col"></div>
          </div>
          {loading ? <LoadingIndicator/> : <FlightList list={list} />}
        </div>

        <div className="debug-area">
          <Debug condition={condition} />
        </div>
        <img id="logo" alt="logo" src="codestates-logo.png" />
      </main>
    </div>
  );
}
