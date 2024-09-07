import { Injectable } from '@angular/core';
import dataJson from '../../assets/resultados.json';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  findStateInfo(id: number){
    return dataJson.states.find(x => Number(x.id) === Number(id));
  }
  getStates(){
    return dataJson.states
  }
  getTotals(){
    return dataJson.totals
  }
  getCenters(){
    return dataJson.centers
  }
  getMunicipality(stateid: any, id: any){
    let stateInfo = this.findStateInfo(stateid)
    if(stateInfo){
      return stateInfo.muniList.find(x => Number(x.id) === Number(id));
    }
    return null
  }
  getParrish(stateid: any, muniId: any, id: any){
    let muniInfo = this.getMunicipality(stateid, muniId);
    if(muniInfo){
      return muniInfo.parrishList.find(x => Number(x.id) === Number(id));
    }
    return null
  }
  getCenter(stateid: any, muniId: any, parrishId: any, id: any){
    let parrish = this.getParrish(stateid, muniId, parrishId);
    if(parrish){
      return parrish.centers.find(x => Number(x.id) === Number(id));
    }
    return null
  }
  getTable(stateid: any, muniId: any, parrishId: any, centerId: any, id: any){
    let parrish = this.getCenter(stateid, muniId, parrishId, centerId);
    if(parrish){
      return parrish.tableList.find(x => Number(x.id) === Number(id));
    }
    return null
  }
}
