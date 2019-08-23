import React from 'react'

class ListModel extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Manufacturer: {this.props.manufacturer}</li>
          <li>Year: {this.props.year}</li>
          <li>Origin: {this.props.origin}</li>
        </ul>
      </div>
    )
  }
}

export default ListModel