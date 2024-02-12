import './index.css'

const DestinationItem = props => {
  const {DestinationItems} = props
  const {name, imgUrl} = DestinationItems

  return (
    <li className='card-item'>
      <img src={imgUrl} alt={name} className='imgUrl' />
      <p className='search-name'>{name}</p>
    </li>
  )
}

export default DestinationItem
