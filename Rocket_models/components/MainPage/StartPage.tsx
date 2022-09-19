import * as React from 'react';
import {observer} from 'mobx-react-lite'

import spaceCrafts from '../../store/spaceCrafts';
import './styles.css'

const StartPage = observer (() => {

    React.useEffect(() => {
        spaceCrafts.getSpaceCrafts()
    })


    return ( 
    <div className="page__container">
        <div className="page__element-list">

        </div>
    </div> );
})
 
export default StartPage;