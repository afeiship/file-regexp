'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fileReplaceContent = exports.fileGetContent = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CHARSET = 'utf-8';

function fileGetContent(inFile, inRegRe) {
  var str = _fs2.default.readFileSync(inFile, CHARSET);
  return str.match(inRegRe)[1];
}

function fileReplaceContent(inFile, inRegRe, inString) {
  var str = _fs2.default.readFileSync(inFile, CHARSET);
  str = str.replace(inRegRe, inString);
  _fs2.default.writeFileSync(inFile, str);
}

exports.fileGetContent = fileGetContent;
exports.fileReplaceContent = fileReplaceContent;