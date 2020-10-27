const findLoader = (loader, rules, property = 'test') => rules.find((item) => new RegExp(loader).test(item[property]));

module.exports = {
  findLoader,
};
