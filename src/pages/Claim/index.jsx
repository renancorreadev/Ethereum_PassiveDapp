import theterLogoImg from '../../assets/tether.svg'
import { Button } from './components/Button'
import { CommumCard } from './components/CommumCard'
import { History } from './components/History'
import { useRewardsbalance, useTotalRewards } from '../../main/index'
import './style.scss'

export function Claim() {
  const fakeHistoryData = [
    {
      id: 1,
      date: '00/00/0000',
      usdt: '10.00',
      passive: 'yes',
    },
    {
      id: 2,
      date: '00/00/0000',
      usdt: '10.00',
      passive: 'yes',
    },
    {
      id: 3,
      date: '00/00/0000',
      usdt: '10.00',
      passive: 'yes',
    },
    {
      id: 4,
      date: '00/00/0000',
      usdt: '10.00',
      passive: 'yes',
    },
    {
      id: 5,
      date: '00/00/0000',
      usdt: '10.00',
      passive: 'yes',
    },
    {
      id: 6,
      date: '00/00/0000',
      usdt: '10.00',
      passive: 'yes',
    },
    {
      id: 7,
      date: '00/00/0000',
      usdt: '10.00',
      passive: 'yes',
    },
    {
      id: 8,
      date: '00/00/0000',
      usdt: '10.00',
      passive: 'yes',
    },
  ]

  const { withdrawableDividends } = useRewardsbalance()
  const { totalRewards } = useTotalRewards()

  return (
    <>
      <div className="claim-container">
        <div id="banner">
          <img src={theterLogoImg} alt="theter logo" />
          <span>{totalRewards}</span>

          <p>USDT rewards Generated for Holders</p>
        </div>
        <div id="claim-area">
          <div className="grid-2-col" id="first-section">
            <CommumCard
              title="VIEW CHART"
              textCenter="0.000000003"
              textBottom="0.0014"
              type="top-button"
            />

            <CommumCard
              title="Holdings"
              textCenter="0"
              textBottom="0.00"
              type="big-center"
            />
          </div>

          <div className="grid-2-col" id="second-section">
            <CommumCard
              title="Unclaimed"
              textCenter={withdrawableDividends}
              extraText="USDT"
              textBottom="0.00014"
              type="default"
            />

            <div id="banked-history">
              <CommumCard
                title="Banked"
                textCenter="0.0000"
                extraText="USDT"
                textBottom="0.00014"
                type="default"
              />

              <History data={fakeHistoryData} />
            </div>
            <Button text="Claim" buttonStyle="full-width"></Button>
          </div>
        </div>
      </div>
    </>
  )
}
