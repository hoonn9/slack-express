exports.isLoggedIn = (req, res, next) => {
  console.log('isLoggedIn');
  console.log('req', req.isAuthenticated, req.isAuthenticated());
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('로그인이 필요합니다.');
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  console.log('isNotLoggedIn', req.body);
  console.log('req', req.isAuthenticated, req.isAuthenticated());
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('로그인하지 않은 사용자만 접근할 수 있습니다.');
  }
};
