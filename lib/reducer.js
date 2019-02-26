'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _splitster = require('splitster');

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
      return (0, _splitster.init)(action.payload.config, action.payload.user, action.payload.userId, action.payload.def || state);
    case 'splitster/INIT_CLIENT':
      // $FlowFixMe
      return (0, _splitster.init)(action.payload.config, action.payload.user, action.payload.userId, state);
    case 'splitster/SERVER_TO_SAVE':
    case 'splitster/CLIENT_TO_SAVE':
      // $FlowFixMe
      return state.getSaveResults(action.payload.includeVersion);
    case 'splitster/SET':
      // $FlowFixMe
      return state.set(action.payload.testId, action.payload.variantId, action.payload.cookies);
    default:
      return state;
  }
};
// import splitsterInit, {
//   server as serverInit,
//   SplitsterClient,
//   SplitsterServer,
// } from 'splitster'

exports.default = splitsterReducer;