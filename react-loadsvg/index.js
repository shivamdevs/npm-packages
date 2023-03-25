"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function LoadSVG(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 20 : _ref$size,
    _ref$stroke = _ref.stroke,
    stroke = _ref$stroke === void 0 ? 8 : _ref$stroke,
    _ref$backStroke = _ref.backStroke,
    backStroke = _ref$backStroke === void 0 ? 0 : _ref$backStroke,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 2000 : _ref$duration,
    _ref$lineCap = _ref.lineCap,
    lineCap = _ref$lineCap === void 0 ? "round" : _ref$lineCap,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "dodgerblue" : _ref$color,
    _ref$backColor = _ref.backColor,
    backColor = _ref$backColor === void 0 ? "transparent" : _ref$backColor;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    className: "loadSVG",
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "50",
    cy: "50",
    r: 50 - backStroke / 2,
    stroke: backColor,
    strokeWidth: backStroke,
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "50",
    cy: "50",
    r: 50 - stroke / 2,
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: lineCap,
    fill: "none"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    repeatCount: "indefinite",
    dur: "".concat(duration, "ms"),
    values: "0 50 50;180 50 50;720 50 50",
    keyTimes: "0;0.5;1"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "stroke-dasharray",
    repeatCount: "indefinite",
    dur: "".concat(duration, "ms"),
    values: "25 250;250 25;25 250",
    keyTimes: "0;0.5;1"
  })));
}
;
var _default = LoadSVG;
exports["default"] = _default;
