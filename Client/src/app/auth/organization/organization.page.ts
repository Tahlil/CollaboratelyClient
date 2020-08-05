import { Component, OnInit } from '@angular/core';
import { OrgService } from "../../services/org.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-organization',
  templateUrl: './organization.page.html',
  styleUrls: ['./organization.page.scss'],
})
export class OrganizationPage implements OnInit {
  orgType:string;
  universities = [];
  nonEds = [];

  constructor(private orgService:OrgService, private router: Router) {
    this.orgType = "ed";
    this.universities = [
      "University 1", "University 2"
    ];
    this.nonEds = [
      "Organization X", "Organization Y", "Organization Z"
    ];
   }

  ngOnInit() {
  }

  radioGroupChange(event){
    console.log("radioGroupChange",event.detail.value);
    this.orgType = event.detail.value;
  }

  goToAuth(authType){
    this.orgService.current_orgType = this.orgType;
    this.router.navigate(['/', 'auth', authType]);
  }

}
