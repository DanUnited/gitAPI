import React from 'react'
import _get from 'lodash/get'

import './styles.css'

interface ISearchResults {
  items: Array<Object>,
  onItemClick?: (repo: string) => void,
}

export class SearchResults extends React.PureComponent<ISearchResults> {
  render() {
    const {items, onItemClick} = this.props
    return (
      <>
        {
          items.map((item, index) => {
            const author = _get(item, 'owner.login')
            const avatarSrc = _get(item, 'owner.avatar_url')
            const name = _get(item, 'full_name')

            return (
              <div key={index} className={'container'} onClick={() => onItemClick(name)}>
                <h1>{name}</h1>
                <div className={'description'}>
                  <img src={avatarSrc} alt={author} />
                  <p>Автор: {author}</p>
                </div>
              </div>
            )
          })
        }
      </>
    )
  }
}

export default SearchResults
