// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: randomNumber}))
  }

  findOperator = () => {
    const {count} = this.state
    return count % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {count} = this.state
    const operator = this.findOperator()
    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="heading">Count {count}</h1>
          <p className="description">Count is {operator}</p>
          <button
            onClick={this.onIncrement}
            className="increment-button"
            type="button"
          >
            Increment
          </button>
          <p className="randomText">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
