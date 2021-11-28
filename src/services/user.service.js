import { httpService } from './http.service';

const STORAGE_KEY_LOGGEDIN = 'loggedinUser';

export const userService = {
  login,
  logout,
  signup,
  update,
  getLoggedinUser,
};

window.userService = userService;

async function login(credentials) {
  const user = await httpService.post(`auth/login`, credentials);
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user));
  return user;
}

async function update(credentials) {
  const user = await httpService.put(`user/${credentials._id}`, credentials);
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user));
  return user;
}

async function signup(userInfo) {
  const user = await httpService.post('auth/signup', userInfo);
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user));
  return user;
}

async function logout() {
  await httpService.post('auth/logout');
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null);
  return Promise.resolve();
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN));
}
