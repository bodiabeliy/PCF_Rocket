import { IInputs, IOutputs } from "./generated/ManifestTypes";
import App  from "./App";
import * as React from "react";
import {AppConfig} from '../AppConfig'
import {PublicClientApplication} from '@azure/msal-browser'

export class RocketModels  implements ComponentFramework.ReactControl<IInputs, IOutputs> {

    
    private theComponent: ComponentFramework.ReactControl<IInputs, IOutputs>;
    private notifyOutputChanged: () => void;

    /**
     * Empty constructor.
     */
    

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     */
    public init(
        context: ComponentFramework.Context<IInputs>,
        
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
       
        this.notifyOutputChanged = notifyOutputChanged;
    }

    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     * @returns ReactElement root react element for the control
     */
    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        // context.webAPI.createRecord('RocketApp', {
        //     "spaceCraftList": [
        //       { "_uid": 1, "title": "Rusable", "logoRocket":"https://firebasestorage.googleapis.com/v0/b/chat-react-2ff9d.appspot.com/o/store%2FstartImgLink-3.png?alt=media&token=4be16c10-a64e-42ab-a97c-af48514d0a1d"},
        //       { "_uid": 2, "title": "Disposable", "logoShuttle":"https://firebasestorage.googleapis.com/v0/b/chat-react-2ff9d.appspot.com/o/store%2Fstart-linkImg.png?alt=media&token=f14cbaa7-4f4f-48df-9a4f-67e1c82383f5" },
        //       { "_uid": 3, "title": "Other", "logoOthers":"https://firebasestorage.googleapis.com/v0/b/chat-react-2ff9d.appspot.com/o/store%2Fshuttle-linkImg.png?alt=media&token=0a35e2c2-d796-4177-8811-7eca07d27611" }
          
        //     ],
        //     "spaceCraftSchema": {
        //       "type":[
        //         {"typeId":2, "schemaTitle":"Photo", "schemaUrl": "https://firebasestorage.googleapis.com/v0/b/chat-react-2ff9d.appspot.com/o/store%2Fshuttle-generalschema.png?alt=media&token=c96ed1d7-2c10-48a7-ad8a-edb02777abcb"},
        //         {"typeId":5, "schemaTitle":"Schema", "schemaUrl": "https://firebasestorage.googleapis.com/v0/b/chat-react-2ff9d.appspot.com/o/store%2FSpace_Shuttle.svg?alt=media&token=683a5a37-808b-49c7-9dc0-357d43ccdd75"}    
        //       ]
        //     }
        //   })
        return React.createElement(
            App
        );
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
     */
    public getOutputs(): IOutputs {
        return { };
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}
