'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../actions/index.js');

var actions = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // CIS 197 - React HW

var Cell = function (_React$Component) {
  _inherits(Cell, _React$Component);

  function Cell(props) {
    _classCallCheck(this, Cell);

    //console.log(this.props);
    var _this = _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).call(this, props));

    _this.onCellClick = _this.onCellClick.bind(_this);
    //console.log(this.props.store);  
    _this.state = {
      store: props.store,
      alive: props.alive
    };
    return _this;
  }

  _createClass(Cell, [{
    key: 'onCellClick',
    value: function onCellClick() {
      this.state.store.dispatch(actions.cellClicked(this.props.index));
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.alive) {
        return _react2.default.createElement('span', { className: 'cell-component cell', onClick: this.onCellClick });
      } else {
        console.log('alive');
        return _react2.default.createElement('span', { className: 'cell-component cell alive', onClick: this.onCellClick });
      }

      // TODO: complete the render function.
      //       A non-living cell has the HTML structure
      //       <span class="cell-component cell"></span>
      //       while a living cell has the HTML structure
      //       <span class="cell-component cell alive"></span>
      // HINT: don't forget to implement the click handler
      //       whose execution dispatches a CELL_CLICKED event.
    }
  }]);

  return Cell;
}(_react2.default.Component);

exports.default = Cell;


Cell.defaultProps = {
  alive: false,
  key: 0,
  index: 0
};