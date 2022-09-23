import * as React from 'react';
import {observer} from 'mobx-react-lite'

import SpaceCraftsMenu from './SpaceCraftsMenu';
import './styles.css'

const StartPage = () => {
    
    return ( 
    <div className="page__container">
        <div className="page__spacecraft-menu">
            <SpaceCraftsMenu />
        </div>
    </div> );
}
 
export default StartPage;