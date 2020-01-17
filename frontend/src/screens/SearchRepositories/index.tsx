import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'connected-react-router'
import _isEmpty from 'lodash/isEmpty'

import {getRepositories, getSearchValue, isLoading} from 'store/repositories/selectors'
import {fetchRepositories, clearRepositories, search} from 'store/repositories/actions'

import {SearchResults} from 'components/cores/SearchResults'
import {LoadContainer} from 'components/cores/LoadContainer'

interface ISearchRepositoriesClass {
  fetchRepositories: Function,
  clearRepositories: Function,
  search: Function,
  push: Function,
  searchValue: string,
  repositories: Array<Object>,
  isLoading: boolean,
}

class SearchRepositoriesClass extends Component<ISearchRepositoriesClass> {
  render(): React.ReactNode {
    const {repositories, searchValue, isLoading} = this.props

    return (
      <>
        <input type={'text'} onChange={this.onSearchChange} placeholder={'search...'} value={searchValue} />

        <LoadContainer isLoading={isLoading}>
          <SearchResults items={repositories} onItemClick={this.toCommits} />
        </LoadContainer>
      </>
    )
  }

  toCommits = (repo) => {
    this.props.push(`/brunches/${repo}`)
  }

  onSearchChange = e => {
    const {value} = e.target
    const {fetchRepositories, clearRepositories, search, searchValue} = this.props

    search(value)

    if (_isEmpty(value)) {
      clearRepositories()
    } else {
      fetchRepositories(searchValue)
    }
  }
}

const mapStateToProps = state => ({
  repositories: getRepositories(state),
  searchValue: getSearchValue(state),
  isLoading: isLoading(state),
})

const mapDispatchToProps = {
  fetchRepositories,
  clearRepositories,
  push,
  search,
}

export const SearchRepositories = connect(mapStateToProps, mapDispatchToProps)(SearchRepositoriesClass)
export default SearchRepositories
