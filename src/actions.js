// @flow
import type { Config, SaveResults } from 'splitster/src/main'

type InitServer = {
  type: 'splitster/INIT_SERVER',
  payload: {
    config: Config,
    user: ?Object,
    def: ?SaveResults,
  },
}
type InitClient = {
  type: 'splitster/INIT_CLIENT',
  payload: {
    config: Config,
    user: ?Object,
  },
}
type ServerToSave = {
  type: 'splitster/SERVER_TO_SAVE',
  payload: {
    includeVersion: boolean,
  },
}
type ClientToSave = {
  type: 'splitster/CLIENT_TO_SAVE',
  payload: {
    includeVersion: boolean,
  },
}
type Run = {
  type: 'splitster/RUN',
  payload: string,
}
type Set = {
  type: 'splitster/SET',
  payload: {
    testId: string,
    variantId: string,
    cookies: boolean,
  },
}

export type Action =
  | InitServer
  | InitClient
  | ServerToSave
  | ClientToSave
  | Run
  | Set

export const initServer = (
  config: Config,
  user?: Object,
  def?: SaveResults,
): InitServer => ({
  type: 'splitster/INIT_SERVER',
  payload: {
    config,
    user,
    def,
  },
})

export const initClient = (config: Config, user?: Object): InitClient => ({
  type: 'splitster/INIT_CLIENT',
  payload: {
    config,
    user,
  },
})

export const serverToSave = (includeVersion?: boolean = false): ServerToSave => ({
  type: 'splitster/SERVER_TO_SAVE',
  payload: {
    includeVersion,
  },
})

export const clientToSave = (includeVersion?: boolean = false): ClientToSave => ({
  type: 'splitster/CLIENT_TO_SAVE',
  payload: {
    includeVersion,
  },
})

export const run = (test: string): Run => ({
  type: 'splitster/RUN',
  payload: test,
})

export const set = (
  testId: string,
  variantId: string,
  cookies?: boolean = false,
): Set => ({
  type: 'splitster/SET',
  payload: {
    testId,
    variantId,
    cookies,
  },
})
