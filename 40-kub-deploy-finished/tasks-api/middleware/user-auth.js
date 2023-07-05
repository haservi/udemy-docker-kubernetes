const axios = require('axios');

const { createError, createAndThrowError } = require('../helpers/error');

const retrieveToken = (headers) => {
  if (!headers.authorization || headers.authorization === '') {
    createAndThrowError('Could not authenticate user.', 401);
  }
  const token = headers.authorization.split(' ')[1];
  if (!token || token === '') {
    createAndThrowError('Could not authenticate user.', 401);
  }
  return token;
};

const verifyUser = async (req, res, next) => {
  let token;

  try {
    token = retrieveToken(req.headers);
  } catch (err) {
    return next(err);
  }

  let response;

  try {
    response = await axios.post(
      `http://${process.env.AUTH_API_ADDRESS}/verify-token`,
      {
        token: token,
      }
    );
  } catch (err) {
    const error = createError('Could not authenticate user.', 401);
    return next(error);
  }
  // 인증 API의 클러스터IP를 통해 받아온 정보를 저장
  req.userId = response.data.uid;
  next();
};

module.exports = verifyUser;
