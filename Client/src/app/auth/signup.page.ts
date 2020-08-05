import { Component, OnInit } from '@angular/core';

import { OrgService } from "../services/org.service";

@Component({
  selector: 'app-auth',
  templateUrl: './signup.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class SignUpPage implements OnInit {
  selectedType:string ="";
  orgType: string;

  constructor(private orgService:OrgService,) { 
    this.orgType = this.orgService.current_orgType;
  }

  ngOnInit() {
    
  }

}
