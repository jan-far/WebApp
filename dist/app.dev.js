"use strict";

var _express = _interopRequireDefault(require("express"));

var _chalk = _interopRequireDefault(require("chalk"));

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-console */
var port = process.env.PORT || 3001;
var app = (0, _express["default"])();
app.use((0, _morgan["default"])('tiny'));
app.use(_express["default"]["static"](_path["default"].join(__dirname, '/public/')));
app.use('/css', _express["default"]["static"](_path["default"].join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', _express["default"]["static"](_path["default"].join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', _express["default"]["static"](_path["default"].join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views/');
app.set('view engine', 'ejs'); // app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'src/index.html'));
// });

app.get('/', function (req, res) {
  res.render('index', {
    list: ['a', 'b'],
    title: 'Library'
  });
});
app.listen(port, function () {
  // debug(`${chalk.greenBright(`listening on port: ${port}`)}`);
  console.log("".concat(_chalk["default"].greenBright("listening on port: ".concat(port))));
});