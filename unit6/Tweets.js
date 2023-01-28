// TODO : useState를 react로 부터 import 합니다.
import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
  const [msg,setMsg] = useState('');
  const [user,setUser] = useState('');
  const [oldtweets,setWithNew] = useState(dummyTweets);

  const getRandomNumber = (min, max) => {
    return parseInt(Math.random() * (Number(max) - Number(min) + 2));
  };
  const getParsedDate = (createdAt) => {
    return new Date(createdAt).toLocaleDateString('ko-KR');
  }
  
  const handleButtonClick = (event) => {
    const tweet = {
      id: oldtweets.length+1,
      username: user,
      picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
      content:msg,
      createdAt: getParsedDate(new Date()),
      updatedAt: 'No Updates',
    };
    
    setWithNew([tweet, ...oldtweets])
    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    // 트윗 전송이 가능하게 작성해야 합니다.
  };

  const handleChangeUser = (event) => {
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setUser(event.target.value);
  };

  const handleChangeMsg = (event) => {
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setMsg(event.target.value);

  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  onChange={handleChangeUser}
                  type="text"
                  defaultValue="parkhacker"
                  placeholder='사용자 이름을 여기 입력하세요..'
                  className="tweetForm__input--username"
                ></input>
                <textarea onChange = {handleChangeMsg} className='tweetForm__input--message'></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  {'total: '+oldtweets.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              <button onClick={handleButtonClick} className = "tweetForm__submitButton"></button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser"></div>
      <ul className="tweets">
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
        {oldtweets.map((tweet,index) => <Tweet tweet={tweet} key = {index}/>)}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
