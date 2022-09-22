import * as React from 'react'


interface ModelSchemaInfo {
    id?:number;
}

const ModelSchema = (model:any) => {
    console.log('model ', model);
        
    return ( 
        <>
        <div className="">
            View mode:<b>{model.model.schemaTitle}</b>
        </div>
        <img style={{maxWidth:'80%', marginLeft: "10%"}} src={model.model.schemaUrl} alt="Other rocket" />
        </>
     );
}
 
export default ModelSchema;