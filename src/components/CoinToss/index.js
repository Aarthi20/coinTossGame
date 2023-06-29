// Write your code here
import {Component} from 'react'
import './index.css'

const HEAD_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAIL_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultsImage: HEAD_IMG_URL, headsCount: 0, tailsCount: 0}

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let currentHeadCounts = headsCount
    let currentTailCounts = tailsCount

    if (toss === 0) {
      tossImage = HEAD_IMG_URL
      currentHeadCounts += 1
    } else {
      tossImage = TAIL_IMG_URL
      currentTailCounts += 1
    }

    this.setState({
      tossResultsImage: tossImage,
      headsCount: currentHeadCounts,
      tailsCount: currentTailCounts,
    })
  }

  render() {
    const {tossResultsImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="text">Heads (or) Tails</p>
          <img src={tossResultsImage} alt="toss result" className="toss-img" />
          <button type="button" className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
