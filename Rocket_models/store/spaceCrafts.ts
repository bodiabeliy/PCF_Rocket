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
        console.log('localData...', request);
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


async getCrmData() {
  const request = await (await axios.get<any>('https://bohdanbielashenoksenvironment.api.crm.dynamics.com/api/data/v9.2/cr324_spacecraftmenus', {
    headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2JvaGRhbmJpZWxhc2hlbm9rc2Vudmlyb25tZW50LmNybS5keW5hbWljcy5jb20vIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNjg3MmFjNzMtNjZjNC00NGFjLWI1OGEtNjI2NDE4MWU4MDI5LyIsImlhdCI6MTY2NDUyODQyOCwibmJmIjoxNjY0NTI4NDI4LCJleHAiOjE2NjQ1MzI4MTEsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFicU9TWWE2MkNkK3NvdC9FNU40ckdvcHBFbDN6YmFBRXgzVXNKaHNTRERseUdPcmNLK3RhL2I5aVF3L0x5SGVoYjdNV2JieHBvSC9CdGwxZHJibVFrQ2xPR3N6YkVQYW45YUZFYnR5Tmltaz0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiOTMzN2MyMjYtNzQzNy00Mjk0LWJkMTItYjlmZmI1MjZmMzAyIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJCaWVsYXNoZW5vayIsImdpdmVuX25hbWUiOiJCb2hkYW4iLCJpcGFkZHIiOiI1LjE3My4yMjQuOSIsIm5hbWUiOiJCb2hkYW4gQmllbGFzaGVub2siLCJvaWQiOiJmZjQxOTEyOS0zNDA2LTRmNzMtYTUwNi02NTM5OGRkOGEyMjYiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMjYyOTEwNjcyNy03NTc4MjEzNzYtMjY5ODg2NDcyMy04MTIzIiwicHVpZCI6IjEwMDMyMDAxRjQ3RkUyMDMiLCJyaCI6IjAuQVEwQWM2eHlhTVJtckVTMWltSmtHQjZBS1FjQUFBQUFBQUFBd0FBQUFBQUFBQUFOQUZVLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6ImgxdXdCVFMtamhEZHIycWd5cnpiYVV0N1ptVGRJUlJ2T3BlMDUtTFQyRzQiLCJ0aWQiOiI2ODcyYWM3My02NmM0LTQ0YWMtYjU4YS02MjY0MTgxZTgwMjkiLCJ1bmlxdWVfbmFtZSI6IkJvaGRhbi5CaWVsYXNoZW5va0BlbmF2YXRlLmNvbSIsInVwbiI6IkJvaGRhbi5CaWVsYXNoZW5va0BlbmF2YXRlLmNvbSIsInV0aSI6InNBeGJKeDFCbkVXUjcwSDYyQ2dLQUEiLCJ2ZXIiOiIxLjAifQ.AqGDqxMtDtNLBBZQvA3lCVq0TrkjKsVWhPkBFjPWKV1i7YI7iI7Gdwb61hYqRIqkNEmvg11eEcdUGLWJ0fYX8NCSltSOM5GZmBLNl456lJtzwwO0BJZYjLsOOHocysz13YGwhgbuSUeIO7-dfTA3GtZhA3x7SXS60F5Q4jlFChVojKSUC1hga2x6EXJTydRPbmqjdueE63jFzQ2_5PatH0gUPHG8iOH6g6fQXSdigFFpg_Y27YXgL1QTJM7VeeMYTYcR137tumnGv7sj46S8KQb2ioq0Szgu_9OZ0Mmazya5COFRBLLecKgBHrs9__UdD6mLhKXRaYIM8Vrz2_PMvw` },
  })).data
        
  this.SpaceCraftsMeny =[...request]
  console.log('getCrmData...', request);
  
return request  
}




}

export default new getSpaceCrafts()