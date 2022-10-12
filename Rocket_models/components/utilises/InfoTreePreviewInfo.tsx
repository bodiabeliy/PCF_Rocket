import { Button, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import * as React from "react"

const infoTreePreviewInfo = (previewInfo:any) => {
    return ( <>
    <Card
        style={{ display:"flex" }}
        cover={<img style={{ width: 200 }} alt={previewInfo.data.ImageUrl} src={previewInfo.data.ImageUrl} />}
        >
        <Meta title={previewInfo.data.Name} description={previewInfo.data.Description} />
        <Button>Look at schema</Button>
    </Card>
    </> );
}
 
export default infoTreePreviewInfo;