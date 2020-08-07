import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MachineService {
  public machineRegistered:boolean=false;
  private deviceInfo;

  constructor(private httpClient: HttpClient)  {
    this.getMachineInfo();
   }

   async getMachineInfo(){
     await this.httpClient.get('http://localhost:3000/machine').subscribe(response => {
      console.log("Response: ");
      console.log(response);
      this.deviceInfo = response;
     });
   }

   getCPUInfo(){
    console.log("CPU info:");
    console.log(this.deviceInfo.cpu);
    return this.deviceInfo.cpu;
  }

  getGPUInfo(){
    console.log("GPU info:");
    console.log(this.deviceInfo.cpu);
    return this.deviceInfo.gpu; 
  }

}
