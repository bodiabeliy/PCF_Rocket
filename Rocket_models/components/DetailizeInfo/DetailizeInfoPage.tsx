import type { RadioChangeEvent } from 'antd';
import { Radio, Tabs } from 'antd';
import * as React from 'react';
import {observer} from 'mobx-react-lite';

import spaceCrafts from '../../store/spaceCrafts';

import ModelSchema from '../utilises/ModelSchema'

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

const DetailizeInfo = observer ((rocketSchemas:any) => {
  const [mode, setMode] = React.useState<TabPosition>('left');

  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  const [spaceCraftSchemas, setSpaceCraftSchemas] = React.useState<any>(null)

  React.useMemo(() => {
      // spaceCrafts.getSpaceCraftSchema_(rocketId).then((data:any) => {
      //     setSpaceCraftSchemas(data)
      // }); 
  
  }, [])

  return (
    <div>
      <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8 }} />
      <Tabs
        defaultActiveKey="1"
        tabPosition={mode}
        style={{ height: 220 }}
        items={spaceCraftSchemas?.type.map((id:any) => {
          
          return {
            label:'id',
            key:id,
            children: <ModelSchema model={id}  />
          }
        })}
      />
    </div>
  );
});

export default DetailizeInfo;
