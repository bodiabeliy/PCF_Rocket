import * as React from 'react';
import SpaceCraftInterface from '../../interfaces/spaceCraft'
import { Button, Modal, Popover } from 'antd';
import {RocketOutlined, FileTextOutlined, ClusterOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

import DetailedInfoPage from '../../components/DetailizeInfo/DetailizeInfoPage'
import SpaceCraftList from '../GeneralList/GeneralSpaceCraftList'
const { confirm } = Modal;

import "antd/dist/antd.css";

const ConfirmTreeSchema = () => {
        confirm({
            icon:null,
            content: <Button>Tree Schema</Button>,
        })
};

const ConfirmModelPanel = () => {
   
};

const SpaceCraft = (props:SpaceCraftInterface|any) => {
    
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [isModelShow, setIsModelShow] = React.useState(false)

    const OpenModal = () => {
        setIsModelShow(true)
        confirm({
            icon:null,
            content: <SpaceCraftList />,
            onOk:(() =>{}),
        })

             
    }

    const showModelList = () => {
        ConfirmModelPanel()

    }

    const fieldMenu = (
        <div className='spacecraft-popover'>
            <Button icon={<RocketOutlined />} size="large" onClick={() => showModelList()}>
                View list of rockets
            </Button>
        </div>
      );

    return ( <>
    <div className="spacecraft-card" onClick={() => OpenModal()}>
        <div className="spacecraft-wrapper">
            {props.props._uid ==2 ? 
               <img className="spacecraft-image" src="https://firebasestorage.googleapis.com/v0/b/chat-react-2ff9d.appspot.com/o/store%2FstartImgLink-3.png?alt=media&token=4be16c10-a64e-42ab-a97c-af48514d0a1d" />
            :props.props._uid ==1 ? 
            <img className={props.props._uid == 1 ? "align-picture spacecraft-image": "spacecraft-image" } src="https://firebasestorage.googleapis.com/v0/b/chat-react-2ff9d.appspot.com/o/store%2Fstart-linkImg.png?alt=media&token=f14cbaa7-4f4f-48df-9a4f-67e1c82383f5" />
            :
            <img className="spacecraft-image" src="https://firebasestorage.googleapis.com/v0/b/chat-react-2ff9d.appspot.com/o/store%2Fshuttle-linkImg.png?alt=media&token=0a35e2c2-d796-4177-8811-7eca07d27611" />
            }
            <div className="spacecraft-title">
                {props.props.title}
            </div>
        </div>
    </div>


    </> );
}
 
export default SpaceCraft;