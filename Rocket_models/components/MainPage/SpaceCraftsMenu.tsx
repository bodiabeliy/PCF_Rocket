import * as React from 'react';
import {observer} from 'mobx-react-lite'
import SpaceCraft from './SpaceCraft';
import spaceCrafts from '../../store/spaceCrafts';
import SpaceCraftInterface from '../../interfaces/spaceCraft'



const SpaceCraftsMenu = observer (() => {

    const [spaceCraftsArray, setSpaceCraftsArray] = React.useState<SpaceCraftInterface[]>([])

    React.useEffect(() => {
        spaceCrafts.getSpaceCrafts().then((data:SpaceCraftInterface[]) => {
            setSpaceCraftsArray(data)            
        }); 
    }, [])

    return ( 
    <div className="page__spacecraft-element">
        { spaceCraftsArray.map((spaceCraft:SpaceCraftInterface) =><SpaceCraft props={spaceCraft} key={spaceCraft._uid}/>)}
    </div>
   );
})
 
export default SpaceCraftsMenu;