import React from 'react'

interface WalletModalContextProps {
  isOpen: boolean
  error?: string
  setOpen: (isOpen: boolean) => void
  setError: (error: string) => void
}

const WalletModalContext = React.createContext<WalletModalContextProps>({
  isOpen: false,
  setOpen: () => {},
  setError: () => {},
})

export default WalletModalContext
