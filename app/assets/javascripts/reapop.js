(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactRedux"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactRedux"], factory);
	else if(typeof exports === 'object')
		exports["reapop"] = factory(require("React"), require("ReactRedux"));
	else
		root["reapop"] = factory(root["React"], root["ReactRedux"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.removeNotification = exports.updateNotification = exports.addNotification = exports.reducer = exports.types = exports.actions = exports.POSITIONS = exports.STATUS = undefined;

	var _NotificationsSystem = __webpack_require__(8);

	var _NotificationsSystem2 = _interopRequireDefault(_NotificationsSystem);

	var _constants = __webpack_require__(1);

	var _notifications = __webpack_require__(4);

	var _notifications2 = _interopRequireDefault(_notifications);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.STATUS = _constants.STATUS;
	exports.POSITIONS = _constants.POSITIONS;
	exports.actions = _notifications.actions;
	exports.types = _notifications.types;
	exports.reducer = _notifications2.default;
	exports.addNotification = _notifications.addNotification;
	exports.updateNotification = _notifications.updateNotification;
	exports.removeNotification = _notifications.removeNotification;
	// NotificationsSystem React component

	exports.default = _NotificationsSystem2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var DEFAULT_STATUS = exports.DEFAULT_STATUS = 'default';
	var INFO_STATUS = exports.INFO_STATUS = 'info';
	var SUCCESS_STATUS = exports.SUCCESS_STATUS = 'success';
	var WARNING_STATUS = exports.WARNING_STATUS = 'warning';
	var ERROR_STATUS = exports.ERROR_STATUS = 'error';

	var STATUS = exports.STATUS = {
	  default: DEFAULT_STATUS,
	  info: INFO_STATUS,
	  success: SUCCESS_STATUS,
	  warning: WARNING_STATUS,
	  error: ERROR_STATUS
	};

	var TOP = exports.TOP = 't';
	var TOP_CENTER = exports.TOP_CENTER = 'tc';
	var TOP_LEFT_POSITION = exports.TOP_LEFT_POSITION = 'tl';
	var TOP_RIGHT_POSITION = exports.TOP_RIGHT_POSITION = 'tr';
	var BOTTOM = exports.BOTTOM = 'b';
	var BOTTOM_CENTER = exports.BOTTOM_CENTER = 'bc';
	var BOTTOM_LEFT_POSITION = exports.BOTTOM_LEFT_POSITION = 'bl';
	var BOTTOM_RIGHT_POSITION = exports.BOTTOM_RIGHT_POSITION = 'br';

	var POSITIONS = exports.POSITIONS = {
	  top: TOP,
	  topCenter: TOP_CENTER,
	  topLeft: TOP_LEFT_POSITION,
	  topRight: TOP_RIGHT_POSITION,
	  bottom: BOTTOM,
	  bottomCenter: BOTTOM_CENTER,
	  bottomLeft: BOTTOM_LEFT_POSITION,
	  bottomRight: BOTTOM_RIGHT_POSITION
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.convertStatus = convertStatus;
	exports.Timer = Timer;
	exports.treatNotification = treatNotification;
	exports.preloadImage = preloadImage;
	exports.mapObjectValues = mapObjectValues;

	var _constants = __webpack_require__(1);

	/**
	 * Convert status in a understandable status for the Notification component
	 * @param {String|Number} status
	 * @returns {String} status an understandable status
	 */
	function convertStatus(status) {
	  var reHttpStatusCode = /^\d{3}$/;
	  // convert HTTP status code
	  if (reHttpStatusCode.test(status)) {
	    switch (true) {
	      case /^1/.test(status):
	        return _constants.STATUS.info;
	      case /^2/.test(status):
	        return _constants.STATUS.success;
	      case /^(4|5)/.test(status):
	        return _constants.STATUS.error;
	    }
	  }
	  return status;
	}

	/**
	 * Create a Timer
	 * @param {Function} callback
	 * @param {Number} delay
	 * @constructor
	 */
	function Timer(callback, delay) {
	  var timerId = void 0;
	  var start = void 0;
	  var remaining = delay;

	  this.pause = function () {
	    clearTimeout(timerId);
	    remaining -= new Date() - start;
	  };
	  this.resume = function () {
	    start = new Date();
	    clearTimeout(timerId);
	    timerId = setTimeout(callback, remaining);
	  };

	  this.getTimeRemaining = function () {
	    return remaining;
	  };
	}

	/**
	 * Treat data of a notification
	 * @param {Object} notification
	 * @returns {Object} a notification
	 */
	function treatNotification(notification) {
	  if (notification.dismissAfter) {
	    notification.dismissAfter = parseInt(notification.dismissAfter);
	  }
	  if (notification.image) {
	    notification.status = _constants.STATUS.default;
	  } else {
	    notification.status = convertStatus(notification.status);
	  }
	  if (!notification.buttons) {
	    notification.buttons = [];
	  }
	  return notification;
	}

	/**
	 * Preload an image
	 * @param {String} url url of image to load
	 * @param {Function} onload Function called when image is loaded
	 * @returns {void}
	 */
	function preloadImage(url, onload) {
	  var image = new Image();
	  image.src = url;
	  image.onload = onload;
	  return image;
	}

	/**
	 * Return values of an Object in an Array
	 * @param {Object} obj
	 * @returns {Array}
	 */
	function mapObjectValues(obj) {
	  var array = [];

	  for (var key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      array.push(obj[key]);
	    }
	  }
	  return array;
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.types = exports.actions = exports.updateNotification = exports.addNotification = undefined;
	exports.removeNotification = removeNotification;

	var _helpers = __webpack_require__(2);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	// An array to store notifications object
	var INITIAL_STATE = [];
	// Action types
	var ADD_NOTIFICATION = 'ADD_NOTIFICATION';
	var UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION';
	var REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

	/**
	 * Add a notification (thunk action creator)
	 *
	 * We use a thunk here to create an ADD_NOTIFICATION action
	 * and only return the notification object.
	 * @param {Object} notification
	 * @returns {Object} notification
	 */
	var addNotification = exports.addNotification = function addNotification(notification) {
	  return function (dispatch) {
	    if (!notification.id) {
	      notification.id = new Date().getTime();
	    }
	    notification = (0, _helpers.treatNotification)(notification);
	    // if there is an image, we preload it
	    // and add notification when image is loaded
	    if (notification.image) {
	      (0, _helpers.preloadImage)(notification.image, dispatch.bind(undefined, _addNotification(notification)));
	    } else {
	      dispatch(_addNotification(notification));
	    }
	    return notification;
	  };
	};

	/**
	 * Add a notification (action creator)
	 *
	 * @param {Object} notification
	 * @returns {{type: string, payload: {Object}}}
	 * @private
	 */
	function _addNotification(notification) {
	  return {
	    type: ADD_NOTIFICATION,
	    payload: notification
	  };
	}

	/**
	 * Update a notification (thunk action creator)
	 *
	 * We use a thunk here to create an UPDATE_NOTIFICATION action
	 * and only return the notification object.
	 * @param {Object} notification
	 * @returns {Object} notification
	 */
	var updateNotification = exports.updateNotification = function updateNotification(notification) {
	  return function (dispatch, getState) {
	    if (!notification.id) {
	      throw new Error('A notification must have an `id` property to be updated');
	    }

	    var notifications = getState().notifications;
	    var index = notifications.findIndex(function (oldNotification) {
	      return oldNotification.id === notification.id;
	    });
	    var currNotification = notifications[index];

	    notification = (0, _helpers.treatNotification)(notification);

	    // if image is different, then we preload it
	    // and update notification when image is loaded
	    if (notification.image && (!currNotification.image || currNotification.image && notification.image !== currNotification.image)) {
	      (0, _helpers.preloadImage)(notification.image, dispatch.bind(undefined, _updateNotification(notification)));
	    } else {
	      dispatch(_updateNotification(notification));
	    }
	    return notification;
	  };
	};

	/**
	 * Update a notification (action creator)
	 *
	 * @param {Object} notification
	 * @returns {{type: string, payload: {Object}}}
	 * @private
	 */
	function _updateNotification(notification) {
	  return {
	    type: UPDATE_NOTIFICATION,
	    payload: notification
	  };
	}

	/**
	 * Remove a notification (action creator)
	 *
	 * @param {Object} notification
	 * @returns {{type: string, payload: {Object}}}
	 */
	function removeNotification(notification) {
	  return {
	    type: REMOVE_NOTIFICATION,
	    payload: notification
	  };
	}

	// Action creators
	var actions = exports.actions = {
	  addNotification: addNotification,
	  updateNotification: updateNotification,
	  removeNotification: removeNotification
	};

	// Actions types
	var types = exports.types = {
	  ADD_NOTIFICATION: ADD_NOTIFICATION,
	  UPDATE_NOTIFICATION: UPDATE_NOTIFICATION,
	  REMOVE_NOTIFICATION: REMOVE_NOTIFICATION
	};

	// Reducers

	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	  var _ref = arguments[1];
	  var type = _ref.type,
	      payload = _ref.payload;

	  switch (type) {
	    case ADD_NOTIFICATION:
	      return [].concat(_toConsumableArray(state), [payload]);
	    case UPDATE_NOTIFICATION:
	      // get index of the notification
	      var index = state.findIndex(function (notification) {
	        return notification.id === payload.id;
	      });
	      // replace the old notification by the new one
	      state[index] = Object.assign({}, payload);
	      return [].concat(_toConsumableArray(state));
	    case REMOVE_NOTIFICATION:
	      return state.filter(function (notification) {
	        return notification.id !== payload;
	      });
	    default:
	      return state;
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Notification = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(5);

	var _helpers = __webpack_require__(2);

	var _notifications = __webpack_require__(4);

	var _constants = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Create a timer
	 * @param {Number} dismissAfter
	 * @param {Array} buttons
	 * @param {Function} callback
	 * @returns {Function|null} a Timer
	 */
	function createTimer(dismissAfter, buttons, callback) {
	  if (dismissAfter > 0 && (!buttons || buttons && buttons.length === 0)) {
	    return new _helpers.Timer(callback, dismissAfter);
	  }
	  return null;
	}

	var Notification = exports.Notification = function (_Component) {
	  _inherits(Notification, _Component);

	  /**
	   * Constructor
	   * Bind methods
	   * @param {Object} props
	   * @returns {void}
	   */
	  function Notification(props) {
	    _classCallCheck(this, Notification);

	    var _props$notification = props.notification,
	        dismissAfter = _props$notification.dismissAfter,
	        buttons = _props$notification.buttons;

	    var _this = _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this, props));

	    _this._remove = _this._remove.bind(_this);
	    _this._pauseTimer = _this._pauseTimer.bind(_this);
	    _this._resumeTimer = _this._resumeTimer.bind(_this);
	    _this.state = {
	      timer: createTimer(dismissAfter, buttons, _this._remove)
	    };
	    return _this;
	  }

	  /**
	   * Run `onAdd` callback function when component is mounted
	   * @returns {void}
	   */

	  // Properties types


	  _createClass(Notification, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var onAdd = this.props.notification.onAdd;

	      if (typeof onAdd === 'function') {
	        onAdd();
	      }
	    }

	    /**
	     * Run `onRemove` callback function when component will unmount
	     * @returns {void}
	     */

	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var onRemove = this.props.notification.onRemove;

	      if (typeof onRemove === 'function') {
	        onRemove();
	      }
	    }

	    /**
	     * Update timer
	     * @param {Object} nextProps
	     * @returns {void}
	     */

	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _nextProps$notificati = nextProps.notification,
	          dismissAfter = _nextProps$notificati.dismissAfter,
	          buttons = _nextProps$notificati.buttons;

	      this.setState({
	        timer: createTimer(dismissAfter, buttons, this._remove)
	      });
	    }

	    /**
	     * Remove the notification
	     * @private
	     * @returns {void}
	     */

	  }, {
	    key: '_remove',
	    value: function _remove() {
	      var _props = this.props,
	          removeNotification = _props.removeNotification,
	          id = _props.notification.id;

	      removeNotification(id);
	    }

	    /**
	     * Pauses the timer
	     * @returns {void}
	     * @private
	     */

	  }, {
	    key: '_pauseTimer',
	    value: function _pauseTimer() {
	      var timer = this.state.timer;

	      timer.pause();
	    }

	    /**
	     * Resumes the timer
	     * @returns {void}
	     * @private
	     */

	  }, {
	    key: '_resumeTimer',
	    value: function _resumeTimer() {
	      var timer = this.state.timer;

	      timer.resume();
	    }

	    /**
	     * Wrap content in an object ready for HTML
	     * @param {String} content a text
	     * @returns {Object}
	     * @private
	     */

	  }, {
	    key: '_setHTML',
	    value: function _setHTML(content) {
	      return {
	        __html: content
	      };
	    }

	    /**
	     * Render button(s)
	     * @returns {*}
	     */

	  }, {
	    key: '_renderButtons',
	    value: function _renderButtons() {
	      var _props2 = this.props,
	          className = _props2.className,
	          buttons = _props2.notification.buttons;


	      return buttons.map(function (button) {
	        return _react2.default.createElement(
	          'button',
	          { key: button.name, className: className.button, onClick: button.onClick },
	          _react2.default.createElement(
	            'span',
	            { className: className.buttonText },
	            button.primary ? _react2.default.createElement(
	              'b',
	              null,
	              button.name
	            ) : button.name
	          )
	        );
	      });
	    }

	    /**
	     * Render
	     * @returns {XML}
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props,
	          className = _props3.className,
	          _props3$notification = _props3.notification,
	          title = _props3$notification.title,
	          message = _props3$notification.message,
	          status = _props3$notification.status,
	          dismissible = _props3$notification.dismissible,
	          closeButton = _props3$notification.closeButton,
	          buttons = _props3$notification.buttons,
	          image = _props3$notification.image,
	          allowHTML = _props3$notification.allowHTML;
	      var timer = this.state.timer;

	      var isDismissible = dismissible && buttons.length === 0;

	      if (timer) {
	        this._resumeTimer();
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: className.wrapper,
	          onClick: isDismissible && !closeButton ? this._remove : '',
	          onMouseEnter: timer ? this._pauseTimer : '',
	          onMouseLeave: timer ? this._resumeTimer : '' },
	        _react2.default.createElement(
	          'div',
	          { className: className.main + ' ' + className.status(status) + ' ' + ((isDismissible && !closeButton ? className.dismissible : '') + ' ') + ('' + className.buttons(buttons.length)) },
	          image ? _react2.default.createElement(
	            'div',
	            { className: className.imageContainer },
	            _react2.default.createElement('span', { className: className.image, style: { backgroundImage: 'url(' + image + ')' } })
	          ) : _react2.default.createElement('span', { className: className.icon }),
	          _react2.default.createElement(
	            'div',
	            { className: className.meta },
	            title ? allowHTML ? _react2.default.createElement('h4', { className: className.title, dangerouslySetInnerHTML: this._setHTML(title) }) : _react2.default.createElement(
	              'h4',
	              { className: className.title },
	              title
	            ) : '',
	            message ? allowHTML ? _react2.default.createElement('p', { className: className.message, dangerouslySetInnerHTML: this._setHTML(message) }) : _react2.default.createElement(
	              'p',
	              { className: className.message },
	              message
	            ) : ''
	          ),
	          isDismissible && closeButton ? _react2.default.createElement(
	            'div',
	            { className: className.closeButtonContainer },
	            _react2.default.createElement('span', { className: className.closeButton, onClick: this._remove })
	          ) : '',
	          buttons.length ? _react2.default.createElement(
	            'div',
	            { className: className.buttons(), onClick: this._remove },
	            this._renderButtons()
	          ) : ''
	        )
	      );
	    }
	  }]);

	  return Notification;
	}(_react.Component);

	Notification.propTypes = {
	  className: _react2.default.PropTypes.shape({
	    main: _react2.default.PropTypes.string.isRequired,
	    wrapper: _react2.default.PropTypes.string.isRequired,
	    meta: _react2.default.PropTypes.string.isRequired,
	    title: _react2.default.PropTypes.string.isRequired,
	    message: _react2.default.PropTypes.string.isRequired,
	    imageContainer: _react2.default.PropTypes.string.isRequired,
	    image: _react2.default.PropTypes.string.isRequired,
	    icon: _react2.default.PropTypes.string.isRequired,
	    status: _react2.default.PropTypes.func.isRequired,
	    dismissible: _react2.default.PropTypes.string.isRequired,
	    closeButtonContainer: _react2.default.PropTypes.string.isRequired,
	    closeButton: _react2.default.PropTypes.string.isRequired,
	    buttons: _react2.default.PropTypes.func.isRequired,
	    button: _react2.default.PropTypes.string.isRequired,
	    buttonText: _react2.default.PropTypes.string.isRequired
	  }).isRequired,
	  notification: _react2.default.PropTypes.shape({
	    id: _react2.default.PropTypes.string.isRequired,
	    title: _react2.default.PropTypes.string,
	    message: _react2.default.PropTypes.string,
	    image: _react2.default.PropTypes.string,
	    status: _react2.default.PropTypes.string.isRequired,
	    position: _react2.default.PropTypes.oneOf((0, _helpers.mapObjectValues)(_constants.POSITIONS)),
	    dismissAfter: _react2.default.PropTypes.number.isRequired,
	    dismissible: _react2.default.PropTypes.bool.isRequired,
	    onAdd: _react2.default.PropTypes.func,
	    onRemove: _react2.default.PropTypes.func,
	    closeButton: _react2.default.PropTypes.bool.isRequired,
	    buttons: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	      name: _react2.default.PropTypes.string.isRequired,
	      onClick: _react2.default.PropTypes.func
	    })).isRequired,
	    allowHTML: _react2.default.PropTypes.bool.isRequired
	  }).isRequired,
	  removeNotification: _react2.default.PropTypes.func.isRequired
	};
	exports.default = (0, _reactRedux.connect)(null, { removeNotification: _notifications.removeNotification })(Notification);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NotificationsContainer = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _helpers = __webpack_require__(2);

	var _Notification = __webpack_require__(6);

	var _Notification2 = _interopRequireDefault(_Notification);

	var _constants = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NotificationsContainer = exports.NotificationsContainer = function (_Component) {
	  _inherits(NotificationsContainer, _Component);

	  /**
	   * Constructor
	   * Bind methods
	   * @param {Object} props
	   * @returns {void}
	   */

	  // default types
	  function NotificationsContainer(props) {
	    _classCallCheck(this, NotificationsContainer);

	    var _this = _possibleConstructorReturn(this, (NotificationsContainer.__proto__ || Object.getPrototypeOf(NotificationsContainer)).call(this, props));

	    _this._renderNotifications = _this._renderNotifications.bind(_this);
	    return _this;
	  }

	  /**
	   * Render notifications
	   * @private
	   * @returns {XML}
	   */


	  // Properties types


	  _createClass(NotificationsContainer, [{
	    key: '_renderNotifications',
	    value: function _renderNotifications() {
	      // get all notifications and default values for notifications
	      var _props = this.props,
	          position = _props.position,
	          className = _props.theme.notification.className,
	          _props$defaultValues = _props.defaultValues,
	          status = _props$defaultValues.status,
	          dismissible = _props$defaultValues.dismissible,
	          dismissAfter = _props$defaultValues.dismissAfter,
	          closeButton = _props$defaultValues.closeButton,
	          allowHTML = _props$defaultValues.allowHTML;
	      var notifications = this.props.notifications;

	      // when notifications are displayed at the bottom,
	      // we display notifications from bottom to top

	      if ([_constants.POSITIONS.bottomLeft, _constants.POSITIONS.bottomRight, _constants.POSITIONS.bottomCenter, _constants.POSITIONS.bottom].indexOf(position) >= 0) {
	        notifications = notifications.reverse();
	      }

	      return notifications.map(function (notification) {
	        // Define default values for notification if it's needed
	        if (!notification.status) {
	          notification.status = status;
	        }
	        if (typeof notification.dismissible !== 'boolean') {
	          notification.dismissible = dismissible;
	        }
	        if (typeof notification.dismissAfter !== 'number') {
	          notification.dismissAfter = dismissAfter;
	        }
	        if (typeof notification.closeButton !== 'boolean') {
	          notification.closeButton = closeButton;
	        }
	        if (typeof notification.allowHTML !== 'boolean') {
	          notification.allowHTML = allowHTML;
	        }
	        return _react2.default.createElement(_Notification2.default, { key: notification.id, notification: notification, className: className });
	      });
	    }

	    /**
	     * Render
	     * @returns {XML}
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var _props$theme$notifica = this.props.theme.notificationsContainer,
	          className = _props$theme$notifica.className,
	          _props$theme$notifica2 = _props$theme$notifica.transition,
	          name = _props$theme$notifica2.name,
	          enterTimeout = _props$theme$notifica2.enterTimeout,
	          leaveTimeout = _props$theme$notifica2.leaveTimeout;
	      var position = this.props.position;


	      return _react2.default.createElement(
	        'div',
	        { className: className.main + ' ' + className.position(position) },
	        _react2.default.createElement(
	          _react2.default.addons.CSSTransitionGroup,
	          { transitionName: name, transitionEnterTimeout: enterTimeout,
	            transitionLeaveTimeout: leaveTimeout },
	          this._renderNotifications()
	        )
	      );
	    }
	  }]);

	  return NotificationsContainer;
	}(_react.Component);

	NotificationsContainer.defaultProps = {
	  notifications: []
	};
	NotificationsContainer.propTypes = {
	  notifications: _react2.default.PropTypes.array.isRequired,
	  position: _react2.default.PropTypes.string.isRequired,
	  defaultValues: _react2.default.PropTypes.shape({
	    status: _react2.default.PropTypes.string.isRequired,
	    position: _react2.default.PropTypes.oneOf((0, _helpers.mapObjectValues)(_constants.POSITIONS)),
	    dismissible: _react2.default.PropTypes.bool.isRequired,
	    dismissAfter: _react2.default.PropTypes.number.isRequired,
	    closeButton: _react2.default.PropTypes.bool.isRequired,
	    allowHTML: _react2.default.PropTypes.bool.isRequired
	  }).isRequired,
	  theme: _react2.default.PropTypes.shape({
	    notificationsContainer: _react2.default.PropTypes.shape({
	      className: _react2.default.PropTypes.shape({
	        main: _react2.default.PropTypes.string.isRequired,
	        position: _react2.default.PropTypes.func.isRequired
	      }).isRequired,
	      transition: _react2.default.PropTypes.shape({
	        name: _react2.default.PropTypes.object.isRequired,
	        enterTimeout: _react2.default.PropTypes.number.isRequired,
	        leaveTimeout: _react2.default.PropTypes.number.isRequired
	      }).isRequired
	    }).isRequired,
	    notification: _react2.default.PropTypes.shape({
	      className: _react2.default.PropTypes.object.isRequired
	    }).isRequired
	  }).isRequired
	};
	exports.default = NotificationsContainer;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NotificationsSystem = exports.defaultValues = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(5);

	var _helpers = __webpack_require__(2);

	var _NotificationsContainer = __webpack_require__(7);

	var _NotificationsContainer2 = _interopRequireDefault(_NotificationsContainer);

	var _constants = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// default value for notifications
	var defaultValues = exports.defaultValues = {
	  status: _constants.STATUS.default,
	  position: _constants.POSITIONS.topRight,
	  dismissible: true,
	  dismissAfter: 5000,
	  allowHTML: false,
	  closeButton: false
	};

	var NotificationsSystem = exports.NotificationsSystem = function (_Component) {
	  _inherits(NotificationsSystem, _Component);

	  // default properties
	  function NotificationsSystem(props) {
	    _classCallCheck(this, NotificationsSystem);

	    var _this = _possibleConstructorReturn(this, (NotificationsSystem.__proto__ || Object.getPrototypeOf(NotificationsSystem)).call(this, props));

	    _this._updateWindowWidth = _this._updateWindowWidth.bind(_this);
	    _this._renderNotificationsContainers = _this._renderNotificationsContainers.bind(_this);
	    _this.state = {
	      windowWidth: window.innerWidth
	    };
	    return _this;
	  }

	  /**
	   * Update window width
	   * @returns {void}
	   * @private
	   */


	  // properties types


	  _createClass(NotificationsSystem, [{
	    key: '_updateWindowWidth',
	    value: function _updateWindowWidth() {
	      this.setState({ windowWidth: window.innerWidth });
	    }

	    /**
	     * Add resize listener to update window width when the window is resized
	     * @returns {void}
	     */

	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('resize', this._updateWindowWidth);
	    }

	    /**
	     * Remove resize listener
	     * @returns {void}
	     */

	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize', this._updateWindowWidth);
	    }

	    /**
	     * Render notifications containers
	     * @returns {XML}
	     * @private
	     */

	  }, {
	    key: '_renderNotificationsContainers',
	    value: function _renderNotificationsContainers() {
	      var _props = this.props,
	          notifications = _props.notifications,
	          position = _props.defaultValues.position,
	          theme = _props.theme;
	      var windowWidth = this.state.windowWidth;
	      // render all notifications in the same container at the top for small screens

	      if (windowWidth < theme.smallScreenMin) {
	        return _react2.default.createElement(_NotificationsContainer2.default, { key: 't', position: 't', defaultValues: defaultValues,
	          theme: theme, notifications: notifications });
	      }
	      var positions = (0, _helpers.mapObjectValues)(_constants.POSITIONS);
	      // extract the default position of all positions
	      positions.splice(positions.indexOf(position), 1);
	      var notifs = notifications.filter(function (notif) {
	        return !notif.position || notif.position === position;
	      });
	      // init array with all notifications with default position
	      var JSX = [_react2.default.createElement(_NotificationsContainer2.default, { key: position, position: position, defaultValues: defaultValues,
	        theme: theme, notifications: notifs })];
	      // fill array with others containers
	      JSX = JSX.concat(positions.map(function (position) {
	        var notifs = notifications.filter(function (notif) {
	          return position === notif.position;
	        });
	        return _react2.default.createElement(_NotificationsContainer2.default, { key: position, position: position, defaultValues: defaultValues,
	          theme: theme, notifications: notifs });
	      }));
	      return JSX;
	    }

	    /**
	     * Render
	     * @returns {XML}
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var className = this.props.theme.notificationsSystem.className;

	      return _react2.default.createElement(
	        'div',
	        { className: className },
	        this._renderNotificationsContainers()
	      );
	    }
	  }]);

	  return NotificationsSystem;
	}(_react.Component);

	/**
	 * Map state to props
	 * @param {Object} state
	 * @returns {{notifications: {Array}}}
	 */


	NotificationsSystem.defaultProps = {
	  notifications: [],
	  defaultValues: defaultValues
	};
	NotificationsSystem.propTypes = {
	  notifications: _react2.default.PropTypes.array.isRequired,
	  defaultValues: _react2.default.PropTypes.object.isRequired,
	  theme: _react2.default.PropTypes.shape({
	    smallScreenMin: _react2.default.PropTypes.number.isRequired,
	    notificationsSystem: _react2.default.PropTypes.shape({
	      className: _react2.default.PropTypes.string.isRequired
	    })
	  }).isRequired
	};
	function mapStateToProps(state) {
	  return {
	    notifications: state.notifications
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(NotificationsSystem);

/***/ }
/******/ ])
});
;