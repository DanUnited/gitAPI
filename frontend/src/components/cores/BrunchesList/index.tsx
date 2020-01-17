import React from 'react'
import _get from 'lodash/get'

import './styles.css'

interface IBrunchesList {
  items: Array<Object>,
  onItemClick?: (brunch: string) => void,
}

export class BrunchesList extends React.PureComponent<IBrunchesList> {
  render() {
    const {items, onItemClick} = this.props
    return (
      <>
        <div>Brunches:</div>
        {
          items.map((item, index) => {
            const brunchName = _get(item, 'name')

            return (
              <div key={index} className={'container'} onClick={() => onItemClick ? onItemClick(brunchName) : void 0}>
                <h1>{brunchName}</h1>
              </div>
            )
          })
        }
      </>
    )
  }
}

export default BrunchesList
