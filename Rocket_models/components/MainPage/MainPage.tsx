import * as React from 'react';
import {observer} from 'mobx-react-lite'

import {PublicClientApplication} from '@azure/msal-browser'
import * as AppConfig from '../../../AppConfig'

import SpaceCraftsMenu from './SpaceCraftsMenu';
import './styles.css'

const StartPage = () => {

    const [error, setError] = React.useState(null);
    const [isAuthorization, setAuthorization] = React.useState(false)
    const [user, setUser] = React.useState({})

    const [clientInfo, setClientInfo] = React.useState<any>()

    React.useEffect(() => {
        getData()
    }, [])

    const getData =() => {
        let publicClient = new PublicClientApplication({
            auth: {
                clientId:AppConfig.AppConfig.appId,
                redirectUri:'http://localhost:8181'
            },
            cache: {
                cacheLocation:"localStorage",
                storeAuthStateInCookie:true
            }
        })
        setClientInfo(publicClient)

    }


    const login = async() => {        
        let publicClient = new PublicClientApplication({
            auth: {
                clientId:AppConfig.AppConfig.appId,
                redirectUri:'http://localhost:8181'
            },
            cache: {
                cacheLocation:"localStorage",
                storeAuthStateInCookie:true
            }
        }).loginPopup()
        setClientInfo(publicClient)
        setAuthorization(true)
        
    }

    return ( 
    <div className="page__container">
        <div className="page__spacecraft-menu">
           {isAuthorization == true ?  <SpaceCraftsMenu />
           :  
           <div className="page__InitialSign">
            <button className="page__InitialSign-btn" onClick={() => login()}>SIGN IN</button>
           </div>
           }
        </div>
    </div> );
}
 
export default StartPage;