import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'connected-react-router'

import {BrunchesList} from 'components/BrunchesList'
import {getBrunches} from 'store/brunches/selectors'

interface IBrunchesClass {
  brunches: Array<Object>,
}

export class BrunchesClass extends Component<IBrunchesClass> {
  render(): React.ReactNode {
    const {brunches} = this.props
    return (
      <>
        <BrunchesList items={brunches} />
      </>
    )
  }
}


const mapStateToProps = state => ({
  brunches: getBrunches(state),
})

const mapDispatchToProps = {
  push,
}

export const Brunches = connect(mapStateToProps, mapDispatchToProps)(BrunchesClass)
export default Brunches
