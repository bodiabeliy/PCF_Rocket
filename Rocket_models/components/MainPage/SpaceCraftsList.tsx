import * as React from 'react';
import {observer} from 'mobx-react-lite'
import SpaceCraft from './SpaceCraft';
import spaceCrafts from '../../store/spaceCrafts';


const SpaceCraftsList = observer (() => {
    const [spaceCraftsArray, setSpaceCraftsArray] = React.useState([])

    React.useEffect(() => {
        spaceCrafts.getSpaceCrafts().then(data => {
            setSpaceCraftsArray(data)            
        });  
       
            
    }, [])

    return ( 
    <div className="t">
        { spaceCraftsArray.map(spaceCraft =><SpaceCraft props={spaceCraft}/>)}
    </div>
   );
})
 
export default SpaceCraftsList;