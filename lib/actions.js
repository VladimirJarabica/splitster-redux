'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var initServer = exports.initServer = function initServer(config, user, userId, def) {
  return {
    type: 'splitster/INIT_SERVER',
    payload: {
      config: config,
      user: user,
      userId: userId,
      def: def
    }
  };
};

var initClient = exports.initClient = function initClient(config, user, userId) {
  return {
    type: 'splitster/INIT_CLIENT',
    payload: {
      config: config,
      userId: userId,
      user: user
    }
  };
};

var serverToSave = exports.serverToSave = function serverToSave() {
  var includeVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return {
    type: 'splitster/SERVER_TO_SAVE',
    payload: {
      includeVersion: includeVersion
    }
  };
};

var clientToSave = exports.clientToSave = function clientToSave() {
  var includeVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return {
    type: 'splitster/CLIENT_TO_SAVE',
    payload: {
      includeVersion: includeVersion
    }
  };
};

var set = exports.set = function set(testId, variantId) {
  var cookies = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return {
    type: 'splitster/SET',
    payload: {
      testId: testId,
      variantId: variantId,
      cookies: cookies
    }
  };
};