import {takeLatest, put, select} from 'redux-saga/effects'
import _isEmpty from 'lodash/isEmpty'

import {searchRepositoriesURL} from 'api/routes'
import {FETCH_REPOSITORIES} from './constants'
import {fetchRepositoriesFail, fetchRepositoriesSuccess} from './actions'
import {getSearchValue} from './selectors'

function* fetchRepositories({type, payload}) {
  const response = yield fetch(searchRepositoriesURL + '?q=' + payload, {
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json',
      },
    }
  )

  const result = yield response.json()
  const searchValue = yield select(getSearchValue)

  if (response.ok && !_isEmpty(searchValue)) {
    yield put(fetchRepositoriesSuccess(result.items))
  } else {
    yield put(fetchRepositoriesFail())
  }
}

export default function* () {
  yield takeLatest(FETCH_REPOSITORIES, fetchRepositories)
}
