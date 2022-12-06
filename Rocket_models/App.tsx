import { Button } from 'antd';
import * as React from 'react';
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage'
import InfoTree from './components/InfoTree'
import "antd/dist/antd.css";
import './GlobalStyles/styles.css'


function App (paramsData:any) {
const [isOpen, setIsOpen] = React.useState(false)
console.log("gett data: ", paramsData);

  return ( 
   
    <>
    <Button  onClick={() => setIsOpen(!isOpen)}>Open InfoTree</Button>
     {isOpen == true ?  <InfoTree props={paramsData} />: null}
    {/* <MainPage /> */}
    </>
   
  );
}

export default App;