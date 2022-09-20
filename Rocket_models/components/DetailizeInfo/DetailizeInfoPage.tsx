import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import * as React from 'react';


import "antd/dist/antd.css";

const { confirm } = Modal;

const destroyAll = () => {
  Modal.destroyAll();
};

const showConfirm = () => {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => {
      confirm({
        icon: <ExclamationCircleOutlined />,
        content: <Button onClick={destroyAll}>Click to destroy all</Button>,
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }, i * 500);
  }
};

const DetailizeInfo: React.FC = () => <Button onClick={showConfirm}>Confirm</Button>;

export default DetailizeInfo;