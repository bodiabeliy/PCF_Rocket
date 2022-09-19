import { Button } from 'antd';
import * as React from 'react';
import state from '../store/counter'
import {observer} from 'mobx-react-lite'

  
const Counter =  observer(() => {
  return ( <>
    <Button type="primary" onClick={() =>state.increment()}>Add</Button>
    {'Count = ' +state.count}
    <Button danger type="ghost" onClick={() =>state.dicrement()}>Splace</Button>

  </> 
  )
});
 
export default Counter;
