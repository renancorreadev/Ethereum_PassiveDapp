import './style.scss'
import theterLogoImg from '../../../../assets/tether.svg'
import {Button} from '../Button/index'

interface CommumCardProps{
    title: string
    textCenter: string
    textBottom: string
    extraText?: string
    type?: "default" | "big-center" | "top-button"

}

export function CommumCard({title, textCenter, textBottom, extraText, type}: CommumCardProps){
    
    return(
        
        <>
            {
                type === 'default' &&
                <div className="commum-card default">
                    <div>
                        <h2>{title}</h2>
                    </div>
                    <span>{textCenter} {extraText && <span>{extraText}</span>}</span>
                    <p><span>$</span>{textBottom}</p>
                </div>
            }

            {
                type === 'big-center' &&
                <div className={`commum-card ${type}`}>
                    <div>
                        <h2>{title}</h2>
                    </div>
                    <span>{textCenter} {extraText && <span>{extraText}</span>}</span>
                    <p><span>$</span>{textBottom}</p>
                </div>
            }

            {
                type === 'top-button' &&
                <div className={`commum-card ${type}`}>
                    <div id="card-button">
                        <Button text={title} buttonStyle="card-button"/>
                    </div>
                    <div>
                        <img src={theterLogoImg} alt="theter logo" />
                        <span>{textCenter}</span>
                    </div>
                    <p>${textBottom}</p>
                </div>
            }
        </>
        
    )
}