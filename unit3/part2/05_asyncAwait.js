const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersAsyncAwait = async () => {
  // TODO: async/await 키워드를 이용해 작성합니다

  let result = [];
  result.push(await getDataFromFilePromise(user1Path))
  result.push(await getDataFromFilePromise(user2Path))


  return result.map((n) => {
    return JSON.parse(n);
  })
}

// readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait
}