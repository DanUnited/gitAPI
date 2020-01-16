import {LOCATION_CHANGE, createMatchSelector} from 'connected-react-router'
import {takeLatest, actionChannel, select, put} from 'redux-saga/effects'

import {fetchBrunches} from 'store/brunches/actions'

function* locationChange() {
  const state = yield select()
  const collect = createMatchSelector('/brunches/:author/:repo')(state)

  if (collect) {
    const {author, repo} = collect.params
    yield put(fetchBrunches(repo ? author + '/' + repo : author))
  }
}

export default function* () {
  const locationChangeChannel = yield actionChannel(LOCATION_CHANGE)
  yield takeLatest(locationChangeChannel, locationChange)
}
