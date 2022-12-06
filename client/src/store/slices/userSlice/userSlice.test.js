import userReducer, { toggleIsLogin, fetchUserInfo } from './userSlice';

const initialState = {
  isLogin: !!localStorage.getItem('token'),
  userData: null,
  error: null,
  isLoading: false,
};

describe('userSlice', () => {
  test('should return initial state when app is mount', () => {
    const res = userReducer(undefined, { type: '' });

    expect(res).toEqual(initialState);
  });

  test('should toggleIsLogin work correct', () => {
    const action = { type: toggleIsLogin.type };

    const res = userReducer(initialState, action);

    expect(res.isLogin).not.toEqual(initialState.isLogin);
  });
});
