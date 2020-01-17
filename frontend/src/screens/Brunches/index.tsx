import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'connected-react-router'

import {BrunchesList} from 'components/BrunchesList'
import {LoadSpinner} from 'components/LoadSpinner'
import {getBrunches, isLoading} from 'store/brunches/selectors'

interface IBrunchesClass {
  brunches: Array<Object>,
  isLoading: boolean,
}

export class BrunchesClass extends Component<IBrunchesClass> {
  render(): React.ReactNode {
    const {brunches, isLoading} = this.props
    const results = isLoading ? <LoadSpinner /> : <BrunchesList items={brunches} />

    return (
      <>
        {results}
      </>
    )
  }
}


const mapStateToProps = state => ({
  brunches: getBrunches(state),
  isLoading: isLoading(state),
})

const mapDispatchToProps = {
  push,
}

export const Brunches = connect(mapStateToProps, mapDispatchToProps)(BrunchesClass)
export default Brunches
