import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {
  useEagerConnect,
  useWeb3,
  useWalletModal,
} from '../../../../main/index'

interface ButtonProps {
  text: string
  icon?: boolean
}

export function Button({ text, icon }: ButtonProps) {
  useEagerConnect()
  const { setOpen, deactivate } = useWalletModal()
  const { connected } = useWeb3()
  //use const { account } = useWeb3(); to get the account address in value
  //use Hooks account for detail address Users

  function handleOnClick() {
    if (text === 'Connect' || text === 'Disconnect') {
      try {
        if (connected) {
          deactivate()
        } else {
          setOpen(true)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <div id="swap-button">
      <button onClick={() => handleOnClick()}>
        {text} {icon && <FontAwesomeIcon icon={faChevronDown} />}
      </button>
    </div>
  )
}
