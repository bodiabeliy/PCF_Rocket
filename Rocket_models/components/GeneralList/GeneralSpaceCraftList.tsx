import { Button, Card, Col, Modal, Popover, Row } from 'antd';
import * as React from 'react';
import {observer} from 'mobx-react-lite'
import spaceCraftsList from '../../store/spaceCrafts'; 

const { confirm } = Modal;

import "antd/dist/antd.css";
import Meta from 'antd/lib/card/Meta';
import { ClusterOutlined, RocketOutlined } from '@ant-design/icons';


const SpaceCraftList: React.FC = observer(() => {

  const [spaceCraftList, setSpaceCraftList] = React.useState([])
  const [spaceCraftSchema, setSpaceCraftSchema] = React.useState()

 const [open, setOpen] = React.useState(false);

 const [isModalOpen, setIsModalOpen] = React.useState(false)
 const [isModelShow, setIsModelShow] = React.useState(false)
 const [isTreeShow, setIsTreeShow] = React.useState(false)

 const ConfirmModelPanel = () => {
  confirm({
      icon:null,
      content: <img />,
      onOk:(() =>{}),
  })
};

const ConfirmTreeSchema = () => {
  confirm({
      icon:null,
      content: <Button>Tree Schema</Button>,
  })
};

  React.useEffect(() => {
    spaceCraftsList.getSpaceCraftsList().then(data => {
      setSpaceCraftList(data)
    })
  }, [])


  
  const showTreeSchema = () => {
    setIsTreeShow(true)
    ConfirmTreeSchema()

  }

  const showModel = () => {
      ConfirmModelPanel()
      setIsModelShow(true)

  }

  const DetailedCard = (id:any) => {
    spaceCraftsList.getSpaceCraftSchema_(id).then(data => {
      setSpaceCraftSchema(data)
      
    })
  }

  const fieldMenu = (
    <div className='spacecraft-popover'>
        <Button icon={<ClusterOutlined />} size="large" onClick={() =>showTreeSchema()}>
            Look at tree schema
        </Button>
        <Button icon={<RocketOutlined />} size="large" onClick={() => showModel()}>
            Look at Model overview
        </Button>
    </div>
  );

  return (
  <div className="site-card-wrapper">
    {/* {console.log('spaceCraftList', spaceCraftList)} */}
    <Row gutter={16}>
      { spaceCraftList.map((spaceCraftElement:any) => 
      <>
        <Popover content={fieldMenu} title="Select option:" trigger="click">
          <Col span={8}>
              <Card
              onClick={() => DetailedCard(spaceCraftElement.id)}
                hoverable
                style={{ width: 240 }}
                cover={<img alt={spaceCraftElement.rocketShortDescription} src={spaceCraftElement.rocketUrl} />}
              >
              <Meta title={spaceCraftElement.rocketName} description={spaceCraftElement.rocketDetailedDescription} />
            </Card>
          </Col>
          </Popover>
      </>)
      }
    </Row>
  </div>
  )
});

export default SpaceCraftList;