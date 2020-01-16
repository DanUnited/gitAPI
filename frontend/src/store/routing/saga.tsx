import {LOCATION_CHANGE} from 'connected-react-router'
import {takeLatest, actionChannel} from 'redux-saga/effects'

function* locationChange() {
}

export default function* () {
    const locationChangeChannel = yield actionChannel(LOCATION_CHANGE)
    yield takeLatest(locationChangeChannel, locationChange)
}
