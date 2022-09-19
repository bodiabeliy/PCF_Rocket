import {makeAutoObservable} from 'mobx'
import axios from 'axios'

class getSpaceCrafts {

   
    async getSpaceCrafts() {
        const request = await axios.get<any>('http://localhost:3000/celementsList')
        console.log('getting data', request.data);
        
    }

}

export default new getSpaceCrafts()