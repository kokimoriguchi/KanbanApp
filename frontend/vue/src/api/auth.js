import client from './client';

export default {
  login: authInfo => {
    return new Promise((resolve, reject) => {
      client.post('http://localhost:8000/auth/login/', authInfo)
        .then(res => resolve({ token: res.data.token, userId: res.data.userId }))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message));
        });
    });
  },
};
