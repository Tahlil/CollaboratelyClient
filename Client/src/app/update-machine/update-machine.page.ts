import { Component, OnInit } from '@angular/core';

import { MachineService } from "../services/machine.service";
@Component({
  selector: 'app-update-machine',
  templateUrl: './update-machine.page.html',
  styleUrls: ['./update-machine.page.scss'],
})
export class UpdateMachinePage implements OnInit {
  isChecked:boolean;
  constructor(private machineService:MachineService) { }

  ngOnInit() {
  }

  togglePermission(){
    console.log(this.isChecked);
    
  }

}
