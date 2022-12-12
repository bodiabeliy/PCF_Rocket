import { Button } from 'antd';
import * as React from 'react';
import L2Items from './components/InfoTrees/L2Items'
import "antd/dist/antd.css";
import './GlobalStyles/styles.css'

/* 
  App - is main component of application
*/ 
function App (paramsData:any) {

  return ( 
   
    <>
       <L2Items props={paramsData} />
    </>
   
  );
}

export default App;