import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getRepositories} from 'store/app/selectors'
import {fetchRepositories} from 'store/app/actions'

import {SearchResults} from 'components/SearchResults'

interface ISearchRepositoriesClass {
  fetchRepositories: Function,
  repositories: Array<Object>,
}

interface IState {
  searchValue: string,
}

class SearchRepositoriesClass extends Component<ISearchRepositoriesClass, IState> {
  state = {
    searchValue: '',
  }

  render(): React.ReactNode {
    const {repositories} = this.props
    return (
      <>
        <input type={'text'} onChange={this.onSearchChange} />
        <button onClick={this.onSearchClick}>Search</button>
        <SearchResults items={repositories} />
      </>
    )
  }

  onSearchClick = () => {
    const {fetchRepositories} = this.props
    fetchRepositories(this.state.searchValue)
  }

  onSearchChange = e => {
    this.setState({
      searchValue: e.target.value,
    })
  }
}

const mapStateToProps = state => ({
  repositories: getRepositories(state),
})

const mapDispatchToProps = {
  fetchRepositories,
}

export const SearchRepositories = connect(mapStateToProps, mapDispatchToProps)(SearchRepositoriesClass)
export default SearchRepositories
