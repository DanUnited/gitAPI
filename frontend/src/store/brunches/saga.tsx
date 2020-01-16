import {takeLatest, put} from 'redux-saga/effects'

import {getBrunchesURL} from 'api/routes'
import {FETCH_REPOS_BRUNCHES} from './constants'
import {fetchBrunchesSuccess, fetchBrunchesFail} from './actions'

function* fetchBrunches({type, payload}) {
  const response = yield fetch(getBrunchesURL(payload))
  const result = yield response.json()

  if (response.ok) {
    yield put(fetchBrunchesSuccess(result))
  } else {
    yield put(fetchBrunchesFail())
  }
}

export default function* () {
  yield takeLatest(FETCH_REPOS_BRUNCHES, fetchBrunches)
}
