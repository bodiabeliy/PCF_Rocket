import * as React from 'react';




const SpaceCraft = (props:any) => {
    console.log('getting props', props.props);
    
    return ( <>
    <div className="">
       {props.props.title}
    </div>
    </> );
}
 
export default SpaceCraft;