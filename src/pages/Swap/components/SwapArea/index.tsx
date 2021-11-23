import './style.scss'
import { Button } from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faCog } from '@fortawesome/free-solid-svg-icons'

export function SwapArea() {
  return (
    <>
      <div id="swap-area">
        <div id="select-token-area">
          <div>
            <Button text="Select A Token" icon />
            <p>0.0</p>
          </div>
        </div>

        <div id="target-token-area">
          <div id="swap-arrow">
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <p id="logo">passive.</p>
          <p id="passive-quantity">0</p>
          <div id="footer">
            <p>Balance: 0 Passive</p>
          </div>
        </div>

        <div id="swap-area-footer">
          <div id="left-text">
            <p>*Slippage=13%</p>
            <p>*Reffer = None</p>
          </div>

          <div id="gear-icon">
            <FontAwesomeIcon icon={faCog} />
          </div>
        </div>
      </div>
      <Button text="Fiat On-Ramp" />
    </>
  )
}
