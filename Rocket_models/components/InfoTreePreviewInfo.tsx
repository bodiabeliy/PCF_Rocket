import { Button, Card, Empty, Modal, Popover, Radio, RadioChangeEvent, Tabs } from "antd";
import Meta from "antd/lib/card/Meta";
import * as React from "react"
import { } from "../enums"
const infoTreePreviewInfo = (previewInfo: any | string) => {
    const [open, setOpen] = React.useState(false);
    const [modulesList, setModuleList] = React.useState<any>()
    const [isOpenSchema, setIsOpenSchema] = React.useState(false)

    type TabPosition = 'left' | 'right' | 'top' | 'bottom';

    React.useEffect(() => {        
        getJSON(previewInfo.data.SvgSchemaJsonUrl)
    }, [open])

    React.useEffect(() => {
        if (open == true) {
            selectedGroup()
        }
    }, [open])

    const [mode, setMode] = React.useState<TabPosition>('left');

    const handleModeChange = (e: RadioChangeEvent) => {
        setMode(e.target.value);
    };

    const getJSON = (url: string) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data != null) { 
                    console.log("recieved data: ", data);
                    setModuleList(data)
                }
            })
            .catch((error) => {
                console.log("happpend error:"+ error);
                
            });
    };

    const selectedGroup = () => {
        let selectedColor = ""
        const elements: any = document.querySelectorAll('[data-hover]');
        for (let element of elements) {
            ['mouseenter'].forEach(e => {
                element.addEventListener(e, function (event: any) {
                    const dataValue = event.target.dataset.hover;
                    const targetElements: any = document.querySelectorAll(`[data-hover="${dataValue}"]`)
                    selectedColor = colorGenerator();
                    for (let element of targetElements) {
                        console.log("elements", dataValue);
                        element.style.fill = selectedColor
                    }

                });
            });
            ['mouseleave'].forEach(e => {
                element.addEventListener(e, function (event: any) {
                    const dataValue = event.target.dataset.hover;
                    const targetElements: any = document.querySelectorAll(`[data-hover="${dataValue}"]`)
                    for (let element of targetElements) {
                        console.log("elements", dataValue);
                        element.style.fill = `black`
                    }

                });
            })
        }
    }

    const colorGenerator = () => {
        const hexColors = "0123456789ABCDEF"
        let color = ""
        for (let i = 0; i < 6; i++) {
            color += hexColors[Math.floor(Math.random() * hexColors.length)]
        }
        console.log("#", color);
        return "#" + color
    }





    const schemaModuleTooltip = (L4Module: any) => {
        return  (
            <>
                <div className="">
                    <h2>{L4Module.L4ModuleName}</h2>
                </div>
            </>
        )
    }
   



    return (<>
        {
            open ?
                <div className="infoTree__schema-wrapper">
                    <div className="infoTree__schema-content">
                        
                        <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8 }} />
                        <Tabs
                            defaultActiveKey="1"
                            tabPosition={mode}
                            style={{ height: 220 }}
                            items={[
                                {
                                    label: 'Structure',
                                    key: '1',
                                    children: 
                                    <>
                                    <h1>Module:  <span className="infoTree__schema-title">{previewInfo.data.Name}</span> </h1>
                                    <>
                                    {
                                        previewInfo.data.SvgSchemaJsonUrl !="null" ?
                                        <svg className="schema" 
                                        
                                        xmlns={"http://www.w3.org/2000/svg"} 
                                        width={"400pt"} 
                                        height={"990pt"} 
                                        viewBox={"-200 -750 900 900"} 
                                        preserveAspectRatio={"xMidYMid meet"}>
                                    <g style={{transform: "scale(0.19, -0.19)"}} id={`${previewInfo.data.Name} `}>
                                        {modulesList?.L4Items.map((L4Item: any, pathIndex: any) => {
                                            return (
                                                <>
                                                        <>
                                                            {
                                                                
                                                                L4Item.ModuleImage ?
                                                                <Popover placement="left" content={schemaModuleTooltip(L4Item)} trigger="hover">
                                                                    <g 
                                                                    data-hover={L4Item.L4ModuleName} 
                                                                    className={"Regen-Cooled-Nozzle__Group " + L4Item.L4ModuleName}
                                                                    >
                                                                        <path className="schema__element" id={`${previewInfo.data.Name + "-" + pathIndex} `} d={L4Item.path} />
                                                                    </g>
                                                                    </Popover>

                                                                    : null
        
                                                            }
        
                                                        </>        
                                                </>
                                            )
                                        })}
                                    </g>
                                </svg>
                                         :<div className="infoTree__schema-empty">
                                         <Empty 
                                         image="https://rocketapp.blob.core.windows.net/images/failed-load.svg"
                                         
                                         description={
                                             <span><b>No structure for with item!</b></span>
                                         }
                                          />
                                         </div>
                                    }
                                    </>

                                    </>,
                                },
                                {
                                    label: 'Preview',
                                    key: '2',
                                    children: <div>
                                        <h1>General photo:  <span className="infoTree__schema-title">{previewInfo.data.Name}</span> </h1>
                                        <img style={{width:"100%"}} 
                                            src={previewInfo.data.ImageUrl!="null" ?
                                             previewInfo.data.ImageUrl
                                             :"https://rocketapp.blob.core.windows.net/images/failed load.png"} 
                                            alt={previewInfo.data.Name} />
                                    </div>,
                                }
                            ]}
                        />
                        
                        <Button onClick={() => setOpen(false)}>Close Schema</Button>
                    </div>
                </div>
                :
                <Card
                    style={{ display: "flex" }}
                    cover={previewInfo.data.ImageUrl !="null" ?
                    <img style={{ width: 200 }} alt={previewInfo.data.ImageUrl} src={previewInfo.data.ImageUrl} />
                    :<Empty 
                        image="https://rocketapp.blob.core.windows.net/images/failed load.png"
                        description={
                            <span><b>No structure for with item!</b></span>
                        }

                    />}
                >
                    <Meta title={previewInfo.data.Name} description={previewInfo.data.Description} />
                    <Button onClick={() => setOpen(true)}>Look at schema</Button>
                </Card>
        }


    </>);
}

export default infoTreePreviewInfo;