"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DatePicker;

var _react = _interopRequireWildcard(require("react"));

var _Dropdown = require("../Dropdown");

var _primefacesPrimereact = require("@bit/primefaces.primereact.calendar");

require("./date-picker.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**

 * @name DatePicker

 * @description Renders a HTML Button element and a dropdown list into a parent container;

 * @extends `Dropdown`

 * @param {string} props.addClass Add extra class styles to overwrite default class.

 * @param {string} props.listClass Add extra class styles to overwrite default class of the dropdown list.

 * @param {string} props.text Text for the button.

 * @param {object} props.textStyle Style Inline CSS styles for the button text.

 * @param {string} props.icon Google Material Icon for the button.

 * @param {object} props.iconStyle Style Inline CSS styles for icon.

 * @param {object} props.dropdownStyle Style Inline CSS styles for the dropdown list.

 * @param {JSX.Element} props.children HTML list elements such as `<li></li>`, `<ol></ol>`, 

 *     `<option></option>` rendered as dropdown list elements.

 * @param {function} props.onSelect onSelect event fires after clicking on a date.

 * @returns {JSX.Element} A Calendar UI.

 */
function DatePicker(props) {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var _useState3 = (0, _react.useState)(new Date(Date.now())),
      _useState4 = _slicedToArray(_useState3, 2),
      date = _useState4[0],
      setDate = _useState4[1];

  var CustomIcon = function CustomIcon() {
    var onClick = function onClick(e) {
      e.stopPropagation();
      setText('DD/MM/YYYY');
      setDate(new Date(Date.now()));
    };

    return _react.default.createElement("span", {
      className: "icons"
    }, _react.default.createElement("i", {
      onClick: onClick
    }, "close"), _react.default.createElement("i", null, "insert_invitation"));
  };

  var pickDate = function pickDate(e) {
    e.stopPropagation();
    var value = e.value;
    var year = value.getFullYear();
    var month = value.getMonth() + 1;
    var day = value.getDate();
    var text = "".concat(day, "/").concat(month, "/").concat(year);
    setText(text);
    setDate(value);
    props.onSelect && props.onSelect(text, value);
  };

  var addClass = "date-picker ".concat(props.addClass || '');
  var listClass = "date-picker-list ".concat(props.listClass || '');
  return _react.default.createElement(_Dropdown.Dropdown, {
    addClass: addClass,
    placeholder: text || 'DD/MM/YYYY',
    customIcon: CustomIcon,
    preventDefaultClick: true,
    listClass: listClass,
    childHeight: 390
  }, _react.default.createElement("div", null, _react.default.createElement(_primefacesPrimereact.Calendar, {
    value: date,
    onChange: pickDate,
    inline: true
  })));
}

//# sourceMappingURL=index.js.map