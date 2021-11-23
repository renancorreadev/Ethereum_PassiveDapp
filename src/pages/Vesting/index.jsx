import { Button } from './components/Button'
import {History} from './components/History'
import './style.scss'

export function Vesting(){

    const fakeHistoryData = [
        {
            id:1,
            date: "00/00/0000",
            usdt:"10.00",
            passive:"yes"
        },
        {
            id:2,
            date: "00/00/0000",
            usdt:"10.00",
            passive:"yes"
        },
        {
            id:3,
            date: "00/00/0000",
            usdt:"10.00",
            passive:"yes"
        },
        {
            id:4,
            date: "00/00/0000",
            usdt:"10.00",
            passive:"yes"
        },
        {
            id:5,
            date: "00/00/0000",
            usdt:"10.00",
            passive:"yes"
        },
        {
            id:6,
            date: "00/00/0000",
            usdt:"10.00",
            passive:"yes"
        },
        {
            id:7,
            date: "00/00/0000",
            usdt:"10.00",
            passive:"yes"
        },
        {
            id:8,
            date: "00/00/0000",
            usdt:"10.00",
            passive:"yes"
        },

    ]

    return(
        <div id="vesting">

            <h1>Passive<span>Swap</span></h1>
            <p><span>by</span>passive.</p>

            <div class="section-1">
                <p>Tokens</p>
                <div className="cards">
                    <div>
                        <div className="card" id="first">

                            <p>Released</p>
                            <div>
                                <p>0</p>
                                <span/>
                                <p>0</p>
                            </div>
                        </div>

                        <div className="card" id="second">
                            <p>Available</p>
                            <p id="number">0</p>
                        </div>

                        <div className="card" id="third">
                            <div>
                                <p>Released History</p>
                                <p>Comming Soon</p>
                            </div>
                        </div>
                    </div>


                </div>
                    <Button text="Release Tokens" type="default"/>
            </div>

            <div className="section-2">
                <p>Reflections</p>
                <div className="cards">
                    <div>
                        <div className="card" id="first">

                            <p>Unclaimed</p>
                            <div>
                                <p id="usdt">0.0000 <span>USDT</span></p>
                                <p id="price">$<span>0.0014</span></p>
                            </div>
                        </div>

                        <div className="card" id="second">
                            <p>Banked</p>
                            <div>
                                <p id="usdt">0.0000 <span>USDT</span></p>
                                <p id="price">$<span>0.0014</span></p>
                            </div>
                        </div>

                        <History data={fakeHistoryData}/>
                    </div>


                </div>
                    <Button text="Claim Reflections" type="outlined"/>
            </div>
        </div>
    )
}