'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var initServer = exports.initServer = function initServer(config, user, def) {
  return {
    type: 'splitster/INIT_SERVER',
    payload: {
      config: config,
      user: user,
      def: def
    }
  };
};

var initClient = exports.initClient = function initClient(config, user) {
  return {
    type: 'splitster/INIT_CLIENT',
    payload: {
      config: config,
      user: user
    }
  };
};

var serverToSave = exports.serverToSave = function serverToSave() {
  return {
    type: 'splitster/SERVER_TO_SAVE'
  };
};

var clientToSave = exports.clientToSave = function clientToSave() {
  return {
    type: 'splitster/CLIENT_TO_SAVE'
  };
};

var run = exports.run = function run(test) {
  return {
    type: 'splitster/RUN',
    payload: test
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