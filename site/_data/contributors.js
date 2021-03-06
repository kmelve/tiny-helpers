const got = require('got');

module.exports = async function() {
  const response = await got(
    'https://api.github.com/repos/stefanjudis/tiny-helpers/contributors'
  );

  return JSON.parse(response.body)
    .map(contributor => contributor.login)
    .filter(contributor => contributor !== 'stefanjudis');
};
