import * as React from 'react';
import {observer} from 'mobx-react-lite'

import SpaceCraftsList from './SpaceCraftsList';
import './styles.css'

const StartPage = () => {

 

    return ( 
    <div className="page__container">
        <div className="page__element-list">
        <SpaceCraftsList />
        </div>
    </div> );
}
 
export default StartPage;