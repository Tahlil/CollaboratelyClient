import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
@Component({
  selector: 'app-reg-machine',
  templateUrl: './reg-machine.page.html',
  styleUrls: ['./reg-machine.page.scss'],
})
export class RegMachinePage implements OnInit {
  device;
  deviceInfo;
  constructor()  {
    const { Device } = Plugins;
    this.device =Device; 
    
  }

  async ngOnInit() {
    this.deviceInfo = await this.device.getInfo();
    console.log(this.deviceInfo);
  }

  verifyMachine(){
    console.log();
  }

}
