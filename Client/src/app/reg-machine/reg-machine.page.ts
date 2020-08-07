import { Component, OnInit } from '@angular/core';


import { MachineService } from "../services/machine.service";

@Component({
  selector: 'app-reg-machine',
  templateUrl: './reg-machine.page.html',
  styleUrls: ['./reg-machine.page.scss'],
})
export class RegMachinePage implements OnInit {
  deviceInfo;
  machineRegistered:boolean;
  verifiedMachine:boolean;
  constructor(private machineService:MachineService)  {
    this.verifiedMachine = this.machineRegistered = this.machineService.machineRegistered;
  }

  async ngOnInit() {
    let that = this;
  }

   verifyMachine(){
    console.log("Verify machine");
    this.verifiedMachine = true; 
  }

  getCPUInfo(){
    return this.machineService.getCPUInfo();
  }

  getGPUInfo(){
    return this.machineService.getGPUInfo(); 
  }

  registerMachine(){
    this.machineRegistered = true;
    this.machineService.machineRegistered = true;
  }

}
