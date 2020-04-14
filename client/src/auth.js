export const TOKEN_KEY = "@agc-test";
export const isAuthenticated = () => (localStorage.getItem(TOKEN_KEY) !== null && localStorage.getItem(TOKEN_KEY).length >= 20);
export const getToken = () => localStorage.getItem(TOKEN_KEY);


export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};


export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
