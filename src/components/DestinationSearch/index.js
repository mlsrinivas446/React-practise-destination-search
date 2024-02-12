import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {search: ''}

  searchList = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {search} = this.state
    const {destinationsList} = this.props

    const searchResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(search.toLowerCase()),
    )
    return (
      <div className='search-container'>
        <h1 className='heading'>Destination Search</h1>
        <div className='input-Container'>
          <input
            className='input'
            placeholder='Search'
            type='search'
            onChange={this.searchList}
          />
          <img
            src='https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png'
            className='search-icon'
            alt='search icon'
          />
        </div>
        <ul className='desination-item-container'>
          {searchResult.map(eachItem => (
            <DestinationItem key={eachItem.id} DestinationItems={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
