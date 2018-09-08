export const SECRET_KEY = '@app-token'
export const isAuthenticated = () => (localStorage.getItem(SECRET_KEY) !== null)
export const getToken = () => localStorage.getItem(SECRET_KEY)
export const authenticateUser = token => localStorage.setItem(SECRET_KEY, token)
export const destroySession = () => localStorage.removeItem(SECRET_KEY)