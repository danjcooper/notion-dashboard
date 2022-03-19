const devApiUrl = 'http://localhost:4000';
const prodApiUrl = 'https://portfolio-api-dc.herokuapp.com';

const isDev = () => {
  const environment = process.env.REACT_APP_ENV;
  return environment === 'DEV';
};

const getApiUrl = () => {
  return isDev() ? devApiUrl : prodApiUrl;
};

module.exports = { isDev, getApiUrl };
