import {makeAutoObservable} from 'mobx'
import axios from 'axios'
import SpaceCraftInterface from '../interfaces/spaceCraft'

class getSpaceCrafts {
    AllspaceCrafts:SpaceCraftInterface[] =[]

   // method for getting data about type of spacecrafts
    async getSpaceCrafts() {
        const request = await (await axios.get<SpaceCraftInterface[]>('http://localhost:3000/celementsList')).data
        this.AllspaceCrafts =[...request]
      return request  
    }

}

export default new getSpaceCrafts()