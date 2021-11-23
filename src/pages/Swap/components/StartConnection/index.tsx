import './style.scss'
import { Button } from '../../../Dashboard/components/Button'
import { useEagerConnect, useWeb3 } from '../../../../main/index'

export function StartConnection() {
  useEagerConnect()
  const { connected } = useWeb3()
  return (
    <div id="connect-area">
      <p>Connect Your Wallet To Get Started</p>
      <Button text={connected ? 'Disconnect' : 'Connect'} />
    </div>
  )
}
