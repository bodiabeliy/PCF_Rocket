import * as React from 'react';
import {observer} from 'mobx-react-lite'

import {PublicClientApplication} from '@azure/msal-browser'
import * as AppConfig from '../../../AppConfig'
import * as GraphService from '../../../GraphService'

import SpaceCraftsMenu from './SpaceCraftsMenu';
import './styles.css'
import { Button } from 'antd';

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



    

    //  const  login = async() => {
    //     try {
    //         await userAppConfig.loginPopup({
    //             scopes:AppConfig.scopes,
    //             prompt:'Select '
    //         })
    //         await getUserProfile()
    //         let user = userAppConfig.getAccount()
    //         console.log('user data recieved', user);
            
    //     } catch (error) {
    //         console.log('Error in Login proccess', error);
    //     }
    // }

    // const logout =() => {
    //     userAppConfig.logout()
    // }



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
           :  <Button onClick={() => login()}>Loggin to system</Button>
           }
        </div>
    </div> );
}
 
export default StartPage;