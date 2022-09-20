import * as React from 'react';
import SpaceCraftInterface from '../../interfaces/spaceCraft'
import { Button, Popover } from 'antd';
import {RocketOutlined, FileTextOutlined, ClusterOutlined } from '@ant-design/icons';

import DetailedInfoPage from '../../components/DetailizeInfo/DetailizeInfoPage'

import "antd/dist/antd.css";



const SpaceCraft = (props:SpaceCraftInterface|any) => {
    
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [isModelShow, setIsModelShow] = React.useState(false)
    const [isTreeShow, setIsTreeShow] = React.useState(false)

    const OpenModal = () => {
        setIsModalOpen(!isModalOpen)
        console.log('isModalOpen = ', isModalOpen);
        
    }

    const showTreeSchema = () => {
        setIsModelShow(true)
    }

    const showModel = () => {
        setIsTreeShow(true)
    }

    const fieldMenu = (
        <div className='spacecraft-popover'>
            <Button icon={<ClusterOutlined />} size="large" onClick={() =>showTreeSchema()}>
                Look at tree schema
            </Button>
            <Button icon={<RocketOutlined />} size="large" onClick={() => showModel()}>
                More Information
            </Button>
        </div>
      );

    return ( <>
    <div className="spacecraft-card">
        <div className="spacecraft-wrapper"  onClick={() => OpenModal()}>
            {props.props._uid ==2 ? 
            <Popover content={fieldMenu} title="Select option:" trigger="click">
               <img className="spacecraft-image" src="https://firebasestorage.googleapis.com/v0/b/chat-react-2ff9d.appspot.com/o/store%2Fshuttle-linkImg.png?alt=media&token=0a35e2c2-d796-4177-8811-7eca07d27611" />
            </Popover>
            :props.props._uid ==1 ? 
             <Popover content={fieldMenu} title="Select option:" trigger="click">
            <img className={props.props._uid == 1 ? "align-picture spacecraft-image": "spacecraft-image" } src="https://firebasestorage.googleapis.com/v0/b/chat-react-2ff9d.appspot.com/o/store%2Fstart-linkImg.png?alt=media&token=f14cbaa7-4f4f-48df-9a4f-67e1c82383f5" />
            </Popover>:null}
            <div className="spacecraft-title">
                {props.props.title}
            </div>
        </div>
    </div>

    {isModelShow || isTreeShow && <DetailedInfoPage />}

    </> );
}
 
export default SpaceCraft;