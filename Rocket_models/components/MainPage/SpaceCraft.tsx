import * as React from 'react';
import SpaceCraftInterface from '../../interfaces/spaceCraft'





const SpaceCraft = (props:SpaceCraftInterface|any) => {
    
    return ( <>
    {console.log('image rocket', props.props)}
    <div className="spacecraft-card">
        <div className="spacecraft-wrapper">
            {props.props._uid ==2 ? <img   className="spacecraft-image" src="https://firebasestorage.googleapis.com/v0/b/chat-react-2ff9d.appspot.com/o/store%2Fshuttle-linkImg.png?alt=media&token=0a35e2c2-d796-4177-8811-7eca07d27611" />
            :props.props._uid ==1 ? <img className={props.props._uid == 1 ? "align-picture spacecraft-image": "spacecraft-image" } src="https://firebasestorage.googleapis.com/v0/b/chat-react-2ff9d.appspot.com/o/store%2Fstart-linkImg.png?alt=media&token=f14cbaa7-4f4f-48df-9a4f-67e1c82383f5" />:null}
            <div className="spacecraft-title">
                {props.props.title}
            </div>
        </div>
    </div>
    </> );
}
 
export default SpaceCraft;