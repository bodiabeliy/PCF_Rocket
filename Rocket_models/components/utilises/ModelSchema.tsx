import * as React from 'react'


interface ModelSchemaInfo {
    id?:number;
}

const ModelSchema = (model:any) => {
    console.log('model ', model);
        
    return ( 
        <>
        <div className="">
            {`Model title № ` + model.model}
        </div>
        <img style={{maxWidth:'100%'}} src="https://firebasestorage.googleapis.com/v0/b/chat-react-2ff9d.appspot.com/o/store%2FSpace_Shuttle.svg?alt=media&token=683a5a37-808b-49c7-9dc0-357d43ccdd75" alt="" />
        </>
     );
}
 
export default ModelSchema;