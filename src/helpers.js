const devApiUrl = 'http://localhost:4000';
const prodApiUrl = 'https://portfolio-api-dc.herokuapp.com';

const isDev = () => {
  const environment = process.env.REACT_APP_ENV;
  return environment === 'DEV';
};

const getApiUrl = () => {
  return isDev() ? devApiUrl : prodApiUrl;
};

const hasItemsInShoppingList = (items) => {
  const result =
    items.filter((item) => item.inShoppingList || item.manuallyAdded).length >
    0;
  return result;
};

module.exports = { isDev, getApiUrl, hasItemsInShoppingList };
