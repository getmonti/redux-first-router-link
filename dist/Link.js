'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reduxFirstRouter = require('redux-first-router');

var _toUrl = require('./toUrl');

var _toUrl2 = _interopRequireDefault(_toUrl);

var _handlePress = require('./handlePress');

var _handlePress2 = _interopRequireDefault(_handlePress);

var _preventDefault = require('./preventDefault');

var _preventDefault2 = _interopRequireDefault(_preventDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Link = function Link(_ref) {
  var to = _ref.to,
      href = _ref.href,
      redirect = _ref.redirect,
      replace = _ref.replace,
      _ref$tagName = _ref.tagName,
      tagName = _ref$tagName === undefined ? 'a' : _ref$tagName,
      children = _ref.children,
      onPress = _ref.onPress,
      onClick = _ref.onClick,
      _ref$down = _ref.down,
      down = _ref$down === undefined ? false : _ref$down,
      _ref$shouldDispatch = _ref.shouldDispatch,
      shouldDispatch = _ref$shouldDispatch === undefined ? true : _ref$shouldDispatch,
      target = _ref.target,
      dispatch = _ref.dispatch,
      routesMap = _ref.routesMap,
      props = _objectWithoutProperties(_ref, ['to', 'href', 'redirect', 'replace', 'tagName', 'children', 'onPress', 'onClick', 'down', 'shouldDispatch', 'target', 'dispatch', 'routesMap']);

  to = href || to; // href is deprecated and will be removed in next major version

  var url = (0, _toUrl2.default)(to, routesMap);
  var handler = _handlePress2.default.bind(null, url, routesMap, onPress || onClick, shouldDispatch, target, dispatch, to, replace || redirect);
  var Root = tagName;

  var localProps = {};

  if (tagName === 'a' && url) {
    localProps.href = url;
  }

  if (down && handler) {
    localProps.onMouseDown = handler;
    localProps.onTouchStart = handler;
  }

  if (target) {
    localProps.target = target;
  }

  return _react2.default.createElement(
    Root,
    _extends({
      onClick: !down && handler || _preventDefault2.default
    }, localProps, props),
    children
  );
};

exports.Link = Link;
var mapState = function mapState(state) {
  return {
    routesMap: (0, _reduxFirstRouter.selectLocationState)(state).routesMap
  };
};
var connector = (0, _reactRedux.connect)(mapState);

// $FlowIgnore
exports.default = connector(Link);