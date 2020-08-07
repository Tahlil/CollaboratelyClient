import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reg-machine',
  templateUrl: './reg-machine.page.html',
  styleUrls: ['./reg-machine.page.scss'],
})
export class RegMachinePage implements OnInit {
  deviceInfo;
  constructor(private httpClient: HttpClient)  {
    let that = this;
    this.deviceInfo =  this.httpClient.get('http://localhost:3000/machine').subscribe(response => {
      that.deviceInfo = response;
      console.log("Device info: ");
      console.log(that.deviceInfo);
      
    });
    
  }

   ngOnInit() {
   
  }

  verifyMachine(){
    console.log();
  }

}
