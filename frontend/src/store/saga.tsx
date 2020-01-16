import {fork} from 'redux-saga/effects'

import RoutingSaga from 'store/routing/saga'
import RepositoriesSaga from 'store/repositories/saga'
import BrunchesSaga from 'store/brunches/saga'

export default function* () {
  yield fork(RoutingSaga)
  yield fork(RepositoriesSaga)
  yield fork(BrunchesSaga)
}
