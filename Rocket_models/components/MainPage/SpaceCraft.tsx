import * as React from 'react';
import SpaceCraftInterface from '../../interfaces/spaceCraft'
import ShuttleLogo from '../../assets/general/shuttle-linkImg.jpg'
import RocketLogo from '../../assets/general/start-linkImg.png'




const SpaceCraft = (props:SpaceCraftInterface|any) => {
    
    return ( <>
    <div className="spacecraft-card">
        <div className="spacecraft-wrapper">
            {props.props._uid ==2 ? <img className="spacecraft-image" src={ShuttleLogo} />
            :props.props._uid ==1 ? <img className="spacecraft-image" src={RocketLogo} />:null}
            <div className="spacecraft-title">
                {props.props.title}
            </div>
        </div>
    </div>
    </> );
}
 
export default SpaceCraft;