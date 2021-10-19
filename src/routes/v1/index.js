const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');
const studentRoute = require('./student.route');
const classRoute = require('./class.route');
const apparelSizesRoute = require('./ApparelSize.route');
const productRoute = require('./Product.route');
const productCategoriesRoute = require('./ProductCategories.route');

const haoRoute = require('./hao.route');
const classRoute = require('./class.route');
const studentRoute = require('./student.route');
const apparelSizesRoute = require('./apparelSize.route');
const productRoute = require('./product.route');
const productCategoriesRoute = require('./productCategories.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/haos',
    route: haoRoute,
  },
  {
    path: '/class',
    route: classRoute,
  },
  {
    path: '/students',
    route: studentRoute,
  },
  {
    path: '/apparelSizes',
    route: apparelSizesRoute,
  },
  {
    path: '/products',
    route: productRoute,
  },    
  {
    path: '/productCategories',
    route: productCategoriesRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
