// @flow
import splitsterInit, {
  server as serverInit,
  SplitsterClient,
  SplitsterServer,
} from 'splitster'

import type { SaveResults } from 'splitster/src/main'

import type { Action } from './actions'

/**
 * Create server (serverInit)
 * then change from server (server splitster)
 * to save (SaveResults)
 * and then to client (client splitster)
 */
const splitsterReducer = (
  state: SplitsterClient | SaveResults | SplitsterServer = {},
  action: Action,
) => {
  switch (action.type) {
    case 'splitster/INIT_SERVER':
      // $FlowFixMe
      return serverInit(action.payload.config, action.payload.user, action.payload.def || state)
    case 'splitster/INIT_CLIENT':
      // $FlowFixMe
      return splitsterInit(action.payload.config, action.payload.user, state)
    case 'splitster/SERVER_TO_SAVE':
    case 'splitster/CLIENT_TO_SAVE':
      // $FlowFixMe
      return state.getSaveResults(action.payload.includeVersion)
    case 'splitster/RUN':
      if (action.test) {
        // $FlowFixMe
        state.run(action.payload)
      } else {
        // $FlowFixMe
        state.runAll()
      }
      return state
    case 'splitster/SET':
      // $FlowFixMe
      return state.set(action.payload.testId, action.payload.variantId, action.payload.cookies)
    default:
      return state
  }
}

export default splitsterReducer
