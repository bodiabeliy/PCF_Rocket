import { Button, Card, Empty, Modal, Popover, Radio, RadioChangeEvent, Tabs } from "antd";
import Meta from "antd/lib/card/Meta";
import * as React from "react"

/* 
    component with detailed information about module
*/ 
const infoTreePreviewInfo = (previewInfo: any | string) => {
/* 
  set default state of components variables
  useState - special React functionality, that allows control all changes thanks setter function (second argument)
*/ 
    const [open, setOpen] = React.useState(false);
    const [modulesList, setModuleList] = React.useState<any>()
    const [isOpenSchema, setIsOpenSchema] = React.useState(false)
    const [mode, setMode] = React.useState<TabPosition>('left');

    type TabPosition = 'left' | 'right' | 'top' | 'bottom';

/* 
  useEffect -  special React finctionality (hooks), that allows set trigger, when data are changed
*/ 
    React.useEffect(() => {        
        getJSON(previewInfo.data.SvgSchemaJsonUrl)
    }, [open])

    React.useEffect(() => {
        if (open == true) {
            selectedGroup()
        }
    }, [open])

/* 
    handler function, that allows switch between different types of view mods
*/ 
    const handleModeChange = (e: RadioChangeEvent) => {
        setMode(e.target.value);
    };


/* 
    function getting informaton about module structure
*/ 
    const getJSON = (url: string) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data != null) { 
                    setModuleList(data)
                }
            })
            .catch((error) => {
                console.log("happpend error:"+ error);
            });
    };


/* 
    function that allows select multiple joined structure elements, by groupe name
*/ 
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
                        element.style.fill = selectedColor
                    }

                });
            });
            ['mouseleave'].forEach(e => {
                element.addEventListener(e, function (event: any) {
                    const dataValue = event.target.dataset.hover;
                    const targetElements: any = document.querySelectorAll(`[data-hover="${dataValue}"]`)
                    for (let element of targetElements) {
                        element.style.fill = `black`
                    }

                });
            })
        }
    }

/* 
    function for setting random color for current structure`s group
*/ 
    const colorGenerator = () => {
        const hexColors = "0123456789ABCDEF"
        let color = ""
        for (let i = 0; i < 6; i++) {
            color += hexColors[Math.floor(Math.random() * hexColors.length)]
        }
        return "#" + color
    }

/* 
    tooltip render function
*/ 
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
                                            <img style={{width:"100%"}}  src="https://rocketapp.blob.core.windows.net/images/failed-load.svg" alt="" />
                                            <span><b>No structure for with item!</b></span>
                                         </div>
                                    }
                                    </>

                                    </>,
                                },
                                {
                                    label: 'Preview',
                                    key: '2',
                                    children: <div>
                                        {previewInfo.data.ImageUrl!="null" ?
                                        <h1>General photo:  <span className="infoTree__schema-title">{previewInfo.data.Name}</span> </h1>
                                        : <>Photo not exist!</>
                                        }
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
                            <span><b>Photo not exist!</b></span>
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