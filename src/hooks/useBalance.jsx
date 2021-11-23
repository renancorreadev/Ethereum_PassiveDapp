import BigNumber from 'bignumber.js'
import { useEffect, useState } from 'react'
import { toLower } from '../utils/utils'
import { useToken } from './useContract'
import { useRefresh } from './useRefresh'
import { useWeb3 } from './useWeb3'
import BANKUSD_ABI from '../assets/abis/BankUSD.json'

export const useTokenBalance = (address, decimals = '18') => {
  const tokenAddress = '0x3039f0774E486CcC89bc66dE942C35ca6f296d4A'
  const contract = useToken(tokenAddress, BANKUSD_ABI.abi)
  const [balance, setBalance] = useState(undefined)
  const [displayBalance, setDisplayBalance] = useState(undefined)
  const { fastRefresh } = useRefresh()

  const { account } = useWeb3()

  useEffect(() => {
    const fetch = async () => {
      contract.options.address = '0x3039f0774E486CcC89bc66dE942C35ca6f296d4A'
      const bal = await contract.methods.balanceOf(account).call()
      setBalance(new BigNumber(bal))
      setDisplayBalance(toLower(bal, decimals).toNumber().toFixed(2))
    }
    if (contract) {
      fetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contract, fastRefresh])

  return { balance, displayBalance }
}

export const useRewardsbalance = (address, decimals = '18') => {
  const tokenAddress = '0x3039f0774E486CcC89bc66dE942C35ca6f296d4A'
  const contract = useToken(tokenAddress, BANKUSD_ABI.abi)
  const { fastRefresh } = useRefresh()

  //Get Values Blockchain
  const { account } = useWeb3()
  const [accountIn, SetAccountIn] = useState(undefined)
  const [index, SetIndex] = useState(undefined)
  const [iteratiosnUntilProcessed, SetIteratiosnUntilProcessed] = useState(0)
  const [withdrawableDividends, SetWithdrawableDividends] = useState(undefined)
  const [totalDividends, SetTotalDividends] = useState(undefined)
  const [lastClaimTime, SetLastClaimTime] = useState(undefined)
  const [nextClaimTime, SetNextClaimTime] = useState(undefined)
  const [
    secondsUntilAutoClaimAvailable,
    SetSecondsUntilAutoClaimAvailable,
  ] = useState(undefined)

  useEffect(() => {
    const fetch = async () => {
      contract.options.address = '0x3039f0774E486CcC89bc66dE942C35ca6f296d4A'
      const result = await contract.methods
        .getAccountDividendsInfo(account)
        .call()
      let {
        0: _accountIn,
        1: _index,
        2: _iteratiosnUntilProcessed,
        3: _withdrawableDividends,
        4: _totalDividends,
        5: _lastClaimTime,
        6: _nextClaimTime,
        7: _secondsUntilAutoClaimAvailable,
      } = result

      SetAccountIn(_accountIn.toString())
      SetIndex(new BigNumber(_index).toNumber())
      SetIteratiosnUntilProcessed(
        new BigNumber(_iteratiosnUntilProcessed).toNumber(),
      )
      SetWithdrawableDividends(new BigNumber(_withdrawableDividends).toNumber())
      SetTotalDividends(
        toLower(_totalDividends, decimals).toNumber().toFixed(4),
      )
      SetSecondsUntilAutoClaimAvailable(
        new BigNumber(_secondsUntilAutoClaimAvailable).toNumber(),
      )

      SetLastClaimTime(_lastClaimTime)
      SetNextClaimTime(_nextClaimTime)
    }
    if (contract) {
      fetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contract, fastRefresh])

  return {
    accountIn,
    index,
    iteratiosnUntilProcessed,
    withdrawableDividends,
    totalDividends,
    lastClaimTime,
    nextClaimTime,
    secondsUntilAutoClaimAvailable,
  }
}

export const useTotalRewards = (address, decimals = '18') => {
  const tokenAddress = '0x3039f0774E486CcC89bc66dE942C35ca6f296d4A'
  const contract = useToken(tokenAddress, BANKUSD_ABI.abi)
  const [balance, setBalance] = useState(undefined)
  const [totalRewards, setTotalRewards] = useState(undefined)
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetch = async () => {
      contract.options.address = '0x3039f0774E486CcC89bc66dE942C35ca6f296d4A'
      const bal = await contract.methods.getTotalDividendsDistributed().call()

      setBalance(new BigNumber(bal))
      setTotalRewards(toLower(bal, decimals).toNumber().toFixed(2))
    }
    if (contract) {
      fetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contract, fastRefresh])

  return { balance, totalRewards }
}
