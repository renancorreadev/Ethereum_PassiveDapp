import './style.scss'

interface ButtonProps {
  text: string
  type: 'default' | 'outlined'
}

export function Button({ text, type }: ButtonProps) {
  return (
    <div id="vesting-button">
      <button className={type}>{text} </button>
    </div>
  )
}
