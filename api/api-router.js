const router = require('express').Router();

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);
const bcrypt = require('bcryptjs');


router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post('/hash', (req, res) => {
  const  pw = req.body.password;

  //hash pw

  req.body.password = bcrypt.hashSync(pw, 12);

  //return to user in an object

  res.status(200).json({password: `${pw}`, hashed: `${req.body.password}`});
})

module.exports = router;
