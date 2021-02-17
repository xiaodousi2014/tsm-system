const userToken = 'loginToken'; 
const userName = 'loginName'; 
// USER_TOKEN
// USER_NAME
/**处理建筑 */
export function getUserToken() {
  return localStorage.getItem(userToken)
}

export function setUserToken(data) {
  return localStorage.setItem(userToken, data)
}

export function removeloginInfo() {
  sessionStorage.removeItem('loginName');
        sessionStorage.removeItem('loginToken'); 
}

