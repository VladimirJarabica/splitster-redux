// @flow
import type { SplitsterClient, SplitsterServer } from 'splitster/src/main'

export const getSaveResults = (splitster: SplitsterClient | SplitsterServer) =>
  splitster.getSaveResults()
