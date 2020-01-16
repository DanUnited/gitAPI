import {takeLatest, put} from 'redux-saga/effects'

import {searchRepositoriesURL} from 'api/routes'
import {FETCH_REPOSITORIES} from './constants'
import {fetchRepositoruesFail, fetchRepositoruesSuccess} from './actions'

function* fetchRepositories({type, payload}) {
  const response = yield fetch(searchRepositoriesURL + '?q=' + payload, {
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json',
      },
    }
  )

  const result = yield response.json()

  if (response.ok) {
    yield put(fetchRepositoruesSuccess(result.items))
  } else {
    yield put(fetchRepositoruesFail())
  }
}

export default function* () {
  yield takeLatest(FETCH_REPOSITORIES, fetchRepositories)
}
