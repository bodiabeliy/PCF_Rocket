import { Button, Card, Modal, Popover, Radio, RadioChangeEvent, Tabs } from "antd";
import Meta from "antd/lib/card/Meta";
import * as React from "react"
import { } from "../enums"
const infoTreePreviewInfo = (previewInfo: any | string) => {
    const [open, setOpen] = React.useState(false);
    const [modulesList, setModuleList] = React.useState<any>()
    const [isOpenSchema, setIsOpenSchema] = React.useState(false)
    type TabPosition = 'left' | 'right' | 'top' | 'bottom';

    React.useEffect(() => {
        getJSON(previewInfo.data.SvgSchemaUrl)
    }, [])

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
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            let status = xhr.status;
            if (status === 200) {
                if (xhr.response != null) {
                    setModuleList(xhr.response)
                }
            } else {
                alert(`Response error! Status: ${status}`)

            }
        };
        xhr.send();
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



    const schemaModuleTooltip = (L4Module: any) =>
    (
        <>
            <div className="">
                <h2>{L4Module.L4ModuleName}</h2>
            </div>
        </>
    )

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
                                    <svg className="schema" xmlns={previewInfo.data.schemaUrl.svgXML} version={previewInfo.data.schemaUrl.version} width={previewInfo.data.schemaUrl.width} height={previewInfo.data.schemaUrl.height} viewBox={previewInfo.data.schemaUrl.viewBox} preserveAspectRatio={previewInfo.data.schemaUrl.preserveAspectRatio}>
                                    <g id={`${previewInfo.data.Name} `} transform={previewInfo.data.schemaUrl.figureGroup.position}>
                                        {modulesList?.L4Items.map((L4Item: any, pathIndex: any) => {
                                            return (
                                                <>
                                                        <>
                                                            {
        
                                                                L4Item.ModuleImage ?
                                                                    <g data-hover={L4Item.L4ModuleName} className="Regen-Cooled-Nozzle__Group">
        
                                                                        <Popover placement="left" content={schemaModuleTooltip(L4Item)} trigger="hover">
                                                                            <path className="schema__element" id={`${previewInfo.data.Name + "-" + pathIndex} `} d={L4Item.path} />
                                                                        </Popover>
                                                                    </g>
                                                                    : null
        
                                                            }
        
                                                        </>        
                                                </>
                                            )
                                        })}
                                    </g>
                                </svg>
                                    </>,
                                },
                                {
                                    label: 'Preview',
                                    key: '2',
                                    children: <div>
                                        <h1>General photo:  <span className="infoTree__schema-title">{previewInfo.data.Name}</span> </h1>
                                        <img style={{width:"100vh"}} src={previewInfo.data.ImageUrl} alt={previewInfo.data.Name} />
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
                    cover={<img style={{ width: 200 }} alt={previewInfo.data.ImageUrl} src={previewInfo.data.ImageUrl} />}
                >
                    <Meta title={previewInfo.data.Name} description={previewInfo.data.Description} />
                    <Button onClick={() => setOpen(true)}>Look at schema</Button>
                </Card>
        }


    </>);
}

export default infoTreePreviewInfo;