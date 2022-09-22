import type { RadioChangeEvent } from 'antd';
import { Radio, Tabs } from 'antd';
import * as React from 'react';

import ModelSchema from '../utilises/ModelSchema'

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

const DetailizeInfo: React.FC = () => {
  const [mode, setMode] = React.useState<TabPosition>('left');

  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  return (
    <div>
      <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8 }} />
      <Tabs
        defaultActiveKey="1"
        tabPosition={mode}
        style={{ height: 220 }}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i);
          return {
            label: `Tab-${id}`,
            key: id +1,
            children: <ModelSchema model={id}  />,
          };
        })}
      />
    </div>
  );
};

export default DetailizeInfo;
