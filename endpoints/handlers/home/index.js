const meta = require('../../../meta');
const _assign = require('lodash').assign;

module.exports = function (req, res) {
    res.render('home', _assign({
        title: 'Welcome Home :)',
        meta: meta.home
    }, req.locals));
};
