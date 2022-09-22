import {makeAutoObservable} from 'mobx'
import axios from 'axios'
import SpaceCraftInterface from '../interfaces/spaceCraft'

class getSpaceCrafts {
    AllspaceCrafts:SpaceCraftInterface[] =[]
    CraftSchema:any=null
   // method for getting data about type of spacecrafts
    async getSpaceCrafts() {
        const request = await (await axios.get<SpaceCraftInterface[]>('http://localhost:3000/spaceCraftList')).data
        
        this.AllspaceCrafts =[...request]
      return request  
    }

    async getSpaceCraftsSchema() {
      const request = await (await axios.get<any>('http://localhost:3000/spaceCraftSchema')).data
      this.AllspaceCrafts =[...request]
    return request  
  }



}

export default new getSpaceCrafts()