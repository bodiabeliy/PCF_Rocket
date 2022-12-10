import { Button } from 'antd';
import * as React from 'react';
import L2Items from './components/InfoTrees/L2Items'
import "antd/dist/antd.css";
import './GlobalStyles/styles.css'

/* 
  App - is main component of application
*/ 
function App (paramsData:any) {
const [isOpen, setIsOpen] = React.useState(false)

  return ( 
   
    <>
    <Button  onClick={() => setIsOpen(!isOpen)}>Open InfoTree</Button>
     {isOpen == true ?  <L2Items props={paramsData} />: null}
    </>
   
  );
}

export default App;