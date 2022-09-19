import * as React from 'react';
import {observer} from 'mobx-react-lite'
import SpaceCraft from './SpaceCraft';
import spaceCrafts from '../../store/spaceCrafts';
import SpaceCraftInterface from '../../interfaces/spaceCraft'



const SpaceCraftsList = observer (() => {

    const [spaceCraftsArray, setSpaceCraftsArray] = React.useState<SpaceCraftInterface[]>([])

    React.useEffect(() => {
        spaceCrafts.getSpaceCrafts().then((data:SpaceCraftInterface[]) => {
            setSpaceCraftsArray(data)            
        });  
       
            
    }, [])

    return ( 
    <div className="t">
        { spaceCraftsArray.map((spaceCraft:SpaceCraftInterface) =><SpaceCraft props={spaceCraft}/>)}
    </div>
   );
})
 
export default SpaceCraftsList;