'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _splitster = require('splitster');

var _splitster2 = _interopRequireDefault(_splitster);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create server (serverInit)
 * then change from server (server splitster)
 * to save (SaveResults)
 * and then to client (client splitster)
 */
var splitsterReducer = function splitsterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'splitster/INIT_SERVER':
      // $FlowFixMe
      return (0, _splitster.server)(action.payload.config, action.payload.user, action.payload.def || state);
    case 'splitster/INIT_CLIENT':
      // $FlowFixMe
      return (0, _splitster2.default)(action.payload.config, action.payload.user, state);
    case 'splitster/SERVER_TO_SAVE':
    case 'splitster/CLIENT_TO_SAVE':
      // $FlowFixMe
      return state.getSaveResults();
    case 'splitster/RUN':
      if (action.test) {
        // $FlowFixMe
        state.run(action.payload);
      } else {
        // $FlowFixMe
        state.runAll();
      }
      return state;
    case 'splitster/SET':
      // $FlowFixMe
      return state.set(action.payload.testId, action.payload.variantId);
    default:
      return state;
  }
};
// import splitsterInit, { server as serverInit } from 'splitster'
exports.default = splitsterReducer;