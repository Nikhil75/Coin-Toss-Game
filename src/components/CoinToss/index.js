import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    defaultImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  incrementCount = () => {
    const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    const tossResult = Math.floor(Math.random() * 2)
    const randomResult = ['heads', 'tails']
    const tossWin = randomResult[tossResult]
    if (tossWin === 'heads') {
      this.setState(prevHeads => ({heads: prevHeads.heads + 1}))
      this.setState(prevImage => ({defaultImage: headsImage}))
    } else {
      this.setState(prevTails => ({tails: prevTails.tails + 1}))
      this.setState(prevTailsImage => ({defaultImage: tailsImage}))
    }
  }

  render() {
    const {heads, tails, defaultImage} = this.state
    const totalCount = heads + tails
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="coin-toss-head">Coin Toss Game</h1>
          <p className="coin-toss">Heads (or) Tails</p>
          <div className="coin-container">
            <img src={defaultImage} className="coin-head" alt="toss result" />
          </div>
          <div className="toss-btn">
            <button
              className="toss"
              type="button"
              onClick={this.incrementCount}
            >
              Toss Coin
            </button>
          </div>
          <div className="counting-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
