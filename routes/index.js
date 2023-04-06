const Router = require('express');
const router = new Router();

const authRouter = require('./auth')

router.use('/', authRouter);

module.exports = router;