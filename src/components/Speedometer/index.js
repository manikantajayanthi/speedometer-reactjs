import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrease = () => {
    const {speed} = this.state
    this.setState({speed: speed + 10})
    if (speed === 200) {
      this.setState({speed: 200})
    }
  }

  onDecrease = () => {
    const {speed} = this.state
    this.setState({speed: speed - 10})
    if (speed === 0) {
      this.setState({speed: 0})
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speedometer-image"
        />
        <h1 className="speed-increase">
          Speed is <span>{speed}mph</span>
        </h1>
        <p className="speed-limit-line">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div>
          <button
            onClick={this.onIncrease}
            type="button"
            className="accelerate-button"
          >
            Accelerate
          </button>
          <button
            onClick={this.onDecrease}
            type="button"
            className="brake-button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
