import {fork} from 'redux-saga/effects'

import RoutingSaga from 'store/routing/saga'
import AppSaga from 'store/app/saga'

export default function* () {
  yield fork(RoutingSaga)
  yield fork(AppSaga)
}
