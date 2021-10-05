exports.middleware = (req, res, next) => {
  console.log(`Hellow from middlewares`);
  next();
};
