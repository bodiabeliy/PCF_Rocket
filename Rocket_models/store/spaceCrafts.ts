import {makeAutoObservable} from 'mobx'
import axios from 'axios'

class getSpaceCrafts {
    AllspaceCrafts =[]

   // method for getting data about type of spacecrafts
    async getSpaceCrafts() {
        const request = await (await axios.get<[]>('http://localhost:3000/celementsList')).data
        this.AllspaceCrafts =[...request]
      return request  
    }

}

export default new getSpaceCrafts()