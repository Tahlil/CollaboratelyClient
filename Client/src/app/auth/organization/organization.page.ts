import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.page.html',
  styleUrls: ['./organization.page.scss'],
})
export class OrganizationPage implements OnInit {
  org:String;
  universities = [];
  nonEds = [];
  constructor() {
    this.org = "ed";
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
    this.org = event.detail.value;
  }

}
