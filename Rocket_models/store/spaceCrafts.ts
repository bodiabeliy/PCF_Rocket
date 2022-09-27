import {makeAutoObservable} from 'mobx'
import axios from 'axios'
import SpaceCraftInterface from '../interfaces/spaceCraft'

class getSpaceCrafts {
    SpaceCraftsMeny:SpaceCraftInterface[] =[];
    spaceCrafts:SpaceCraftInterface[] =[]

    CraftSchema:any=null
   // method for getting data about type of spacecrafts
    async getSpaceCrafts() {
        const request = await (await axios.get<SpaceCraftInterface[]>('http://localhost:3000/spaceCraftList')).data
        
        this.SpaceCraftsMeny =[...request]
      return request  
    }

   

  async getSpaceCraftSchema(typeId:any) {
    const request = await (await axios.get<any>(`http://localhost:3000/RocketsListByType/${typeId}`)).data   
     
    this.SpaceCraftsMeny =[...request]
  return request  
}

async getSpaceCraftsList(typeId:any) {
  const request = await (await axios.get<any>(`http://localhost:3000/RocketsListByType/${typeId}`)).data    
  this.SpaceCraftsMeny =[...request]
return request  
}




}

export default new getSpaceCrafts()