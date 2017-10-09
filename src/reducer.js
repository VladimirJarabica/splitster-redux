// @flow
import splitsterInit, {
  server as serverInit,
  SplitsterClient,
  SplitsterServer,
} from 'splitster'

import type { Action } from './actions'

/**
 * Create server (serverInit)
 * then change from server (server splitster)
 * to save (SaveResults)
 * and then to client (client splitster)
 */
const splitsterReducer = (
  state: SplitsterClient | SplitsterServer,
  action: Action,
) => {
  switch (action.type) {
    case 'splitster/INIT_SERVER':
      return serverInit(action.payload.config, action.payload.user, action.payload.def || state)
    case 'splitster/INIT_CLIENT':
      return splitsterInit(action.payload.config, action.payload.user, state)
    case 'splitster/RUN':
      if (action.test) {
        state.run(action.payload)
      } else {
        state.runAll()
      }
      return state
    case 'splitster/SET':
      return state.set(action.payload.testId, action.payload.variantId)
    default:
      return state
  }
}

export default splitsterReducer
