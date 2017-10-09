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
var splitsterReducer = function splitsterReducer(state, action) {
  switch (action.type) {
    case 'splitster/INIT_SERVER':
      return (0, _splitster.server)(action.payload.config, action.payload.user, action.payload.def || state);
    case 'splitster/INIT_CLIENT':
      return (0, _splitster2.default)(action.payload.config, action.payload.user, state);
    case 'splitster/RUN':
      if (action.test) {
        state.run(action.payload);
      } else {
        state.runAll();
      }
      return state;
    case 'splitster/SET':
      return state.set(action.payload.testId, action.payload.variantId);
    default:
      return state;
  }
};
exports.default = splitsterReducer;