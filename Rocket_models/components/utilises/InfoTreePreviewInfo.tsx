import { Button, Card, Modal } from "antd";
import Meta from "antd/lib/card/Meta";
import * as React from "react"

const infoTreePreviewInfo = (previewInfo:any) => {
 const [open, setOpen] = React.useState(false);
    console.log("preview", previewInfo.data.schemaUrl.L4Items);
    
    const [isOpenSchema, setIsOpenSchema] = React.useState(false)
    return ( <>
    {
        open ?
       <div className="infoTree__schema-wrapper">
        <div className="infoTree__schema-content">
        <h1>Module:  <span className="infoTree__schema-title">{previewInfo.data.Name}</span> </h1>
        <svg className="schema" xmlns={ previewInfo.data.schemaUrl.svgXML} version={ previewInfo.data.schemaUrl.version} width={ previewInfo.data.schemaUrl.width} height={ previewInfo.data.schemaUrl.height} viewBox={ previewInfo.data.schemaUrl.viewBox} preserveAspectRatio={previewInfo.data.schemaUrl.preserveAspectRatio}>
            <g transform={previewInfo.data.schemaUrl.figureGroup.position}>
                {previewInfo.data.schemaUrl?.L4Items.map((L4Item:any, pathIndex:any) => (
                    <path className="schema__element" id={`${previewInfo.data.Name +"" + pathIndex} `} d={L4Item.path} />
                ))}
            </g>
        </svg>
        </div>
       </div>
        :
        <Card
        style={{ display:"flex" }}
        cover={<img style={{ width: 200 }} alt={previewInfo.data.ImageUrl} src={previewInfo.data.ImageUrl} />}
        >
        <Meta title={previewInfo.data.Name} description={previewInfo.data.Description} />
        <Button onClick={() => setOpen(true)}>Look at schema</Button>
    </Card>
    }
    
       
    </> );
}
 
export default infoTreePreviewInfo;